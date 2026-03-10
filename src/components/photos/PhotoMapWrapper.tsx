"use client";

import dynamic from "next/dynamic";
import type { GeoPhoto } from "@/types/photos";

const PhotoMap = dynamic(() => import("./PhotoMap"), { ssr: false });

export default function PhotoMapWrapper({ photos }: { photos: GeoPhoto[] }) {
  return <PhotoMap photos={photos} />;
}
