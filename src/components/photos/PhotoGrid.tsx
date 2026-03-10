"use client";

import { useState } from "react";
import Image from "next/image";
import type { Photo } from "@/types/photos";
import ExifDisplay from "./ExifDisplay";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

type Props = {
  photos: Photo[];
};

export default function PhotoGrid({ photos }: Props) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const slides = photos.map((p) => ({
    src: p.src,
    width: p.width,
    height: p.height,
  }));

  return (
    <>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {photos.map((photo, i) => (
          <button
            key={photo.filename}
            onClick={() => setLightboxIndex(i)}
            className="group relative overflow-hidden rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500"
            style={{ background: "var(--surface)" }}
          >
            <div className="aspect-4/3 relative">
              <Image
                src={photo.src}
                alt={photo.filename}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
            {/* EXIF overlay on hover */}
            <div className="absolute inset-0 flex items-end bg-linear-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <div className="w-full p-3">
                <ExifDisplay exif={photo.exif} />
              </div>
            </div>
          </button>
        ))}
      </div>

      {lightboxIndex !== null && (
        <Lightbox
          open
          close={() => setLightboxIndex(null)}
          slides={slides}
          index={lightboxIndex}
          on={{ view: ({ index }) => setLightboxIndex(index) }}
          styles={{ container: { backgroundColor: "rgba(0,0,0,0.92)" } }}
        />
      )}
    </>
  );
}
