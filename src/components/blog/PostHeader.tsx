import type { PostFrontmatter } from "@/types/blog";
import TagBadge from "./TagBadge";
import { formatDateJa } from "@/lib/utils";

type Props = {
  frontmatter: PostFrontmatter;
};

export default function PostHeader({ frontmatter }: Props) {
  return (
    <header className="mb-8 border-b pb-6" style={{ borderColor: "var(--border)" }}>
      <h1
        className="font-mono text-2xl font-bold sm:text-3xl"
        style={{ color: "var(--foreground)" }}
      >
        {frontmatter.title}
      </h1>
      {frontmatter.description && (
        <p className="mt-2 text-sm" style={{ color: "var(--muted)" }}>
          {frontmatter.description}
        </p>
      )}
      <div className="mt-3 flex flex-wrap items-center gap-2">
        <time
          dateTime={frontmatter.date}
          className="font-mono text-xs tabular-nums"
          style={{ color: "var(--muted)" }}
        >
          {formatDateJa(frontmatter.date)}
        </time>
        {frontmatter.tags?.map((tag) => (
          <TagBadge key={tag} tag={tag} />
        ))}
      </div>
    </header>
  );
}
