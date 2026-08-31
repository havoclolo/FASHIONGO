import React, { useRef } from "react";
import { JEWELRY_SUBCATEGORIES } from "../data";
import CategoryIcon2 from "./CategoryIcon2";

export default function SubcategoryStrip() {
  const trackRef = useRef(null);
  const scroll = (dir) => trackRef.current?.scrollBy({ left: dir * 260, behavior: "smooth" });

  return (
    <section className="mx-auto max-w-6xl px-6 py-10">
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
          className="flex flex-1 gap-5 overflow-x-auto scroll-smooth pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {JEWELRY_SUBCATEGORIES.map((c) => (
            <div key={c.name} className="w-[170px] flex-none text-center transition-transform duration-200 hover:-translate-y-1">
              <div className={`relative h-[170px] overflow-hidden rounded-sm ${c.grad}`}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <CategoryIcon2 type={c.icon} />
                </div>
              </div>
              <div className="mt-2.5 text-sm font-semibold">{c.name}</div>
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
