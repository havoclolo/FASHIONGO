const LINK_COLUMNS = [
  { title: "Company", items: ["About Wholesale", "Sell On FASHIONGO", "Newsroom", "Careers"] },
  { title: "Support", items: ["Contact Us", "Help Center", "Blog", "Show Info"] },
  { title: "Services", items: ["Dynamic Net Terms", "FG Free Shipping", "Rewards Program", "Style Match+", "FASHIONGO WEEK", "Buyer Referral Affiliate Program"] },
];

const OUTLINE_BTN =
  "rounded-sm border-2 border-ink px-4 py-2 text-xs font-bold transition-colors hover:bg-ink hover:text-white";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="block w-full bg-footer">
      <div className="mx-auto w-full max-w-6xl px-6 pb-6 pt-14">
        <div className="mb-10 grid gap-10 sm:grid-cols-2 md:grid-cols-5">
          <div>
            <span className="font-serif text-xl font-bold">FASHIONGO</span>
            <div className="mt-4 text-[13.5px]">
              <div className="mb-0.5 font-bold">Customer Service</div>
              <div className="text-[#6E665A]">info@fashiongo.net</div>
            </div>
            <div className="mt-3.5 text-[13.5px]">
              <div className="mb-0.5 font-bold">Tech Support</div>
              <div className="text-[#6E665A]">techsupport@fashiongo.net</div>
            </div>
            <div className="mt-4 flex gap-3">
              <button className={OUTLINE_BTN}>Sign Up to Shop</button>
              <button className={OUTLINE_BTN}>Sign Up to Sell</button>
            </div>
          </div>

          {LINK_COLUMNS.map((col) => (
            <div key={col.title}>
              <div className="mb-3.5 text-[13.5px] font-bold">{col.title}</div>
              <div className="flex flex-col gap-2.5">
                {col.items.map((it) => (
                  <a key={it} href="#" className="text-[13px] text-[#5B5347]">{it}</a>
                ))}
              </div>
            </div>
          ))}

          <div>
            <div className="mb-3.5 text-[13.5px] font-bold">Connect With Us</div>
            <div className="mb-[18px] flex gap-3">
              {["ig", "fb", "yt", "pin"].map((k) => (
                <div key={k} className="flex h-8 w-8 items-center justify-center rounded-full border border-ink">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <circle cx="12" cy="12" r="8" />
                  </svg>
                </div>
              ))}
            </div>
            <button className={`${OUTLINE_BTN} mb-5`}>Subscribe to Newsletter</button>
            <div className="mb-2.5 text-[13.5px] font-bold">Download Our App</div>
            <div className="flex gap-2">
              {["App Store", "Google Play"].map((s) => (
                <div key={s} className="rounded border-2 border-ink px-2.5 py-1.5 text-center text-[10.5px] font-bold">
                  {s}
                  <div className="text-[9.5px] font-medium opacity-70">Wholesale</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-black/15 pt-5 text-[11.5px] text-[#6E665A]">
          <span>© 2002–{year} FASHIONGO.NET ALL RIGHTS RESERVED</span>
          <div className="flex flex-wrap gap-5">
            <a href="#">Terms of Use</a>
            <a href="#">Buyer Services Agreement</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Do Not Sell My Personal Information</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
