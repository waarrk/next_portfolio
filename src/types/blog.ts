export type PostFrontmatter = {
  title: string;
  date: string;
  description: string;
  tags: string[];
  draft: boolean;
};

export type Post = {
  slug: string;
  frontmatter: PostFrontmatter;
  content: string;
};

export type PostMeta = Omit<Post, "content">;
