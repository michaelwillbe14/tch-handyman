export default function Home() {
  const phone = "9285774808";

  const smsBody =
    "Hi! I’d like a quote.\n" +
    "Job: ____\n" +
    "Address (Tooele area): ____\n" +
    "Im available at: ____\n" +
    "Photos (optional): ____";

  // Works best on phones; domain users will tap to open SMS.
  const smsLink = `sms:${phone}?body=${encodeURIComponent(smsBody)}`;

  // Keep this as a placeholder until you have a real Google review link.
  // When ready, replace "#" with your Google “Leave a review” link.
  const reviewLink = "#";

  const services: { title: string; desc: string }[] = [
    {
      title: "Interior painting",
      desc: "Walls, ceilings, trim, doors, and touch-ups. Clean cut lines, proper prep, and a tidy finish.",
    },
    {
      title: "Exterior painting",
      desc: "Siding, trim, fascia, doors, and repairs before paint. Scrape/prime where needed for a longer-lasting coat.",
    },
    {
      title: "Drywall repair & texture",
      desc: "Holes, cracks, patches, and water-damage fixes. Texture match (as close as possible) and ready-to-paint results.",
    },
    {
      title: "Minor plumbing repairs",
      desc: "Faucets, shutoff valves, toilet fixes, drain traps, and small leaks. Quick repairs without the big plumbing bill.",
    },
    {
      title: "Minor electrical",
      desc: "Replace switches/outlets, light fixtures, ceiling fans, and troubleshooting simple issues (no major rewires).",
    },
    {
      title: "Trim, doors & hardware",
      desc: "Install/repair trim, hang doors, replace locks/handles, and fix sticking or sagging doors.",
    },
    {
      title: "Caulking & sealing",
      desc: "Tubs, showers, sinks, windows, and trim gaps. Cleaner look + helps prevent moisture and drafts.",
    },
    {
      title: "Small carpentry repairs",
      desc: "Rotted wood replacement, minor framing, baseboards, fence pickets, and general home fixes.",
    },
    {
      title: "TV mounting & shelves",
      desc: "Mount TVs safely into studs, install shelves/curtains/blinds, and keep everything level and secure.",
    },
    {
      title: "Punch-list / rental turn-overs",
      desc: "Knock out the small stuff fast: patch/paint, hardware, fixtures, caulk, and quick repairs before move-in.",
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-zinc-950 via-zinc-950 to-zinc-900 text-white">
      {/* Top bar */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-zinc-950/70 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <div className="flex items-center gap-3">
            <img
              src="/images/logo.png"
              alt="TCH Handyman logo"
              className="h-10 w-10 rounded-full object-cover ring-1 ring-white/15"
            />
            <div className="leading-tight">
              <div className="text-sm font-semibold tracking-wide">TC Handyman</div>
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

      {/* Hero */}
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
              Serving Tooele and nearby communities. Painting, drywall, minor plumbing and
              electrical, and the “small jobs” that make a big difference.
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
                ["Fast response", "Text the job + photos"],
                ["Clear pricing", "Scope first, no surprises"],
                ["Clean finish", "Respectful work & cleanup"],
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

          {/* Right card */}
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/30">
            <div className="rounded-2xl bg-zinc-950/60 p-5 ring-1 ring-white/10">
              <div className="text-sm font-semibold">Quick quote checklist</div>
              <ul className="mt-3 space-y-2 text-sm text-white/75">
                <li>• What needs done (painting, drywall, etc.)</li>
                <li>• Address / area in Tooele County</li>
                <li>• Photos (if possible)</li>
                <li>• Preferred times for me to come by</li>
              </ul>

              <a
                href={smsLink}
                className="mt-5 block rounded-2xl bg-white px-5 py-3 text-center text-sm font-semibold text-zinc-950 hover:bg-white/90"
              >
                Text Michael for a Free Quote
              </a>

              <p className="mt-3 text-xs text-white/60">
                Tip: Photos help me estimate faster.
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

      {/* Services */}
      <section id="services" className="mx-auto max-w-6xl px-5 pb-16">
        <h2 className="text-2xl font-bold tracking-tight">Services</h2>
        <p className="mt-2 text-sm text-white/70">
          Here’s the type of work I do most often. If you don’t see it listed, text me — I’ll tell you if it’s a good fit.
        </p>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div
              key={s.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-5 hover:bg-white/10"
            >
              <div className="text-sm font-semibold">{s.title}</div>
              <div className="mt-2 text-xs leading-relaxed text-white/70">
                {s.desc}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Trust */}
      <section id="trust" className="mx-auto max-w-6xl px-5 pb-16">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">Trust &amp; peace of mind</h2>
            <p className="mt-2 text-sm text-white/70">
              Clear communication, clean work, and a professional finish — every time.
            </p>
          </div>

          <div className="flex flex-col gap-2 sm:flex-row">
            <a
              href={reviewLink}
              className="rounded-2xl border border-white/15 bg-white/5 px-5 py-3 text-center text-sm font-semibold text-white hover:bg-white/10"
            >
              Leave a Review
            </a>
            <a
              href={smsLink}
              className="rounded-2xl bg-white px-5 py-3 text-center text-sm font-semibold text-zinc-950 hover:bg-white/90"
            >
              Get a Quote by Text
            </a>
          </div>
        </div>

        <div className="mt-6 grid gap-4 lg:grid-cols-3">
          {/* Badges */}
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <div className="text-sm font-semibold">What you can expect</div>
            <div className="mt-3 flex flex-wrap gap-2">
              {[
                "Licensed & insured",
                "Local to Tooele County",
                "Respectful in your home",
                "Clean-up included",
                "Clear scope first",
              ].map((b) => (
                <span
                  key={b}
                  className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/80"
                >
                  {b}
                </span>
              ))}
            </div>
            <p className="mt-4 text-xs text-white/60">
              Want proof of insurance? Just ask — happy to provide.
            </p>
          </div>

          {/* Process */}
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <div className="text-sm font-semibold">Simple process</div>
            <ol className="mt-3 space-y-2 text-sm text-white/75">
              <li>1) Text me the job + photos</li>
              <li>2) I confirm scope &amp; price range</li>
              <li>3) We schedule a time that works</li>
              <li>4) Job done — clean finish &amp; cleanup</li>
            </ol>
            <p className="mt-4 text-xs text-white/60">
              Fastest quotes happen when you include photos.
            </p>
          </div>

          {/* Sample Reviews (clearly labeled) */}
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <div className="text-sm font-semibold">
              Sample reviews (placeholders — replace with real ones)
            </div>

            <div className="mt-3 space-y-3">
              {[
                {
                  stars: "★★★★★",
                  text: "Quick response, solid work, and everything was cleaned up after. Would hire again.",
                  name: "Sample review",
                },
                {
                  stars: "★★★★★",
                  text: "Drywall patch blended in great and the paint matched well. Professional and respectful.",
                  name: "Sample review",
                },
                {
                  stars: "★★★★★",
                  text: "Fair pricing and clear communication. Got the small repairs done fast.",
                  name: "Sample review",
                },
              ].map((r, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-white/10 bg-zinc-950/40 p-4"
                >
                  <div className="text-sm font-semibold">{r.stars}</div>
                  <p className="mt-2 text-sm text-white/75">“{r.text}”</p>
                  <div className="mt-2 text-xs text-white/60">— {r.name}</div>
                </div>
              ))}
            </div>

            <p className="mt-4 text-xs text-white/60">
              These are sample placeholders. Swap them with real customer reviews when you have them.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-zinc-950/60">
        <div className="mx-auto max-w-6xl px-5 py-10">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="text-sm text-white/70">
              © {new Date().getFullYear()} TC Handyman • Tooele, UT
            </div>

            <div className="flex flex-col gap-2 sm:flex-row">
              <a
                href={reviewLink}
                className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold hover:bg-white/10"
              >
                Leave a Review
              </a>
              <a
                href={smsLink}
                className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-zinc-950 hover:bg-white/90"
              >
                Text for a Quote
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
