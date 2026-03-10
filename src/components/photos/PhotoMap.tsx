"use client";

import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, useMap } from "react-leaflet";
import L from "leaflet";
import type { GeoPhoto } from "@/types/photos";
import Link from "next/link";
import "leaflet/dist/leaflet.css";

type View = "japan" | "world";

const VIEW_CONFIG: Record<View, { center: L.LatLngTuple; zoom: number; label: string }> = {
  japan: { center: [36.5, 137.5], zoom: 5, label: "日本" },
  world: { center: [30, 10], zoom: 2, label: "世界" },
};

/** MapContainer の内側で useMap() を使ってビューを同期する */
function ViewSyncer({ view }: { view: View }) {
  const map = useMap();
  useEffect(() => {
    const { center, zoom } = VIEW_CONFIG[view];
    map.setView(center, zoom);
  }, [map, view]);
  return null;
}

type Props = {
  photos: GeoPhoto[];
};

export default function PhotoMap({ photos }: Props) {
  const [view, setView] = useState<View>("japan");
  const [selected, setSelected] = useState<GeoPhoto | null>(null);

  const initial = VIEW_CONFIG["japan"];

  return (
    <div className="relative">
      {/* View toggle */}
      <div className="mb-3 flex gap-2">
        {(["japan", "world"] as View[]).map((v) => (
          <button
            key={v}
            onClick={() => { setSelected(null); setView(v); }}
            className="rounded-full border px-4 py-1.5 text-sm font-medium transition-colors"
            style={
              view === v
                ? { background: "var(--accent)", borderColor: "var(--accent)", color: "#fff" }
                : { borderColor: "var(--border)", color: "var(--muted)", background: "transparent" }
            }
          >
            {VIEW_CONFIG[v].label}
          </button>
        ))}
        <span className="ml-auto self-center text-xs" style={{ color: "var(--muted)" }}>
          {photos.length} 枚
        </span>
      </div>

      {/* Map */}
      <MapContainer
        center={initial.center}
        zoom={initial.zoom}
        scrollWheelZoom
        style={{ height: 500, width: "100%", borderRadius: "0.75rem" }}
      >
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
          attribution='© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors © <a href="https://carto.com/attributions">CARTO</a>'
          maxZoom={19}
        />
        <ViewSyncer view={view} />
        {photos.map((photo, i) => (
          <Marker
            key={i}
            position={[photo.lat, photo.lng]}
            icon={L.divIcon({
              className: "",
              html: `<div style="width:44px;height:44px;border-radius:50%;overflow:hidden;border:2px solid #1e3a8a;box-shadow:0 2px 6px rgba(0,0,0,0.25);background:#f0f4ff;cursor:pointer;"><img src="${photo.src}" style="width:100%;height:100%;object-fit:cover;" loading="lazy" /></div>`,
              iconSize: [44, 44],
              iconAnchor: [22, 22],
            })}
            eventHandlers={{ click: () => setSelected(photo) }}
          />
        ))}
      </MapContainer>

      {/* Selected photo popup */}
      {selected && (
        <div
          className="absolute bottom-4 right-4 z-1000 w-56 overflow-hidden rounded-xl shadow-lg"
          style={{ background: "var(--background)", border: "1px solid var(--border)" }}
        >
          <img src={selected.src} alt="" className="h-36 w-full object-cover" />
          <div className="p-3">
            <p className="text-xs font-semibold" style={{ color: "var(--foreground)" }}>
              {selected.albumTitle}
            </p>
            {selected.dateTimeOriginal && (
              <p className="mt-0.5 text-xs" style={{ color: "var(--muted)" }}>
                {new Date(selected.dateTimeOriginal).toLocaleDateString("ja-JP")}
              </p>
            )}
            <Link
              href={`/photos/${selected.albumSlug}`}
              className="mt-2 inline-block text-xs font-medium transition-opacity hover:opacity-70"
              style={{ color: "var(--accent-text)" }}
            >
              アルバムを見る →
            </Link>
          </div>
          <button
            onClick={() => setSelected(null)}
            className="absolute right-2 top-2 flex h-5 w-5 items-center justify-center rounded-full text-xs text-white"
            style={{ background: "rgba(0,0,0,0.4)" }}
          >
            ✕
          </button>
        </div>
      )}

      {photos.length === 0 && (
        <div
          className="absolute inset-0 flex items-center justify-center text-sm"
          style={{ color: "var(--muted)", pointerEvents: "none" }}
        >
          GPS データ付きの写真がありません
        </div>
      )}
    </div>
  );
}
