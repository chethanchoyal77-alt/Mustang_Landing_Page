import { useEffect, useRef, useState } from "react";
import { IMAGES, PERFORMANCE } from "@/data/content";
import Reveal from "./Reveal";

function SpecBar({ label, value, display, max }: (typeof PERFORMANCE)[number]) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setWidth((value / max) * 100);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [value, max]);

  return (
    <div ref={ref}>
      <div className="mb-2 flex items-end justify-between">
        <span className="text-sm font-semibold tracking-[0.25em] text-zinc-300 uppercase">
          {label}
        </span>
        <span className="font-display text-2xl tracking-wider text-racing-400">{display}</span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-white/10">
        <div
          className="h-full rounded-full bg-gradient-to-r from-racing-600 to-racing-400 shadow-[0_0_12px_rgba(232,17,45,0.6)] transition-all duration-[1400ms] ease-out"
          style={{ width: `${width}%` }}
        />
      </div>
    </div>
  );
}

export default function Performance() {
  return (
    <section id="performance" className="relative overflow-hidden bg-carbon-950 py-24 sm:py-32">
      <div className="carbon-dots absolute inset-0" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Image side */}
          <Reveal className="relative order-2 lg:order-1">
            <div className="relative overflow-hidden rounded-sm">
              <img
                src={IMAGES.garage}
                alt="Mustang in a dimly lit garage"
                loading="lazy"
                className="aspect-[4/5] w-full object-cover transition-transform duration-700 hover:scale-105 sm:aspect-[5/5]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-carbon-950/90 via-transparent to-racing-500/10" />
              {/* Engine badge */}
              <div className="absolute bottom-6 left-6 right-6 rounded-sm border border-white/15 bg-carbon-950/80 p-5 backdrop-blur-md">
                <p className="text-[11px] font-bold tracking-[0.35em] text-racing-400 uppercase">
                  Powertrain
                </p>
                <p className="mt-1 font-display text-3xl tracking-wider text-white sm:text-4xl">
                  5.0L COYOTE V8
                </p>
                <p className="mt-1 text-sm text-zinc-400">
                  DOHC · 32 valves · flat-plane soundtrack
                </p>
              </div>
            </div>
            <div className="absolute -top-5 -right-5 hidden h-36 w-36 border-t-2 border-r-2 border-racing-500 sm:block" aria-hidden />
          </Reveal>

          {/* Spec side */}
          <div className="order-1 lg:order-2">
            <Reveal>
              <div className="mb-4 flex items-center gap-3">
                <span className="h-px w-10 bg-racing-500" />
                <span className="text-sm font-semibold tracking-[0.4em] text-racing-400 uppercase">
                  Performance
                </span>
              </div>
              <h2 className="font-display text-5xl leading-none tracking-wide text-white sm:text-7xl">
                NUMBERS THAT
                <br />
                <span className="text-outline">SPEAK</span> IN V8
              </h2>
              <p className="mt-6 max-w-xl leading-relaxed text-zinc-400">
                Every Mustang is a physics lesson with a louder soundtrack. Here's what
                happens when you put your foot down — and keep it there.
              </p>
            </Reveal>

            <Reveal delay={150} className="mt-12 space-y-8">
              {PERFORMANCE.map((spec) => (
                <SpecBar key={spec.label} {...spec} />
              ))}
            </Reveal>

            <Reveal delay={250}>
              <div className="mt-12 grid grid-cols-3 gap-4">
                {[
                  { value: "3.5s", label: "0–60 MPH" },
                  { value: "11.8s", label: "¼ Mile" },
                  { value: "1.0G", label: "Lateral Grip" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="rounded-sm border border-white/10 bg-carbon-900 p-4 text-center transition-colors duration-300 hover:border-racing-500/50"
                  >
                    <p className="font-display text-3xl tracking-wider text-white">{item.value}</p>
                    <p className="mt-1 text-[10px] font-bold tracking-[0.25em] text-zinc-500 uppercase">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
