import Link from "next/link";
import { clsx } from "clsx";

type Props = {
  tag: string;
  link?: boolean;
  className?: string;
};

export default function TagBadge({ tag, link = true, className }: Props) {
  const badge = (
    <span
      className={clsx(
        "inline-block rounded-full px-2.5 py-0.5 text-xs font-medium transition-opacity hover:opacity-70",
        className
      )}
      style={{ background: "#eef2ff", color: "var(--accent-text)" }}
    >
      {tag}
    </span>
  );

  if (!link) return badge;

  return (
    <Link href={`/blog/tag/${encodeURIComponent(tag)}`} className="hover:opacity-70">
      {badge}
    </Link>
  );
}
