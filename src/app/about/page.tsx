import type { Metadata } from "next";
import SectionHeading from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "About",
  description: "鷲尾優作（waarrk）について",
};

const SKILLS = [
  { cat: "言語", items: ["C / C++", "Python", "Rust", "TypeScript", "MATLAB"] },
  { cat: "組み込み / HW", items: ["ROS2", "STM32", "ESP32", "FreeRTOS", "FPGA"] },
  { cat: "Web", items: ["Next.js", "React", "Tailwind CSS", "Node.js"] },
  { cat: "ツール", items: ["Git", "Docker", "Linux", "Fusion 360"] },
];

const EDUCATION = [
  {
    period: "2023 – 現在",
    title: "千葉工業大学大学院 工学研究科",
    sub: "機械電子創成工学専攻",
  },
  {
    period: "2019 – 2023",
    title: "千葉工業大学 工学部",
    sub: "機械電子創成工学科",
  },
];

const INTERESTS = [
  { emoji: "📷", label: "写真（ポートレート・風景）" },
  { emoji: "🚲", label: "自転車" },
  { emoji: "🤖", label: "ロボット工学" },
  { emoji: "💻", label: "プログラミング" },
  { emoji: "🎮", label: "ゲーム" },
];

const LINKS = [
  { label: "GitHub", handle: "@waarrk", url: "https://github.com/waarrk" },
  { label: "X (Twitter)", handle: "@waarrk", url: "https://x.com/waarrk" },
];

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10">

      {/* ── Profile header ─────────────────── */}
      <div
        className="mb-10 rounded-2xl border p-6 sm:p-8"
        style={{ borderColor: "var(--border)", background: "var(--surface)" }}
      >
        <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:gap-7">
          <div
            className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl text-4xl"
            style={{ background: "var(--hero-bg)", border: "1px solid var(--border)" }}
          >
            🧑‍💻
          </div>

          <div className="flex-1">
            <p className="mb-1 font-mono text-xs" style={{ color: "var(--accent)" }}>
              @waarrk
            </p>
            <h1 className="text-2xl font-bold tracking-tight" style={{ color: "var(--foreground)" }}>
              鷲尾 優作
              <span className="ml-2 text-base font-normal" style={{ color: "var(--muted)" }}>
                / Yusaku Washio
              </span>
            </h1>

            <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-sm" style={{ color: "var(--muted)" }}>
              <span className="inline-flex items-center gap-1">
                <span className="font-mono text-xs">🎓</span>
                千葉工業大学 大学院
              </span>
              <span className="inline-flex items-center gap-1">
                <span className="font-mono text-xs">📍</span>
                千葉, 日本
              </span>
            </div>

            <p className="mt-3 max-w-md text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
              ロボット・組み込みシステム・Web の境界域を漂う開発者。
              コードを書き、写真を撮り、自転車で走る。
              研究室ではロボット制御とか組み込みとかやってます。
            </p>

            <div className="mt-4 flex flex-wrap gap-4">
              {[
                { label: "プログラミング歴", value: "10+ 年" },
                { label: "使用言語", value: "5+" },
                { label: "趣味", value: "写真・自転車" },
              ].map(({ label, value }) => (
                <div key={label}>
                  <p className="font-mono text-base font-bold" style={{ color: "var(--accent)" }}>
                    {value}
                  </p>
                  <p className="text-xs" style={{ color: "var(--muted)" }}>
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Skills ─────────────────────────── */}
      <section className="mb-10">
        <SectionHeading as="h2" className="mb-5">スキル</SectionHeading>
        <div className="grid gap-3 sm:grid-cols-2">
          {SKILLS.map(({ cat, items }) => (
            <div
              key={cat}
              className="rounded-xl border p-4"
              style={{ borderColor: "var(--border)", background: "var(--surface)" }}
            >
              <p
                className="mb-3 font-mono text-[10px] font-semibold uppercase tracking-widest"
                style={{ color: "var(--accent)" }}
              >
                {cat}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {items.map((item) => (
                  <span
                    key={item}
                    className="rounded border px-2 py-0.5 font-mono text-xs"
                    style={{
                      borderColor: "var(--border)",
                      color: "var(--muted)",
                      background: "var(--background)",
                    }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Education timeline ──────────────── */}
      <section className="mb-10">
        <SectionHeading as="h2" className="mb-5">学歴</SectionHeading>
        <div className="relative border-l-2 pl-6" style={{ borderColor: "var(--border)" }}>
          {EDUCATION.map(({ period, title, sub }) => (
            <div key={period} className="relative pb-6 last:pb-0">
              <span
                className="absolute -left-[1.4rem] top-1 h-3 w-3 rounded-full border-2"
                style={{ borderColor: "var(--accent)", background: "var(--background)" }}
              />
              <p className="mb-0.5 font-mono text-xs tabular-nums" style={{ color: "var(--accent)" }}>
                {period}
              </p>
              <p className="text-sm font-semibold" style={{ color: "var(--foreground)" }}>
                {title}
              </p>
              <p className="mt-0.5 text-xs" style={{ color: "var(--muted)" }}>
                {sub}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Interests ──────────────────────── */}
      <section className="mb-10">
        <SectionHeading as="h2" className="mb-5">趣味 / 興味</SectionHeading>
        <div className="flex flex-wrap gap-2">
          {INTERESTS.map(({ emoji, label }) => (
            <span
              key={label}
              className="inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-sm"
              style={{ borderColor: "var(--border)", color: "var(--muted)" }}
            >
              <span>{emoji}</span>
              {label}
            </span>
          ))}
        </div>
      </section>

      {/* ── Links ──────────────────────────── */}
      <section>
        <SectionHeading as="h2" className="mb-5">リンク</SectionHeading>
        <div className="flex flex-wrap gap-3">
          {LINKS.map(({ label, handle, url }) => (
            <a
              key={label}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-opacity hover:opacity-70"
              style={{ borderColor: "var(--border)", color: "var(--muted)" }}
            >
              <span className="font-mono text-xs" style={{ color: "var(--accent)" }}>
                {handle}
              </span>
              {label}
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
