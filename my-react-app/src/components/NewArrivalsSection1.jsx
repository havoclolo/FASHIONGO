import React, { useRef } from "react";
import { NEW_ARRIVALS, NEW_VENDORS } from "../data";
import CategoryIcon1 from "./CategoryIcon1";

export default function NewArrivalsSection() {
  const trackRef = useRef(null);
  const scroll = (dir) => trackRef.current?.scrollBy({ left: dir * 240, behavior: "smooth" });

  return (
    <section className="mx-auto max-w-6xl px-6 py-9">
      <div className="grid gap-8 rounded border border-line bg-cream p-8 md:grid-cols-[240px_1fr]">
        <div>
          <div className="mb-2 text-sm font-semibold text-teal">
            {NEW_ARRIVALS.count} <span className="text-slate">new items uploaded</span>
          </div>
          <h2 className="mb-3 font-serif text-2xl sm:text-3xl">New Arrivals</h2>
          <p className="mb-6 text-sm text-slate">Be the first to discover what's new.</p>
          <button className="rounded-sm border border-ink px-5 py-3 text-sm font-bold transition-colors hover:bg-ink hover:text-white">
            Unlock Wholesale Pricing
          </button>
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
            className="flex flex-1 items-stretch gap-4 overflow-x-auto scroll-smooth pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {NEW_ARRIVALS.products.map((p, i) => (
              <div key={i} className="w-[180px] flex-none overflow-hidden rounded border border-line bg-white text-left shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg sm:w-[190px] md:w-[210px]">
                <div className={`relative h-[180px] w-full shrink-0 overflow-hidden ${p.grad}`}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <CategoryIcon1 type={p.icon} className="h-14 w-14" />
                  </div>
                </div>
                <div className="flex h-[96px] flex-col justify-between p-2.5">
                  <div className="truncate text-sm font-bold leading-tight">{p.vendor}</div>
                  <div className="min-h-[32px] text-[12.5px] leading-snug text-slate">{p.title}</div>
                  {p.badge && (
                    <div className="flex items-center gap-1.5 text-[11px] font-medium text-teal">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="2" y="7" width="14" height="10" rx="1.5" /><path d="M16 10h3l3 3v4h-6" /><circle cx="7" cy="18" r="1.6" /><circle cx="17" cy="18" r="1.6" /></svg>
                      {p.badge}
                    </div>
                  )}
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
      </div>

      <h2 className="mb-6 mt-12 font-serif text-2xl sm:text-3xl">Meet Our New Vendors</h2>
      <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-5">
        {NEW_VENDORS.map((v) => (
          <div key={v.name} className="overflow-hidden rounded border border-line bg-white transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
            <div className={`relative h-[170px] w-full ${v.grad}`}>
              <div className="absolute inset-0 flex items-center justify-center">
                <CategoryIcon1 type="keychain" className="h-14 w-14" />
              </div>
            </div>
            <div className="flex h-[74px] flex-col justify-center p-3">
              <div className="mb-0.5 text-sm font-bold leading-tight">{v.name}</div>
              <div className="text-[12.5px] text-slate">{v.minimum}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
