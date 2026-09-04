import { BREADCRUMB } from "../data";

export default function CategoryHero({ breadcrumb = BREADCRUMB, heading = "Wholesale Accessories", subtext = "Get everything your store needs", heroImage = "https://d2njprwt6vp5kv.cloudfront.net/category/background/bg_category_accessories.png" }) {
  return (
    <section className="block w-full bg-mint">
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

        <div className="relative h-[240px] overflow-hidden rounded-sm bg-gradient-to-br from-[#EDE4D6] to-[#B79A7C] sm:h-[300px]" style={{ backgroundImage: `url('${heroImage}')`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        </div>
      </div>
    </section>
  );
}
