import Link from "next/link";
import {getAllPostMetas} from "@/lib/blog";
import {getAllAlbumMetas, copyAllAlbumImages} from "@/lib/photos";
import {getAllProjects} from "@/lib/projects";
import PostCard from "@/components/blog/PostCard";
import AlbumCard from "@/components/photos/AlbumCard";
import ProjectCard from "@/components/projects/ProjectCard";
import SectionHeading from "@/components/ui/SectionHeading";

const TECH_STACK = ["C/C++", "Python", "Rust", "TypeScript", "ROS2", "STM32", "Next.js"];

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
          {/* Status bar */}
          <div className="mb-6 flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-xs">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-green-400/60 bg-green-50 px-2.5 py-1 text-green-700">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-500" />
              稼働中
            </span>
            <span style={{color: "var(--muted)"}}>千葉工業大学 大学院</span>
            <span style={{color: "var(--border)"}}>·</span>
            <span style={{color: "var(--muted)"}}>千葉, 日本</span>
          </div>

          <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
            {/* Left: profile */}
            <div className="flex-1">
              <p className="mb-2 font-mono text-sm font-medium" style={{color: "var(--accent)"}}>
                @waarrk
              </p>
              <h1
                className="text-4xl font-bold tracking-tight sm:text-5xl"
                style={{color: "var(--foreground)"}}
              >
                Yusaku Washio
              </h1>
              <p className="mt-3 font-mono text-base font-semibold" style={{color: "var(--accent)"}}>
                システム魔法使い
              </p>
              <p className="mt-3 max-w-md text-sm leading-relaxed" style={{color: "var(--muted)"}}>
                ロボット・組み込みシステム・Web の境界域で生きる開発者。
                コードを書き、写真を撮り、自転車で走る。
              </p>

              {/* Tech stack chips */}
              <div className="mt-5 flex flex-wrap gap-1.5">
                {TECH_STACK.map((t) => (
                  <span
                    key={t}
                    className="rounded border px-2 py-0.5 font-mono text-xs"
                    style={{
                      borderColor: "var(--border)",
                      background: "var(--background)",
                      color: "var(--muted)",
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="mt-6 flex flex-wrap gap-3">
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
                  About me →
                </Link>
              </div>
            </div>

            {/* Right: terminal widget (desktop only) */}
            <div className="hidden lg:block">
              <div
                className="w-60 rounded-xl border font-mono text-xs"
                style={{background: "#0f172a", borderColor: "rgba(255,255,255,0.08)"}}
              >
                <div
                  className="flex items-center gap-1.5 border-b px-3 py-2.5"
                  style={{borderColor: "rgba(255,255,255,0.08)"}}
                >
                  <span className="h-2.5 w-2.5 rounded-full bg-red-500/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-green-500/70" />
                  <span className="ml-2 text-[10px] text-white/30">~/waarrk</span>
                </div>
                <div className="space-y-2 p-4">
                  <p><span className="text-white/30">$ </span><span className="text-green-400">whoami</span></p>
                  <p className="pl-2 text-white/60">waarrk</p>
                  <p><span className="text-white/30">$ </span><span className="text-green-400">cat status</span></p>
                  <p className="pl-2 text-white/60">研究 + 開発 + 写真</p>
                  <p><span className="text-white/30">$ </span><span className="text-green-400">echo $PWD</span></p>
                  <p className="pl-2 text-white/60">千葉, 日本</p>
                  <p><span className="text-white/30">$ </span><span className="animate-pulse text-green-400">▋</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── コンテンツ ───────────────────────────── */}
      <div className="mx-auto max-w-4xl px-4">
        {/* やり散らかし一覧 */}
        {projects.length > 0 && (
          <section
            className="border-b py-12"
            style={{borderColor: "var(--border)"}}
          >
            <div className="mb-5 flex items-center justify-between">
              <SectionHeading>やり散らかし一覧</SectionHeading>
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
          <section className="py-12" style={{borderColor: "var(--border)"}}>
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
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              {albums.map((album) => (
                <AlbumCard key={album.slug} album={album} />
              ))}
            </div>
          </section>
        )}
      </div>
    </>
  );
}
