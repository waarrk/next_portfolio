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
      <div className="border-b" style={{borderColor: "var(--border)"}}>
        <div className="mx-auto max-w-4xl px-4 py-14 sm:py-20">
          <p className="mb-3 font-mono text-xs tracking-widest" style={{color: "var(--accent)"}}>
            @waarrk
          </p>
          <h1
            className="text-4xl font-bold tracking-tight sm:text-5xl"
            style={{color: "var(--foreground)"}}
          >
            Yusaku Washio
          </h1>
          <p className="mt-2 font-mono text-sm" style={{color: "var(--muted)"}}>
            システム魔法使い
          </p>

          {/* Links */}
          <div className="mt-8 flex flex-wrap gap-5">
            <a
              href="https://github.com/waarrk"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs underline underline-offset-4 decoration-1 transition-opacity hover:opacity-50"
              style={{color: "var(--muted)"}}
            >
              GitHub ↗
            </a>
            <a
              href="https://x.com/waarrk"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs underline underline-offset-4 decoration-1 transition-opacity hover:opacity-50"
              style={{color: "var(--muted)"}}
            >
              X ↗
            </a>
            <Link
              href="/about"
              className="font-mono text-xs underline underline-offset-4 decoration-1 transition-opacity hover:opacity-50"
              style={{color: "var(--accent)"}}
            >
              About →
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
                    className="font-mono text-xs transition-opacity hover:opacity-70"
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
                    className="font-mono text-xs transition-opacity hover:opacity-70"
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
                    className="font-mono text-xs transition-opacity hover:opacity-70"
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
            <div className="sticky top-20 py-12 space-y-3">
              <p className="font-mono text-xs tracking-widest" style={{color: "var(--accent)"}}>@waarrk</p>
              <div>
                <p className="text-sm font-semibold" style={{color: "var(--foreground)"}}>Yusaku Washio</p>
                <p className="mt-0.5 text-xs leading-relaxed" style={{color: "var(--muted)"}}>
                  千葉工業大学 先進工学部<br />
                  未来ロボティクス学科
                </p>
              </div>
              <div className="flex flex-col gap-1 pt-1">
                <a
                  href="https://github.com/waarrk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs transition-opacity hover:opacity-50"
                  style={{color: "var(--muted)"}}
                >
                  github.com/waarrk ↗
                </a>
                <a
                  href="https://x.com/waarrk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs transition-opacity hover:opacity-50"
                  style={{color: "var(--muted)"}}
                >
                  x.com/waarrk ↗
                </a>
              </div>
            </div>
          </aside>

        </div>
      </div>
    </>
  );
}
