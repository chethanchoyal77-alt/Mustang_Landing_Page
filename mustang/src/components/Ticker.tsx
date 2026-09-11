const ITEMS = [
  "Pony Car",
  "5.0L V8",
  "American Muscle",
  "60 Years Strong",
  "Coyote Engine",
  "Track Born",
];

/** Infinite scrolling ticker strip between hero and heritage. */
export default function Ticker() {
  const row = [...ITEMS, ...ITEMS];
  return (
    <div className="relative overflow-hidden border-y border-racing-500/30 bg-racing-500 py-3">
      <div className="flex w-max animate-marquee items-center">
        {row.map((item, i) => (
          <span key={i} className="flex items-center whitespace-nowrap">
            <span className="px-6 font-display text-xl tracking-[0.3em] text-white uppercase">
              {item}
            </span>
            <svg viewBox="0 0 24 24" className="h-4 w-4 fill-white/70" aria-hidden>
              <path d="M13 2 3 14h7l-1 8 10-12h-7l1-8z" />
            </svg>
          </span>
        ))}
      </div>
    </div>
  );
}
