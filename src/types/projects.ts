export type ProjectStatus = "進行中" | "完成" | "休止中";

export type ProjectFrontmatter = {
  title: string;
  description: string;
  image: string;
  url: string;
  status: ProjectStatus;
  tags: string[];
  date: string;
};

export type Project = {
  slug: string;
  frontmatter: ProjectFrontmatter;
};
