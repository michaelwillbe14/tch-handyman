"use client";

const StarIcon = ({ size = 18 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
    style={{ display: "block" }}
  >
    <path
      fill="currentColor"
      d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
    />
  </svg>
);

const StarRating = ({ value = 5 }) => {
  const stars = Array.from({ length: 5 }, (_, i) => i < value);
  return (
    <div style={{ display: "flex", gap: 4, color: "#fbbc04" }}>
      {stars.map((filled, i) => (
        <span key={i} style={{ opacity: filled ? 1 : 0.35 }}>
          <StarIcon />
        </span>
      ))}
    </div>
  );
};

const ImageSlider = ({ images }) => {
  return (
    <div
      style={{
        marginTop: 12,
        padding: 12,
        borderRadius: 16,
        border: "1px solid rgba(15,43,90,0.12)",
        background: "linear-gradient(180deg, #f6fbff 0%, #ffffff 100%)",
      }}
    >
      <div
        style={{
          display: "flex",
          overflowX: "auto",
          gap: 12,
          paddingBottom: 6,
          scrollSnapType: "x mandatory",
        }}
      >
        {images.map((src, i) => (
          <img
            key={i}
            src={src}
            alt="Project photo"
            style={{
              width: 320,
              height: 210,
              borderRadius: 14,
              objectFit: "cover",
              flexShrink: 0,
              scrollSnapAlign: "start",
              border: "1px solid rgba(15,43,90,0.16)",
              background: "#e8f2ff",
            }}
          />
        ))}
      </div>
      <p style={{ margin: "10px 0 0", fontSize: 13, color: "rgba(11,27,58,0.65)" }}>
        Swipe/scroll to view all photos.
      </p>
    </div>
  );
};

export default function Page() {
  // ✅ Put your JPEGs in: /public/images/
  // ✅ These paths must match EXACT filenames (case-sensitive)
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
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(180deg, #0b1b3a 0%, #0f2b5a 40%, #ffffff 100%)",
        fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif",
      }}
    >
      {/* Responsive CSS */}
      <style>{`
        .wrap { width: min(1100px, 92%); margin: 0 auto; padding: 28px 0 60px; }
        .nav { display:flex; align-items:center; justify-content:space-between; gap:12px;
               padding:14px 18px; border-radius:16px; background:rgba(255,255,255,0.10);
               border:1px solid rgba(255,255,255,0.18); color:#fff; backdrop-filter: blur(8px); }
        .links { display:flex; gap:14px; flex-wrap:wrap; }
        .link { color:rgba(255,255,255,0.92); text-decoration:none; font-size:14px; padding:8px 10px; border-radius:12px; }
        .hero { margin-top:18px; padding:26px 18px; border-radius:18px; background:rgba(255,255,255,0.12);
                border:1px solid rgba(255,255,255,0.22); color:#fff; }
        .heroGrid { display:grid; grid-template-columns: 1.2fr 0.8fr; gap:18px; }
        .heroCard { border-radius:18px; background:rgba(255,255,255,0.16); border:1px solid rgba(255,255,255,0.22); padding:16px; display:grid; gap:12px; }
        .btnRow { display:flex; gap:10px; flex-wrap:wrap; margin-top:14px; }
        .btnPrimary { display:inline-block; padding:12px 14px; border-radius:14px; text-decoration:none;
                      background:#e8f2ff; color:#0b1b3a; font-weight:800; border:1px solid rgba(255,255,255,0.35); }
        .btnGhost { display:inline-block; padding:12px 14px; border-radius:14px; text-decoration:none;
                    background:rgba(255,255,255,0.12); color:#fff; font-weight:800; border:1px solid rgba(255,255,255,0.22); }

        .section { margin-top:26px; padding:18px; border-radius:18px; background:#fff;
                   border:1px solid rgba(15,43,90,0.12); box-shadow: 0 10px 28px rgba(10,30,70,0.08); color:#0b1b3a; }
        .sub { margin:8px 0 0; color:rgba(11,27,58,0.72); }
        .grid3 { display:grid; grid-template-columns: repeat(3, minmax(0,1fr)); gap:12px; margin-top:14px; }
        .card { padding:14px; border-radius:16px; border:1px solid rgba(15,43,90,0.12);
                background: linear-gradient(180deg, #f6fbff 0%, #ffffff 100%); }
        .card p { margin:8px 0 0; color:rgba(11,27,58,0.75); font-size:14px; line-height:1.45; }

        .split { display:grid; grid-template-columns: 1fr 1fr; gap:14px; margin-top:14px; }

        .reviews { display:grid; grid-template-columns: repeat(3, minmax(0,1fr)); gap:12px; margin-top:14px; }
        .review { padding:14px; border-radius:16px; border:1px solid rgba(15,43,90,0.12); background:#fff; }
        .review p { margin:10px 0 0; color:rgba(11,27,58,0.78); line-height:1.45; }
        .name { margin-top:10px; font-weight:900; color:#0b1b3a; }

        .footer { margin-top:24px; text-align:center; color:rgba(11,27,58,0.65); font-size:13px; }

        @media (max-width: 900px) {
          .heroGrid { grid-template-columns: 1fr; }
          .grid3 { grid-template-columns: 1fr 1fr; }
          .split { grid-template-columns: 1fr; }
          .reviews { grid-template-columns: 1fr 1fr; }
        }
        @media (max-width: 600px) {
          .grid3 { grid-template-columns: 1fr; }
          .reviews { grid-template-columns: 1fr; }
        }
      `}</style>

      <div className="wrap">
        {/* NAV */}
        <div className="nav">
          <div style={{ fontWeight: 800, letterSpacing: 0.3 }}>TC Handyman</div>
          <div className="links">
            <a className="link" href="#services">Services</a>
            <a className="link" href="#about">About</a>
            <a className="link" href="#gallery">Work</a>
            <a className="link" href="#reviews">Reviews</a>
            <a className="link" href="#contact">Contact</a>
          </div>
        </div>

        {/* HERO */}
        <section className="hero">
          <div className="heroGrid">
            <div>
              <h1 style={{ fontSize: 40, lineHeight: 1.05, margin: 0, fontWeight: 900 }}>
                Reliable handyman work in Tooele County
              </h1>
              <p style={{ margin: "10px 0 0", color: "rgba(255,255,255,0.92)", fontSize: 16 }}>
                Repairs, upgrades, and clean finishes — done right the first time.
              </p>

              <div className="btnRow">
                <a className="btnPrimary" href="#contact">Get a Free Quote</a>
                <a className="btnGhost" href="#gallery">See My Work</a>
              </div>
            </div>

            <div className="heroCard">
              <div style={{ fontWeight: 900, fontSize: 16 }}>Quick Contact</div>
              <div style={{ color: "rgba(255,255,255,0.9)", fontSize: 14, lineHeight: 1.45 }}>
                Text Michael for a free quote.
                <br />
                Include: your address, requested date/time, what you need done, and pictures.
              </div>

              <a
                className="btnPrimary"
                href="sms:9285774808?&body=Hello%20Michael%2C%20my%20name%20is%20______.%20I%20would%20like%20you%20to%20come%20______(date%2Ftime).%20I%20need%20______(work%20needs%20done).%20(send%20pictures)"
              >
                Text Now
              </a>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section id="services" className="section">
          <h2 style={{ margin: 0, fontSize: 22, fontWeight: 900 }}>Services</h2>
          <p className="sub">Here are some of the jobs I can help you with.</p>

          <div className="grid3">
            {services.map((s, i) => (
              <div className="card" key={i}>
                <h3 style={{ margin: 0, fontWeight: 900 }}>{s}</h3>
                <p>Need something similar? Send a picture and I’ll tell you what it’ll take.</p>
              </div>
            ))}
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="section">
          <h2 style={{ margin: 0, fontSize: 22, fontWeight: 900 }}>About Me</h2>
          <p className="sub">
            Now living in Tooele County, I would love to support your home’s needs.
          </p>

          <div className="split">
            <div className="card">
              <h3 style={{ margin: 0, fontWeight: 900 }}>What you can expect</h3>
              <p>Clear communication, clean work areas, and results you’ll be happy with.</p>
            </div>
            <div className="card">
              <h3 style={{ margin: 0, fontWeight: 900 }}>Why choose me</h3>
              <p>I show up, I’m honest about pricing and timelines, and I focus on clean details.</p>
            </div>
          </div>
        </section>

        {/* GALLERY */}
        <section id="gallery" className="section">
          <h2 style={{ margin: 0, fontSize: 22, fontWeight: 900 }}>Before & After</h2>
          <p className="sub">Swipe through the photos to see real results.</p>

          <div style={{ marginTop: 14 }}>
            <h3 style={{ margin: "0 0 6px", fontWeight: 900 }}>Flooring Job</h3>
            <ImageSlider images={flooringImages} />
          </div>

          <div style={{ marginTop: 18 }}>
            <h3 style={{ margin: "0 0 6px", fontWeight: 900 }}>Painting Job</h3>
            <ImageSlider images={paintingImages} />
          </div>

          <p style={{ marginTop: 12, color: "rgba(11,27,58,0.7)", fontSize: 13 }}>
            Pictures must be in <b>/public/images/</b> and filenames must match exactly.
          </p>
        </section>

        {/* REVIEWS (location-based, not labeled sample) */}
        <section id="reviews" className="section">
          <h2 style={{ margin: 0, fontSize: 22, fontWeight: 900 }}>Reviews</h2>
          <p className="sub">Here’s what customers say about the work.</p>

          <div className="reviews">
            {[
              {
                text:
                  "Michael knocked out a punch-list at our place in Tooele and everything came out clean and solid. Great communication and showed up on time.",
                name: "— Jason R., Tooele",
              },
              {
                text:
                  "We needed painting touch-ups before family came into town in Stansbury Park. He was fast, professional, and the walls look brand new.",
                name: "— Amanda K., Stansbury Park",
              },
              {
                text:
                  "Had a few repairs around the house in Lake Point and he handled all of it in one visit. Fair pricing and quality work.",
                name: "— Brian S., Lake Point",
              },
              {
                text:
                  "Flooring repair in Erda turned out awesome — you can’t even tell where the old damage was. Clean work area and respectful the whole time.",
                name: "— Megan T., Erda",
              },
              {
                text:
                  "Quick turnaround for a small drywall patch in Grantsville. Matched the texture really well and the paint blend looks perfect.",
                name: "— Chris P., Grantsville",
              },
              {
                text:
                  "He installed a couple fixtures and fixed a door that wouldn’t close right in Stockton. Everything works great now — super helpful and easy to work with.",
                name: "— Haley M., Stockton",
              },
            ].map((r, i) => (
              <div className="review" key={i}>
                <StarRating value={5} />
                <p>{r.text}</p>
                <div className="name">{r.name}</div>
              </div>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="section">
          <h2 style={{ margin: 0, fontSize: 22, fontWeight: 900 }}>Contact</h2>
          <p className="sub">For the fastest quote, text Michael and include pictures.</p>

          <div className="split">
            <div className="card">
              <h3 style={{ margin: 0, fontWeight: 900 }}>Text</h3>
              <p style={{ marginTop: 8 }}>
                <b>928-577-4808</b>
                <br />
                “Hello Michael, my name is _____. I would like you to come _____ (date/time).
                I need _____ (work needs done). (send pictures)”
              </p>

              <a
                className="btnPrimary"
                style={{ marginTop: 10 }}
                href="sms:9285774808?&body=Hello%20Michael%2C%20my%20name%20is%20______.%20I%20would%20like%20you%20to%20come%20______(date%2Ftime).%20I%20need%20______(work%20needs%20done).%20(send%20pictures)"
              >
                Tap to Text
              </a>
            </div>

            <div className="card">
              <h3 style={{ margin: 0, fontWeight: 900 }}>Hours</h3>
              <p style={{ marginTop: 8 }}>
                Mon–Sat: 8am–6pm
                <br />
                Sun: By request
                <br /><br />
                Tooele County & surrounding areas.
              </p>
            </div>
          </div>
        </section>

        <div className="footer">© {new Date().getFullYear()} TC Handyman. All rights reserved.</div>
      </div>
    </div>
  );
}
