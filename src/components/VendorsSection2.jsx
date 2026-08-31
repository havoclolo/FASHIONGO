import React, { useRef } from "react";
import { NEW_VENDORS } from "../data";

export default function VendorsSection() {
  const trackRef = useRef(null);
  const scroll = (dir) => trackRef.current?.scrollBy({ left: dir * 240, behavior: "smooth" });

  return (
    <section className="mx-auto max-w-6xl px-6 py-9">
      <h2 className="mb-6 font-serif text-2xl sm:text-3xl">Meet Our New Vendors</h2>
      
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
          className="flex flex-1 gap-4 overflow-x-auto scroll-smooth pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {NEW_VENDORS.map((v) => (
            <div key={v.name} className="w-[160px] flex-none overflow-hidden rounded border border-line bg-white transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
              <div className="relative h-[170px] w-full overflow-hidden" style={{ backgroundImage: `url('${v.image}')`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
              </div>
              <div className="flex h-[74px] flex-col justify-center p-3">
                <div className="mb-0.5 text-sm font-bold leading-tight">{v.name}</div>
                <div className="text-[12.5px] text-slate">{v.minimum}</div>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={() => scroll(1)}
          aria-label="Scroll right"
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-line bg-white transition-all hover:scale-105 hover:bg-cream"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 6l6 6-6 6" /></svg>
        </button>
      </div>
    </section>
  );
}
