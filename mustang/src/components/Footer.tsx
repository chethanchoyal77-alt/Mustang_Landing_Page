import { FOOTER_LINKS } from "@/data/content";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-carbon-950">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Brand */}
          <div>
            <a href="#top" className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-racing-500 font-display text-xl text-white">
                M
              </span>
              <span className="font-display text-2xl tracking-[0.25em] text-white">
                MUSTANG<span className="text-racing-500">.</span>
              </span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-zinc-500">
              Sixty years of American muscle, freedom and the open road. Built for those
              who hear the call of the V8.
            </p>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 gap-8 md:justify-items-center">
            <div>
              <h4 className="mb-4 text-xs font-bold tracking-[0.3em] text-zinc-400 uppercase">
                Explore
              </h4>
              <ul className="space-y-2.5">
                {FOOTER_LINKS.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-sm text-zinc-500 transition-colors duration-300 hover:text-racing-400"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="mb-4 text-xs font-bold tracking-[0.3em] text-zinc-400 uppercase">
                Specs
              </h4>
              <ul className="space-y-2.5 text-sm text-zinc-500">
                <li>5.0L Coyote V8</li>
                <li>500 HP</li>
                <li>0–60 in 3.5s</li>
                <li>60 Years of Legacy</li>
              </ul>
            </div>
          </div>

          {/* GitHub-ready note */}
          <div className="md:justify-self-end">
            <h4 className="mb-4 text-xs font-bold tracking-[0.3em] text-zinc-400 uppercase">
              Deploy It
            </h4>
            <p className="max-w-xs text-sm leading-relaxed text-zinc-500">
              This page is a static site — build it, push the <code className="rounded bg-white/5 px-1.5 py-0.5 text-racing-400">dist/</code> folder to GitHub Pages and it's live.
            </p>
            <a
              href="#top"
              className="mt-5 inline-flex items-center gap-2 rounded-sm border border-white/15 px-5 py-3 text-xs font-bold tracking-[0.25em] text-white uppercase transition-all duration-300 hover:border-racing-500 hover:text-racing-400"
            >
              Back to Top
              <svg viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current stroke-2">
                <path d="M12 19V5M6 11l6-6 6 6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-xs text-zinc-600">
            © {year} Mustang Landing Page. Built with React + Tailwind CSS. 🐎
          </p>
          <p className="text-xs text-zinc-600">
            Fan-made tribute — not affiliated with Ford Motor Company.
          </p>
        </div>
      </div>
    </footer>
  );
}
