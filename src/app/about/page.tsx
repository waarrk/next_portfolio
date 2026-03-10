import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "鷲尾優作（waarrk）について",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="mb-8 text-2xl font-bold" style={{ color: "var(--foreground)" }}>About</h1>
      <div className="prose">
        <h2>鷲尾 優作 (Washio Yusaku)</h2>
        <p>
          千葉工業大学 大学院生。ロボットとか組み込みとかやっています。
        </p>

        <h2>つかうもの</h2>
        <ul>
          <li>C/C++, Python, Rust, TypeScript</li>
          <li>ROS2, STM32, ESP32</li>
          <li>Next.js</li>
        </ul>

        <h2>趣味</h2>
        <ul>
          <li>写真（ポートレート・風景）</li>
          <li>自転車</li>
          <li>プログラミング</li>
        </ul>

        <h2>リンク</h2>
        <ul>
          <li>
            <a href="https://github.com/waarrk" target="_blank" rel="noopener noreferrer">
              GitHub: waarrk
            </a>
          </li>
          <li>
            <a href="https://x.com/waarrk" target="_blank" rel="noopener noreferrer">
              X (Twitter): @waarrk
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
