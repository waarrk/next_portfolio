import Link from "next/link";
import Image from "next/image";
import type { AlbumMeta } from "@/types/photos";
import { formatDateJa } from "@/lib/utils";

type Props = {
  album: AlbumMeta;
};

export default function AlbumCard({ album }: Props) {
  const { slug, frontmatter, coverSrc, photoCount } = album;

  return (
    <Link
      href={`/photos/${slug}`}
      className="group block overflow-hidden"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        {coverSrc ? (
          <Image
            src={coverSrc}
            alt={frontmatter.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 640px) 50vw, 25vw"
          />
        ) : (
          <div
            className="flex h-full items-center justify-center text-sm"
            style={{ color: "var(--muted)" }}
          >
            No image
          </div>
        )}
      </div>
      <div className="p-3">
        <h2
          className="font-mono text-xs font-semibold leading-snug transition-opacity group-hover:opacity-70"
          style={{ color: "var(--foreground)" }}
        >
          {frontmatter.title}
        </h2>
        <div
          className="mt-1 flex items-center gap-2 font-mono text-xs"
          style={{ color: "var(--muted)" }}
        >
          <time dateTime={frontmatter.date}>{formatDateJa(frontmatter.date)}</time>
          <span>{photoCount}枚</span>
        </div>
      </div>
    </Link>
  );
}
