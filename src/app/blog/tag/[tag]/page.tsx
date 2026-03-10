import type { Metadata } from "next";
import { getAllTags, getPostsByTag } from "@/lib/blog";
import PostCard from "@/components/blog/PostCard";
import Link from "next/link";

type Props = {
  params: Promise<{ tag: string }>;
};

export async function generateStaticParams() {
  return getAllTags().map((tag) => ({ tag: encodeURIComponent(tag) }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { tag } = await params;
  const decoded = decodeURIComponent(tag);
  return { title: `タグ: ${decoded}`, description: `${decoded} タグの記事一覧` };
}

export default async function TagPage({ params }: Props) {
  const { tag } = await params;
  const decoded = decodeURIComponent(tag);
  const posts = getPostsByTag(decoded);

  return (
    <div className="mx-auto max-w-4xl px-4 py-10">
      <div className="mb-2">
        <Link href="/blog" className="text-sm transition-opacity hover:opacity-70" style={{ color: "var(--muted)" }}>
          &larr; Blog
        </Link>
      </div>
      <h1 className="mb-8 text-2xl font-bold" style={{ color: "var(--foreground)" }}>
        タグ: <span style={{ color: "var(--accent-text)" }}>{decoded}</span>
      </h1>
      {posts.length === 0 ? (
        <p className="text-gray-500">該当する記事はありません。</p>
      ) : (
        posts.map((post) => <PostCard key={post.slug} post={post} />)
      )}
    </div>
  );
}
