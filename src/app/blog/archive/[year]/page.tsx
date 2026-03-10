import type {Metadata} from "next";
import {getAllArchiveYears, getPostsByYear} from "@/lib/blog";
import PostCard from "@/components/blog/PostCard";
import Link from "next/link";

type Props = {
  params: Promise<{year: string}>;
};

export async function generateStaticParams() {
  return getAllArchiveYears().map((year) => ({year}));
}

export async function generateMetadata({params}: Props): Promise<Metadata> {
  const {year} = await params;
  return {title: `${year}年のアーカイブ`, description: `${year}年の記事一覧`};
}

export default async function ArchivePage({params}: Props) {
  const {year} = await params;
  const posts = getPostsByYear(year);

  return (
    <div className="mx-auto max-w-4xl px-4 py-10">
      <div className="mb-2">
        <Link
          href="/blog"
          className="text-sm transition-opacity hover:opacity-70"
          style={{color: "var(--muted)"}}
        >
          &larr; Blog
        </Link>
      </div>
      <h1
        className="mb-8 text-2xl font-bold"
        style={{color: "var(--foreground)"}}
      >
        {year}年のアーカイブ
      </h1>
      {posts.length === 0 ? (
        <p className="text-gray-500">該当する記事はありません．</p>
      ) : (
        posts.map((post) => <PostCard key={post.slug} post={post} />)
      )}
    </div>
  );
}
