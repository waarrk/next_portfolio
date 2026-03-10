import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type { Post, PostMeta, PostFrontmatter } from "@/types/blog";

const CONTENT_DIR = path.join(process.cwd(), "content/blog");

function getSlugFromFilename(filename: string): string {
  return filename.replace(/\.mdx?$/, "");
}

export function getAllPostMetas(): PostMeta[] {
  if (!fs.existsSync(CONTENT_DIR)) return [];

  const files = fs.readdirSync(CONTENT_DIR).filter((f) => /\.mdx?$/.test(f));

  const posts = files
    .map((filename) => {
      const slug = getSlugFromFilename(filename);
      const filePath = path.join(CONTENT_DIR, filename);
      const raw = fs.readFileSync(filePath, "utf-8");
      const { data } = matter(raw);
      const frontmatter = data as PostFrontmatter;

      if (frontmatter.draft && process.env.NODE_ENV === "production") {
        return null;
      }

      return { slug, frontmatter };
    })
    .filter((p): p is PostMeta => p !== null)
    .sort((a, b) => (a.frontmatter.date > b.frontmatter.date ? -1 : 1));

  return posts;
}

export function getPostBySlug(slug: string): Post | null {
  const mdPath = path.join(CONTENT_DIR, `${slug}.md`);
  const mdxPath = path.join(CONTENT_DIR, `${slug}.mdx`);
  const filePath = fs.existsSync(mdPath) ? mdPath : fs.existsSync(mdxPath) ? mdxPath : null;

  if (!filePath) return null;

  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);

  return {
    slug,
    frontmatter: data as PostFrontmatter,
    content,
  };
}

export function getAllSlugs(): string[] {
  return getAllPostMetas().map((p) => p.slug);
}

export function getAllTags(): string[] {
  const posts = getAllPostMetas();
  const tags = new Set<string>();
  posts.forEach((p) => p.frontmatter.tags?.forEach((t) => tags.add(t)));
  return Array.from(tags).sort();
}

export function getPostsByTag(tag: string): PostMeta[] {
  return getAllPostMetas().filter((p) => p.frontmatter.tags?.includes(tag));
}

export function getAllArchiveYears(): string[] {
  const posts = getAllPostMetas();
  const years = new Set<string>();
  posts.forEach((p) => years.add(p.frontmatter.date.slice(0, 4)));
  return Array.from(years).sort((a, b) => (a > b ? -1 : 1));
}

export function getPostsByYear(year: string): PostMeta[] {
  return getAllPostMetas().filter((p) => p.frontmatter.date.startsWith(year));
}
