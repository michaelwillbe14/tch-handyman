"use client";

import React from "react";
import Image from "next/image";

export default function Home() {
  const smsLink =
    "sms:19285774808?&body=Hi!%20My%20name%20is%20_____.%20I%20need%20help%20with%20_____.%20My%20address%20is%20_____.%20(Pictures%20attached%20if%20needed)";

  const slides = [
    { src: "/painting-before-1.jpeg", label: "Painting — Before" },
    { src: "/painting-after-1.jpeg", label: "Painting — After" },
    { src: "/painting-before-2.jpeg", label: "Painting — Before" },
    { src: "/painting-after-2.jpeg", label: "Painting — After" },
    { src: "/flooring-before-1.jpeg", label: "Flooring — Before" },
    { src: "/flooring-after-1.jpeg", label: "Flooring — After" },
    { src: "/flooring-before-2.jpeg", label: "Flooring — Before" },
    { src: "/flooring-after-2.jpeg", label: "Flooring — After" },
  ];

  const [index, setIndex] = React.useState(0);
  const [paused, setPaused] = React.useState(false);

  // ✅ AUTO-PLAY (every 3 seconds)
  React.useEffect(() => {
    if (paused) return;
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [paused, slides.length]);

  function prev() {
    setPaused(true);
    setIndex((i) => (i - 1 + slides.length) % slides.length);
  }

  function next() {
    setPaused(true);
    setIndex((i) => (i + 1) % slides.length);
  }

  return (
    <main style={styles.page}>
      {/* Header */}
      <header style={styles.header}>
        <div style={styles.headerInner}>
          <div style={styles.brand}>
            <Image src="/logo.png" alt="TCH Logo" width={56} height={56} />
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

      {/* Hero */}
      <section style={styles.hero}>
        <div style={styles.heroInner}>
          <h1 style={styles.heroTitle}>
            Professional Handyman Services in Tooele
          </h1>
          <p style={styles.heroText}>
            Interior & exterior painting, flooring, drywall, minor plumbing,
            minor electrical, and general home repairs you can trust.
          </p>

          <div style={styles.heroButtons}>
            <a href={smsLink} style={styles.primaryBtn}>
              Get a Free Quote by Text
            </a>
            <a href="tel:9285774808" style={styles.secondaryBtn}>
              Call (928) 577-4808
            </a>
          </div>
        </div>
      </section>

      {/* About */}
      <section style={styles.section}>
        <div style={styles.sectionInner}>
          <h2 style={styles.sectionTitle}>About Me</h2>
          <p style={styles.p}>
            I’m a handyman originally from <b>Kingman, Arizona</b>. I’m <b>21
            years old</b> with <b>2 years of hands-on experience</b>. I focus on
            clean work, honest pricing, and treating every home with respect.
          </p>
        </div>
      </section>

      {/* Services */}
      <section style={{ ...styles.section, background: "#eff6ff" }}>
        <div style={styles.sectionInner}>
          <h2 style={styles.sectionTitle}>Services</h2>
          <div style={styles.servicesGrid}>
            {[
              "Interior painting",
              "Exterior painting",
              "Flooring installation & repair",
              "Drywall repair & patching",
              "Minor plumbing repairs",
              "Minor electrical work",
              "Trim & baseboards",
              "Fixture replacement",
              "General home maintenance",
              "Punch-list work",
            ].map((s) => (
              <div key={s} style={styles.serviceCard}>
                ✓ {s}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Slider */}
      <section style={styles.section}>
        <div style={styles.sectionInner}>
          <h2 style={styles.sectionTitle}>Recent Work</h2>

          <div style={styles.sliderWrap}>
            <button onClick={prev} style={styles.arrowBtn}>‹</button>

            <div style={styles.slideFrame}>
              <div style={styles.slideImage}>
                <Image
                  src={slides[index].src}
                  alt={slides[index].label}
                  fill
                  sizes="(max-width: 900px) 100vw, 900px"
                  style={{ objectFit: "cover" }}
                  priority
                />
              </div>
              <div style={styles.slideLabel}>{slides[index].label}</div>
            </div>

            <button onClick={next} style={styles.arrowBtn}>›</button>
          </div>

          {/* Dots */}
          <div style={styles.dots}>
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setPaused(true);
                  setIndex(i);
                }}
                style={{
                  ...styles.dot,
                  background: i === index ? "#2563eb" : "#bfdbfe",
                }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={styles.footer}>
        <div style={styles.footerInner}>
          <div style={{ fontWeight: 800 }}>Tooele Handyman Services</div>
          <div style={{ marginTop: 6 }}>
            <a href="tel:9285774808" style={styles.footerLink}>
              (928) 577-4808
            </a>
          </div>
          <div style={{ marginTop: 10, fontSize: 12 }}>
            © {new Date().getFullYear()} • Local • Licensed • Insured
          </div>
        </div>
      </footer>
    </main>
  );
}

/* ---------- STYLES ---------- */

const styles = {
  page: {
    fontFamily: "Arial, sans-serif",
    background: "linear-gradient(180deg, #eff6ff, #ffffff)",
    color: "#0f172a",
  },
  header: {
    position: "sticky",
    top: 0,
    background: "#ffffffcc",
    backdropFilter: "blur(8px)",
    borderBottom: "1px solid #dbeafe",
    zIndex: 20,
  },
  headerInner: {
    maxWidth: 1100,
    margin: "0 auto",
    padding: "14px 18px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  brand: { display: "flex", gap: 12, alignItems: "center" },
  brandTitle: { fontSize: 20, fontWeight: 900 },
  brandSub: { fontSize: 13, color: "#2563eb", fontWeight: 700 },
  ctaBtn: {
    background: "#2563eb",
    color: "#fff",
    padding: "12px 16px",
    borderRadius: 12,
    textDecoration: "none",
    fontWeight: 800,
  },
  hero: { padding: "48px 18px" },
  heroInner: { maxWidth: 900, margin: "0 auto", textAlign: "center" },
  heroTitle: { fontSize: 40, fontWeight: 950 },
  heroText: { fontSize: 18, color: "#334155" },
  heroButtons: { marginTop: 18, display: "flex", gap: 12, justifyContent: "center" },
  primaryBtn: {
    background: "#2563eb",
    color: "#fff",
    padding: "12px 16px",
    borderRadius: 12,
    fontWeight: 800,
    textDecoration: "none",
  },
  secondaryBtn: {
    background: "#fff",
    border: "1px solid #bfdbfe",
    color: "#1e40af",
    padding: "12px 16px",
    borderRadius: 12,
    fontWeight: 800,
    textDecoration: "none",
  },
  section: { padding: "36px 18px" },
  sectionInner: { maxWidth: 1100, margin: "0 auto" },
  sectionTitle: { fontSize: 28, fontWeight: 950 },
  p: { color: "#334155", lineHeight: 1.6 },
  servicesGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: 12,
    marginTop: 14,
  },
  serviceCard: {
    background: "#fff",
    border: "1px solid #dbeafe",
    borderRadius: 12,
    padding: "10px",
    fontWeight: 600,
  },
  sliderWrap: {
    marginTop: 16,
    display: "grid",
    gridTemplateColumns: "44px 1fr 44px",
    alignItems: "center",
    gap: 10,
  },
  arrowBtn: {
    height: 44,
    borderRadius: 12,
    border: "1px solid #bfdbfe",
    background: "#fff",
    fontSize: 24,
    fontWeight: 900,
    cursor: "pointer",
  },
  slideFrame: {
    borderRadius: 16,
    overflow: "hidden",
    border: "1px solid #dbeafe",
    background: "#fff",
  },
  slideImage: { position: "relative", height: 360 },
  slideLabel: {
    padding: "10px",
    background: "#eff6ff",
    fontWeight: 800,
    color: "#1e40af",
  },
  dots: { display: "flex", justifyContent: "center", gap: 8, marginTop: 12 },
  dot: { width: 10, height: 10, borderRadius: "50%", border: "none" },
  footer: { background: "#1e3a8a", color: "#fff", padding: "22px 18px" },
  footerInner: { maxWidth: 1100, margin: "0 auto", textAlign: "center" },
  footerLink: { color: "#dbeafe", textDecoration: "underline" },
};
