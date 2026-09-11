import { useEffect, useState } from "react";
import { cn } from "@/utils/cn";
import { NAV_LINKS } from "@/data/content";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled ? "border-b border-white/10 bg-carbon-950/85 backdrop-blur-xl" : "bg-transparent"
      )}
    >
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-5 sm:px-8">
        {/* Logo */}
        <a href="#top" className="group flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-racing-500 font-display text-xl text-white shadow-lg shadow-racing-500/30 transition-transform duration-300 group-hover:rotate-12">
            M
          </span>
          <span className="font-display text-2xl tracking-[0.25em] text-white">
            MUSTANG<span className="text-racing-500">.</span>
          </span>
        </a>

        {/* Desktop links */}
        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium tracking-widest text-zinc-400 uppercase transition-colors duration-300 hover:text-racing-400"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#cta"
            className="rounded-sm bg-racing-500 px-5 py-2.5 text-sm font-bold tracking-widest text-white uppercase shadow-lg shadow-racing-500/25 transition-all duration-300 hover:bg-racing-400 hover:shadow-racing-400/40"
          >
            Build Yours
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
        >
          <span
            className={cn(
              "h-0.5 w-6 bg-white transition-all duration-300",
              open && "translate-y-2 rotate-45"
            )}
          />
          <span className={cn("h-0.5 w-6 bg-white transition-all duration-300", open && "opacity-0")} />
          <span
            className={cn(
              "h-0.5 w-6 bg-white transition-all duration-300",
              open && "-translate-y-2 -rotate-45"
            )}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "overflow-hidden border-b border-white/10 bg-carbon-950/95 backdrop-blur-xl transition-all duration-500 lg:hidden",
          open ? "max-h-96" : "max-h-0"
        )}
      >
        <nav className="flex flex-col gap-1 px-5 py-4">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-md px-3 py-3 text-sm font-medium tracking-widest text-zinc-300 uppercase transition-colors hover:bg-white/5 hover:text-racing-400"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#cta"
            onClick={() => setOpen(false)}
            className="mt-2 rounded-sm bg-racing-500 px-5 py-3 text-center text-sm font-bold tracking-widest text-white uppercase"
          >
            Build Yours
          </a>
        </nav>
      </div>
    </header>
  );
}
