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
   <section
  style={{
    maxWidth: "1180px",
    margin: "0 auto",
    padding: "40px 32px 130px",
  }}
>
  <svg
    viewBox="0 0 1180 1100"
    style={{ width: "100%", height: "auto", display: "block" }}
    fill="none"
  >
    <text x="590" y="42" textAnchor="middle" fontSize="22" fontWeight="800" letterSpacing="6" fill="#2f6f8f">
      OUR FOCUS
    </text>

    <line x1="575" y1="78" x2="575" y2="105" stroke="#2f6f8f" strokeWidth="4" />
    <line x1="605" y1="78" x2="605" y2="105" stroke="#2f6f8f" strokeWidth="4" />
    <rect x="565" y="105" width="50" height="48" rx="12" stroke="#2f6f8f" strokeWidth="4" fill="#f6f3ec" />

    <path
      d="
        M590 153
        V190
        H1010
        C1085 190 1125 225 1125 290
        C1125 350 1085 380 1010 380
        H120
        C65 380 35 410 35 465
        V555
        C35 620 70 650 135 650
        H390
        C470 650 505 615 545 545
        L600 455
        C630 405 670 380 735 380
        H1010
        C1085 380 1125 420 1125 495
        V625
        C1125 700 1085 735 1010 735
        H125
        C65 735 35 770 35 835
        V865
        C35 930 70 960 135 960
        H390
        C470 960 505 925 545 855
        L600 765
        C630 715 670 690 735 690
        H960
        C1035 690 1075 730 1075 805
        V1040
      "
      stroke="#2f6f8f"
      strokeWidth="5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />

    <text x="590" y="265" textAnchor="middle" fontSize="42" fontWeight="800" fill="#0f172a">
      EV charging reliability, made visible
    </text>

    {/* Diagnostic */}
    <rect x="75" y="405" width="380" height="210" rx="28" fill="#ffffff" opacity="0.72" />
    <circle cx="105" cy="445" r="7" fill="#2f6f8f" />
    <text x="125" y="455" fontSize="30" fontWeight="800" fill="#0f172a">Diagnostic</text>
    <text x="125" y="505" fontSize="17" fill="#334155">Charger behavior, interruptions,</text>
    <text x="125" y="535" fontSize="17" fill="#334155">and field observations reviewed</text>
    <text x="125" y="565" fontSize="17" fill="#334155">with structure.</text>
    <text x="125" y="595" fontSize="19" fontWeight="800" fill="#2f6f8f">Explore diagnostics →</text>

    {/* RMA validation */}
    <rect x="645" y="405" width="390" height="210" rx="28" fill="#ffffff" opacity="0.72" />
    <circle cx="675" cy="445" r="7" fill="#2f6f8f" />
    <text x="695" y="455" fontSize="30" fontWeight="800" fill="#0f172a">RMA validation</text>
    <text x="695" y="505" fontSize="17" fill="#334155">Returned units, issue isolation,</text>
    <text x="695" y="535" fontSize="17" fill="#334155">functional checks, and</text>
    <text x="695" y="565" fontSize="17" fill="#334155">redeployment readiness.</text>
    <text x="695" y="595" fontSize="19" fontWeight="800" fill="#2f6f8f">View validation →</text>

    {/* Site reliability */}
    <rect x="75" y="700" width="380" height="210" rx="28" fill="#ffffff" opacity="0.72" />
    <circle cx="105" cy="740" r="7" fill="#2f6f8f" />
    <text x="125" y="750" fontSize="30" fontWeight="800" fill="#0f172a">Site reliability</text>
    <text x="125" y="800" fontSize="17" fill="#334155">Operational continuity, uptime</text>
    <text x="125" y="830" fontSize="17" fill="#334155">awareness, and site-level</text>
    <text x="125" y="860" fontSize="17" fill="#334155">support visibility.</text>
    <text x="125" y="890" fontSize="19" fontWeight="800" fill="#2f6f8f">Improve uptime →</text>

    {/* Infrastructure */}
    <rect x="645" y="700" width="390" height="210" rx="28" fill="#ffffff" opacity="0.72" />
    <circle cx="675" cy="740" r="7" fill="#2f6f8f" />
    <text x="695" y="750" fontSize="30" fontWeight="800" fill="#0f172a">Infrastructure</text>
    <text x="695" y="800" fontSize="17" fill="#334155">Cable flow, placement, usability,</text>
    <text x="695" y="830" fontSize="17" fill="#334155">and coordination for real</text>
    <text x="695" y="860" fontSize="17" fill="#334155">charging sites.</text>
    <text x="695" y="890" fontSize="19" fontWeight="800" fill="#2f6f8f">View service →</text>
  </svg>
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
