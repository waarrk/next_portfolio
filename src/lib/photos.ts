import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type { Album, AlbumFrontmatter, AlbumMeta, ExifData, GeoPhoto, Photo } from "@/types/photos";

const CONTENT_DIR = path.join(process.cwd(), "content/photos");
const PUBLIC_DIR = path.join(process.cwd(), "public/photos");

const IMAGE_EXTENSIONS = [".jpg", ".jpeg", ".png", ".webp", ".heic"];

function isImage(filename: string): boolean {
  return IMAGE_EXTENSIONS.includes(path.extname(filename).toLowerCase());
}

async function readExif(filePath: string): Promise<ExifData> {
  try {
    const { default: exifr } = await import("exifr");
    const exif = await exifr.parse(filePath, {
      pick: ["Make", "Model", "LensModel", "FNumber", "ExposureTime", "ISO", "FocalLength", "DateTimeOriginal"],
      gps: true,
    });

    if (!exif) {
      return {
        make: null, model: null, lens: null, fNumber: null,
        exposureTime: null, iso: null, focalLength: null, dateTimeOriginal: null,
        lat: null, lng: null,
      };
    }

    return {
      make: exif.Make ?? null,
      model: exif.Model ?? null,
      lens: exif.LensModel ?? null,
      fNumber: exif.FNumber ?? null,
      exposureTime: exif.ExposureTime ?? null,
      iso: exif.ISO ?? null,
      focalLength: exif.FocalLength ?? null,
      dateTimeOriginal: exif.DateTimeOriginal
        ? new Date(exif.DateTimeOriginal).toISOString()
        : null,
      lat: exif.latitude ?? null,
      lng: exif.longitude ?? null,
    };
  } catch {
    return {
      make: null, model: null, lens: null, fNumber: null,
      exposureTime: null, iso: null, focalLength: null, dateTimeOriginal: null,
      lat: null, lng: null,
    };
  }
}

async function readImageDimensions(filePath: string): Promise<{ width: number; height: number }> {
  try {
    const { default: exifr } = await import("exifr");
    const data = await exifr.parse(filePath, { pick: ["ImageWidth", "ImageHeight", "PixelXDimension", "PixelYDimension"] });
    if (data?.PixelXDimension && data?.PixelYDimension) {
      return { width: data.PixelXDimension, height: data.PixelYDimension };
    }
    if (data?.ImageWidth && data?.ImageHeight) {
      return { width: data.ImageWidth, height: data.ImageHeight };
    }
  } catch {
    // fallback to defaults
  }
  return { width: 1920, height: 1280 };
}

export async function getAllAlbumMetas(): Promise<AlbumMeta[]> {
  if (!fs.existsSync(CONTENT_DIR)) return [];

  const dirs = fs.readdirSync(CONTENT_DIR, { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .map((d) => d.name)
    .sort((a, b) => (a > b ? -1 : 1));

  const albums: AlbumMeta[] = [];

  for (const dir of dirs) {
    const indexPath = path.join(CONTENT_DIR, dir, "index.md");
    if (!fs.existsSync(indexPath)) continue;

    const raw = fs.readFileSync(indexPath, "utf-8");
    const { data } = matter(raw);
    const frontmatter = data as AlbumFrontmatter;

    const imageFiles = fs.readdirSync(path.join(CONTENT_DIR, dir)).filter(isImage).sort();
    const coverIndex = frontmatter.coverIndex ?? 0;
    const coverFile = imageFiles[coverIndex] ?? imageFiles[0];
    const coverSrc = coverFile ? `/photos/${dir}/${coverFile}` : "";

    albums.push({
      slug: dir,
      frontmatter,
      coverSrc,
      photoCount: imageFiles.length,
    });
  }

  return albums;
}

export async function getAlbumBySlug(slug: string): Promise<Album | null> {
  const albumDir = path.join(CONTENT_DIR, slug);
  const indexPath = path.join(albumDir, "index.md");

  if (!fs.existsSync(indexPath)) return null;

  const raw = fs.readFileSync(indexPath, "utf-8");
  const { data } = matter(raw);
  const frontmatter = data as AlbumFrontmatter;

  const imageFiles = fs.readdirSync(albumDir).filter(isImage).sort();

  // Copy images to public dir for serving
  const publicAlbumDir = path.join(PUBLIC_DIR, slug);
  if (!fs.existsSync(publicAlbumDir)) {
    fs.mkdirSync(publicAlbumDir, { recursive: true });
  }

  const photos: Photo[] = [];
  for (const filename of imageFiles) {
    const srcPath = path.join(albumDir, filename);
    const destPath = path.join(publicAlbumDir, filename);
    if (!fs.existsSync(destPath)) {
      fs.copyFileSync(srcPath, destPath);
    }
    const exif = await readExif(srcPath);
    const { width, height } = await readImageDimensions(srcPath);
    photos.push({
      filename,
      src: `/photos/${slug}/${filename}`,
      width,
      height,
      exif,
    });
  }

  return { slug, frontmatter, photos };
}

export async function getAllAlbumSlugs(): Promise<string[]> {
  if (!fs.existsSync(CONTENT_DIR)) return [];
  return fs.readdirSync(CONTENT_DIR, { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .map((d) => d.name);
}

export async function getAllGeoPhotos(): Promise<GeoPhoto[]> {
  if (!fs.existsSync(CONTENT_DIR)) return [];

  const dirs = fs.readdirSync(CONTENT_DIR, { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .map((d) => d.name);

  const result: GeoPhoto[] = [];

  for (const dir of dirs) {
    const indexPath = path.join(CONTENT_DIR, dir, "index.md");
    if (!fs.existsSync(indexPath)) continue;

    const raw = fs.readFileSync(indexPath, "utf-8");
    const { data } = matter(raw);
    const frontmatter = data as AlbumFrontmatter;

    const albumDir = path.join(CONTENT_DIR, dir);
    const imageFiles = fs.readdirSync(albumDir).filter(isImage).sort();

    for (const filename of imageFiles) {
      const srcPath = path.join(albumDir, filename);
      const exif = await readExif(srcPath);
      if (exif.lat === null || exif.lng === null) continue;
      result.push({
        src: `/photos/${dir}/${filename}`,
        albumSlug: dir,
        albumTitle: frontmatter.title,
        lat: exif.lat,
        lng: exif.lng,
        dateTimeOriginal: exif.dateTimeOriginal,
      });
    }
  }

  return result;
}

// Also copy all album images at build time for the gallery listing
export async function copyAllAlbumImages(): Promise<void> {
  const metas = await getAllAlbumMetas();
  for (const meta of metas) {
    const albumDir = path.join(CONTENT_DIR, meta.slug);
    const publicAlbumDir = path.join(PUBLIC_DIR, meta.slug);
    if (!fs.existsSync(publicAlbumDir)) {
      fs.mkdirSync(publicAlbumDir, { recursive: true });
    }
    const imageFiles = fs.readdirSync(albumDir).filter(isImage);
    for (const filename of imageFiles) {
      const src = path.join(albumDir, filename);
      const dest = path.join(publicAlbumDir, filename);
      if (!fs.existsSync(dest)) {
        fs.copyFileSync(src, dest);
      }
    }
  }
}
