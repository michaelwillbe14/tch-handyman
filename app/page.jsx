"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Home() {
  const smsLink =
    "sms:19285774808?&body=Hi!%20My%20name%20is%20_____.%20I%20need%20help%20with%20_____.%20My%20address%20is%20_____.%20(Pictures%20attached%20if%20needed)";

  const slides = [
    "/painting-before-1.jpeg",
    "/painting-after-1.jpeg",
    "/painting-before-2.jpeg",
    "/painting-after-2.jpeg",
    "/flooring-before-1.jpeg",
    "/flooring-after-1.jpeg",
    "/flooring-before-2.jpeg",
    "/flooring-after-2.jpeg",
  ];

  const reviews = [
    "Showed up on time and did great work. Very professional.",
    "Quick response and fair pricing. Would recommend.",
    "The painting looks amazing and everything was cleaned up.",
    "Reliable and easy to communicate with. Great experience.",
    "Flooring came out perfect. Paid attention to details.",
    "Honest work and no surprises. Will use again.",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <main style={styles.page}>
      {/* HEADER */}
      <header style={styles.header}>
        <div style={styles.headerInner}>
          <div style={styles.brand}>
            <Image src="/logo.png" alt="Logo" width={56} height={56} />
            <div>
              <div style={styles.brandTitle}>Tooele Handyman Services</div>
              <div style={styles.brandSub}>Local • Licensed • Insured</div>
            </div>
          </div>
          <a href={smsLink} style={styles.ctaBtn}>
            Text for Free Quote
          </a>
        </div>
      </header>

      {/* HERO */}
      <section style={styles.hero}>
        <h1 style={styles.heroTitle}>Handyman Services in Tooele County</h1>
        <p style={styles.heroText}>
          Painting, flooring, drywall, minor plumbing, minor electrical, and
          general home repairs you can trust.
        </p>
        <div style={styles.heroButtons}>
          <a href={smsLink} style={styles.primaryBtn}>
            Get a Free Quote
          </a>
          <a href="tel:9285774808" style={styles.secondaryBtn}>
            Call (928) 577-4808
          </a>
        </div>
      </section>

      {/* ABOUT */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>About Me</h2>
        <p style={styles.text}>
          I’m a handyman originally from <strong>Kingman, Arizona</strong>. I’m
          <strong> 21 years old</strong> with <strong>2 years of experience</strong>{" "}
          in painting, flooring, drywall, and general home repairs.
        </p>
        <p style={styles.text}>
          Now living in <strong>Tooele County</strong>, I would love to support
          your home’s needs with honest, reliable work you can trust.
        </p>
      </section>

      {/* WHY CHOOSE ME */}
      <section style={{ ...styles.section, background: "#eff6ff" }}>
        <h2 style={styles.sectionTitle}>Why Choose Me</h2>
        <ul style={styles.list}>
          <li>Local to Tooele County</li>
          <li>Honest pricing, no surprises</li>
          <li>Reliable and respectful</li>
          <li>Quality work done right</li>
          <li>Licensed and insured</li>
        </ul>
      </section>

      {/* SERVICES */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Services</h2>
        <ul style={styles.list}>
          <li>Interior & exterior painting</li>
          <li>Flooring installation & repair</li>
          <li>Drywall repair & patching</li>
          <li>Minor plumbing repairs</li>
          <li>Minor electrical work</li>
          <li>Trim, doors & baseboards</li>
          <li>Fixture & hardware replacement</li>
          <li>General home maintenance</li>
        </ul>
      </section>

      {/* REVIEWS */}
      <section style={{ ...styles.section, background: "#eff6ff" }}>
        <h2 style={styles.sectionTitle}>Reviews</h2>
        <div style={styles.reviewGrid}>
          {reviews.map((r, i) => (
            <div key={i} style={styles.reviewCard}>
              ★★★★★
              <p style={{ marginTop: 8 }}>{r}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SLIDER */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Recent Work</h2>
        <div style={styles.slider}>
          <Image
            src={slides[index]}
            alt="Project photo"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
      </section>

      {/* FOOTER */}
      <footer style={styles.footer}>
        <p>© {new Date().getFullYear()} Tooele Handyman Services</p>
        <p>(928) 577-4808</p>
      </footer>
    </main>
  );
}

/* ---------- STYLES ---------- */

const styles = {
  page: {
    fontFamily: "Arial, sans-serif",
    color: "#0f172a",
    background: "linear-gradient(180deg, #eff6ff, #ffffff)",
  },
  header: {
    position: "sticky",
    top: 0,
    background: "#ffffff",
    borderBottom: "1px solid #dbeafe",
  },
  headerInner: {
    maxWidth: 1100,
    margin: "0 auto",
    padding: 16,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  brand: { display: "flex", gap: 12, alignItems: "center" },
  brandTitle: { fontSize: 20, fontWeight: "bold" },
  brandSub: { fontSize: 13, color: "#2563eb" },
  ctaBtn: {
    background: "#2563eb",
    color: "#fff",
    padding: "10px 14px",
    borderRadius: 10,
    textDecoration: "none",
    fontWeight: "bold",
  },
  hero: { padding: 40, textAlign: "center" },
  heroTitle: { fontSize: 36, fontWeight: "bold" },
  heroText: { maxWidth: 700, margin: "10px auto" },
  heroButtons: { display: "flex", justifyContent: "center", gap: 12 },
  primaryBtn: {
    background: "#2563eb",
    color: "#fff",
    padding: "10px 16px",
    borderRadius: 10,
    textDecoration: "none",
  },
  secondaryBtn: {
    border: "1px solid #2563eb",
    padding: "10px 16px",
    borderRadius: 10,
    textDecoration: "none",
    color: "#2563eb",
  },
  section: { maxWidth: 900, margin: "0 auto", padding: 40 },
  sectionTitle: { fontSize: 28, fontWeight: "bold" },
  text: { lineHeight: 1.6 },
  list: { paddingLeft: 20, lineHeight: 1.8 },
  reviewGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: 16,
  },
  reviewCard: {
    background: "#fff",
    padding: 14,
    borderRadius: 10,
    border: "1px solid #dbeafe",
  },
  slider: {
    position: "relative",
    width: "100%",
    height: 360,
    borderRadius: 12,
    overflow: "hidden",
    border: "1px solid #dbeafe",
  },
  footer: {
    textAlign: "center",
    padding: 24,
    background: "#1e3a8a",
    color: "#fff",
  },
};
