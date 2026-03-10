import type { Metadata } from "next";
import SectionHeading from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "About",
  description: "鷲尾優作（waarrk）について",
};

const RESEARCH_INTERESTS = [
  { en: "Robot Motion Control", ja: "ロボット運動制御" },
  { en: "Autonomous Mobile Robots", ja: "自律移動ロボット" },
  { en: "Embedded Systems", ja: "組み込みシステム" },
  { en: "ROS2-based System Development", ja: "ROS2 ベースのシステム開発" },
];

const EDUCATION = [
  {
    period: "2024 – 現在",
    title: "千葉工業大学 先進工学部",
    sub: "未来ロボティクス学科",
  },
  {
    period: "2019 – 2024",
    title: "長岡工業高等専門学校",
    sub: "電子制御工学科",
  },
];

const TOOLS = [
  { cat: "言語", items: ["C / C++", "Python", "Rust", "TypeScript", "MATLAB"] },
  { cat: "フレームワーク / MW", items: ["ROS2", "FreeRTOS", "Next.js", "React"] },
  { cat: "ハードウェア", items: ["STM32", "ESP32", "FPGA", "Raspberry Pi"] },
  { cat: "ツール", items: ["Git", "Docker", "Linux", "Fusion 360"] },
];

const LINKS = [
  { label: "GitHub", handle: "waarrk", url: "https://github.com/waarrk" },
  { label: "X (Twitter)", handle: "@waarrk", url: "https://x.com/waarrk" },
];

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10">

      {/* ── Profile ─────────────────────────────── */}
      <section className="mb-10">
        <p className="mb-1 text-sm" style={{ color: "var(--muted)" }}>
          千葉工業大学 先進工学部 未来ロボティクス学科
        </p>
        <h1 className="text-3xl font-bold tracking-tight" style={{ color: "var(--foreground)" }}>
          Yusaku Washio
        </h1>
        <p className="mt-0.5 text-lg" style={{ color: "var(--muted)" }}>鷲尾 優作 · システム魔法使い</p>

        <p className="mt-4 max-w-xl text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
          千葉工業大学大学院にて、ロボット制御・自律移動システムの研究に従事。
          組み込みシステムおよび ROS2 を用いたロボットソフトウェアの開発を行っている。
          趣味は写真撮影と自転車。
        </p>
      </section>

      {/* ── Research Interests ─────────────────── */}
      <section className="mb-10">
        <SectionHeading as="h2" className="mb-5">Research Interests</SectionHeading>
        <div className="space-y-2">
          {RESEARCH_INTERESTS.map(({ en, ja }) => (
            <div
              key={en}
              className="flex items-baseline gap-3 border-b py-3 last:border-0"
              style={{ borderColor: "var(--border)" }}
            >
              <span className="text-sm font-semibold" style={{ color: "var(--foreground)" }}>{en}</span>
              <span className="text-xs" style={{ color: "var(--muted)" }}>{ja}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── Publications ───────────────────────── */}
      <section className="mb-10">
        <SectionHeading as="h2" className="mb-5">Publications</SectionHeading>
        <p className="text-sm" style={{ color: "var(--muted)" }}>準備中</p>
      </section>

      {/* ── Education ──────────────────────────── */}
      <section className="mb-10">
        <SectionHeading as="h2" className="mb-5">Education</SectionHeading>
        <div className="relative border-l-2 pl-6" style={{ borderColor: "var(--border)" }}>
          {EDUCATION.map(({ period, title, sub }) => (
            <div key={period} className="relative pb-6 last:pb-0">
              <span
                className="absolute -left-[1.4rem] top-1 h-3 w-3 rounded-full border-2"
                style={{ borderColor: "var(--accent)", background: "var(--background)" }}
              />
              <p className="mb-0.5 font-mono text-xs tabular-nums" style={{ color: "var(--muted)" }}>
                {period}
              </p>
              <p className="text-sm font-semibold" style={{ color: "var(--foreground)" }}>{title}</p>
              <p className="mt-0.5 text-xs" style={{ color: "var(--muted)" }}>{sub}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Tools ──────────────────────────────── */}
      <section className="mb-10">
        <SectionHeading as="h2" className="mb-5">Tools & Technologies</SectionHeading>
        <div className="grid gap-3 sm:grid-cols-2">
          {TOOLS.map(({ cat, items }) => (
            <div
              key={cat}
              className="border-t pt-4"
              style={{ borderColor: "var(--border)" }}
            >
              <p
                className="mb-3 font-mono text-[10px] font-semibold uppercase tracking-widest"
                style={{ color: "var(--muted)" }}
              >
                {cat}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {items.map((item) => (
                  <span
                    key={item}
                    className="font-mono text-xs"
                    style={{ color: "var(--muted)" }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Links ──────────────────────────────── */}
      <section>
        <SectionHeading as="h2" className="mb-5">Links</SectionHeading>
        <div className="flex flex-wrap gap-3">
          {LINKS.map(({ label, handle, url }) => (
            <a
              key={label}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs underline underline-offset-4 decoration-1 transition-opacity hover:opacity-50"
              style={{ color: "var(--muted)" }}
            >
              {handle} ↗
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
