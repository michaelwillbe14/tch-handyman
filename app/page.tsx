"use client";

import { useRef } from "react";

function Slider({ title, subtitle, images }) {
  const scrollerRef = useRef(null);

  const scrollByCard = (dir) => {
    const el = scrollerRef.current;
    if (!el) return;

    // Scroll about one card width
    const card = el.querySelector("[data-card='1']");
    const amount = card ? card.getBoundingClientRect().width + 16 : 360;
    el.scrollBy({ left: dir * amount, behavior: "smooth" });
  };

  return (
    <section className="bg-blue-50">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="flex flex-col gap-3 text-center mb-10">
          <h3 className="text-3xl font-bold text-slate-900">{title}</h3>
          {subtitle ? <p className="text-slate-600">{subtitle}</p> : null}
          <p className="text-slate-500 text-sm">
            Swipe left/right on your phone, or use the arrows.
          </p>
        </div>

        <div className="flex items-center justify-between gap-3 mb-4">
          <button
            onClick={() => scrollByCard(-1)}
            className="bg-slate-900 hover:bg-slate-800 text-white px-4 py-2 rounded-xl font-semibold transition"
            type="button"
          >
            ←
          </button>

          <button
            onClick={() => scrollByCard(1)}
            className="bg-slate-900 hover:bg-slate-800 text-white px-4 py-2 rounded-xl font-semibold transition"
            type="button"
          >
            →
          </button>
        </div>

        <div
          ref={scrollerRef}
          className="flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-2"
        >
          {images.map((img, idx) => (
            <a
              key={img.src}
              href={img.src}
              target="_blank"
              rel="noreferrer"
              className="min-w-[85%] sm:min-w-[420px] md:min-w-[520px] snap-start"
              data-card={idx === 0 ? "1" : undefined}
              title="Click to open full size"
            >
              <div className="bg-white border border-blue-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition">
                <div className="relative">
                  <img
                    src={img.src}
                    alt={img.alt || img.label || "Project photo"}
                    className="w-full h-80 object-cover"
                    loading="lazy"
                  />
                  {img.label ? (
                    <span
                      className={`absolute top-4 left-4 px-4 py-1 rounded-full text-sm font-semibold text-white ${
                        img.label.toLowerCase().includes("before")
                          ? "bg-slate-900"
                          : "bg-blue-600"
                      }`}
                    >
                      {img.label}
                    </span>
                  ) : null}
                </div>

                {img.caption ? (
                  <div className="p-5">
                    <p className="text-slate-700">{img.caption}</p>
                  </div>
                ) : null}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const services = [
    "Interior & Exterior Painting",
    "Drywall Repair & Installation",
    "Flooring Installation (Vinyl Plank)",
    "Minor Plumbing",
    "Minor Electrical",
    "Fixture & Appliance Installation",
    "General Home Repairs",
  ];

  const flooringImages = [
    {
      src: "/before-after/flooring-before-1.jpeg",
      label: "Before 1",
      caption: "Old concrete surface before install.",
    },
    {
      src: "/before-after/flooring-before-2.jpeg",
      label: "Before 2",
      caption: "Another angle of the same area.",
    },
    {
      src: "/before-after/flooring-after-1.jpeg",
      label: "After 1",
      caption: "New vinyl plank flooring installed.",
    },
    {
      src: "/before-after/flooring-after-2.jpeg",
      label: "After 2",
      caption: "Finished space — clean and modern.",
    },
  ];

  const paintingImages = [
    {
      src: "/before-after/painting-before-1.jpeg",
      label: "Before 1",
      caption: "Prep & masking before paint.",
    },
    {
      src: "/before-after/painting-before-2.jpeg",
      label: "Before 2",
      caption: "Room before the new color.",
    },
    {
      src: "/before-after/painting-after-1.jpeg",
      label: "After 1",
      caption: "Finished paint — crisp lines and smooth finish.",
    },
    {
      src: "/before-after/painting-after-2.jpeg",
      label: "After 2",
      caption: "Second angle of the finished room.",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-800">
      {/* HEADER */}
      <header className="bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <h1 className="text-2xl font-bold">TC Handyman</h1>

          <a
            href="sms:9285774808?body=Hi%20Michael%2C%20I%20would%20like%20a%20free%20quote."
            className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-xl font-semibold transition text-center"
          >
            Text Michael for a Free Quote
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="bg-blue-50">
        <div className="max-w-6xl mx-auto px-6 py-20 text-center">
          <h2 className="text-4xl font-extrabold text-slate-900 mb-6">
            Reliable Handyman Services You Can Trust
          </h2>

          <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-8">
            Serving Tooele and surrounding areas. Licensed, insured, and committed
            to quality work done right the first time.
          </p>

          <a
            href="sms:9285774808?body=Hi%20Michael%2C%20I%20would%20like%20a%20free%20quote."
            className="inline-block bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-2xl font-semibold transition"
          >
            Get a Free Quote
          </a>
        </div>
      </section>

      {/* SERVICES */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h3 className="text-3xl font-bold text-center mb-12">
          Services Offered
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service}
              className="bg-white border border-blue-100 rounded-2xl p-6 text-center shadow-sm"
            >
              <h4 className="font-semibold">{service}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* FLOORING SLIDER */}
      <Slider
        title="Flooring Installation"
        subtitle="Swipe through before & after photos."
        images={flooringImages}
      />

      {/* PAINTING SLIDER */}
      <Slider
        title="Interior Painting"
        subtitle="Swipe through before & after photos."
        images={paintingImages}
      />

      {/* CTA */}
      <section className="bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto px-6 py-16 text-center">
          <h3 className="text-3xl font-bold mb-4">Need Help With a Project?</h3>

          <p className="text-blue-200 mb-8">
            Text Michael today for a fast and free quote.
          </p>

          <a
            href="sms:9285774808?body=Hi%20Michael%2C%20I%20would%20like%20a%20free%20quote."
            className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-2xl font-semibold transition"
          >
            Text Now
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-blue-50">
        <div className="text-center py-6 text-slate-600">
          © {new Date().getFullYear()} TC Handyman · Tooele, UT
        </div>
      </footer>
    </div>
  );
}
