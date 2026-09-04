import { useRef, useState, useEffect } from "react";
import { BRANDS } from "../data";

function HeroBanner() {
  const [bannerIndex, setBannerIndex] = useState(0);
  const banners = [
    "https://www.fashiongo.net/img/pice/top_banner_1.jpg",
    "https://www.fashiongo.net/img/pice/top_banner_2.jpg",
    "https://www.fashiongo.net/img/pice/top_banner_3.jpg",
    "https://www.fashiongo.net/img/pice/top_banner_4.jpg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setBannerIndex((prev) => (prev + 1) % banners.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [banners.length]);

  return (
    <section
      className="relative flex w-full min-h-[460px] items-center bg-cover bg-center transition-all duration-700"
      style={{
        backgroundImage: `linear-gradient(100deg,rgba(30,26,22,0.72) 0%,rgba(30,26,22,0.38) 45%,rgba(30,26,22,0.08) 70%), url('${banners[bannerIndex]}')`,
      }}
    >
      <div className="mx-auto w-full max-w-6xl px-6 py-16">
        <div className="max-w-lg text-white">
          <h1 className="mb-1.5">
            <span className="font-serif text-3xl italic sm:text-4xl">Wholesale</span>{" "}
            <span className="text-3xl font-medium sm:text-4xl">marketplace</span>
          </h1>
          <h2 className="mb-5 text-4xl font-extrabold leading-none tracking-wide sm:text-5xl">
            YOU CAN RELY ON
          </h2>
          <p className="mb-7 text-base text-white/90 sm:text-lg">Guiding success for every retail buyer in every stage</p>
          <div className="flex flex-wrap items-center gap-5">
            <button className="rounded-sm border-2 border-white px-6 py-3 text-sm font-bold tracking-wide text-white transition-colors hover:bg-white hover:text-ink">
              Sign Up To Shop
            </button>
            <span className="text-sm">
              Already have an account?{" "}
              <a href="#" className="font-semibold underline">Sign In</a>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

function BrandCarousel() {
  const trackRef = useRef(null);
  const scrollCarousel = (dir) => {
    trackRef.current?.scrollBy({ left: dir * 280, behavior: "smooth" });
  };

  const brandImages = {
    "LOI7": "https://d2njprwt6vp5kv.cloudfront.net/vendor/38152/main/101425newvendorbannersloitcollection1760636128058.jpg",
    "WKENDER LOS ANGLES": "https://d2njprwt6vp5kv.cloudfront.net/vendor/12017/main/vendorcollection20211612888757269.jpg",
    "milk & Honey": "https://d2njprwt6vp5kv.cloudfront.net/vendor/7085/main/vendorcollectionandchatprofilemin17098483204771753814266842.jpg",
    "M∧BLE": "https://d2njprwt6vp5kv.cloudfront.net/vendor/17439/main/250722vendorsquarebanner1753214557553.jpg",
    "ZENANA": "https://d2njprwt6vp5kv.cloudfront.net/vendor/816/main/20251015zenana11760641970894.jpg",
    "rareraw": "https://d2njprwt6vp5kv.cloudfront.net/vendor/27257/main/4322296x2961747163799017.jpg",
  };

  const getBrandStyle = (brandName) => {
    switch(brandName) {
      case "LOI7":
        return "font-serif text-lg italic text-slate";
      case "WKENDER LOS ANGLES":
        return "font-sans text-base font-bold uppercase tracking-widest text-ink";
      case "milk & Honey":
        return "font-serif text-lg italic font-light text-slate";
      case "M∧BLE":
        return "font-sans text-xl font-black uppercase tracking-tighter text-black drop-shadow-lg";
      case "ZENANA":
        return "font-serif text-2xl italic font-semibold text-amber-700 tracking-wider";
      case "rareraw":
        return "font-mono text-lg font-bold lowercase text-emerald-900 tracking-expanded";
      default:
        return "font-serif text-lg italic";
    }
  };

  return (
    <section className="mx-auto max-w-6xl px-6 pb-16 pt-[72px] text-center">
      <h2 className="mb-3 font-serif text-3xl sm:text-4xl">
        Must Have Brands Only on <span className="font-bold">FASHIONGO</span>
      </h2>
      <p className="mb-10 text-sm text-slate">Build your store with unique items and stay ahead of the competition</p>

      <div className="flex items-center gap-3">
        <button
          onClick={() => scrollCarousel(-1)}
          aria-label="Scroll left"
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-line bg-white transition-all hover:scale-105 hover:bg-cream"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 6l-6 6 6 6" /></svg>
        </button>

        <div
          ref={trackRef}
          className="flex flex-1 gap-[18px] overflow-x-auto scroll-smooth pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {BRANDS.map((b) => (
            <div
              key={b.name}
              className="w-56 flex-none overflow-hidden rounded border border-line text-left transition-all duration-200 hover:-translate-y-1 hover:shadow-xl"
            >
              <div 
                className="h-[260px] bg-cover bg-center"
                style={{
                  backgroundImage: brandImages[b.name] 
                    ? `url('${brandImages[b.name]}')`
                    : undefined,
                }}
              >
                {!brandImages[b.name] && <div className={`h-full ${b.grad}`} />}
              </div>
              <div className="px-3.5 py-4 text-center">
                <div className={getBrandStyle(b.name)}>{b.name}</div>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={() => scrollCarousel(1)}
          aria-label="Scroll right"
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-line bg-white transition-all hover:scale-105 hover:bg-cream"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 6l6 6-6 6" /></svg>
        </button>
      </div>
    </section>
  );
}

/** Top-of-page marketing block: hero banner + the brand carousel beneath it. */
export default function Hero() {
  return (
    <>
      <HeroBanner />
      <BrandCarousel />
    </>
  );
}
