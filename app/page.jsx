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
            alt="TCH Handyman Logo"
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
          }}
        >
          Text for Free Quote
        </a>
      </header>

      {/* About Me */}
      <section style={{ padding: "30px 20px", maxWidth: 900, margin: "0 auto" }}>
        <h2>About Me</h2>
        <p style={{ lineHeight: 1.6 }}>
          I’m a handyman originally from <strong>Kingman, Arizona</strong>. I’m
          <strong> 21 years old</strong> and have been doing this kind of work for
          <strong> 2 years</strong>. I take pride in honest work, showing up on
          time, and treating every home with respect.
        </p>
        <p style={{ lineHeight: 1.6 }}>
          I provide reliable handyman services in Tooele and the surrounding
          areas. For a free quote, just text me what you need done and your
          address.
        </p>
      </section>

      {/* Services */}
      <section
        style={{
          padding: "30px 20px",
          background: "#f6f6f6",
          borderTop: "1px solid #eee",
          borderBottom: "1px solid #eee",
        }}
      >
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <h2>Services I Offer</h2>
          <ul style={{ lineHeight: 2, paddingLeft: 20 }}>
            <li>Interior painting</li>
            <li>Exterior painting</li>
            <li>Flooring installation & repairs</li>
            <li>Drywall repair & patching</li>
            <li>Minor plumbing repairs</li>
            <li>Minor electrical work</li>
            <li>Trim, baseboards & door repairs</li>
            <li>Fixture replacement (lights, faucets, hardware)</li>
            <li>General home maintenance & repairs</li>
            <li>Punch-list & small project work</li>
          </ul>
        </div>
      </section>

      {/* Pictures */}
      <section style={{ padding: "30px 20px", maxWidth: 1100, margin: "0 auto" }}>
        <h2 style={{ textAlign: "center" }}>Recent Work</h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: 16,
            marginTop: 20,
          }}
        >
          {/* Painting */}
          <img src="/painting-before-1.jpeg" alt="Painting before 1" style={imgStyle} />
          <img src="/painting-after-1.jpeg" alt="Painting after 1" style={imgStyle} />
          <img src="/painting-before-2.jpeg" alt="Painting before 2" style={imgStyle} />
          <img src="/painting-after-2.jpeg" alt="Painting after 2" style={imgStyle} />

          {/* Flooring */}
          <img src="/flooring-before-1.jpeg" alt="Flooring before 1" style={imgStyle} />
          <img src="/flooring-after-1.jpeg" alt="Flooring after 1" style={imgStyle} />
          <img src="/flooring-before-2.jpeg" alt="Flooring before 2" style={imgStyle} />
          <img src="/flooring-after-2.jpeg" alt="Flooring after 2" style={imgStyle} />
        </div>
      </section>

      {/* Footer */}
      <footer
        style={{
          padding: "20px",
          textAlign: "center",
          borderTop: "1px solid #ddd",
          color: "#666",
        }}
      >
        <p style={{ margin: 0 }}>
          © {new Date().getFullYear()} Tooele Handyman Services • (928) 577-4808
        </p>
      </footer>
    </main>
  );
}

const imgStyle = {
  width: "100%",
  height: 220,
  objectFit: "cover",
  borderRadius: 10,
};
