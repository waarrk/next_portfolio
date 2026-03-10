import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type { Project, ProjectFrontmatter } from "@/types/projects";

const CONTENT_DIR = path.join(process.cwd(), "content/projects");

export function getAllProjects(): Project[] {
  if (!fs.existsSync(CONTENT_DIR)) return [];

  const files = fs.readdirSync(CONTENT_DIR).filter((f) => /\.md$/.test(f));

  return files
    .map((filename) => {
      const slug = filename.replace(/\.md$/, "");
      const raw = fs.readFileSync(path.join(CONTENT_DIR, filename), "utf-8");
      const { data } = matter(raw);
      return { slug, frontmatter: data as ProjectFrontmatter };
    })
    .sort((a, b) => (a.frontmatter.date > b.frontmatter.date ? -1 : 1));
}
