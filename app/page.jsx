"use client";

import { useState } from "react";
import Image from "next/image";

/* ---------- Before / After Component ---------- */
function BeforeAfterCompare({ title, beforeSrc, afterSrc }) {
  const [pos, setPos] = useState(50);

  return (
    <div style={ui.card}>
      <div style={ui.cardTop}>
        <div style={ui.cardTitle}>{title}</div>
        <div style={ui.cardHint}>Drag to compare</div>
      </div>

      <div style={ui.compareFrame}>
        <Image src={beforeSrc} alt="Before" fill style={{ objectFit: "cover" }} />

        <div style={{ ...ui.afterClip, clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
          <Image src={afterSrc} alt="After" fill style={{ objectFit: "cover" }} />
        </div>

        <div style={{ ...ui.divider, left: `${pos}%` }} />
        <div style={{ ...ui.knob, left: `${pos}%` }}>↔</div>

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
      />
    </div>
  );
}

/* ---------- Page ---------- */
export default function Home() {
  const smsLink =
    "sms:19285774808?&body=Hi!%20My%20name%20is%20_____.%20I%20need%20help%20with%20_____.%20My%20address%20is%20_____.%20(Pictures%20attached%20if%20needed)";

  /* 🔹 ALL PAINTING + HOME PROJECTS */
  const paintingPairs = [
    { title: "Painting Project 1", before: "/painting-before-1.jpeg", after: "/painting-after-1.jpeg" },
    { title: "Painting Project 2", before: "/painting-before-2.jpeg", after: "/painting-after-2.jpeg" },
    { title: "Microwave Area Update", before: "/microwave-before-1.jpeg", after: "/microwave-after-1.jpeg" },
    { title: "Grab Bar Installation", before: "/grabbar-before-1.jpeg", after: "/grabbar-after-1.jpeg" },
  ];

  /* 🔹 FLOORING PROJECTS */
  const flooringPairs = [
    { title: "Flooring Project 1", before: "/flooring-before-1.jpeg", after: "/flooring-after-1.jpeg" },
    { title: "Flooring Project 2", before: "/flooring-before-2.jpeg", after: "/flooring-after-2.jpeg" },
  ];

  const [category, setCategory] = useState("painting");
  const [index, setIndex] = useState(0);

  const pairs = category === "painting" ? paintingPairs : flooringPairs;
  const current = pairs[index];

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
          <a href={smsLink} style={styles.ctaBtn}>Text for Free Quote</a>
        </div>
      </header>

      {/* Hero */}
      <section style={styles.hero}>
        <h1 style={styles.heroTitle}>Trusted Handyman Services in Tooele County</h1>
        <p style={styles.heroText}>
          Painting, flooring, drywall, minor plumbing, minor electrical, and reliable home repairs.
        </p>
        <div style={styles.heroButtons}>
          <a href={smsLink} style={styles.primaryBtn}>Get a Free Quote</a>
          <a href="tel:9285774808" style={styles.secondaryBtn}>Call (928) 577-4808</a>
        </div>
      </section>

      {/* Before & After */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Before & After</h2>

        <div style={styles.switchRow}>
          <button
            onClick={() => { setCategory("painting"); setIndex(0); }}
            style={{ ...styles.switchBtn, ...(category === "painting" && styles.switchBtnActive) }}
          >
            Painting
          </button>
          <button
            onClick={() => { setCategory("flooring"); setIndex(0); }}
            style={{ ...styles.switchBtn, ...(category === "flooring" && styles.switchBtnActive) }}
          >
            Flooring
          </button>
        </div>

        <div style={styles.switchRow}>
          {pairs.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              style={{ ...styles.smallBtn, ...(i === index && styles.smallBtnActive) }}
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

/* ---------- Styles ---------- */

const styles = {
  page: { fontFamily: "Arial, sans-serif", background: "#f8fafc", color: "#0f172a" },
  header: { background: "#fff", borderBottom: "1px solid #e2e8f0" },
  headerInner: { maxWidth: 1100, margin: "0 auto", padding: 16, display: "flex", justifyContent: "space-between" },
  brand: { display: "flex", gap: 12, alignItems: "center" },
  brandTitle: { fontSize: 20, fontWeight: 900 },
  brandSub: { fontSize: 13, color: "#2563eb" },
  ctaBtn: { background: "#2563eb", color: "#fff", padding: "10px 14px", borderRadius: 10, textDecoration: "none" },

  hero: { textAlign: "center", padding: 40 },
  heroTitle: { fontSize: 36, fontWeight: 900 },
  heroText: { maxWidth: 700, margin: "10px auto" },
  heroButtons: { display: "flex", justifyContent: "center", gap: 12 },

  primaryBtn: { background: "#2563eb", color: "#fff", padding: "10px 16px", borderRadius: 10, textDecoration: "none" },
  secondaryBtn: { border: "1px solid #2563eb", color: "#2563eb", padding: "10px 16px", borderRadius: 10 },

  section: { maxWidth: 900, margin: "0 auto", padding: 40 },
  sectionTitle: { fontSize: 28, fontWeight: 900 },

  switchRow: { display: "flex", gap: 10, marginBottom: 10 },
  switchBtn: { padding: "8px 14px", borderRadius: 8, border: "1px solid #c7d2fe", cursor: "pointer" },
  switchBtnActive: { background: "#2563eb", color: "#fff" },
  smallBtn: { width: 40, height: 36, borderRadius: 8, border: "1px solid #c7d2fe" },
  smallBtnActive: { background: "#2563eb", color: "#fff" },

  footer: { background: "#1e3a8a", color: "#fff", padding: 24, textAlign: "center" },
  footerInner: { maxWidth: 900, margin: "0 auto" },
  footerLink: { color: "#dbeafe" },
};

const ui = {
  card: { background: "#fff", borderRadius: 14, padding: 14 },
  cardTop: { display: "flex", justifyContent: "space-between", marginBottom: 8 },
  cardTitle: { fontWeight: 900 },
  cardHint: { fontSize: 12, color: "#64748b" },
  compareFrame: { position: "relative", height: 360, overflow: "hidden", borderRadius: 14 },
  afterClip: { position: "absolute", inset: 0 },
  divider: { position: "absolute", top: 0, bottom: 0, width: 3, background: "#fff" },
  knob: { position: "absolute", top: "50%", transform: "translate(-50%,-50%)", width: 44, height: 44, borderRadius: "50%", background: "#fff", display: "grid", placeItems: "center" },
  badge: { position: "absolute", top: 10, background: "rgba(0,0,0,.6)", color: "#fff", padding: "4px 8px", borderRadius: 8 },
  range: { width: "100%", marginTop: 10 },
};
