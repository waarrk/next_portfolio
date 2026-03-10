"use client";

import { useEffect, useState } from "react";

type Props = {
  title: string;
};

export default function ShareButtons({ title }: Props) {
  const [url, setUrl] = useState("");

  useEffect(() => {
    setUrl(window.location.href);
  }, []);

  if (!url) return null;

  const encoded = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  const links = [
    {
      label: "X (Twitter)",
      href: `https://x.com/intent/tweet?url=${encoded}&text=${encodedTitle}`,
      icon: (
        <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.264 5.632L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
        </svg>
      ),
    },
    {
      label: "Misskey",
      href: `https://misskey-hub.net/share/?text=${encodedTitle}+${encoded}`,
      icon: (
        <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
          <path d="M22.19 5.6c-.42-1.55-1.68-2.77-3.24-3.13C16.33 2 12 2 12 2s-4.33 0-6.95.47C3.49 2.83 2.23 4.05 1.81 5.6 1.35 8.18 1.35 12 1.35 12s0 3.82.46 6.4c.42 1.55 1.68 2.77 3.24 3.13C7.67 22 12 22 12 22s4.33 0 6.95-.47c1.56-.36 2.82-1.58 3.24-3.13.46-2.58.46-6.4.46-6.4s0-3.82-.46-6.4zM9.75 15.52V8.48L15.5 12l-5.75 3.52z" />
        </svg>
      ),
    },
    {
      label: "はてなブックマーク",
      href: `https://b.hatena.ne.jp/add?mode=confirm&url=${encoded}&title=${encodedTitle}`,
      icon: (
        <span className="flex h-4 w-4 items-center justify-center rounded bg-[#00a4de] text-[10px] font-bold text-white leading-none">
          B!
        </span>
      ),
    },
  ];

  return (
    <div className="mt-10 border-t pt-6" style={{ borderColor: "var(--border)" }}>
      <p className="mb-3 text-xs font-semibold uppercase tracking-wider" style={{ color: "var(--muted)" }}>
        Share
      </p>
      <div className="flex flex-wrap gap-2">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.label}
            className="inline-flex items-center gap-1.5 rounded-lg border px-3 py-1.5 text-xs transition-opacity hover:opacity-70"
            style={{ borderColor: "var(--border)", color: "var(--muted)" }}
          >
            {link.icon}
            {link.label}
          </a>
        ))}
      </div>
    </div>
  );
}
