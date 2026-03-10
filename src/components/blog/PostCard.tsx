import Link from "next/link";
import type { PostMeta } from "@/types/blog";
import TagBadge from "./TagBadge";
import { formatDateJa } from "@/lib/utils";

type Props = {
  post: PostMeta;
};

export default function PostCard({ post }: Props) {
  const { slug, frontmatter } = post;

  return (
    <article className="border-b py-5 last:border-0" style={{ borderColor: "var(--border)" }}>
      <div className="flex items-start gap-4">
        {/* Date */}
        <time
          dateTime={frontmatter.date}
          className="mt-0.5 w-32 shrink-0 font-mono text-xs tabular-nums"
          style={{ color: "var(--muted)" }}
        >
          {formatDateJa(frontmatter.date)}
        </time>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <h2 className="font-semibold leading-snug" style={{ color: "var(--foreground)" }}>
            <Link
              href={`/blog/${slug}`}
              className="transition-opacity hover:opacity-70"
              style={{ color: "inherit" }}
            >
              {frontmatter.title}
            </Link>
          </h2>

          {frontmatter.description && (
            <p className="mt-1 text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
              {frontmatter.description}
            </p>
          )}

          <div className="mt-2 flex flex-wrap items-center gap-2">
            {frontmatter.tags?.map((tag) => (
              <TagBadge key={tag} tag={tag} />
            ))}
            <Link
              href={`/blog/${slug}`}
              className="ml-auto font-mono text-xs transition-opacity hover:opacity-70"
              style={{ color: "var(--accent-text)" }}
            >
              続きを読む →
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
