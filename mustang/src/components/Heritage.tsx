import { IMAGES, TIMELINE } from "@/data/content";
import Reveal from "./Reveal";

export default function Heritage() {
  return (
    <section id="heritage" className="relative overflow-hidden bg-carbon-950 py-24 sm:py-32">
      <div className="carbon-dots absolute inset-0" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-start gap-16 lg:grid-cols-2">
          {/* Image collage */}
          <Reveal className="relative lg:sticky lg:top-28">
            <div className="relative">
              <div className="absolute -top-6 -left-6 h-40 w-40 border-t-2 border-l-2 border-racing-500" aria-hidden />
              <img
                src={IMAGES.heritage}
                alt="Classic blue Ford Mustang"
                className="aspect-[4/3] w-full rounded-sm object-cover shadow-2xl shadow-black/60"
                loading="lazy"
              />
              <img
                src={IMAGES.grille}
                alt="Mustang grille emblem close-up"
                className="absolute -right-4 -bottom-10 w-44 rotate-3 rounded-sm border-4 border-carbon-950 object-cover shadow-2xl shadow-black/70 sm:-right-8 sm:w-60"
                loading="lazy"
              />
              <div className="absolute -bottom-8 left-6 rounded-sm bg-racing-500 px-5 py-3 shadow-xl shadow-racing-500/30 sm:left-10">
                <p className="font-display text-3xl tracking-wider text-white">EST. 1964</p>
              </div>
            </div>
          </Reveal>

          {/* Story + timeline */}
          <div>
            <Reveal>
              <div className="mb-4 flex items-center gap-3">
                <span className="h-px w-10 bg-racing-500" />
                <span className="text-sm font-semibold tracking-[0.4em] text-racing-400 uppercase">
                  Heritage
                </span>
              </div>
              <h2 className="font-display text-5xl leading-none tracking-wide text-white sm:text-7xl">
                SIX DECADES OF
                <br />
                <span className="text-outline">PURE</span> LEGEND
              </h2>
              <p className="mt-6 max-w-xl leading-relaxed text-zinc-400">
                On April 17, 1964, Ford unveiled a car that would define an entire category.
                Named after the P-51 Mustang fighter plane, it captured the imagination of a
                generation — and never let go.
              </p>
            </Reveal>

            {/* Timeline */}
            <div className="relative mt-14 space-y-10 border-l border-white/10 pl-8">
              {TIMELINE.map((item, i) => (
                <Reveal key={item.year} delay={i * 90}>
                  <div className="group relative">
                    <span className="absolute top-1.5 -left-[41px] h-3 w-3 animate-pulse-dot rounded-full bg-racing-500" />
                    <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                      <span className="font-display text-4xl tracking-wider text-racing-500">
                        {item.year}
                      </span>
                      <h3 className="text-lg font-bold tracking-wide text-white uppercase">
                        {item.title}
                      </h3>
                    </div>
                    <p className="mt-2 max-w-lg text-sm leading-relaxed text-zinc-400 transition-colors duration-300 group-hover:text-zinc-300">
                      {item.text}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
