import React, { useState } from "react";
import { JEWELRY_FAQS } from "../data";

export default function FAQSection() {
  const [open, setOpen] = useState(null);
  const FAQS = JEWELRY_FAQS;

  return (
    <section className="mx-auto max-w-6xl px-6 py-14">
      <h2 className="mb-6 font-serif text-3xl">Frequently Asked Questions</h2>
      <div className="border-t border-line">
        {FAQS.map((f, i) => {
          const isOpen = open === i;
          return (
            <div key={f.question} className="border-b border-line">
              <button
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-4 py-5 text-left"
              >
                <span className="text-[15px] font-semibold">{f.question}</span>
                <svg
                  width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"
                  className={`shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </button>
              {isOpen && <p className="pb-5 text-sm leading-relaxed text-slate">{f.answer}</p>}
            </div>
          );
        })}
      </div>
    </section>
  );
}
