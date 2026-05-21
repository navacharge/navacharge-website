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
      Explore 
    </a>
    </div>
  </div>
</div>
</section>
<section className="focus-flow">
  <style>{`
    .operational-hub {
      position: absolute;
      z-index: 2;
      left: 120px;
      top: 1370px;
      width: 840px;
      overflow: hidden;
      border-radius: 36px;
      background: #07111f;
      box-shadow:
        0 30px 90px rgba(7,27,51,0.18),
        0 0 0 1px rgba(255,255,255,0.04);
    }

    .hub-image-wrap {
      position: relative;
      width: 100%;
      height: 520px;
      overflow: hidden;
    }

    .hub-image {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
    }

    .hub-overlay {
      position: absolute;
      inset: 0;
      background:
        linear-gradient(
          90deg,
          rgba(5,10,20,0.88) 0%,
          rgba(5,10,20,0.74) 26%,
          rgba(5,10,20,0.25) 52%,
          rgba(5,10,20,0.08) 100%
        );
    }

    .hub-content {
      position: absolute;
      left: 48px;
      top: 48px;
      width: 340px;
      z-index: 3;
      color: white;
    }

    .hub-logo {
      display: flex;
      align-items: center;
      gap: 14px;
      margin-bottom: 22px;
      font-size: 18px;
      font-weight: 700;
    }

    .hub-logo-mark {
      width: 42px;
      height: 42px;
      border-radius: 12px;
      background: #2563eb;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 900;
      font-size: 24px;
      color: white;
      box-shadow: 0 10px 25px rgba(37,99,235,0.35);
    }

    .hub-title {
      margin: 0;
      font-size: 54px;
      line-height: 0.95;
      font-weight: 900;
      letter-spacing: -2px;
    }

    .hub-subtitle {
      margin: 20px 0 34px;
      font-size: 18px;
      line-height: 1.7;
      color: rgba(255,255,255,0.78);
      max-width: 300px;
    }

    .hub-points {
      display: grid;
      gap: 20px;
    }

    .hub-point {
      display: flex;
      align-items: flex-start;
      gap: 14px;
    }

    .hub-dot {
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background: #2563eb;
      margin-top: 9px;
      box-shadow: 0 0 0 6px rgba(37,99,235,0.18);
    }

    .hub-point strong {
      display: block;
      font-size: 18px;
      margin-bottom: 5px;
      color: white;
    }

    .hub-point span {
      color: rgba(255,255,255,0.72);
      line-height: 1.6;
      font-size: 15px;
    }

    .hub-status {
      position: absolute;
      left: 34px;
      right: 34px;
      bottom: 28px;
      z-index: 3;
      display: grid;
      grid-template-columns: repeat(3,1fr);
      gap: 18px;
    }

    .hub-status-item {
      background: rgba(255,255,255,0.08);
      backdrop-filter: blur(10px);
      border: 1px solid rgba(255,255,255,0.08);
      border-radius: 18px;
      padding: 16px 18px;
      display: flex;
      align-items: center;
      gap: 12px;
    }

    .hub-status-icon {
      width: 42px;
      height: 42px;
      border-radius: 14px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 18px;
      font-weight: 900;
      color: white;
    }

    .hub-status-item:nth-child(1) .hub-status-icon {
      background: rgba(37,99,235,0.22);
      border: 1px solid rgba(37,99,235,0.45);
    }

    .hub-status-item:nth-child(2) .hub-status-icon {
      background: rgba(34,197,94,0.18);
      border: 1px solid rgba(34,197,94,0.4);
    }

    .hub-status-item:nth-child(3) .hub-status-icon {
      background: rgba(245,158,11,0.18);
      border: 1px solid rgba(245,158,11,0.4);
    }

    .hub-status-label {
      font-size: 20px;
      font-weight: 800;
      color: white;
    }

    .hub-status-sub {
      font-size: 13px;
      color: rgba(255,255,255,0.7);
      margin-top: 2px;
    }

    .energy-flow {
      position: absolute;
      z-index: 4;
      width: 22px;
      height: 22px;
      border-radius: 50%;
      background:
        radial-gradient(circle, #ffffff 0%, #93c5fd 25%, #2563eb 65%, transparent 72%);
      box-shadow:
        0 0 14px rgba(37,99,235,0.9),
        0 0 32px rgba(37,99,235,0.75),
        0 0 60px rgba(37,99,235,0.5);
      pointer-events: none;
    }

    .energy-flow::after {
      content: "";
      position: absolute;
      inset: -18px;
      border-radius: 50%;
      background: rgba(37,99,235,0.18);
      filter: blur(12px);
    }
  `}</style>

  <svg className="cable" viewBox="0 0 1080 2050" fill="none">
    <path
      id="mainCable"
      d="
        M540 128
        V205
        C540 235 565 250 600 250
        H835
        C910 250 945 285 945 360
        V385
        C945 460 910 495 835 495
        H120
        C65 495 35 530 35 585
        V625
        C35 680 65 715 120 715
        H835
        C910 715 945 750 945 825
        V850
        C945 900 910 935 835 935
        H120
        C65 935 35 970 35 1025
        V1110
        C35 1165 65 1200 120 1200
        H500
        C560 1200 590 1228 590 1295
        V1390
      "
      stroke="#2563eb"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>

  <div className="energy-flow">
    <animateMotion
      dur="12s"
      repeatCount="indefinite"
      rotate="auto"
      path="
        M540 128
        V205
        C540 235 565 250 600 250
        H835
        C910 250 945 285 945 360
        V385
        C945 460 910 495 835 495
        H120
        C65 495 35 530 35 585
        V625
        C35 680 65 715 120 715
        H835
        C910 715 945 750 945 825
        V850
        C945 900 910 935 835 935
        H120
        C65 935 35 970 35 1025
        V1110
        C35 1165 65 1200 120 1200
        H500
        C560 1200 590 1228 590 1295
        V1390
      "
    />
  </div>

  <div className="operational-hub">
    <div className="hub-image-wrap">
      <img
        className="hub-image"
        src="/aaa.png"
        alt="NavaCharge Operational Hub"
      />

      <div className="hub-overlay" />

      <div className="hub-content">
        <div className="hub-logo">
          <div className="hub-logo-mark">N</div>
          NavaCharge
        </div>

        <h3 className="hub-title">
          Operational<br />
          Hub
        </h3>

        <p className="hub-subtitle">
          Operational intelligence coordinating diagnostics,
          validation, infrastructure and uptime readiness.
        </p>

        <div className="hub-points">
          <div className="hub-point">
            <div className="hub-dot" />
            <div>
              <strong>RMA & Validation</strong>
              <span>
                Returned units reviewed before redeployment.
              </span>
            </div>
          </div>

          <div className="hub-point">
            <div className="hub-dot" />
            <div>
              <strong>Diagnostics & Testing</strong>
              <span>
                Charger behavior and session visibility.
              </span>
            </div>
          </div>

          <div className="hub-point">
            <div className="hub-dot" />
            <div>
              <strong>Infrastructure Coordination</strong>
              <span>
                Cable flow, placement and operational readiness.
              </span>
            </div>
          </div>

          <div className="hub-point">
            <div className="hub-dot" />
            <div>
              <strong>Reliability Operations</strong>
              <span>
                Uptime-focused operational support visibility.
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="hub-status">
        <div className="hub-status-item">
          <div className="hub-status-icon">✓</div>

          <div>
            <div className="hub-status-label">Reliable</div>
            <div className="hub-status-sub">
              Systems perform.
            </div>
          </div>
        </div>

        <div className="hub-status-item">
          <div className="hub-status-icon">●</div>

          <div>
            <div className="hub-status-label">Responsible</div>
            <div className="hub-status-sub">
              Operational ownership.
            </div>
          </div>
        </div>

        <div className="hub-status-item">
          <div className="hub-status-icon">→</div>

          <div>
            <div className="hub-status-label">Ready</div>
            <div className="hub-status-sub">
              Prepared before dispatch.
            </div>
          </div>
        </div>
      </div>
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
