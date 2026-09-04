import { JOIN_CHECKLIST } from "../data";

export default function JoinCTA() {
  return (
    <section className="bg-cream">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-16 md:grid-cols-2">
        <div className="relative">
          <div className="relative h-[340px] overflow-hidden rounded-sm" style={{ backgroundImage: `url('https://www.fashiongo.net/img/category/img_join_fg_today.png')`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
          </div>
        </div>

        <div>
          <h2 className="mb-5 font-serif text-3xl sm:text-4xl">
            Join FASHIONGO <span className="italic">Today</span>
          </h2>
          <ul className="mb-7 flex flex-col gap-3">
            {JOIN_CHECKLIST.map((item) => (
              <li key={item} className="flex gap-2.5 text-[14.5px]">
                <span className="text-teal">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap items-center gap-5">
            <button className="rounded-sm border border-ink bg-white px-6 py-3 text-sm font-bold transition-colors hover:bg-ink hover:text-white">
              Sign Up for Free
            </button>
            <span className="text-sm">
              Already have an account? <a href="#" className="font-semibold underline">Sign in</a>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
