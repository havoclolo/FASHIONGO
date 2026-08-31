import React from "react";
import CategoryIcon2 from "./CategoryIcon2";

export default function CategoryHero({ heading = "Wholesale Jewelry", subtext = "Stunning collections for every style", heroIcon = "bracelet", breadcrumb = ["Home", "Jewelry"] }) {
  return (
    <section className="bg-mint">
      <div className="mx-auto max-w-6xl px-6 py-3 text-sm text-slate">
        {breadcrumb.map((crumb, i) => (
          <span key={crumb}>
            {i > 0 && <span className="mx-2">›</span>}
            <span className={i === breadcrumb.length - 1 ? "font-semibold text-ink" : ""}>{crumb}</span>
          </span>
        ))}
      </div>

      <div className="mx-auto grid max-w-6xl items-center gap-8 px-6 pb-10 pt-2 md:grid-cols-2">
        <div className="py-4">
          <h1 className="mb-2 font-serif text-3xl sm:text-4xl">{heading}</h1>
          <p className="mb-6 text-sm text-slate">{subtext}</p>
          <div className="flex flex-wrap items-center gap-5">
            <button className="rounded-sm border border-ink bg-white px-6 py-3 text-sm font-bold transition-colors hover:bg-ink hover:text-white">
              Sign Up to Shop
            </button>
            <span className="text-sm">
              Already have an account? <a href="#" className="font-semibold underline">Sign in</a>
            </span>
          </div>
        </div>

        <div className="relative h-[240px] overflow-hidden rounded-sm bg-gradient-to-br from-[#EDE4D6] to-[#B79A7C] after:absolute after:inset-0 after:bg-[radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.25),transparent_55%)] sm:h-[300px]">
          <div className="absolute inset-0 flex items-center justify-center">
            <CategoryIcon2 type={heroIcon} className="text-white/60" />
          </div>
        </div>
      </div>
    </section>
  );
}
