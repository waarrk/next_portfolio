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
        "inline-block font-mono text-xs transition-opacity hover:opacity-70",
        className
      )}
      style={{ color: "var(--muted)" }}
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
