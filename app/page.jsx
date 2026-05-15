import {
  Wrench,
  Cable,
  Building2,
  ShieldCheck,
  Instagram,
  Linkedin,
  Facebook,
  Youtube,
} from "lucide-react";

export default function Home() {
  const heroImage =
    "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&w=1600&q=80";

  const garageImage =
    "https://images.unsplash.com/photo-1615906655593-ad0386982a0f?auto=format&fit=crop&w=1200&q=80";

  const services = [
    ["Diagnostics", "Structured EV charging issue review with a field-focused mindset."],
    ["Infrastructure Support", "Support for charging environments, site visibility, and operational flow."],
    ["Cable Management", "Cleaner charging areas with practical cable keeper and wall-arm concepts."],
    ["Client Portal", "Ticket-first support flow for requests, photos, notes, and future reports."],
  ];

  const projectAreas = [
    ["Site Review", "Charging location, layout, access, and practical usability."],
    ["Cable Setup", "Cleaner routing, better handling, and reduced daily friction."],
    ["Field Notes", "Issue documentation, photos, observations, and support history."],
  ];

  return (
    <main style={{ background: "#f6f3ec", color: "#111827", fontFamily: "Arial, sans-serif" }}>
      <nav style={{
        position: "sticky", top: 0, zIndex: 1000, background: "rgba(246,243,236,0.92)",
        backdropFilter: "blur(14px)",
        boxShadow: "0 6px 24px rgba(15,23,42,0.06)",
        borderBottom: "1px solid rgba(0,0,0,0.06)"
      }}>
        <div style={{
          maxWidth: "1220px", margin: "0 auto", padding: "18px 34px",
          display: "flex", justifyContent: "space-between", alignItems: "center"
        }}>
          <strong style={{ fontSize: "26px",
                           letterSpacing: "-0.6px"
                         }}>NavaCharge</strong>

          <div style={{ display: "flex", gap: "28px", alignItems: "center", fontSize: "14px" }}>
            <a href="/services" style={{ color: "#111827", textDecoration: "none", fontWeight: "500", transition: "opacity 0.2s ease" }}>Services</a>
            <a href="#projects" style={{ color: "#111827", textDecoration: "none", fontWeight: "500", transition: "opacity 0.2s ease" }}>Projects</a>
            <a href="/login" style={{ color: "#111827", textDecoration: "none", fontWeight: "500", transition: "opacity 0.2s ease" }}>Portal</a>
            <a href="#contact" style={{ color: "#111827", textDecoration: "none", fontWeight: "500", transition: "opacity 0.2s ease" }}>Contact</a>
            <a
              href="#contact"
              style={{
              color: "#111827",
              textDecoration: "none",
              fontWeight: "500",
              transition: "opacity 0.2s ease",
              }}
              >
              Support
           </a>
          </div>
        </div>
      </nav>

      <section style={{ maxWidth: "1280px", margin: "0 auto", padding: "88px 28px 150px" }}>
        <div style={{
          minHeight: "420px", borderRadius: "34px", overflow: "hidden",
            boxShadow: "0 40px 120px rgba(15,23,42,0.28)",
            border: "1px solid rgba(255,255,255,0.06)",
          backgroundImage: `
           linear-gradient(
           135deg,
           rgba(2,6,23,0.94) 0%,
           rgba(15,23,42,0.68) 35%,
           rgba(15,23,42,0.24) 70%,
           rgba(15,23,42,0.12) 100%
           ),
url(${heroImage})
`,
          backgroundSize: "cover", backgroundPosition: "center", backgroundAttachment: "fixed",
          color: "white", padding: "64px 72px", display: "flex", alignItems: "flex-end"
        }}>
          <div
  style={{
    maxWidth: "520px",
    minHeight: "600px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  }}
>
  <div>
    <p
      style={{
        color: "#93c5fd",
        fontWeight: "700",
        marginBottom: "22px",
      }}
    >
      EV Charging Diagnostics & Infrastructure Support
    </p>

    <h1
      style={{
        fontSize: "clamp(36px, 4.8vw, 50px)",
        lineHeight: "1.02",
        margin: "0 0 22px",
        fontWeight: "800",
      }}
    >
      Practical EV Charging Support
    </h1>

    <p
      style={{
        fontSize: "clamp(16px, 2vw, 21px)",
        lineHeight: "1.9",
        color: "#dbeafe",
      }}
    >
      Structured EV charging support focused on diagnostics,
      field coordination, and real-world charging environments.
    </p>
  </div>

  <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
    <a
      href="/login"
      style={{
        background:
          "linear-gradient(135deg,#2563eb 0%,#3b82f6 100%)",
        boxShadow:
          "0 14px 34px rgba(37,99,235,0.35)",
        color: "white",
        padding: "14px 22px",
        borderRadius: "13px",
        textDecoration: "none",
        transition: "all 0.25s ease",
        fontWeight: "800",
      }}
    >
      Open Client Portal
    </a>

    <a
      href="#services"
      style={{
        color: "white",
        padding: "14px 22px",
        borderRadius: "13px",
        border: "1px solid rgba(255,255,255,0.08)",
        background: "rgba(255,255,255,0.06)",
        backdropFilter: "blur(6px)",
        textDecoration: "none",
        transition: "all 0.25s ease",
        fontWeight: "800",
      }}
    >
      Explore Services
    </a>
    </div>
  </div>
</div>
</section>
   <section className="focus-section">
  <style>{`
    .focus-section {
      width: 100%;
      background: #f6f3ec;
      padding: 80px 24px 140px;
      overflow: hidden;
    }

    .focus-wrap {
      position: relative;
      max-width: 1180px;
      height: 980px;
      margin: 0 auto;
    }

    .focus-title {
      text-align: center;
      font-size: 22px;
      font-weight: 800;
      letter-spacing: 6px;
      color: #2f6f8f;
      margin-bottom: 28px;
    }

    .plug {
      position: absolute;
      top: 56px;
      left: 50%;
      width: 52px;
      height: 50px;
      transform: translateX(-50%);
      border: 4px solid #2f6f8f;
      border-radius: 14px;
      background: #f6f3ec;
      z-index: 4;
    }

    .plug::before,
    .plug::after {
      content: "";
      position: absolute;
      top: -31px;
      width: 4px;
      height: 30px;
      background: #2f6f8f;
      border-radius: 4px;
    }

    .plug::before {
      left: 13px;
    }

    .plug::after {
      right: 13px;
    }

    .focus-headline {
      position: absolute;
      top: 170px;
      left: 50%;
      transform: translateX(-50%);
      width: 100%;
      text-align: center;
      font-size: 42px;
      font-weight: 800;
      color: #0f172a;
      z-index: 3;
    }

    .focus-path {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
      z-index: 1;
      pointer-events: none;
    }

    .focus-card {
      position: absolute;
      width: 390px;
      min-height: 210px;
      background: rgba(255, 255, 255, 0.72);
      border-radius: 28px;
      padding: 32px 36px;
      box-shadow: 0 18px 45px rgba(15, 23, 42, 0.08);
      z-index: 2;
      backdrop-filter: blur(4px);
    }

    .focus-card h3 {
      margin: 0 0 22px;
      font-size: 30px;
      line-height: 1.1;
      font-weight: 800;
      color: #0f172a;
      display: flex;
      align-items: center;
      gap: 14px;
    }

    .focus-card h3::before {
      content: "";
      width: 13px;
      height: 13px;
      border-radius: 50%;
      background: #2f6f8f;
      flex: 0 0 auto;
    }

    .focus-card p {
      margin: 0;
      font-size: 17px;
      line-height: 1.75;
      color: #334155;
    }

    .focus-card a {
      display: inline-block;
      margin-top: 22px;
      font-size: 19px;
      font-weight: 800;
      color: #2f6f8f;
      text-decoration: none;
    }

    .diagnostic {
      top: 310px;
      left: 70px;
    }

    .rma {
      top: 320px;
      right: 80px;
    }

    .site {
      top: 640px;
      left: 70px;
    }

    .infra {
      top: 655px;
      right: 80px;
    }

    @media (max-width: 900px) {
      .focus-wrap {
        height: auto;
        display: flex;
        flex-direction: column;
        gap: 24px;
      }

      .focus-title {
        margin-bottom: 90px;
      }

      .plug {
        top: 52px;
      }

      .focus-headline {
        position: relative;
        top: auto;
        left: auto;
        transform: none;
        font-size: 32px;
        margin-bottom: 30px;
      }

      .focus-path {
        display: none;
      }

      .focus-card {
        position: relative;
        top: auto;
        left: auto;
        right: auto;
        width: 100%;
        max-width: 520px;
        margin: 0 auto;
      }
    }

    @media (max-width: 520px) {
      .focus-section {
        padding: 60px 18px 90px;
      }

      .focus-headline {
        font-size: 28px;
      }

      .focus-card {
        padding: 28px 24px;
      }

      .focus-card h3 {
        font-size: 26px;
      }
    }
  `}</style>

  <div className="focus-wrap">
    <div className="focus-title">OUR FOCUS</div>

    <div className="plug" />

    <svg
      className="focus-path"
      viewBox="0 0 1180 980"
      preserveAspectRatio="none"
      fill="none"
    >
      <path
        d="
          M590 106
          V150
          H1010
          C1085 150 1130 190 1130 260
          C1130 330 1085 370 1010 370

          H130
          C65 370 35 405 35 470
          V545
          C35 615 75 650 145 650

          H420
          C505 650 540 600 580 525
          L625 440
          C650 395 690 370 760 370

          H1010
          C1085 370 1130 410 1130 485
          V610
          C1130 690 1085 730 1010 730

          H135
          C65 730 35 770 35 840
          V860
          C35 925 75 955 145 955

          H420
          C505 955 540 905 580 830
          L625 745
          C650 700 690 675 760 675

          H960
          C1040 675 1080 720 1080 795
          V940
        "
        stroke="#2f6f8f"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>

    <h2 className="focus-headline">
      EV charging reliability, made visible
    </h2>

    <div className="focus-card diagnostic">
      <h3>Diagnostic</h3>

      <p>
        Charger behavior, interruptions,
        <br />
        and field observations reviewed
        <br />
        with structure.
      </p>

      <a href="#diagnostic">Explore diagnostics →</a>
    </div>

    <div className="focus-card rma">
      <h3>RMA validation</h3>

      <p>
        Returned units, issue isolation,
        <br />
        functional checks, and
        <br />
        redeployment readiness.
      </p>

      <a href="#rma">View validation →</a>
    </div>

    <div className="focus-card site">
      <h3>Site reliability</h3>

      <p>
        Operational continuity, uptime
        <br />
        awareness, and site-level
        <br />
        support visibility.
      </p>

      <a href="#site">Improve uptime →</a>
    </div>

    <div className="focus-card infra">
      <h3>Infrastructure</h3>

      <p>
        Cable flow, placement, usability,
        <br />
        and coordination for real
        <br />
        charging sites.
      </p>

      <a href="#infra">View service →</a>
    </div>
  </div>
</section>
     <section style={{ background: "#0f172a", color: "white", padding: "90px 28px" }}>
        <div style={{
          maxWidth: "1220px", margin: "0 auto", display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))", gap: "34px", alignItems: "center"
        }}>
          <div>
            <p style={{ color: "#93c5fd", fontWeight: "700" }}>Cable Management</p>
            <h2 style={{ fontSize: "46px", lineHeight: "1.1", marginBottom: "22px" }}>
              Cleaner charging spaces. Better daily usability.
            </h2>
            <p style={{ color: "#cbd5e1", lineHeight: "1.8", fontSize: "18px" }}>
              Cable keepers and wall-mounted arm concepts help reduce clutter,
              improve handling, and make residential or commercial charging spaces
              look safer and more professional.
            </p>
          </div>

          <div style={{
            minHeight: "360px", borderRadius: "28px", backgroundImage: `url(${garageImage})`,
            backgroundSize: "cover", backgroundPosition: "center",
            boxShadow: "0 30px 70px rgba(0,0,0,0.35)"
          }} />
        </div>
      </section>

      <section id="portal" style={{ maxWidth: "1220px", margin: "0 auto", padding: "100px 28px" }}>
        <div style={{
          display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
          gap: "34px", alignItems: "center"
        }}>
          <div>
            <p style={{ color: "#2563eb", fontWeight: "800" }}>Client Portal Preview</p>
            <h2 style={{ fontSize: "46px", lineHeight: "1.1", marginBottom: "22px" }}>
              Structured client workflows for EV charging support operations.
            </h2>
            <p style={{ color: "#4b5563", lineHeight: "1.8", fontSize: "18px" }}>
              Clients can submit structured requests, upload field photos,
              track diagnostics progress, review technician notes,
              and maintain a clearer support history over time.
            </p>
          </div>

          <div style={{
            background: "#111827", color: "white", borderRadius: "28px",
            padding: "30px", boxShadow: "0 28px 70px rgba(15,23,42,0.22)"
          }}>
            {[
              "Ticket #NC-1024 • New Request",
              "Photos Uploaded • Charging Area",
              "Technician Assigned • Field Review",
              "Site Visit Scheduled • May 18",
              "Diagnostics Report • Draft Ready",
             ].map((item) => (
              <div key={item} style={{
                background: "rgba(255,255,255,0.06)", 
                backdropFilter: "blur(8px)",
                transition: "all 0.25s ease",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "16px", padding: "18px", marginBottom: "14px", color: "#dbeafe",
                fontWeight: "600",
                letterSpacing: "0.2px",
              }}>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" style={{ maxWidth: "1220px", margin: "0 auto", padding: "20px 28px 90px" }}>
        <h2 style={{ fontSize: "52px", marginBottom: "34px" }}>Field Operations & Infrastructure Support</h2>
         <p
           style={{
           color: "#4b5563",
           maxWidth: "760px",
           lineHeight: "1.85",
           fontSize: "18px",
           marginBottom: "42px",
            }}
         >
  Practical EV charging support workflows focused on diagnostics visibility,
  cable organization, field coordination, and real-world operational environments.
</p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: "22px" }}>
          {projectAreas.map(([title, text]) => (
            <div key={title} style={{
              background: "white", borderRadius: "24px", overflow: "hidden", padding: "32px",
              boxShadow:
                "0 18px 46px rgba(15,23,42,0.10), 0 2px 8px rgba(15,23,42,0.05)",
                transition: "all 0.25s ease",
                cursor: "pointer",
            }}>
              <div
                style={{
                height: "220px",
                borderRadius: "20px",
                boxShadow: "0 18px 44px rgba(15,23,42,0.16)",  
                marginBottom: "22px",
               backgroundImage:
                  title === "Site Review"
                  ? "url(https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&w=1200&q=80)"
                  : title === "Cable Setup"
                  ? "url(https://images.unsplash.com/photo-1615906655593-ad0386982a0f?auto=format&fit=crop&w=1200&q=80)"
                  : "url(https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1200&q=80)",
                backgroundSize: "cover",
                backgroundPosition: "center",
                 }}
              />
              <h3 style={{ fontSize: "24px", marginBottom: "14px" }}>{title}</h3>
              <p style={{ color: "#4b5563", lineHeight: "1.75" }}>{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" style={{ maxWidth: "1220px", margin: "0 auto", padding: "30px 28px 100px" }}>
        <div style={{
          background:
             "linear-gradient(135deg,#0f172a 0%,#111827 55%,#1e293b 100%)", color: "white", borderRadius: "34px", padding: "68px",
          display: "flex", justifyContent: "space-between", gap: "30px", flexWrap: "wrap",
          alignItems: "center"
        }}>
          <div>
            <h2 style={{ fontSize: "44px", marginBottom: "14px" }}>Need support?</h2>
            <p style={{ color: "#cbd5e1", lineHeight: "1.8", maxWidth: "620px" }}>
              Start with a structured support request. Share the issue, charger details, photos, and site context so the first response is useful.
            </p>
          </div>

          <a href="/request" style={{
            background:
               "linear-gradient(135deg,#2563eb 0%,#3b82f6 100%)",
            boxShadow:
               "0 16px 36px rgba(37,99,235,0.32)", color: "white", padding: "16px 28px",
            borderRadius: "14px", textDecoration: "none", fontWeight: "800"
          }}>
            Submit Support Request
          </a>
        </div>
      </section>

      <footer style={{ background: "#0f172a", color: "#94a3b8", padding: "56px 32px" }}>
        <div style={{
          maxWidth: "1220px", margin: "0 auto", display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: "28px"
        }}>
          <div>
            <strong
              style={{
              color: "white",
              fontSize: "22px",
              fontWeight: "700",
              letterSpacing: "-0.5px",
              }}
             >NavaCharge</strong>
            <p>EV Charging Diagnostics & Infrastructure Support</p>
            <p>Vancouver, BC, Canada</p>
          </div>
          <div>
            <strong style={{ color: "#f8fafc" }}>Navigation</strong>
            <p>Services</p>
            <p>Projects</p>
            <p>Client Portal</p>
          </div>
          <div>
            <strong style={{ color: "white" }}>Connect</strong>
            <div style={{ display: "grid", gap: "12px", marginTop: "14px" }}>
  <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
    <Linkedin size={18} />
    <span>LinkedIn</span>
  </div>

  <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
    <Instagram size={18} />
    <span>Instagram</span>
  </div>

  <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
    <Facebook size={18} />
    <span>Facebook</span>
  </div>

  <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
    <Youtube size={18} />
    <span>YouTube</span>
  </div>
</div>
          </div>
          <div>
            <strong style={{ color: "white" }}>Contact</strong>
            <p>hello@navacharge.ca</p>
            <p>© 2026 NavaCharge</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
