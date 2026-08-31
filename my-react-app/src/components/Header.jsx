import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { SEARCH_HINTS } from "../data";

const NAV_LINK =
  "relative pb-1 after:absolute after:left-0 after:right-0 after:bottom-0 after:h-0.5 after:bg-current after:scale-x-0 after:origin-left after:transition-transform after:duration-150 hover:after:scale-x-100";

export default function Header() {
  const [hint, setHint] = useState(0);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  useEffect(() => {
    const id = setInterval(() => setHint((h) => (h + 1) % SEARCH_HINTS.length), 2600);
    return () => clearInterval(id);
  }, []);

  const navItems = [
    { label: "New In", to: "#" },
    { label: "Bestsellers", to: "#" },
    { label: "Women's Apparel", to: "#" },
    { label: "Accessories", to: "/accessories" },
    { label: "Jewelry", to: "/jewelry" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-white">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-6 px-6 py-4">
        <Link to="/" className="flex shrink-0 items-baseline gap-2 hover:opacity-80 transition-opacity">
          <span className="font-serif text-xl font-bold tracking-wide">FASHIONGO</span>
          <span className="text-[11px] font-semibold tracking-[0.18em] text-muted">WHOLESALE</span>
        </Link>

        <div className="hidden md:flex flex-1 max-w-xl">
          <div className="flex w-full items-center gap-2.5 rounded-sm border-[1.5px] border-ink px-3.5 py-2">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-ink">
              <circle cx="11" cy="11" r="7" /><path d="M21 21l-4-4" />
            </svg>
            <span key={hint} className="animate-fade-in text-sm text-muted">{SEARCH_HINTS[hint]}</span>
            <span className="flex-1" />
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="text-muted">
              <path d="M4 8h3l2-3h6l2 3h3v11H4z" /><circle cx="12" cy="13" r="3.2" />
            </svg>
          </div>
        </div>

        <div className="hidden md:flex shrink-0 items-center gap-5 text-[13.5px] font-bold tracking-wide">
          <a href="#" className={NAV_LINK}>REGISTER</a>
          <button className="rounded-sm border border-ink bg-ink px-5 py-2.5 text-white transition-colors hover:bg-charcoal">
            SIGN IN
          </button>
        </div>

        <button
          onClick={() => setMobileNavOpen((v) => !v)}
          className="md:hidden ml-auto rounded-sm border border-ink px-2.5 py-1.5 text-xs font-bold"
        >
          {mobileNavOpen ? "CLOSE" : "MENU"}
        </button>
      </div>

      <nav className="hidden md:flex mx-auto max-w-6xl items-center gap-7 px-6 pb-3.5 text-[13.5px] font-semibold">
        <span className={`flex items-center gap-1 ${NAV_LINK}`}>
          Shop
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M6 9l6 6 6-6" /></svg>
        </span>
        {navItems.map((item) =>
          item.to === "#" ? (
            <a key={item.label} href="#" className={NAV_LINK}>{item.label}</a>
          ) : (
            <Link key={item.label} to={item.to} className={NAV_LINK}>{item.label}</Link>
          )
        )}
        <a href="#" className={`${NAV_LINK} text-pink`}>Beige Botany</a>
        <a href="#" className={`${NAV_LINK} text-orange`}>Top Fall Picks</a>
        <a href="#" className={NAV_LINK}>Vendors</a>
        <a href="#" className={`${NAV_LINK} font-serif italic`}>The Edit</a>
      </nav>

      {mobileNavOpen && (
        <div className="md:hidden flex flex-col gap-3 border-t border-line px-6 pb-5">
          {[
            { label: "Shop", to: "#" },
            ...navItems,
            { label: "Beige Botany", to: "#" },
            { label: "Top Fall Picks", to: "#" },
            { label: "Vendors", to: "#" },
            { label: "The Edit", to: "#" },
          ].map((item) =>
            item.to === "#" ? (
              <a key={item.label} href="#" className="pt-2.5 text-sm font-semibold">{item.label}</a>
            ) : (
              <Link key={item.label} to={item.to} className="pt-2.5 text-sm font-semibold" onClick={() => setMobileNavOpen(false)}>
                {item.label}
              </Link>
            )
          )}
          <button className="mt-1 self-start rounded-sm border border-ink bg-ink px-5 py-2.5 text-sm font-bold text-white">
            SIGN IN
          </button>
        </div>
      )}
    </header>
  );
}
