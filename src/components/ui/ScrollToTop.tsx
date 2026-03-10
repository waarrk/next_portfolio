"use client";

import { useEffect, useState } from "react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="トップへ戻る"
      className="fixed bottom-6 right-6 z-50 flex h-11 w-11 items-center justify-center rounded-full text-sm font-bold text-white shadow-lg transition-opacity hover:opacity-80"
      style={{ background: "var(--accent)" }}
    >
      TOP
    </button>
  );
}
