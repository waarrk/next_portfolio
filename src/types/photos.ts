export type ExifData = {
  make: string | null;
  model: string | null;
  lens: string | null;
  fNumber: number | null;
  exposureTime: number | null;
  iso: number | null;
  focalLength: number | null;
  dateTimeOriginal: string | null;
  lat: number | null;
  lng: number | null;
};

export type GeoPhoto = {
  src: string;
  albumSlug: string;
  albumTitle: string;
  lat: number;
  lng: number;
  dateTimeOriginal: string | null;
};

export type Photo = {
  filename: string;
  src: string;
  width: number;
  height: number;
  exif: ExifData;
};

export type AlbumFrontmatter = {
  title: string;
  date: string;
  description: string;
  coverIndex: number;
};

export type Album = {
  slug: string;
  frontmatter: AlbumFrontmatter;
  photos: Photo[];
};

export type AlbumMeta = {
  slug: string;
  frontmatter: AlbumFrontmatter;
  coverSrc: string;
  photoCount: number;
};
