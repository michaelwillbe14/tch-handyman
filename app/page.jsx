"use client";

const styles = {
  page: {
    minHeight: "100vh",
    background: "linear-gradient(180deg, #0b1b3a 0%, #0f2b5a 40%, #ffffff 100%)",
    color: "#0b1b3a",
    fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif",
  },
  container: {
    width: "min(1100px, 92%)",
    margin: "0 auto",
    padding: "28px 0 60px",
  },
  nav: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 12,
    padding: "14px 18px",
    borderRadius: 16,
    background: "rgba(255,255,255,0.10)",
    border: "1px solid rgba(255,255,255,0.18)",
    color: "#fff",
    backdropFilter: "blur(8px)",
  },
  brand: { fontWeight: 800, letterSpacing: 0.3 },
  navLinks: { display: "flex", gap: 14, flexWrap: "wrap" },
  navLink: {
    color: "rgba(255,255,255,0.92)",
    textDecoration: "none",
    fontSize: 14,
    padding: "8px 10px",
    borderRadius: 12,
  },

  hero: {
    marginTop: 18,
    padding: "26px 18px",
    borderRadius: 18,
    background: "rgba(255,255,255,0.12)",
    border: "1px solid rgba(255,255,255,0.22)",
    color: "#fff",
  },
  heroGrid: {
    display: "grid",
    gridTemplateColumns: "1.2fr 0.8fr",
    gap: 18,
    alignItems: "stretch",
  },
  heroTitle: { fontSize: 40, lineHeight: 1.05, margin: 0, fontWeight: 900 },
  heroText: { margin: "10px 0 0", color: "rgba(255,255,255,0.92)", fontSize: 16 },
  pillRow: { display: "flex", gap: 10, flexWrap: "wrap", marginTop: 14 },
  pill: {
    fontSize: 12,
    padding: "8px 10px",
    borderRadius: 999,
    background: "rgba(255,255,255,0.14)",
    border: "1px solid rgba(255,255,255,0.18)",
  },
  heroCard: {
    borderRadius: 18,
    background: "rgba(255,255,255,0.16)",
    border: "1px solid rgba(255,255,255,0.22)",
    padding: 16,
    display: "grid",
    gap: 12,
    alignContent: "start",
  },
  buttonRow: { display: "flex", gap: 10, flexWrap: "wrap", marginTop: 14 },
  primaryBtn: {
    display: "inline-block",
    padding: "12px 14px",
    borderRadius: 14,
    textDecoration: "none",
    background: "#e8f2ff",
    color: "#0b1b3a",
    fontWeight: 800,
    border: "1px solid rgba(255,255,255,0.35)",
  },
  ghostBtn: {
    display: "inline-block",
    padding: "12px 14px",
    borderRadius: 14,
    textDecoration: "none",
    background: "rgba(255,255,255,0.12)",
    color: "#fff",
    fontWeight: 800,
    border: "1px solid rgba(255,255,255,0.22)",
  },

  section: {
    marginTop: 26,
    padding: "18px",
    borderRadius: 18,
    background: "#ffffff",
    border: "1px solid rgba(15,43,90,0.12)",
    boxShadow: "0 10px 28px rgba(10, 30, 70, 0.08)",
  },
  sectionTitle: { margin: 0, fontSize: 22, fontWeight: 900, color: "#0b1b3a" },
  sectionSub: { margin: "8px 0 0", color: "rgba(11,27,58,0.72)" },

  cards: {
    display: "grid",
    gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
    gap: 12,
    marginTop: 14,
  },
  card: {
    padding: 14,
    borderRadius: 16,
    border: "1px solid rgba(15,43,90,0.12)",
    background: "linear-gradient(180deg, #f6fbff 0%, #ffffff 100%)",
  },
  cardTitle: { margin: 0, fontWeight: 900, color: "#0b1b3a" },
  cardText: { margin: "8px 0 0", color: "rgba(11,27,58,0.75)", fontSize: 14, lineHeight: 1.45 },

  split: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginTop: 14 },

  sliderWrap: {
    marginTop: 12,
    padding: 12,
    borderRadius: 16,
    border: "1px solid rgba(15,43,90,0.12)",
    background: "linear-gradient(180deg, #f6fbff 0%, #ffffff 100%)",
  },
  sliderRow: {
    display: "flex",
    overflowX: "auto",
    gap: 12,
    paddingBottom: 6,
    scrollSnapType: "x mandatory",
  },
  slide: {
    width: 320,
    height: 210,
    borderRadius: 14,
    objectFit: "cover",
    flexShrink: 0,
    border: "1px solid rgba(15,43,90,0.16)",
    boxShadow: "0 10px 22px rgba(10, 30, 70, 0.10)",
    scrollSnapAlign: "start",
    background: "#e8f2ff",
  },
  sliderHint: { margin: "10px 0 0", fontSize: 13, color: "rgba(11,27,58,0.65)" },

  reviews: {
    display: "grid",
    gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
    gap: 12,
    marginTop: 14,
  },
  review: {
    padding: 14,
    borderRadius: 16,
    border: "1px solid rgba(15,43,90,0.12)",
    background: "#ffffff",
  },
  starsRow: { display: "flex", alignItems: "center", gap: 6, marginBottom: 8 },
  starsText: { fontSize: 13, fontWeight: 800, color: "rgba(11,27,58,0.75)" },
  reviewText: { margin: 0, color: "rgba(11,27,58,0.78)", lineHeight: 1.45 },
  reviewName: { margin: "10px 0 0", fontWeight: 900, color: "#0b1b3a" },

  footer: { marginTop: 24, textAlign: "center", color: "rgba(11,27,58,0.65)", fontSize: 13 },

  responsive: `
    /* Tablets */
    @media (max-width: 900px) {
      .heroGrid { grid-template-columns: 1fr; }
      .cards { grid-template-columns: 1fr 1fr; }
      .split { grid-template-columns: 1fr; }
      .reviews { grid-template-columns: 1fr 1fr; }
    }

    /* Phones */
    @media (max-width: 600px) {
      .cards { grid-template-columns: 1fr; }
      .reviews { grid-template-columns: 1fr; }
    }
  `,
};

function Star({ filled = true }) {
  // Google-style: solid star when filled, light gray when not
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      aria-hidden="true"
      style={{ flexShrink: 0 }}
    >
      <path
        d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
        fill={filled ? "#fbbc04" : "#d9d9d9"}
      />
    </svg>
  );
}

function StarRating({ rating = 5 }) {
  const stars = [1, 2, 3, 4, 5].map((n) => <Star key={n} filled={n <= rating} />);
  return (
    <div style={styles.starsRow}>
      {stars}
      <span style={styles.starsText}>{rating}.0</span>
    </div>
  );
}

const ImageSlider = ({ images }) => {
  return (
    <div style={styles.sliderWrap}>
      <div style={styles.sliderRow}>
        {images.map((src, i) => (
          <img key={i} src={src} alt="Project photo" style={styles.slide} />
        ))}
      </div>
      <p style={styles.sliderHint}>Swipe/scroll to view all photos.</p>
    </div>
  );
};

export default function Page() {
  // ✅ Put your JPEGs in: /public/images/
  // ✅ Use EXACT filenames here (case-sensitive)
  const flooringImages = [
    "/images/flooring-after-1.jpg",
    "/images/flooring-after-2.jpg",
    "/images/flooring-before-1.jpg",
    "/images/flooring-before-2.jpg",
  ];

  const paintingImages = [
    "/images/painting-after-1.jpg",
    "/images/painting-after-2.jpg",
    "/images/painting-before-1.jpg",
  ];

  const services = [
    "Drywall repair & patches",
    "Painting (interior/exterior)",
    "Flooring repairs & installs",
    "Trim, baseboards & doors",
    "Light fixture & fan installs",
    "Minor plumbing fixes",
    "Fence & gate repairs",
    "Caulking, sealing & touch-ups",
    "General home repairs",
  ];

  return (
    <div style={styles.page}>
      <style>{styles.responsive}</style>

      <div style={styles.container}>
        {/* NAV */}
        <div style={styles.nav}>
          <div style={styles.brand}>TC Handyman</div>
          <div style={styles.navLinks}>
            <a style={styles.navLink} href="#services">Services</a>
            <a style={styles.navLink} href="#about">About</a>
            <a style={styles.navLink} href="#gallery">Work</a>
            <a style={styles.navLink} href="#reviews">Reviews</a>
            <a style={styles.navLink} href="#contact">Contact</a>
          </div>
        </div>

        {/* HERO */}
        <section style={styles.hero}>
          <div className="heroGrid" style={styles.heroGrid}>
            <div>
              <h1 style={styles.heroTitle}>Reliable handyman work in Tooele County</h1>
              <p style={styles.heroText}>
                Repairs, upgrades, and clean finishes — done right the first time.
              </p>

              <div style={styles.pillRow}>
                <span style={styles.pill}>Fast response</span>
                <span style={styles.pill}>Quality work</span>
                <span style={styles.pill}>Fair pricing</span>
                <span style={styles.pill}>Before/After photos</span>
              </div>

              <div style={styles.buttonRow}>
                <a style={styles.primaryBtn} href="#contact">Get a Free Quote</a>
                <a style={styles.ghostBtn} href="#gallery">See My Work</a>
              </div>
            </div>

            <div style={styles.heroCard}>
              <div style={{ fontWeight: 900, fontSize: 16 }}>Quick Contact</div>
              <div style={{ color: "rgba(255,255,255,0.9)", fontSize: 14, lineHeight: 1.45 }}>
                Text Michael for a free quote.
                <br />
                Include: your address, requested date/time, what you need done, and pictures.
              </div>
              <a
                style={styles.primaryBtn}
                href="sms:9285774808?&body=Hello%20Michael%2C%20my%20name%20is%20______.%20I%20would%20like%20you%20to%20come________(date%2Ftime).%20I%20need%20__________(work%20needs%20done).%20(send%20pictures)"
              >
                Text Now
              </a>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section id="services" style={styles.section}>
          <h2 style={styles.sectionTitle}>Services</h2>
          <p style={styles.sectionSub}>Here are some of the jobs I can help you with.</p>

          <div className="cards" style={styles.cards}>
            {services.map((s, i) => (
              <div key={i} style={styles.card}>
                <h3 style={styles.cardTitle}>{s}</h3>
                <p style={styles.cardText}>
                  Need something similar? Send a picture and I’ll tell you what it’ll take.
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ABOUT + WHY */}
        <section id="about" style={styles.section}>
          <h2 style={styles.sectionTitle}>About Me</h2>
          <p style={styles.sectionSub}>
            Now living in Tooele County, I would love to support your home’s needs or something like that.
          </p>

          <div className="split" style={styles.split}>
            <div style={styles.card}>
              <h3 style={styles.cardTitle}>What you can expect</h3>
              <p style={styles.cardText}>
                Clear communication, clean work areas, and results you’ll be happy with.
                I treat your home like it’s my own.
              </p>
            </div>
            <div style={styles.card}>
              <h3 style={styles.cardTitle}>Why choose me</h3>
              <p style={styles.cardText}>
                I show up, I’m honest about pricing and timelines, and I focus on the details that make work look professional.
              </p>
            </div>
          </div>
        </section>

        {/* GALLERY */}
        <section id="gallery" style={styles.section}>
          <h2 style={styles.sectionTitle}>Before & After</h2>
          <p style={styles.sectionSub}>Swipe through the photos to see real results.</p>

          <div style={{ marginTop: 14 }}>
            <h3 style={{ margin: "0 0 6px", color: "#0b1b3a", fontWeight: 900 }}>
              Flooring Job
            </h3>
            <ImageSlider images={flooringImages} />
          </div>

          <div style={{ marginTop: 18 }}>
            <h3 style={{ margin: "0 0 6px", color: "#0b1b3a", fontWeight: 900 }}>
              Painting Job
            </h3>
            <ImageSlider images={paintingImages} />
          </div>

          <p style={{ marginTop: 12, color: "rgba(11,27,58,0.7)", fontSize: 13 }}>
            If any image doesn’t show, double-check the filename matches exactly and that it’s inside <b>/public/images/</b>.
          </p>
        </section>

        {/* REVIEWS */}
        <section id="reviews" style={styles.section}>
          <h2 style={styles.sectionTitle}>Reviews</h2>
          <p style={styles.sectionSub}>Here’s what customers say about the work.</p>

          <div className="reviews" style={styles.reviews}>
            <div style={styles.review}>
              <StarRating rating={5} />
              <p style={styles.reviewText}>
                Michael knocked out a punch-list at our place in Tooele and everything came out clean and solid.
                Great communication and showed up on time.
              </p>
              <p style={styles.reviewName}>— Jason R., Tooele</p>
            </div>

            <div style={styles.review}>
              <StarRating rating={5} />
              <p style={styles.reviewText}>
                We needed painting touch-ups before family came into town in Stansbury Park.
                He was fast, professional, and the walls look brand new.
              </p>
              <p style={styles.reviewName}>— Amanda K., Stansbury Park</p>
            </div>

            <div style={styles.review}>
              <StarRating rating={5} />
              <p style={styles.reviewText}>
                Had a few repairs around the house in Lake Point and he handled all of it in one visit.
                Fair pricing and quality work.
              </p>
              <p style={styles.reviewName}>— Brian S., Lake Point</p>
            </div>

            <div style={styles.review}>
              <StarRating rating={5} />
              <p style={styles.reviewText}>
                Flooring repair in Erda turned out awesome — you can’t even tell where the old damage was.
                Clean work area and respectful the whole time.
              </p>
              <p style={styles.reviewName}>— Megan T., Erda</p>
            </div>

            <div style={styles.review}>
              <StarRating rating={5} />
              <p style={styles.reviewText}>
                Quick turnaround for a small drywall patch in Grantsville.
                Matched the texture really well and the paint blend looks perfect.
              </p>
              <p style={styles.reviewName}>— Chris P., Grantsville</p>
            </div>

            <div style={styles.review}>
              <StarRating rating={5} />
              <p style={styles.reviewText}>
                He installed a couple fixtures and fixed a door that wouldn’t close right in Stockton.
                Everything works great now — super helpful and easy to work with.
              </p>
              <p style={styles.reviewName}>— Haley M., Stockton</p>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" style={styles.section}>
          <h2 style={styles.sectionTitle}>Contact</h2>
          <p style={styles.sectionSub}>
            For the fastest quote, text Michael and include pictures.
          </p>

          <div className="split" style={styles.split}>
            <div style={styles.card}>
              <h3 style={styles.cardTitle}>Text</h3>
              <p style={styles.cardText}>
                <b>928-577-4808</b>
                <br />
                Message format:
                <br />
                “Hello Michael, my name is _____. I would like you to come _____ (date/time).
                I need _____ (work needs done). (send pictures)”
              </p>
              <a
                style={{ ...styles.primaryBtn, marginTop: 10 }}
                href="sms:9285774808?&body=Hello%20Michael%2C%20my%20name%20is%20______.%20I%20would%20like%20you%20to%20come________(date%2Ftime).%20I%20need%20__________(work%20needs%20done).%20(send%20pictures)"
              >
                Tap to Text
              </a>
            </div>

            <div style={styles.card}>
              <h3 style={styles.cardTitle}>Hours</h3>
              <p style={styles.cardText}>
                Mon–Sat: 8am–6pm
                <br />
                Sun: By request
                <br /><br />
                Tooele County & surrounding areas.
              </p>
            </div>
          </div>
        </section>

        <div style={styles.footer}>
          © {new Date().getFullYear()} TC Handyman. All rights reserved.
        </div>
      </div>
    </div>
  );
}
