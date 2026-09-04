import React, { useRef } from "react";
import { FG_FREE_SHIPPING_PRODUCTS } from "../data";

function ProductCard({ product }) {
  return (
    <div className="w-[220px] flex-none overflow-hidden rounded border border-line bg-white text-left transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
      {product.image ? (
        <div className="relative h-[220px] overflow-hidden" style={{ backgroundImage: `url('${product.image}')`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        </div>
      ) : null}
      <div className="p-3.5">
        <div className="mb-0.5 text-sm font-bold">{product.vendor}</div>
        <div className="mb-1.5 text-[13px] text-slate">{product.title}</div>
        <div className="flex items-center gap-1.5 text-[12px] font-medium text-teal">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="11" cy="11" r="7" /><path d="M21 21l-4-4" /></svg>
          FG Free Shipping
        </div>
      </div>
    </div>
  );
}

export default function ProductSection({
  title = "Shop FG Free Shipping",
  subtitle = "",
  viewMore = true,
  products = FG_FREE_SHIPPING_PRODUCTS,
}) {
  const trackRef = useRef(null);
  const scroll = (dir) => trackRef.current?.scrollBy({ left: dir * 240, behavior: "smooth" });

  return (
    <section className="mx-auto max-w-6xl px-6 py-9">
      <div className="mb-1 flex items-baseline justify-between">
        <h2 className="font-serif text-2xl sm:text-3xl">{title}</h2>
        {viewMore && (
          <a href="#" className="flex shrink-0 items-center gap-1 text-sm font-semibold text-teal">
            View More
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M9 6l6 6-6 6" /></svg>
          </a>
        )}
      </div>
      {subtitle && <p className="mb-6 text-sm text-slate">{subtitle}</p>}

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
          {(products || []).map((p, i) => (
            <ProductCard key={i} product={p} />
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
