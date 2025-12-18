"use client";

import { useState } from "react";
import Image from "next/image";

function BeforeAfterCompare({ title, beforeSrc, afterSrc }) {
  const [pos, setPos] = useState(50);

  return (
    <div style={ui.card}>
      <div style={ui.cardTop}>
        <div style={ui.cardTitle}>{title}</div>
        <div style={ui.cardHint}>Drag to compare</div>
      </div>

      <div style={ui.compareFrame}>
        {/* BEFORE */}
        <Image
          src={beforeSrc}
          alt={`${title} - Before`}
          fill
          sizes="(max-width: 900px) 100vw, 900px"
          style={{ objectFit: "cover" }}
        />

        {/* AFTER (clipped) */}
        <div
          style={{
            ...ui.afterClip,
            clipPath: `inset(0 ${100 - pos}% 0 0)`,
          }}
        >
          <Image
            src={afterSrc}
            alt={`${title} - After`}
            fill
            sizes="(max-width: 900px) 100vw, 900px"
            style={{ objectFit: "cover" }}
          />
        </div>

        {/* Divider */}
        <div style={{ ...ui.divider, left: `${pos}%` }} />
        <div style={{ ...ui.knob, left: `${pos}%` }}>↔</div>

        {/* Labels */}
        <div style={{ ...ui.badge, left: 12 }}>Before</div>
        <div style={{ ...ui.badge, right: 12 }}>After</div>
      </div>

      <input
        type="range"
        min={0}
        max={100}
        value={pos}
        onChange={(e) => setPos(Number(e.target.value))}
        style={ui.range}
        aria-label="Before/After slider"
      />
    </div>
  );
}

export default function Home() {
  const smsLink =
    "sms:19285774808?&body=Hi!%20My%20name%20is%20_____.%20I%20need%20help%20with%20_____.%20My%20address%20is%20_____.%20(Pictures%20attached%20if%20needed)";

  // ✅ Pair the images correctly (Before + After are tied together)
  const paintingPairs = [
    {
      title: "Painting Project 1",
      before: "/painting-before-1.jpeg",
      after: "/painting-after-1.jpeg",
    },
    {
      title: "Painting Project 2",
      before: "/painting-before-2.jpeg",
      after: "/painting-after-2.jpeg",
    },
  ];

  const flooringPairs = [
    {
      title: "Flooring Project 1",
      before: "/flooring-before-1.jpeg",
      after: "/flooring-after-1.jpeg",
    },
    {
      title: "Flooring Project 2",
      before: "/flooring-before-2.jpeg",
      after: "/flooring-after-2.jpeg",
    },
  ];

  const [category, setCategory] = useState("painting"); // "painting" | "flooring"
  const [pairIndex, setPairIndex] = useState(0);

  const pairs = category === "painting" ? paintingPairs : flooringPairs;
  const current = pairs[pairIndex];

  return (
    <main style={styles.page}>
      {/* Header */}
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

      {/* Hero */}
      <section style={styles.hero}>
        <div style={styles.heroInner}>
          <h1 style={styles.heroTitle}>Trusted Handyman Services in Tooele County</h1>
          <p style={styles.heroText}>
            Interior & exterior painting, flooring, drywall, minor plumbing, minor electrical,
            and dependable home repairs.
          </p>

          <div style={styles.heroButtons}>
            <a href={smsLink} style={styles.primaryBtn}>Get a Free Quote by Text</a>
            <a href="tel:9285774808" style={styles.secondaryBtn}>Call (928) 577-4808</a>
          </div>
        </div>
      </section>

      {/* About */}
      <section style={styles.section}>
        <div style={styles.sectionInner}>
          <h2 style={styles.sectionTitle}>About Me</h2>
          <p style={styles.p}>
            My name is Michael Willoughby and im originally from <b>Kingman, Arizona</b>. I’m <b>21 years old</b> with{" "}
            <b>2 years of hands-on experience</b> in painting, flooring, drywall, and general home repairs.
          </p>
          <p style={styles.p}>
            Now living in <b>Tooele County</b>, I would love the opportunity to support your home’s needs
            with reliable, honest work you can trust.
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
              "Trim, doors & baseboards",
              "Fixture & hardware replacement",
              "General home maintenance",
              "Punch-list & small projects",
            ].map((s) => (
              <div key={s} style={styles.serviceCard}>✓ {s}</div>
            ))}
          </div>
        </div>
      </section>

      {/* BEFORE/AFTER COMPARISON (REAL) */}
      <section style={styles.section}>
        <div style={styles.sectionInner}>
          <h2 style={styles.sectionTitle}>Before & After</h2>
          <p style={styles.p}>Choose a project, then drag the slider to compare.</p>

          {/* Category buttons */}
          <div style={styles.switchRow}>
            <button
              onClick={() => {
                setCategory("painting");
                setPairIndex(0);
              }}
              style={{
                ...styles.switchBtn,
                ...(category === "painting" ? styles.switchBtnActive : null),
              }}
            >
              Painting
            </button>
            <button
              onClick={() => {
                setCategory("flooring");
                setPairIndex(0);
              }}
              style={{
                ...styles.switchBtn,
                ...(category === "flooring" ? styles.switchBtnActive : null),
              }}
            >
              Flooring
            </button>
          </div>

          {/* Pair selector */}
          <div style={styles.switchRow}>
            {pairs.map((p, i) => (
              <button
                key={p.title}
                onClick={() => setPairIndex(i)}
                style={{
                  ...styles.smallBtn,
                  ...(i === pairIndex ? styles.smallBtnActive : null),
                }}
              >
                {i + 1}
              </button>
            ))}
          </div>

          <BeforeAfterCompare
            title={current.title}
            beforeSrc={current.before}
            afterSrc={current.after}
          />

          <div style={{ marginTop: 12, textAlign: "center" }}>
            <a href={smsLink} style={styles.primaryBtn}>Text for a Free Quote</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={styles.footer}>
        <div style={styles.footerInner}>
          <div style={{ fontWeight: 800 }}>Tooele Handyman Services</div>
          <div style={{ marginTop: 6 }}>
            <a href="tel:9285774808" style={styles.footerLink}>(928) 577-4808</a>
          </div>
          <div style={{ marginTop: 10, fontSize: 12 }}>
            © {new Date().getFullYear()} • Local • Licensed • Insured
          </div>
        </div>
      </footer>
    </main>
  );
}

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
    gap: 14,
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
    whiteSpace: "nowrap",
  },
  hero: { padding: "48px 18px" },
  heroInner: { maxWidth: 900, margin: "0 auto", textAlign: "center" },
  heroTitle: { fontSize: 40, fontWeight: 950, margin: "0 0 10px" },
  heroText: { fontSize: 18, color: "#334155", margin: 0, lineHeight: 1.6 },
  heroButtons: {
    marginTop: 18,
    display: "flex",
    gap: 12,
    justifyContent: "center",
    flexWrap: "wrap",
  },
  primaryBtn: {
    background: "#2563eb",
    color: "#fff",
    padding: "12px 16px",
    borderRadius: 12,
    fontWeight: 800,
    textDecoration: "none",
    display: "inline-block",
  },
  secondaryBtn: {
    background: "#fff",
    border: "1px solid #bfdbfe",
    color: "#1e40af",
    padding: "12px 16px",
    borderRadius: 12,
    fontWeight: 800,
    textDecoration: "none",
    display: "inline-block",
  },
  section: { padding: "36px 18px" },
  sectionInner: { maxWidth: 1100, margin: "0 auto" },
  sectionTitle: { fontSize: 28, fontWeight: 950, margin: "0 0 10px" },
  p: { color: "#334155", lineHeight: 1.6, margin: "0 0 10px" },

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

  switchRow: {
    display: "flex",
    gap: 10,
    flexWrap: "wrap",
    marginTop: 12,
    marginBottom: 10,
  },
  switchBtn: {
    border: "1px solid #bfdbfe",
    background: "#fff",
    color: "#1e40af",
    padding: "10px 12px",
    borderRadius: 12,
    fontWeight: 900,
    cursor: "pointer",
  },
  switchBtnActive: {
    background: "#2563eb",
    color: "#fff",
    border: "1px solid #2563eb",
  },
  smallBtn: {
    width: 44,
    height: 40,
    borderRadius: 12,
    border: "1px solid #bfdbfe",
    background: "#fff",
    color: "#1e40af",
    fontWeight: 900,
    cursor: "pointer",
  },
  smallBtnActive: {
    background: "#2563eb",
    color: "#fff",
    border: "1px solid #2563eb",
  },

  footer: { background: "#1e3a8a", color: "#fff", padding: "22px 18px" },
  footerInner: { maxWidth: 1100, margin: "0 auto", textAlign: "center" },
  footerLink: { color: "#dbeafe", textDecoration: "underline" },
};

const ui = {
  card: {
    background: "#fff",
    border: "1px solid #dbeafe",
    borderRadius: 16,
    padding: 14,
    boxShadow: "0 10px 30px rgba(30, 64, 175, 0.08)",
  },
  cardTop: {
    display: "flex",
    justifyContent: "space-between",
    gap: 12,
    alignItems: "baseline",
    marginBottom: 10,
  },
  cardTitle: { fontWeight: 950, color: "#0f172a" },
  cardHint: { fontSize: 12, color: "#64748b", fontWeight: 700 },
  compareFrame: {
    position: "relative",
    width: "100%",
    height: 380,
    borderRadius: 14,
    overflow: "hidden",
    border: "1px solid #dbeafe",
    background: "#dbeafe",
  },
  afterClip: { position: "absolute", inset: 0 },
  divider: {
    position: "absolute",
    top: 0,
    bottom: 0,
    width: 3,
    transform: "translateX(-50%)",
    background: "rgba(255,255,255,0.95)",
    boxShadow: "0 0 0 1px rgba(15,23,42,0.10)",
  },
  knob: {
    position: "absolute",
    top: "50%",
    transform: "translate(-50%, -50%)",
    width: 44,
    height: 44,
    borderRadius: 999,
    background: "rgba(255,255,255,0.95)",
    display: "grid",
    placeItems: "center",
    fontWeight: 950,
    color: "#1e40af",
    border: "1px solid rgba(15,23,42,0.10)",
    boxShadow: "0 10px 30px rgba(0,0,0,0.18)",
  },
  badge: {
    position: "absolute",
    top: 12,
    padding: "6px 10px",
    borderRadius: 999,
    background: "rgba(0,0,0,0.55)",
    color: "#fff",
    fontSize: 12,
    fontWeight: 800,
  },
  range: { width: "100%", marginTop: 12 },
};
