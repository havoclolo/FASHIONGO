import React from "react";
import { CATEGORIES } from "../data";

/** Simple original line icons used on the photo tiles below. */
function CategoryIcon({ type, className = "text-white/90" }) {
  const s = { stroke: "currentColor", fill: "none", strokeWidth: 1.6, strokeLinecap: "round", strokeLinejoin: "round" };
  const wrap = (children) => (
    <svg width="46" height="46" viewBox="0 0 24 24" className={className}>{children}</svg>
  );
  switch (type) {
    case "apparel":
      return wrap(<path {...s} d="M9 3l3 2 3-2 3 3-2 2v11H8V8L6 6l3-3z" />);
    case "shoes":
      return wrap(<path {...s} d="M3 17c0-2 1-3 3-4l4-2 3 1 2-1 3 2c2 1 3 2 3 4v1H3v-1z" />);
    case "accessories":
      return wrap(<><circle cx="8.5" cy="12" r="4" {...s} /><circle cx="15.5" cy="12" r="4" {...s} /><path {...s} d="M12.5 12h0" /></>);
    case "kids":
      return wrap(<><circle cx="12" cy="7" r="2.6" {...s} /><path {...s} d="M6 20c0-4 2.5-6 6-6s6 2 6 6" /></>);
    case "jewelry":
      return wrap(<><circle cx="12" cy="15" r="5" {...s} /><path {...s} d="M9 10l3-6 3 6" /></>);
    case "bags":
      return wrap(<><path {...s} d="M5 9h14l-1 11H6L5 9z" /><path {...s} d="M9 9V6a3 3 0 016 0v3" /></>);
    case "beauty":
      return wrap(<><path {...s} d="M10 2h4v3h-4z" /><path {...s} d="M9 5h6l1 4-1 1v9a1 1 0 01-1 1H10a1 1 0 01-1-1v-9l-1-1 1-4z" /></>);
    case "men":
      return wrap(<path {...s} d="M8 4l4 2 4-2 3 3-2 2v11H7V9L5 7l3-3z" />);
    case "home":
      return wrap(<><path {...s} d="M4 11l8-6 8 6" /><path {...s} d="M6 10v9h12v-9" /></>);
    case "lifestyle":
      return wrap(<><circle cx="12" cy="12" r="7" {...s} /><path {...s} d="M12 8v4l3 2" /></>);
    case "supplies":
      return wrap(<><path {...s} d="M3 8l9-4 9 4-9 4-9-4z" /><path {...s} d="M3 8v8l9 4 9-4V8" /><path {...s} d="M12 12v8" /></>);
    default:
      return wrap(<circle cx="12" cy="12" r="6" {...s} />);
  }
}

/** Reusable photographic-style placeholder tile. */
function PhotoTile({ grad, icon, image, heightClass = "h-[180px]", iconClassName }) {
  if (image) {
    return (
      <div 
        className={`relative overflow-hidden rounded ${heightClass}`}
        style={{ backgroundImage: `url('${image}')`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      />
    );
  }
  
  return (
    <div className={`relative overflow-hidden rounded ${heightClass} ${grad}`}>
      <div className="absolute inset-0 flex items-center justify-center">
        <CategoryIcon type={icon} className={iconClassName} />
      </div>
    </div>
  );
}

function CategoryGrid() {
  return (
    <section className="bg-sage">
      <div className="mx-auto max-w-6xl px-6 pb-[76px] pt-[70px]">
        <h2 className="mb-11 text-center font-serif text-3xl text-white sm:text-4xl">
          Find Everything for Your Store
        </h2>
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 md:grid-cols-5">
          {CATEGORIES.map((c) => (
            <div key={c.name} className="group text-center transition-transform duration-200 hover:-translate-y-1">
              <div className="group-hover:shadow-xl rounded-sm transition-shadow duration-200">
                <PhotoTile grad={c.grad} icon={c.icon} image={c.image} />
              </div>
              <div className="mt-3 text-sm font-semibold text-white">{c.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}



export default function Marketplace() {
  return <CategoryGrid />;
}
