export default function Home() {
  return (
    <main
      style={{
        background: "#071120",
        color: "white",
        minHeight: "100vh",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* NAVBAR */}
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "24px 48px",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <h2 style={{ fontSize: "24px", fontWeight: "700" }}>
          NavaCharge
        </h2>

        <div style={{ display: "flex", gap: "24px", color: "#aab4c3" }}>
          <span>Services</span>
          <span>Projects</span>
          <span>Diagnostics</span>
          <span>Contact</span>
        </div>
      </nav>

      {/* HERO */}
      <section
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          padding: "120px 24px 100px",
        }}
      >
        <div
          style={{
            padding: "8px 18px",
            border: "1px solid rgba(255,255,255,0.12)",
            borderRadius: "999px",
            marginBottom: "28px",
            color: "#7ea6ff",
            fontSize: "14px",
          }}
        >
          EV Charging Diagnostics & Infrastructure Support
        </div>

        <h1
          style={{
            fontSize: "72px",
            maxWidth: "1000px",
            lineHeight: "1.05",
            marginBottom: "28px",
            fontWeight: "800",
          }}
        >
          Reliability-Focused Support for EV Charging Infrastructure
        </h1>

        <p
          style={{
            maxWidth: "760px",
            fontSize: "22px",
            color: "#b7c0cf",
            lineHeight: "1.7",
            marginBottom: "42px",
          }}
        >
          NavaCharge helps improve visibility, diagnostics,
          operational support, and field-level understanding across EV
          charging environments.
        </p>

        <div style={{ display: "flex", gap: "18px" }}>
          <button
            style={{
              background: "#2563eb",
              color: "white",
              border: "none",
              padding: "16px 32px",
              borderRadius: "12px",
              fontSize: "16px",
              cursor: "pointer",
            }}
          >
            Explore Services
          </button>

          <button
            style={{
              background: "transparent",
              color: "white",
              border: "1px solid rgba(255,255,255,0.15)",
              padding: "16px 32px",
              borderRadius: "12px",
              fontSize: "16px",
              cursor: "pointer",
            }}
          >
            Contact NavaCharge
          </button>
        </div>
      </section>

      {/* SERVICES */}
      <section
        style={{
          padding: "40px 60px 120px",
          maxWidth: "1400px",
          margin: "0 auto",
        }}
      >
        <h2
          style={{
            fontSize: "42px",
            marginBottom: "50px",
            textAlign: "center",
          }}
        >
          Services
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
            gap: "28px",
          }}
        >
          {[
            {
              title: "EV Charging Diagnostics",
              text: "Structured analysis of charging behavior, operational issues, and field observations.",
            },
            {
              title: "Infrastructure Support",
              text: "Support for EV charging environments with reliability-focused thinking and practical field insight.",
            },
            {
              title: "Cable Management Solutions",
              text: "Cleaner, safer, and more organized charging spaces for residential and commercial environments.",
            },
            {
              title: "Project Visibility",
              text: "Clear documentation, observations, and support communication around charging operations.",
            },
          ].map((item, index) => (
            <div
              key={index}
              style={{
                background: "#0f1b2e",
                padding: "36px",
                borderRadius: "22px",
                border: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              <h3
                style={{
                  fontSize: "26px",
                  marginBottom: "18px",
                }}
              >
                {item.title}
              </h3>

              <p
                style={{
                  color: "#aeb8c7",
                  lineHeight: "1.8",
                  fontSize: "17px",
                }}
              >
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>
{/* SERVICES SECTION */}

<section
  style={{
    padding: "100px 40px",
    maxWidth: "1200px",
    margin: "0 auto",
  }}
>
  <h2
    style={{
      fontSize: "42px",
      marginBottom: "20px",
      textAlign: "center",
    }}
  >
    Services
  </h2>

  <p
    style={{
      textAlign: "center",
      color: "#94a3b8",
      maxWidth: "700px",
      margin: "0 auto 60px auto",
      lineHeight: "1.7",
    }}
  >
    Practical EV charging infrastructure support focused on diagnostics,
    operational reliability, field coordination, and deployment visibility.
  </p>

  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
      gap: "24px",
    }}
  >
    {[
      {
        title: "EV Charging Diagnostics",
        desc: "Structured troubleshooting and field-oriented issue analysis for EV charging environments.",
      },
      {
        title: "Infrastructure Support",
        desc: "Operational support for charging deployments, site coordination, and infrastructure workflows.",
      },
      {
        title: "Site Assessments",
        desc: "Technical review of charging locations, hardware conditions, and deployment readiness.",
      },
      {
        title: "Smart Cable Management",
        desc: "Clean and practical cable management solutions for residential and commercial installations.",
      },
    ].map((service, index) => (
      <div
        key={index}
        style={{
          background: "#111827",
          padding: "32px",
          borderRadius: "20px",
          border: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <h3
          style={{
            fontSize: "22px",
            marginBottom: "16px",
          }}
        >
          {service.title}
        </h3>

        <p
          style={{
            color: "#94a3b8",
            lineHeight: "1.7",
          }}
        >
          {service.desc}
        </p>
      </div>
    ))}
  </div>
</section>
{/* CONTACT SECTION */}
<section
  style={{
    padding: "120px 48px",
    textAlign: "center",
  }}
>
  <h2
    style={{
      fontSize: "52px",
      marginBottom: "24px",
      color: "white",
      fontWeight: "800",
    }}
  >
    Let’s Talk
  </h2>

  <p
    style={{
      color: "#94a3b8",
      maxWidth: "720px",
      margin: "0 auto 48px auto",
      lineHeight: "1.8",
      fontSize: "18px",
    }}
  >
    Need support, diagnostics insight, charging infrastructure
    review, or practical field coordination?
    NavaCharge is focused on clear technical visibility and
    real-world EV charging environments.
  </p>

  <div
    style={{
      display: "flex",
      justifyContent: "center",
      gap: "18px",
      flexWrap: "wrap",
    }}
  >
    <a
      href="mailto:hello@navacharge.ca"
      style={{
        background: "#2563eb",
        color: "white",
        padding: "16px 28px",
        borderRadius: "14px",
        textDecoration: "none",
        fontWeight: "600",
      }}
    >
      Email NavaCharge
    </a>

    <a
      href="#"
      style={{
        border: "1px solid rgba(255,255,255,0.12)",
        color: "white",
        padding: "16px 28px",
        borderRadius: "14px",
        textDecoration: "none",
        fontWeight: "600",
      }}
    >
      LinkedIn
    </a>
  </div>
</section>
{/* FOOTER */}
<footer
  style={{
    borderTop: "1px solid rgba(255,255,255,0.08)",
    padding: "40px 48px",
    color: "#94a3b8",
    display: "flex",
    justifyContent: "space-between",
    gap: "24px",
    flexWrap: "wrap",
  }}
>
  <div>
    <h3 style={{ color: "white", marginBottom: "12px" }}>
      NavaCharge
    </h3>
    <p style={{ margin: 0 }}>
      EV Charging Diagnostics & Infrastructure Support
    </p>
    <p style={{ marginTop: "10px" }}>Vancouver, BC, Canada</p>
  </div>

  <div>
    <h4 style={{ color: "white", marginBottom: "12px" }}>
      Connect
    </h4>
    <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
      <span>LinkedIn</span>
      <span>Instagram</span>
      <span>Facebook</span>
      <span>YouTube</span>
      <span>X</span>
    </div>
  </div>

  <div>
    <h4 style={{ color: "white", marginBottom: "12px" }}>
      Contact
    </h4>
    <p style={{ margin: 0 }}>hello@navacharge.ca</p>
    <p style={{ marginTop: "10px" }}>
      © 2026 NavaCharge. All rights reserved.
    </p>
  </div>
</footer>   
    </main>
  );
}
