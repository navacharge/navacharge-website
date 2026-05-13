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
        backdropFilter: "blur(14px)", borderBottom: "1px solid rgba(0,0,0,0.06)"
      }}>
        <div style={{
          maxWidth: "1220px", margin: "0 auto", padding: "20px 28px",
          display: "flex", justifyContent: "space-between", alignItems: "center"
        }}>
          <strong style={{ fontSize: "23px" }}>NavaCharge</strong>

          <div style={{ display: "flex", gap: "24px", alignItems: "center", fontSize: "14px" }}>
            <a href="#services" style={{ color: "#111827", textDecoration: "none" }}>Services</a>
            <a href="#projects" style={{ color: "#111827", textDecoration: "none" }}>Projects</a>
            <a href="#portal" style={{ color: "#111827", textDecoration: "none" }}>Portal</a>
            <a href="#contact" style={{ color: "#111827", textDecoration: "none" }}>Contact</a>
            <a href="#contact" style={{
              background: "#2563eb", color: "white", padding: "12px 18px",
              borderRadius: "999px", textDecoration: "none", fontWeight: "700"
            }}>Request Support</a>
          </div>
        </div>
      </nav>

      <section style={{ maxWidth: "1220px", margin: "0 auto", padding: "58px 28px 70px" }}>
        <div style={{
          minHeight: "640px", borderRadius: "34px", overflow: "hidden",
            boxShadow: "0 40px 120px rgba(15,23,42,0.28)",
            border: "1px solid rgba(255,255,255,0.06)",
          backgroundImage: `
           linear-gradient(
           135deg,
           rgba(2,6,23,0.94) 0%,
           rgba(15,23,42,0.82) 35%,
           rgba(15,23,42,0.38) 70%,
           rgba(15,23,42,0.12) 100%
           ),
url(${heroImage})
`,
          backgroundSize: "cover", backgroundPosition: "center",
          color: "white", padding: "76px", display: "flex", alignItems: "center"
        }}>
          <div style={{ maxWidth: "680px" }}>
            <p style={{ color: "#93c5fd", fontWeight: "700", marginBottom: "22px" }}>
              EV Charging Diagnostics & Infrastructure Support
            </p>

            <h1 style={{ fontSize: "68px", lineHeight: "1.02", margin: "0 0 28px", fontWeight: "900" }}>
              Practical Support for Better EV Charging Environments
            </h1>

            <p style={{ fontSize: "21px", lineHeight: "1.75", color: "#dbeafe", marginBottom: "36px" }}>
              NavaCharge helps EV charging owners and operators improve diagnostics,
              site organization, field visibility, and customer support workflows.
            </p>

            <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
              <a href="#portal" style={{
                background:
                  "linear-gradient(135deg,#2563eb 0%,#3b82f6 100%)",
                   boxShadow:
                   "0 14px 34px rgba(37,99,235,0.35)",
                color: "white", padding: "16px 26px",
                borderRadius: "13px", textDecoration: "none", fontWeight: "800"
              }}>Open Client Portal</a>

              <a href="#services" style={{
                color: "white", padding: "16px 26px", borderRadius: "13px",
                border: "1px solid rgba(255,255,255,0.35)",
                background: "rgba(255,255,255,0.04)",
                backdropFilter: "blur(6px)",
                textDecoration: "none", fontWeight: "800"
              }}>Explore Services</a>
            </div>
          </div>
        </div>
      </section>

      <section style={{ maxWidth: "1220px", margin: "0 auto", padding: "10px 28px 80px" }}>
        <div style={{
          display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))",
          gap: "18px"
        }}>
          {["Field Diagnostics", "Support Tickets", "Site Reviews", "Cable Solutions", "Client Portal"].map((item) => (
            <div key={item} style={{
              background: "white", padding: "24px", borderRadius: "20px",
              boxShadow: "0 12px 34px rgba(15,23,42,0.08)", fontWeight: "800",
              textAlign: "center"
            }}>
              {item}
            </div>
          ))}
        </div>
      </section>

      <section id="services" style={{ maxWidth: "1220px", margin: "0 auto", padding: "40px 28px 90px" }}>
        <h2 style={{ fontSize: "46px", marginBottom: "14px" }}>Services</h2>
        <p style={{ color: "#4b5563", maxWidth: "700px", lineHeight: "1.8", marginBottom: "42px", fontSize: "18px" }}>
          Clean, practical, and structured support for real-world EV charging environments.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))", gap: "22px" }}>
          {services.map(([title, text]) => (
            <div key={title} style={{
              background: "white", 
              backgroundImage:
                 "linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(248,250,252,1) 100%)",
              padding: "32px", borderRadius: "24px",
              boxShadow:
                 "0 16px 40px rgba(15,23,42,0.08), 0 2px 8px rgba(15,23,42,0.04)",
              transition: "all 0.25s ease",
             cursor: "pointer",
            }}
          
          >
              <div
  style={{
    width: "52px",
    height: "52px",
    borderRadius: "14px",
    background: "#dbeafe",
    marginBottom: "22px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }}
>
  {title === "Diagnostics" && <Wrench color="#2563eb" />}
  {title === "Infrastructure Support" && <Building2 color="#2563eb" />}
  {title === "Cable Management" && <Cable color="#2563eb" />}
  {title === "Client Portal" && <ShieldCheck color="#2563eb" />}
</div>
              
              <h3 style={{ fontSize: "24px", marginBottom: "14px" }}>{title}</h3>
              <p style={{ color: "#4b5563", lineHeight: "1.75" }}>{text}</p>
            </div>
          ))}
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
              Ticket-first support, built for EV charging issues.
            </h2>
            <p style={{ color: "#4b5563", lineHeight: "1.8", fontSize: "18px" }}>
              Customers will be able to submit support requests, upload photos,
              request site visits, and review notes or reports as the platform grows.
            </p>
          </div>

          <div style={{
            background: "#111827", color: "white", borderRadius: "28px",
            padding: "30px", boxShadow: "0 28px 70px rgba(15,23,42,0.22)"
          }}>
            {[
              "Ticket #NC-1024 — New Request",
              "Photos Uploaded — Charger Area",
              "Status — In Review",
              "Site Visit — Pending Schedule",
              "Diagnostic Notes — Draft Report"
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
        <h2 style={{ fontSize: "46px", marginBottom: "34px" }}>Field Work & Project Areas</h2>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: "22px" }}>
          {projectAreas.map(([title, text]) => (
            <div key={title} style={{
              background: "white", borderRadius: "24px", padding: "32px",
              boxShadow: "0 12px 34px rgba(15,23,42,0.08)"
            }}>
              <h3 style={{ fontSize: "24px", marginBottom: "14px" }}>{title}</h3>
              <p style={{ color: "#4b5563", lineHeight: "1.75" }}>{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" style={{ maxWidth: "1220px", margin: "0 auto", padding: "30px 28px 100px" }}>
        <div style={{
          background: "#111827", color: "white", borderRadius: "30px", padding: "58px",
          display: "flex", justifyContent: "space-between", gap: "30px", flexWrap: "wrap",
          alignItems: "center"
        }}>
          <div>
            <h2 style={{ fontSize: "44px", marginBottom: "14px" }}>Need support?</h2>
            <p style={{ color: "#cbd5e1", lineHeight: "1.8", maxWidth: "620px" }}>
              Start with a structured support request. Share the issue, charger details, photos, and site context so the first response is useful.
            </p>
          </div>

          <a href="mailto:hello@navacharge.ca" style={{
            background: "#2563eb", color: "white", padding: "16px 28px",
            borderRadius: "14px", textDecoration: "none", fontWeight: "800"
          }}>
            Submit Support Request
          </a>
        </div>
      </section>

      <footer style={{ background: "#0f172a", color: "#cbd5e1", padding: "42px 28px" }}>
        <div style={{
          maxWidth: "1220px", margin: "0 auto", display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: "28px"
        }}>
          <div>
            <strong style={{ color: "white", fontSize: "20px" }}>NavaCharge</strong>
            <p>EV Charging Diagnostics & Infrastructure Support</p>
            <p>Vancouver, BC, Canada</p>
          </div>
          <div>
            <strong style={{ color: "white" }}>Navigation</strong>
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
