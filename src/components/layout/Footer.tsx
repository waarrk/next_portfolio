export default function Footer() {
  return (
    <footer className="border-t py-8" style={{borderColor: "var(--border)"}}>
      <div
        className="mx-auto max-w-4xl px-4 text-center font-mono text-xs"
        style={{color: "var(--muted)"}}
      >
        <p>&copy; {new Date().getFullYear()} Yusaku Washio</p>
        <div className="mt-2 flex justify-center gap-5">
          <a
            href="https://github.com/waarrk"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-opacity hover:opacity-50"
          >
            GitHub ↗
          </a>
          <a
            href="https://x.com/waarrk"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-opacity hover:opacity-50"
          >
            X ↗
          </a>
        </div>
      </div>
    </footer>
  );
}
