"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { clsx } from "clsx";

const NAV_LINKS = [
  { href: "/blog", label: "Blog" },
  { href: "/projects", label: "Projects" },
  { href: "/photos", label: "Photos" },
  { href: "/map", label: "Map" },
  { href: "/about", label: "About" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header
      className="sticky top-0 z-50 border-b bg-white/90 backdrop-blur-md"
      style={{ borderColor: "var(--border)" }}
    >
      <div className="mx-auto flex max-w-4xl items-center justify-between px-4 py-3">
        <Link
          href="/"
          className="font-bold tracking-tight text-gray-900"
          style={{ fontSize: "1.05rem", letterSpacing: "-0.02em" }}
        >
          waarrk<span style={{ color: "var(--accent)" }}>.</span>
        </Link>
        <nav className="flex items-center gap-5">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={clsx("text-sm font-medium transition-opacity", {
                "opacity-100": pathname.startsWith(link.href),
                "opacity-50 hover:opacity-80": !pathname.startsWith(link.href),
              })}
              style={
                pathname.startsWith(link.href)
                  ? { color: "var(--accent)" }
                  : undefined
              }
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
