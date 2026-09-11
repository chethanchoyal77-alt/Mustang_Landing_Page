import { IMAGES } from "@/data/content";
import CountUp from "./CountUp";

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen flex-col overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={IMAGES.hero}
          alt="Ford Mustang in dramatic studio lighting"
          className="h-full w-full animate-hero-zoom object-cover object-center"
        />
        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-carbon-950 via-carbon-950/70 to-carbon-950/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-carbon-950 via-transparent to-carbon-950/60" />
        <div className="racing-stripes absolute inset-0 opacity-60" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center px-5 pt-32 pb-16 sm:px-8">
        <div className="max-w-3xl">
          <div className="mb-6 flex items-center gap-3">
            <span className="h-px w-12 bg-racing-500" />
            <span className="text-sm font-semibold tracking-[0.4em] text-racing-400 uppercase">
              Since 1964 — The Pony Car
            </span>
          </div>

          <h1 className="font-display text-[clamp(4rem,12vw,9.5rem)] leading-[0.9] tracking-wide text-white">
            UNLEASH
            <br />
            <span className="text-outline">THE</span>{" "}
            <span className="bg-gradient-to-b from-racing-400 to-racing-600 bg-clip-text text-transparent">
              BEAST
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-zinc-300">
            Sixty years of snarling V8s, screaming redlines and unmistakable silhouettes.
            The Ford Mustang isn't just a car — it's an American heartbeat in sheet metal.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#models"
              className="group relative overflow-hidden rounded-sm bg-racing-500 px-8 py-4 text-sm font-bold tracking-widest text-white uppercase shadow-xl shadow-racing-500/30 transition-all duration-300 hover:bg-racing-400 hover:shadow-racing-400/50"
            >
              <span className="relative z-10">Explore the Herd</span>
              <span className="absolute inset-0 -translate-x-full bg-white/20 transition-transform duration-500 group-hover:translate-x-0" />
            </a>
            <a
              href="#heritage"
              className="rounded-sm border border-white/25 px-8 py-4 text-sm font-bold tracking-widest text-white uppercase backdrop-blur-sm transition-all duration-300 hover:border-racing-500 hover:text-racing-400"
            >
              Our Heritage
            </a>
          </div>
        </div>
      </div>

      {/* Bottom stats strip */}
      <div className="relative z-10 border-t border-white/10 bg-carbon-950/60 backdrop-blur-md">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-y-6 px-5 py-8 sm:px-8 md:grid-cols-4">
          {[
            { end: 500, suffix: "+", label: "Horsepower" },
            { end: 3.5, decimals: 1, suffix: "s", label: "0–60 MPH" },
            { end: 180, suffix: " MPH", label: "Top Speed" },
            { end: 60, suffix: "", label: "Years of Legacy" },
          ].map((s) => (
            <div key={s.label} className="flex flex-col items-center gap-1 md:items-start">
              <CountUp
                end={s.end}
                decimals={s.decimals ?? 0}
                suffix={s.suffix}
                className="font-display text-4xl tracking-wider text-white sm:text-5xl"
              />
              <span className="text-xs font-semibold tracking-[0.3em] text-zinc-400 uppercase">
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
