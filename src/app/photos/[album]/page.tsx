import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllAlbumSlugs, getAlbumBySlug } from "@/lib/photos";
import PhotoGrid from "@/components/photos/PhotoGrid";
import Link from "next/link";
import { formatDateJa } from "@/lib/utils";

type Props = {
  params: Promise<{ album: string }>;
};

export async function generateStaticParams() {
  const slugs = await getAllAlbumSlugs();
  return slugs.map((album) => ({ album }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { album } = await params;
  const data = await getAlbumBySlug(album);
  if (!data) return {};
  return {
    title: data.frontmatter.title,
    description: data.frontmatter.description,
  };
}

export default async function AlbumPage({ params }: Props) {
  const { album } = await params;
  const data = await getAlbumBySlug(album);
  if (!data) notFound();

  return (
    <div className="mx-auto max-w-5xl px-4 py-10">
      <div className="mb-4">
        <Link
          href="/photos"
          className="text-sm transition-opacity hover:opacity-70"
          style={{ color: "var(--muted)" }}
        >
          &larr; Photos
        </Link>
      </div>
      <header className="mb-8">
        <h1 className="text-2xl font-bold" style={{ color: "var(--foreground)" }}>
          {data.frontmatter.title}
        </h1>
        {data.frontmatter.description && (
          <p className="mt-1" style={{ color: "var(--muted)" }}>{data.frontmatter.description}</p>
        )}
        <p className="mt-1 text-sm" style={{ color: "var(--muted)" }}>
          {formatDateJa(data.frontmatter.date)} &middot; {data.photos.length}枚
        </p>
      </header>
      <PhotoGrid photos={data.photos} />
    </div>
  );
}
