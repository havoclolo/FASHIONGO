import { useRef } from "react";
import { NEW_VENDORS } from "../data";

export default function VendorsSection({ vendors = NEW_VENDORS }) {
  const trackRef = useRef(null);
  const scroll = (dir) => trackRef.current?.scrollBy({ left: dir * 240, behavior: "smooth" });

  return (
    <section className="w-full bg-white py-10 sm:py-12">
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="mb-6 flex items-end justify-between gap-4">
          <h2 className="font-serif text-2xl sm:text-3xl">Meet Our New Vendors</h2>
          <a href="#" className="flex shrink-0 items-center gap-1 text-sm font-semibold text-teal">
            View More
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><path d="M9 6l6 6-6 6" /></svg>
          </a>
        </div>

        <div className="flex items-center gap-3">
        <button
          onClick={() => scroll(-1)}
          aria-label="Scroll left"
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-line bg-white transition-all hover:scale-105 hover:bg-cream"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 6l-6 6 6 6" /></svg>
        </button>

          <div
            ref={trackRef}
            className="flex min-w-0 flex-1 gap-4 overflow-x-auto scroll-smooth pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {vendors.map((v) => (
              <article key={v.name} className="w-[180px] flex-none overflow-hidden rounded border border-line bg-white transition-all duration-200 hover:-translate-y-1 hover:shadow-lg sm:w-[190px]">
                <div className="aspect-square w-full overflow-hidden bg-cream">
                  <img src={v.image} alt={v.name} className="h-full w-full object-cover" />
                </div>
                <div className="flex min-h-[74px] flex-col justify-center p-3">
                  <h3 className="mb-0.5 text-sm font-bold leading-tight">{v.name}</h3>
                  <p className="text-[12.5px] text-slate">{v.minimum}</p>
                </div>
              </article>
            ))}
          </div>

          <button
            onClick={() => scroll(1)}
            aria-label="Scroll right"
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-line bg-white transition-all hover:scale-105 hover:bg-cream"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M9 6l6 6-6 6" /></svg>
          </button>
        </div>
      </div>
    </section>
  );
}
