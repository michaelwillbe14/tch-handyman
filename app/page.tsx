export default function Home() {
  return (
    <div className="min-h-screen bg-white text-slate-800">
      {/* HEADER */}
      <header className="bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto px-6 py-6 flex justify-between items-center">
          <h1 className="text-2xl font-bold tracking-wide">
            TC Handyman
          </h1>

          <a
            href="sms:9285774808?body=Hi%20Michael%2C%20I%20would%20like%20a%20free%20quote."
            className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-xl font-semibold transition"
          >
            Text for a Free Quote
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
            className="inline-block bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-2xl text-lg font-semibold transition"
          >
            Get a Free Quote
          </a>
        </div>
      </section>

      {/* SERVICES */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h3 className="text-3xl font-bold text-slate-900 text-center mb-12">
          Services Offered
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            "Interior & Exterior Painting",
            "Drywall Repair & Installation",
            "Minor Plumbing",
            "Minor Electrical",
            "Fixture & Appliance Installation",
            "General Home Repairs",
          ].map((service) => (
            <div
              key={service}
              className="bg-white border border-blue-100 rounded-2xl shadow-sm p-6 text-center hover:shadow-md transition"
            >
              <h4 className="text-lg font-semibold text-slate-800">
                {service}
              </h4>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto px-6 py-16 text-center">
          <h3 className="text-3xl font-bold mb-4">
            Need Help With a Project?
          </h3>

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
        <div className="max-w-6xl mx-auto px-6 py-6 text-center text-slate-600">
          © {new Date().getFullYear()} TC Handyman · Tooele, UT
        </div>
      </footer>
    </div>
  );
}
