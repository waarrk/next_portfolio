import Link from "next/link";
import {getAllPostMetas} from "@/lib/blog";
import {getAllAlbumMetas, copyAllAlbumImages} from "@/lib/photos";
import {getAllProjects} from "@/lib/projects";
import PostCard from "@/components/blog/PostCard";
import AlbumCard from "@/components/photos/AlbumCard";
import ProjectCard from "@/components/projects/ProjectCard";
import SectionHeading from "@/components/ui/SectionHeading";

export default async function Home() {
  const posts = getAllPostMetas().slice(0, 3);
  await copyAllAlbumImages();
  const albums = (await getAllAlbumMetas()).slice(0, 4);
  const projects = getAllProjects()
    .filter((p) => p.frontmatter.status === "進行中")
    .slice(0, 4);

  return (
    <>
      {/* ── Hero ─────────────────────────────────── */}
      <div
        className="hero-dot-bg border-b"
        style={{borderColor: "var(--border)", background: "var(--hero-bg)"}}
      >
        <div className="mx-auto max-w-4xl px-4 py-14 sm:py-20">
          <p className="mb-2 font-mono text-sm font-medium" style={{color: "var(--accent)"}}>
            @waarrk
          </p>
          <h1
            className="text-4xl font-bold tracking-tight sm:text-5xl"
            style={{color: "var(--foreground)"}}
          >
            Yusaku Washio
          </h1>
          <p className="mt-3 font-mono text-base font-semibold" style={{color: "var(--muted)"}}>
            システム魔法使い
          </p>

          {/* Links */}
          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href="https://github.com/waarrk"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border px-4 py-1.5 text-sm font-medium transition-opacity hover:opacity-70"
              style={{
                borderColor: "var(--border)",
                background: "var(--background)",
                color: "var(--muted)",
              }}
            >
              GitHub
            </a>
            <a
              href="https://x.com/waarrk"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border px-4 py-1.5 text-sm font-medium transition-opacity hover:opacity-70"
              style={{
                borderColor: "var(--border)",
                background: "var(--background)",
                color: "var(--muted)",
              }}
            >
              X (Twitter)
            </a>
            <Link
              href="/about"
              className="inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-sm font-medium text-white transition-opacity hover:opacity-80"
              style={{background: "var(--accent)"}}
            >
              プロフィール →
            </Link>
          </div>
        </div>
      </div>

      {/* ── コンテンツ ───────────────────────────── */}
      <div className="mx-auto max-w-5xl px-4">
        <div className="grid gap-0 lg:grid-cols-[1fr_17rem] lg:gap-10">

          {/* ── メインカラム ── */}
          <div>
            {/* Projects */}
            {projects.length > 0 && (
              <section
                className="border-b py-12"
                style={{borderColor: "var(--border)"}}
              >
                <div className="mb-5 flex items-center justify-between">
                  <SectionHeading>Projects</SectionHeading>
                  <Link
                    href="/projects"
                    className="text-sm transition-opacity hover:opacity-70"
                    style={{color: "var(--accent)"}}
                  >
                    すべて見る →
                  </Link>
                </div>
                <div className="space-y-3">
                  {projects.map((project) => (
                    <ProjectCard key={project.slug} project={project} />
                  ))}
                </div>
              </section>
            )}

            {/* Recent Posts */}
            {posts.length > 0 && (
              <section
                className="border-b py-12"
                style={{borderColor: "var(--border)"}}
              >
                <div className="mb-5 flex items-center justify-between">
                  <SectionHeading>Recent Posts</SectionHeading>
                  <Link
                    href="/blog"
                    className="text-sm transition-opacity hover:opacity-70"
                    style={{color: "var(--accent)"}}
                  >
                    すべて見る →
                  </Link>
                </div>
                <div>
                  {posts.map((post) => (
                    <PostCard key={post.slug} post={post} />
                  ))}
                </div>
              </section>
            )}

            {/* Photos */}
            {albums.length > 0 && (
              <section className="py-12">
                <div className="mb-5 flex items-center justify-between">
                  <SectionHeading>Photos</SectionHeading>
                  <Link
                    href="/photos"
                    className="text-sm transition-opacity hover:opacity-70"
                    style={{color: "var(--accent)"}}
                  >
                    すべて見る →
                  </Link>
                </div>
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                  {albums.slice(0, 3).map((album) => (
                    <AlbumCard key={album.slug} album={album} />
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* ── サイドバー ── */}
          <aside className="hidden lg:block">
            <div className="sticky top-20 space-y-6 py-12">

              {/* Profile card */}
              <div
                className="rounded-xl border p-5"
                style={{borderColor: "var(--border)", background: "var(--surface)"}}
              >
                <p className="mb-0.5 font-mono text-xs" style={{color: "var(--accent)"}}>@waarrk</p>
                <p className="font-bold" style={{color: "var(--foreground)"}}>Yusaku Washio</p>
                <p className="mt-0.5 text-xs leading-snug" style={{color: "var(--muted)"}}>
                  千葉工業大学 先進工学部<br />
                  未来ロボティクス学科
                </p>
                <div className="mt-4 flex flex-col gap-1.5">
                  <a
                    href="https://github.com/waarrk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-lg border px-3 py-2 text-xs font-medium transition-opacity hover:opacity-70"
                    style={{borderColor: "var(--border)", color: "var(--muted)"}}
                  >
                    <span className="font-mono" style={{color: "var(--accent)"}}>GH</span>
                    github.com/waarrk
                  </a>
                  <a
                    href="https://x.com/waarrk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-lg border px-3 py-2 text-xs font-medium transition-opacity hover:opacity-70"
                    style={{borderColor: "var(--border)", color: "var(--muted)"}}
                  >
                    <span className="font-mono" style={{color: "var(--accent)"}}>X</span>
                    @waarrk
                  </a>
                </div>
              </div>

            </div>
          </aside>

        </div>
      </div>
    </>
  );
}
