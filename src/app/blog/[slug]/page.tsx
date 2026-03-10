import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllSlugs, getPostBySlug } from "@/lib/blog";
import { parseMarkdown } from "@/lib/markdown";
import PostHeader from "@/components/blog/PostHeader";
import ShareButtons from "@/components/blog/ShareButtons";
import ViewCount from "@/components/blog/ViewCount";
import Link from "next/link";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.frontmatter.title,
    description: post.frontmatter.description,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const { content } = await parseMarkdown(post.content);

  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <PostHeader frontmatter={post.frontmatter} />

      {/* 閲覧数 */}
      <div className="mb-6 flex justify-end">
        <ViewCount />
      </div>

      <div className="prose">{content}</div>

      {/* SNSシェアボタン */}
      <ShareButtons title={post.frontmatter.title} />

      {/* 記事一覧に戻る */}
      <div className="mt-6">
        <Link
          href="/blog"
          className="text-sm transition-opacity hover:opacity-70"
          style={{ color: "var(--muted)" }}
        >
          &larr; 記事一覧に戻る
        </Link>
      </div>
    </div>
  );
}
