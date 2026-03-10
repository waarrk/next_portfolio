import type { ExifData } from "@/types/photos";
import { formatExposureTime, formatFNumber, formatFocalLength } from "@/lib/utils";

type Props = {
  exif: ExifData;
};

function ExifRow({ label, value }: { label: string; value: string | null }) {
  if (!value) return null;
  return (
    <div className="flex gap-2">
      <span className="w-24 shrink-0 text-white/60">{label}</span>
      <span className="text-white/90">{value}</span>
    </div>
  );
}

export default function ExifDisplay({ exif }: Props) {
  const hasExif = exif.model || exif.fNumber || exif.exposureTime || exif.iso;
  if (!hasExif) return null;

  const camera = [exif.make, exif.model].filter(Boolean).join(" ");
  const dateStr = exif.dateTimeOriginal
    ? new Date(exif.dateTimeOriginal).toLocaleString("ja-JP")
    : null;

  return (
    <div className="mt-3 space-y-1 text-xs font-mono">
      <ExifRow label="Camera" value={camera || null} />
      <ExifRow label="Lens" value={exif.lens} />
      <ExifRow label="Aperture" value={exif.fNumber !== null ? formatFNumber(exif.fNumber) : null} />
      <ExifRow label="Shutter" value={exif.exposureTime !== null ? formatExposureTime(exif.exposureTime) : null} />
      <ExifRow label="ISO" value={exif.iso !== null ? `ISO ${exif.iso}` : null} />
      <ExifRow label="Focal" value={exif.focalLength !== null ? formatFocalLength(exif.focalLength) : null} />
      <ExifRow label="Date" value={dateStr} />
    </div>
  );
}
