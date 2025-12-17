type GalleryImage = {
  src: string;
  label?: string;
};

type GalleryProps = {
  title: string;
  subtitle?: string;
  images: GalleryImage[];
};

function Gallery({ title, subtitle, images }: GalleryProps) {
  return (
    <section className="bg-blue-50">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <h3 className="text-3xl font-bold text-slate-900 text-center mb-3">
          {title}
        </h3>

        {subtitle ? (
          <p className="text-slate-600 text-center mb-10">{subtitle}</p>
        ) : null}

        <div className="overflow-x-auto">
          <div className="flex gap-4 snap-x snap-mandatory scroll-smooth pb-2">
            {images.map((img) => (
              <a
                key={img.src}
                href={img.src}
                target="_blank"
                rel="noreferrer"
                className="snap-start min-w-[85%] sm:min-w-[420px] md:min-w-[520px]"
                title="Click to open full size"
              >
                <div className="bg-white border border-blue-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition">
                  <div className="relative">
                    <img
                      src={img.src}
                      alt={img.label || "Project photo"}
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
                </div>
              </a>
            ))}
          </div>
        </div>

        <p className="text-slate-500 text-center text-sm mt-6">
          Swipe left/right to see all photos.
        </p>
      </div>
    </section>
  );
}

export default function Home() {
  const services: string[] = [
    "Interior & Exterior Painting",
    "Drywall Repair & Installation",
    "Flooring Installation (Vinyl Plank)",
    "Minor Plumbing",
    "Minor Electrical",
    "Fixture & Appliance Installation",
    "General Home Repairs",
  ];

  const flooringImages: GalleryImage[] = [
    { src: "/before-after/flooring-before-1.jpeg", label: "Before 1" },
    { src: "/before-after/flooring-before-2.jpeg", label: "Before 2" },
    { src: "/before-after/flooring-after-1.jpeg", label: "After 1" },
    { src: "/before-after/flooring-after-2.jpeg", label: "After 2" },
  ];

  const paintingImages: GalleryImage[] = [
    { src: "/before-after/painting-before-1.jpeg", label: "Before 1" },
    { src: "/before-after/painting-before-2.jpeg", label: "Before 2" },
    { src: "/before-after/painting-after-1.jpeg", label: "After 1" },
    { src: "/before-after/painting-after-2.jpeg", label: "After 2" },
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
        <h3 className="text-3xl font-bold text-center mb-12">Services Offered</h3>

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

      {/* GALLERIES */}
      <Gallery
        title="Flooring Installation"
        subtitle="Swipe through before & after photos."
        images={flooringImages}
      />

      <Gallery
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
