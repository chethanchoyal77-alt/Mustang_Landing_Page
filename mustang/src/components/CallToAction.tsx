import { useState } from "react";
import { IMAGES } from "@/data/content";
import Reveal from "./Reveal";

export default function CallToAction() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  return (
    <section id="cta" className="relative overflow-hidden py-24 sm:py-32">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={IMAGES.heroFallback}
          alt="Red Ford Mustang GT"
          loading="lazy"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-racing-600/85 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-b from-carbon-950 via-racing-700/60 to-carbon-950" />
        <div className="racing-stripes absolute inset-0 opacity-40" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-5 text-center sm:px-8">
        <Reveal>
          <div className="mb-6 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-white/50" />
            <span className="text-sm font-semibold tracking-[0.4em] text-white uppercase">
              The Road Is Calling
            </span>
            <span className="h-px w-10 bg-white/50" />
          </div>
          <h2 className="font-display text-[clamp(3.5rem,9vw,7.5rem)] leading-[0.9] tracking-wide text-white">
            FEEL THE
            <br />
            THUNDER
          </h2>
          <p className="mx-auto mt-6 max-w-xl leading-relaxed text-zinc-200">
            Drop your email for exclusive news, event invites and a front-row seat to the
            next 60 years of Mustang.
          </p>
        </Reveal>

        <Reveal delay={150}>
          {sent ? (
            <div className="mx-auto mt-10 max-w-md rounded-sm border border-white/30 bg-white/10 px-6 py-5 backdrop-blur-md">
              <p className="font-display text-2xl tracking-wider text-white">
                YOU'RE ON THE LIST. 🐎
              </p>
              <p className="mt-1 text-sm text-zinc-200">Keep an ear out — the engine's warming up.</p>
            </div>
          ) : (
            <form
              className="mx-auto mt-10 flex max-w-lg flex-col gap-3 sm:flex-row"
              onSubmit={(e) => {
                e.preventDefault();
                if (email.trim()) setSent(true);
              }}
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="flex-1 rounded-sm border border-white/30 bg-carbon-950/70 px-5 py-4 text-sm text-white placeholder-zinc-400 backdrop-blur-md transition-colors outline-none focus:border-white"
              />
              <button
                type="submit"
                className="rounded-sm bg-white px-8 py-4 text-sm font-bold tracking-widest text-racing-600 uppercase shadow-xl transition-all duration-300 hover:bg-zinc-200 hover:shadow-white/30"
              >
                Rev It Up
              </button>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}
