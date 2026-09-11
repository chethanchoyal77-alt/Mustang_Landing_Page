import { IMAGES } from "@/data/content";
import Reveal from "./Reveal";

export default function Gallery() {
  return (
    <section id="gallery" className="relative overflow-hidden bg-carbon-950 py-24 sm:py-32">
      <div className="carbon-dots absolute inset-0" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="mb-14 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-10 bg-racing-500" />
              <span className="text-sm font-semibold tracking-[0.4em] text-racing-400 uppercase">
                Gallery
              </span>
            </div>
            <h2 className="font-display text-5xl leading-none tracking-wide text-white sm:text-7xl">
              ICONS IN <span className="text-outline">THE WILD</span>
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-zinc-400">
            From pristine classics to modern predators — a look at Mustangs living their
            best lives on roads everywhere.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {IMAGES.gallery.map((img, i) => (
            <Reveal
              key={img.src}
              delay={(i % 3) * 100}
              className={i === 0 ? "sm:col-span-2 sm:row-span-2" : ""}
            >
              <figure
                className={`group relative overflow-hidden rounded-sm border border-white/10 ${
                  i === 0 ? "h-full min-h-72" : "aspect-[4/3]"
                }`}
              >
                <img
                  src={img.src}
                  alt={img.caption}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-carbon-950/95 via-carbon-950/20 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-100" />
                <figcaption className="absolute right-0 bottom-0 left-0 translate-y-2 p-6 transition-transform duration-500 group-hover:translate-y-0">
                  <span className="text-[11px] font-bold tracking-[0.3em] text-racing-400 uppercase">
                    {img.tag}
                  </span>
                  <p className="mt-1 font-display text-2xl tracking-wider text-white">
                    {img.caption.toUpperCase()}
                  </p>
                </figcaption>
                <span className="absolute top-4 right-4 h-8 w-8 border-t border-r border-white/40 opacity-0 transition-all duration-500 group-hover:opacity-100" aria-hidden />
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
