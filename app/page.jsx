export default function Home() {
  return (
    <main style={{ fontFamily: "Arial, sans-serif", margin: 0 }}>
      {/* Header */}
      <header
        style={{
          padding: "20px",
          borderBottom: "1px solid #ddd",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "16px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <img
            src="/logo.png"
            alt="TCH Logo"
            style={{ width: 60, height: 60, objectFit: "contain" }}
          />
          <div>
            <h1 style={{ margin: 0 }}>Tooele Handyman Services</h1>
            <p style={{ margin: "4px 0 0", color: "#555" }}>
              Local • Licensed • Insured
            </p>
          </div>
        </div>

        <a
          href="sms:19285774808?&body=Hi!%20My%20name%20is%20_____.%20I%20need%20help%20with%20_____.%20My%20address%20is%20_____."
          style={{
            background: "#111",
            color: "#fff",
            padding: "12px 16px",
            borderRadius: 10,
            textDecoration: "none",
            fontWeight: 700,
            whiteSpace: "nowrap",
          }}
        >
          Text for a Free Quote
        </a>
      </header>

      {/* Hero */}
      <section style={{ padding: "40px 20px", textAlign: "center" }}>
        <h2 style={{ marginTop: 0 }}>Handyman Services in Tooele & Surrounding Areas</h2>
        <p style={{ maxWidth: 700, margin: "10px auto 0", color: "#555" }}>
          Painting (interior/exterior), flooring, drywall work, minor plumbing,
          minor electrical, and general home repairs.
        </p>
        <p style={{ marginTop: 16, fontWeight: 700 }}>
          📞 (928) 577-4808
        </p>
      </section>

      {/* About Me */}
      <section
        style={{
          padding: "30px 20px",
          background: "#f6f6f6",
          borderTop: "1px solid #eee",
          borderBottom: "1px solid #eee",
        }}
      >
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <h3 style={{ marginTop: 0 }}>About Me</h3>

          <p style={{ color: "#333", lineHeight: 1.6 }}>
            I’m a handyman originally from <b>Kingman, Arizona</b>. I’m <b>21 years old</b>,
            and I’ve been doing this kind of work for <b>2 years</b>. I take pride in doing
            quality work, showing up on time, and treating every home with respect.
          </p>

          <p style={{ color: "#333", lineHeight: 1.6, marginBottom: 0 }}>
            If you need a free quote, just tap the text button above and send me a message
            with what you need done and your address.
          </p>
        </div>
      </section>

      {/* Pictures */}
      <section style={{ padding: "40px 20px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <h3 style={{ marginTop: 0, textAlign: "center" }}>Recent Work</h3>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: 16,
              marginTop: 20,
            }}
          >
            {/* Painting */}
            <figure style={{ margin: 0 }}>
              <img
                src="/painting-before-1.jpeg"
                alt="Painting Before 1"
                style={{ width: "100%", height: 220, objectFit: "cover", borderRadius: 10 }}
              />
              <figcaption style={{ marginTop: 8, color: "#555" }}>Painting – Before 1</figcaption>
            </figure>

            <figure style={{ margin: 0 }}>
              <img
                src="/painting-after-1.jpeg"
                alt="Painting After 1"
                style={{ width: "100%", height: 220, objectFit: "cover", borderRadius: 10 }}
              />
              <figcaption style={{ marginTop: 8, color: "#555" }}>Painting – After 1</figcaption>
            </figure>

            <figure style={{ margin: 0 }}>
              <img
                src="/painting-before-2.jpeg"
                alt="Painting Before 2"
                style={{ width: "100%", height: 220, objectFit: "cover", borderRadius: 10 }}
              />
              <figcaption style={{ marginTop: 8, color: "#555" }}>Painting – Before 2</figcaption>
            </figure>

            <figure style={{ margin: 0 }}>
              <img
                src="/painting-after-2.jpeg"
                alt="Painting After 2"
                style={{ width: "100%", height: 220, objectFit: "cover", borderRadius: 10 }}
              />
              <figcaption style={{ marginTop: 8, color: "#555" }}>Painting – After 2</figcaption>
            </figure>

            {/* Flooring */}
            <figure style={{ margin: 0 }}>
              <img
                src="/flooring-before-1.jpeg"
                alt="Flooring Before 1"
                style={{ width: "100%", height: 220, objectFit: "cover", borderRadius: 10 }}
              />
              <figcaption style={{ marginTop: 8, color: "#555" }}>Flooring – Before 1</figcaption>
            </figure>

            <figure style={{ margin: 0 }}>
              <img
                src="/flooring-after-1.jpeg"
                alt="Flooring After 1"
                style={{ width: "100%", height: 220, objectFit: "cover", borderRadius: 10 }}
              />
              <figcaption style={{ marginTop: 8, color: "#555" }}>Flooring – After 1</figcaption>
            </figure>

            <figure style={{ margin: 0 }}>
              <img
                src="/flooring-before-2.jpeg"
                alt="Flooring Before 2"
                style={{ width: "100%", height: 220, objectFit: "cover", borderRadius: 10 }}
              />
              <figcaption style={{ marginTop: 8, color: "#555" }}>Flooring – Before 2</figcaption>
            </figure>

            <figure style={{ margin: 0 }}>
              <img
                src="/flooring-after-2.jpeg"
                alt="Flooring After 2"
                style={{ width: "100%", height: 220, objectFit: "cover", borderRadius: 10 }}
              />
              <figcaption style={{ marginTop: 8, color: "#555" }}>Flooring – After 2</figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ padding: "20px", textAlign: "center", borderTop: "1px solid #ddd", color: "#666" }}>
        <p style={{ margin: 0 }}>
          © {new Date().getFullYear()} Tooele Handyman Services • (928) 577-4808
        </p>
      </footer>
    </main>
  );
}
