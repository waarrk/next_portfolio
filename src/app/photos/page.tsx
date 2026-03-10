import type { Metadata } from "next";
import { getAllAlbumMetas, copyAllAlbumImages } from "@/lib/photos";
import AlbumCard from "@/components/photos/AlbumCard";

export const metadata: Metadata = {
  title: "Photos",
  description: "鷲尾優作の写真ギャラリー",
};

export default async function PhotosPage() {
  await copyAllAlbumImages();
  const albums = await getAllAlbumMetas();

  return (
    <div className="mx-auto max-w-4xl px-4 py-10">
      <h1 className="mb-8 text-2xl font-bold" style={{ color: "var(--foreground)" }}>Photos</h1>
      {albums.length === 0 ? (
        <p style={{ color: "var(--muted)" }}>アルバムはまだありません。</p>
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {albums.map((album) => (
            <AlbumCard key={album.slug} album={album} />
          ))}
        </div>
      )}
    </div>
  );
}
