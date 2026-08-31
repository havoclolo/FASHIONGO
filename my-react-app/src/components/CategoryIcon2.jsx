import React from "react";

export default function CategoryIcon({ type, className = "text-white/85" }) {
  const s = { stroke: "currentColor", fill: "none", strokeWidth: 1.6, strokeLinecap: "round", strokeLinejoin: "round" };
  const wrap = (children, size = 42) => (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className}>{children}</svg>
  );
  switch (type) {
    case "bag":
      return wrap(<><path {...s} d="M5 9h14l-1 11H6L5 9z" /><path {...s} d="M9 9V6a3 3 0 016 0v3" /></>);
    case "belt":
      return wrap(<><rect x="3" y="10" width="18" height="4" rx="1" {...s} /><circle cx="12" cy="12" r="1.6" {...s} /></>);
    case "gloves":
      return wrap(<><path {...s} d="M7 21V11a2 2 0 014 0v3" /><path {...s} d="M11 14V9a2 2 0 014 0v5" /><path {...s} d="M15 14v-3a2 2 0 014 0v6a4 4 0 01-4 4H9" /></>);
    case "hair":
      return wrap(<><circle cx="12" cy="12" r="7" {...s} /><path {...s} d="M9 12h6M12 9v6" /></>);
    case "hat":
      return wrap(<><path {...s} d="M4 15c0-4 4-7 8-7s8 3 8 7" /><rect x="2" y="15" width="20" height="2.5" rx="1.2" {...s} /></>);
    case "keychain":
      return wrap(<><circle cx="9" cy="7" r="3" {...s} /><path {...s} d="M11.5 9.5L20 18M17 15l3 3M14 18l3 3" /></>);
    case "patch":
      return wrap(<><rect x="4" y="4" width="16" height="16" rx="3" {...s} /><path {...s} d="M9 12l2 2 4-4" /></>);
    case "scarf":
      return wrap(<><path {...s} d="M4 5c3 3 13 3 16 0" /><path {...s} d="M8 5v13l3-2 3 2 2-2" /></>);
    case "crown":
      return wrap(<path {...s} d="M4 18h16l-1.5-9-4 4L12 6l-2.5 7-4-4L4 18z" />);
    case "wings":
      return wrap(<><path {...s} d="M12 6c-3 0-6 3-6 7 2 0 4-1 6-3" /><path {...s} d="M12 6c3 0 6 3 6 7-2 0-4-1-6-3" /></>);
    case "toy":
      return wrap(<rect x="5" y="5" width="14" height="14" rx="3" {...s} />);
    case "socks":
      return wrap(<path {...s} d="M9 3v9l-4 5a3 3 0 003 4h6a3 3 0 003-3V3H9z" />);
    case "bracelet":
      return wrap(<><ellipse cx="12" cy="12" rx="7" ry="5" {...s} /><path {...s} d="M9 8v8M15 8v8" /></>);
    case "earring":
      return wrap(<><circle cx="12" cy="6" r="2" {...s} /><path {...s} d="M12 8v4" /><circle cx="12" cy="16" r="4" {...s} /></>);
    case "necklace":
      return wrap(<><path {...s} d="M5 4c0 6 4 10 7 10s7-4 7-10" /><circle cx="12" cy="16" r="2.4" {...s} /></>);
    case "ring":
      return wrap(<><circle cx="12" cy="14" r="6" {...s} /><path {...s} d="M9 8l3-4 3 4" /></>);
    case "brooch":
      return wrap(<><circle cx="12" cy="11" r="5" {...s} /><path {...s} d="M9 15l-2 6M15 15l2 6" /></>);
    case "bodyjewelry":
      return wrap(<><path {...s} d="M4 18c3-6 13-6 16 0" /><circle cx="8" cy="15" r="1.4" {...s} /><circle cx="16" cy="15" r="1.4" {...s} /></>);
    case "jewelryset":
      return wrap(<><circle cx="8" cy="8" r="3" {...s} /><ellipse cx="16" cy="16" rx="4" ry="3" {...s} /></>);
    case "bracelet":
      return wrap(<><circle cx="12" cy="12" r="7" {...s} /><circle cx="12" cy="12" r="2" {...s} /></>);
    case "necklace":
      return wrap(<><path {...s} d="M5 4c0 5 3 9 7 9s7-4 7-9" /><circle cx="12" cy="16" r="2.4" {...s} /></>);
    case "earring":
      return wrap(<><circle cx="12" cy="6" r="2" {...s} /><path {...s} d="M12 8v4" /><circle cx="12" cy="16" r="3.5" {...s} /></>);
    case "ring":
      return wrap(<><circle cx="12" cy="14" r="6" {...s} /><path {...s} d="M9 8l3-4 3 4" /></>);
    case "brooch":
      return wrap(<><circle cx="12" cy="12" r="5" {...s} /><path {...s} d="M12 3v3M12 18v3M3 12h3M18 12h3" /></>);
    case "jewelryset":
      return wrap(<><circle cx="8" cy="8" r="3" {...s} /><path {...s} d="M15 5l4 4-4 4M15 15l4 4-4 4" /></>);
    case "bodyjewelry":
      return wrap(<><path {...s} d="M6 4v6a6 6 0 0012 0V4" /><circle cx="12" cy="19" r="2" {...s} /></>);
    default:
      return wrap(<circle cx="12" cy="12" r="6" {...s} />);
  }
}
