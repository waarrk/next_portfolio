import Image from "next/image";
import type { Project } from "@/types/projects";

type Props = {
  project: Project;
};

const STATUS_DOT: Record<string, string> = {
  "進行中": "#3cc4b0",
  "完成": "#60a5fa",
  "休止中": "#9ca3af",
};

export default function ProjectCard({ project }: Props) {
  const { frontmatter } = project;
  const dotColor = STATUS_DOT[frontmatter.status] ?? STATUS_DOT["休止中"];

  return (
    <a
      href={frontmatter.url}
      target="_blank"
      rel="noopener noreferrer"
      className="project-card group flex gap-4 rounded-xl border p-4"
      style={{ background: "var(--surface)" }}
    >
      {/* Thumbnail */}
      <div
        className="relative h-20 w-28 shrink-0 overflow-hidden rounded-lg"
        style={{ background: "var(--border)" }}
      >
        {frontmatter.image ? (
          <Image
            src={frontmatter.image}
            alt={frontmatter.title}
            fill
            className="object-cover"
            sizes="112px"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-2xl opacity-30">
            ⚙
          </div>
        )}
      </div>

      {/* Info */}
      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-center gap-2">
          <h3 className="font-semibold group-hover:opacity-70 transition-opacity" style={{ color: "var(--foreground)" }}>
            {frontmatter.title}
          </h3>
          <span className="flex items-center gap-1 text-xs" style={{ color: "var(--muted)" }}>
            <span
              className="inline-block h-1.5 w-1.5 rounded-full"
              style={{ background: dotColor }}
            />
            {frontmatter.status}
          </span>
        </div>
        <p className="mt-1 text-sm line-clamp-2" style={{ color: "var(--muted)" }}>
          {frontmatter.description}
        </p>
        {frontmatter.tags?.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-1">
            {frontmatter.tags.map((tag) => (
              <span
                key={tag}
                className="rounded px-1.5 py-0.5 text-xs"
                style={{ background: "var(--border)", color: "var(--muted)" }}
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </a>
  );
}
