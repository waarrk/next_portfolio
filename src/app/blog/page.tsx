import type { Metadata } from "next";
import { getAllPostMetas, getAllTags, getAllArchiveYears } from "@/lib/blog";
import PostCard from "@/components/blog/PostCard";
import TagBadge from "@/components/blog/TagBadge";
import SectionHeading from "@/components/ui/SectionHeading";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog",
  description: "鷲尾優作のブログ記事一覧",
};

export default function BlogPage() {
  const posts = getAllPostMetas();
  const tags = getAllTags();
  const years = getAllArchiveYears();

  return (
    <div className="mx-auto max-w-4xl px-4 py-10">
      <SectionHeading as="h1" className="mb-8 text-2xl">Blog</SectionHeading>
      <div className="flex flex-col gap-8 lg:flex-row lg:gap-12">
        {/* Posts list */}
        <div className="flex-1">
          {posts.length === 0 ? (
            <p style={{ color: "var(--muted)" }}>記事はまだありません。</p>
          ) : (
            posts.map((post) => <PostCard key={post.slug} post={post} />)
          )}
        </div>

        {/* Sidebar */}
        <aside className="w-full lg:w-52 shrink-0 space-y-6">
          {tags.length > 0 && (
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-wider" style={{ color: "var(--muted)" }}>
                Tags
              </p>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <TagBadge key={tag} tag={tag} />
                ))}
              </div>
            </div>
          )}

          {years.length > 0 && (
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-wider" style={{ color: "var(--muted)" }}>
                Archive
              </p>
              <ul className="space-y-1.5">
                {years.map((year) => (
                  <li key={year}>
                    <Link
                      href={`/blog/archive/${year}`}
                      className="text-sm transition-opacity hover:opacity-70"
                      style={{ color: "var(--muted)" }}
                    >
                      {year}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </aside>
      </div>
    </div>
  );
}
