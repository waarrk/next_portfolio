import type { Metadata } from "next";
import { getAllGeoPhotos, copyAllAlbumImages } from "@/lib/photos";
import PhotoMapWrapper from "@/components/photos/PhotoMapWrapper";

export const metadata: Metadata = {
  title: "Map",
  description: "撮影地マップ",
};

export default async function MapPage() {
  await copyAllAlbumImages();
  const photos = await getAllGeoPhotos();

  return (
    <div className="mx-auto max-w-4xl px-4 py-10">
      <h1 className="mb-6 text-2xl font-bold" style={{ color: "var(--foreground)" }}>
        Map
      </h1>
      <PhotoMapWrapper photos={photos} />
    </div>
  );
}
