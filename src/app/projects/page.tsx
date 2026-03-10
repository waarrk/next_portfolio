import type { Metadata } from "next";
import { getAllProjects } from "@/lib/projects";
import ProjectCard from "@/components/projects/ProjectCard";
import SectionHeading from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Projects",
  description: "鷲尾優作のプロジェクト・制作物一覧",
};

const STATUS_ORDER = ["進行中", "完成", "休止中"];

export default function ProjectsPage() {
  const projects = getAllProjects();

  const grouped = STATUS_ORDER.map((status) => ({
    status,
    items: projects.filter((p) => p.frontmatter.status === status),
  })).filter((g) => g.items.length > 0);

  return (
    <div className="mx-auto max-w-4xl px-4 py-10">
      <h1 className="mb-2 font-mono text-2xl font-bold" style={{ color: "var(--foreground)" }}>Projects</h1>
      <p className="mb-10 mt-2 text-sm" style={{ color: "var(--muted)" }}>
        やり散らかし一覧。進行中・完成・休止中のプロジェクトをまとめています。
      </p>

      {projects.length === 0 ? (
        <p style={{ color: "var(--muted)" }}>プロジェクトはまだありません。</p>
      ) : (
        <div className="space-y-12">
          {grouped.map(({ status, items }) => (
            <section key={status}>
              <p className="mb-4 font-mono text-xs font-semibold uppercase tracking-wider" style={{ color: "var(--muted)" }}>
                {status}
              </p>
              <div className="space-y-3">
                {items.map((project) => (
                  <ProjectCard key={project.slug} project={project} />
                ))}
              </div>
            </section>
          ))}
        </div>
      )}
    </div>
  );
}
