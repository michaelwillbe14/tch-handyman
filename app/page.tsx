export default function Home() {
  const phone = "9285774808";

  const smsLink = `sms:${phone}?&body=${encodeURIComponent(
    "Hi! I’d like a quote for (type of job): ____. My address is: ____. Best time to come by: ____."
  )}`;

  const services: string[] = [
    "Interior & exterior painting",
    "Drywall repair & texture",
    "Minor plumbing repairs",
    "Minor electrical (fixtures, switches, fans)",
    "Trim, doors & hardware installs",
    "Caulking & sealing",
    "Small carpentry repairs",
    "TV mounting & shelves",
    "Fence & gate fixes",
    "Punch-list / rental turn-overs",
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-zinc-950 via-zinc-950 to-zinc-900 text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-zinc-950/70 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <div className="flex items-center gap-3">
            {/* Logo placeholder */}
            <div className="grid h-10 w-10 place-items-center rounded-full bg-white/10 ring-1 ring-white/15">
              <span className="text-sm font-semibold tracking-wide">TCH</span>
            </div>
            <div className="leading-tight">
              <img
  
  alt="TCH Handyman logo"
  className="h-10 w-10 rounded-full object-cover ring-1 ring-white/15"
/>

              <div className="text-xs text-white/70">
                Tooele &amp; surrounding areas • Licensed &amp; insured
              </div>
            </div>
          </div>

          <a
            href={smsLink}
            className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-zinc-950 hover:bg-white/90"
          >
            Text for a Quote
          </a>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-5 pb-16 pt-14">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/80">
              Local • Reliable • Professional
            </p>

            <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">
              Clean, quality handyman work —
              <span className="text-white/80"> done right the first time.</span>
            </h1>

            <p className="mt-4 text-base leading-relaxed text-white/75">
              Serving Tooele and nearby communities. From painting and drywall to
              minor plumbing and electrical, I handle the small jobs that make a
              big difference.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a
                href={smsLink}
                className="rounded-2xl bg-white px-6 py-3 text-center text-sm font-semibold text-zinc-950 hover:bg-white/90"
              >
                Get a Quote by Text
              </a>
              <a
                href="#services"
                className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 text-center text-sm font-semibold text-white hover:bg-white/10"
              >
                See Services
              </a>
            </div>

            <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {[
                ["Fast response", "Text me your job + photos"],
                ["Fair pricing", "Clear scope and expectations"],
                ["Quality finish", "Clean edges & solid repairs"],
              ].map(([title, sub]) => (
                <div
                  key={title}
                  className="rounded-2xl border border-white/10 bg-white/5 p-4"
                >
                  <div className="text-sm font-semibold">{title}</div>
                  <div className="mt-1 text-xs text-white/70">{sub}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/30">
            <div className="rounded-2xl bg-zinc-950/60 p-5 ring-1 ring-white/10">
              <div className="text-sm font-semibold">Quick quote checklist</div>
              <ul className="mt-3 space-y-2 text-sm text-white/75">
                <li>• What needs done (painting, drywall, etc.)</li>
                <li>• Address / area in Tooele County</li>
                <li>• Photos (if possible)</li>
                <li>• Desired timeline</li>
              </ul>

              <a
                href={smsLink}
                className="mt-5 block rounded-2xl bg-white px-5 py-3 text-center text-sm font-semibold text-zinc-950 hover:bg-white/90"
              >
                Text {phone} for a Quote
              </a>

              <p className="mt-3 text-xs text-white/60">
                Tip: Include photos for the fastest estimate.
              </p>
            </div>

            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="text-sm font-semibold">Service area</div>
                <div className="mt-1 text-xs text-white/70">
                  Tooele • Erda • Stansbury Park • Grantsville &amp; nearby
                </div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="text-sm font-semibold">Availability</div>
                <div className="mt-1 text-xs text-white/70">
                  Weekdays + some weekends
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-6xl px-5 pb-16">
        <h2 className="text-2xl font-bold tracking-tight">Services</h2>
        <p className="mt-2 text-sm text-white/70">
          Common handyman work I take on — ask if you don’t see it listed.
        </p>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div
              key={s}
              className="rounded-2xl border border-white/10 bg-white/5 p-5 hover:bg-white/10"
            >
              <div className="text-sm font-semibold">{s}</div>
              <div className="mt-1 text-xs text-white/65">
                Quality materials, clean finish, and respectful work in your
                home.
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-white/10 bg-zinc-950/60">
        <div className="mx-auto max-w-6xl px-5 py-10">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="text-sm text-white/70">
              © {new Date().getFullYear()} TCH Handyman • Tooele, UT
            </div>
            <a
              href={smsLink}
              className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold hover:bg-white/10"
            >
              Text for a Quote
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
