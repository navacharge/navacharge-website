export default function ServicesPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#f6f3ec",
        color: "#111827",
        fontFamily: "Arial, sans-serif",
        padding: "80px 32px",
      }}
    >
      <div style={{ maxWidth: "1180px", margin: "0 auto" }}>
        <a
          href="/"
          style={{
            display: "inline-block",
            marginBottom: "40px",
            color: "#2563eb",
            fontWeight: "800",
            textDecoration: "none",
            fontSize: "15px",
          }}
        >
          ← Back to Website
        </a>

        <h1
          style={{
            fontSize: "64px",
            marginBottom: "20px",
            letterSpacing: "-2px",
          }}
        >
          Services
        </h1>

        <p
          style={{
            fontSize: "20px",
            color: "#4b5563",
            lineHeight: "1.9",
            maxWidth: "760px",
            marginBottom: "70px",
          }}
        >
          Structured EV charging support focused on diagnostics,
          operational visibility, infrastructure coordination,
          and real-world charging environments.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
            gap: "28px",
          }}
        >
          {[
            [
              "EV Charger Diagnostics",
              "Structured troubleshooting for charger behavior, interruptions, and operational issues.",
            ],

            [
              "RMA Inspection & Validation",
              "Returned unit inspection, issue isolation, functional validation, and redeployment readiness.",
            ],

            [
              "Charging Site Reliability",
              "Support focused on uptime, operational continuity, and infrastructure visibility.",
            ],

            [
              "Cable Management",
              "Cleaner charging layouts through practical routing and wall-arm concepts.",
            ],

            [
              "Field Support Coordination",
              "Site observations, issue documentation, technician coordination, and support follow-up.",
            ],

            [
              "Infrastructure Review",
              "Review of charger placement, accessibility, cable flow, and usability conditions.",
            ],
          ].map(([title, text]) => (
            <div
              key={title}
              style={{
                background: "white",
                padding: "38px",
                borderRadius: "30px",
                boxShadow: "0 18px 44px rgba(15,23,42,0.06)",
                border: "1px solid rgba(15,23,42,0.04)",
                transition: "all 0.25s ease",
              }}
            >
              <h2
                style={{
                  fontSize: "31px",
                  lineHeight: "1.1",
                  marginBottom: "20px",
                  letterSpacing: "-1px",
                }}
              >
                {title}
              </h2>

              <p
                style={{
                  color: "#4b5563",
                  lineHeight: "1.9",
                  fontSize: "17px",
                }}
              >
                {text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
