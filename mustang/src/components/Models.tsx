import { MODELS } from "@/data/content";
import Reveal from "./Reveal";

export default function Models() {
  return (
    <section id="models" className="relative overflow-hidden bg-carbon-900 py-24 sm:py-32">
      <div
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-racing-500/50 to-transparent"
        aria-hidden
      />
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-10 bg-racing-500" />
              <span className="text-sm font-semibold tracking-[0.4em] text-racing-400 uppercase">
                The Lineup
              </span>
            </div>
            <h2 className="font-display text-5xl leading-none tracking-wide text-white sm:text-7xl">
              CHOOSE YOUR <span className="text-outline-red">WEAPON</span>
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-zinc-400">
            From the original recipe to the most track-capable Mustang ever built — every
            one shares the same DNA: a soul under the hood.
          </p>
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {MODELS.map((model, i) => (
            <Reveal key={model.name} delay={i * 100} className="h-full">
              <article className="group relative flex h-full flex-col overflow-hidden rounded-sm border border-white/10 bg-carbon-950 transition-all duration-500 hover:-translate-y-2 hover:border-racing-500/60 hover:shadow-2xl hover:shadow-racing-500/10">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={model.image}
                    alt={model.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-carbon-950 via-transparent to-transparent" />
                  <span className="absolute top-4 left-4 rounded-sm bg-carbon-950/80 px-3 py-1.5 text-[11px] font-bold tracking-[0.25em] text-racing-400 uppercase backdrop-blur-sm">
                    {model.tagline}
                  </span>
                  <div className="absolute right-4 bottom-4 flex gap-2">
                    {Object.values(model.specs).map((spec) => (
                      <span
                        key={spec}
                        className="rounded-sm border border-white/20 bg-carbon-950/70 px-2.5 py-1 text-[10px] font-bold tracking-widest text-white backdrop-blur-sm"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-3xl tracking-wider text-white">
                    {model.name.toUpperCase()}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-zinc-400">
                    {model.description}
                  </p>
                  <a
                    href="#cta"
                    className="mt-6 inline-flex items-center gap-2 text-xs font-bold tracking-[0.25em] text-racing-400 uppercase transition-all duration-300 group-hover:gap-4 hover:text-racing-300"
                  >
                    Configure
                    <svg viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current stroke-2">
                      <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                </div>
                <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-racing-500 transition-all duration-500 group-hover:w-full" />
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
