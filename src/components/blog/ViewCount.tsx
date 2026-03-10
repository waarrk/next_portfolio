"use client";

import { useEffect } from "react";

/**
 * busuanzi を使ったページビューカウンター。
 * 本番ドメインでのみ正確な数値が表示される（localhost では "--" になる）。
 */
export default function ViewCount() {
  useEffect(() => {
    // busuanzi スクリプトがまだ読み込まれていない場合のみ追加
    const id = "busuanzi-script";
    if (!document.getElementById(id)) {
      const script = document.createElement("script");
      script.id = id;
      script.src = "//busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <span
      id="busuanzi_container_page_pv"
      className="text-xs"
      style={{ color: "var(--muted)" }}
    >
      閲覧数:{" "}
      <span id="busuanzi_value_page_pv" className="tabular-nums">
        --
      </span>{" "}
      回
    </span>
  );
}
