export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <header className="bg-blue-900 text-white">
        <div className="max-w-6xl mx-auto px-6 py-6 flex justify-between items-center">
          <h1 className="text-2xl font-bold">TC Handyman</h1>
          <a
            href="sms:9285774808?body=Hello%20Michael%2C%20my%20name%20is%20_____.%20I%20would%20like%20you%20to%20come%20_____%20(date%2Ftime).%0AI%20need%20_____%20(work%20needs%20done).%20I%20can%20send%20pictures."
            className="hidden sm:inline-block bg-blue-600 hover:bg-blue-700 transition px-5 py-3 rounded-lg font-semibold"
          >
            Text for a Free Quote
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-blue-50">
        <div className="max-w-6xl mx-auto px-6 py-20 text-center">
          <h2 className="text-4xl font-extrabold text-blue-900 mb-6">
            Reliable Handyman Services You Can Trust
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-10">
            Serving Tooele and surrounding areas. Licensed & insured. Quality
            work for homes and small businesses.
          </p>

          <a
            href="sms:9285774808?body=Hello%20Michael%2C%20my%20name%20is%20_____.%20I%20would%20like%20you%20to%20come%20_____%20(date%2Ftime).%0AI%20need%20_____%20(work%20needs%20done).%20I%20can%20send%20pictures."
            className="inline-block bg-blue-700 hover:bg-blue-800 transition text-white text-xl font-semibold px-8 py-4 rounded-xl shadow-lg"
          >
            Text for a Free Quote
          </a>

          <p className="mt-4 text-sm text-gray-600">
            You can attach photos when the text opens
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h3 className="text-3xl font-bold text-center text-blue-900 mb-12">
          Services Offered
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {[
            "Interior & Exterior Painting",
            "Drywall Repair",
            "Minor Plumbing",
            "Minor Electrical",
            "Flooring Repairs",
            "General Home Repairs",
          ].map((service) => (
            <div
              key={service}
              className="border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition"
            >
              <h4 className="text-lg font-semibold text-blue-800">
                {service}
              </h4>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-900 text-white">
        <div className="max-w-6xl mx-auto px-6 py-16 text-center">
          <h3 className="text-3xl font-bold mb-6">
            Need Work Done? Let’s Get Started
          </h3>
          <p className="mb-8 text-blue-100">
            Text me with your name, date/time, and what you need done.
          </p>

          <a
            href="sms:9285774808?body=Hello%20Michael%2C%20my%20name%20is%20_____.%20I%20would%20like%20you%20to%20come%20_____%20(date%2Ftime).%0AI%20need%20_____%20(work%20needs%20done).%20I%20can%20send%20pictures."
            className="inline-block bg-white text-blue-900 hover:bg-blue-100 transition px-8 py-4 rounded-xl font-bold text-lg"
          >
            Text for a Free Quote
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-6 text-center text-sm text-gray-600">
          © {new Date().getFullYear()} TC Handyman · Tooele & Surrounding Areas
        </div>
      </footer>
    </main>
  );
}
