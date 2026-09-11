import { FEATURES, IMAGES } from "@/data/content";
import Reveal from "./Reveal";

export default function Interior() {
  return (
    <section id="interior" className="relative overflow-hidden bg-carbon-900 py-24 sm:py-32">
      <div
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-racing-500/50 to-transparent"
        aria-hidden
      />
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Copy + features */}
          <div>
            <Reveal>
              <div className="mb-4 flex items-center gap-3">
                <span className="h-px w-10 bg-racing-500" />
                <span className="text-sm font-semibold tracking-[0.4em] text-racing-400 uppercase">
                  The Cockpit
                </span>
              </div>
              <h2 className="font-display text-5xl leading-none tracking-wide text-white sm:text-7xl">
                COMMAND
                <br />
                <span className="text-outline">THE</span> ROAD
              </h2>
              <p className="mt-6 max-w-xl leading-relaxed text-zinc-400">
                Modern tech wrapped in old-school attitude. The Mustang cabin is built
                around the driver — everything within reach, everything engineered for
                the drive.
              </p>
            </Reveal>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {FEATURES.map((f, i) => (
                <Reveal key={f.title} delay={i * 90}>
                  <div className="group h-full rounded-sm border border-white/10 bg-carbon-950 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-racing-500/50 hover:shadow-lg hover:shadow-racing-500/10">
                    <span className="mb-3 flex h-9 w-9 items-center justify-center rounded-sm bg-racing-500/15 font-display text-lg text-racing-400 transition-colors duration-300 group-hover:bg-racing-500 group-hover:text-white">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="text-sm font-bold tracking-wider text-white uppercase">
                      {f.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-zinc-400">{f.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Image */}
          <Reveal delay={150} className="relative">
            <div className="relative overflow-hidden rounded-sm">
              <img
                src={IMAGES.interior}
                alt="Ford Mustang premium leather interior"
                loading="lazy"
                className="aspect-[4/3] w-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-carbon-950/80 via-transparent to-transparent" />
            </div>
            <div className="absolute -bottom-6 -left-4 flex items-center gap-4 rounded-sm border border-white/15 bg-carbon-950/90 px-5 py-4 backdrop-blur-md sm:-left-8">
              <span className="animate-pulse-dot h-3 w-3 rounded-full bg-racing-500" />
              <div>
                <p className="text-[11px] font-bold tracking-[0.3em] text-racing-400 uppercase">
                  Engine Running
                </p>
                <p className="font-display text-2xl tracking-wider text-white">IDLE: 800 RPM</p>
              </div>
            </div>
            <div className="absolute -top-5 -right-5 hidden h-36 w-36 border-t-2 border-r-2 border-racing-500 sm:block" aria-hidden />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
