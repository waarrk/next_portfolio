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
        className="border-b"
        style={{borderColor: "var(--border)", background: "var(--hero-bg)"}}
      >
        <div className="mx-auto max-w-4xl px-4 py-16 sm:py-24">
          <p
            className="mb-4 font-mono text-sm font-medium"
            style={{color: "var(--accent)"}}
          >
            @waarrk
          </p>
          <h1
            className="text-4xl font-bold tracking-tight sm:text-5xl"
            style={{color: "var(--foreground)"}}
          >
            Yusaku Washio
          </h1>
          <p
            className="mt-6 max-w-lg text-base leading-relaxed"
            style={{color: "var(--muted)"}}
          >
            システム魔法使い
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
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
