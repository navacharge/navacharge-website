export default function ServicesPage() {
  const servicesHero =
    "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&w=1600&q=80";

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#f6f3ec",
        color: "#111827",
        fontFamily: "Arial, sans-serif",
        padding: "48px 32px 70px",
      }}
    >
      <div style={{ maxWidth: "1180px", margin: "0 auto" }}>
        <section
          style={{
            minHeight: "180px",
            borderRadius: "34px",
            overflow: "hidden",
            padding: "42px 48px",
            display: "flex",
            alignItems: "center",
            color: "white",
            boxShadow: "0 30px 80px rgba(15,23,42,0.18)",
            backgroundImage: `
              linear-gradient(
                135deg,
                rgba(2,6,23,0.90) 0%,
                rgba(15,23,42,0.70) 42%,
                rgba(15,23,42,0.28) 100%
              ),
              url(${servicesHero})
            `,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div style={{ maxWidth: "680px" }}>
            
            <h1
              style={{
                fontSize: "46px",
                lineHeight: "1.05",
                marginBottom: "22px",
                letterSpacing: "-1.5px",
              }}
            >
              Services
            </h1>

            <p
              style={{
                fontSize: "18px",
                color: "#dbeafe",
                lineHeight: "1.8",
                maxWidth: "620px",
              }}
            >
              Practical infrastructure support services
            </p>
          </div>
        </section>

        <div
          style={{
            marginTop: "42px",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
            gap: "20px",
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
                padding: "30px",
                borderRadius: "30px",
                boxShadow: "0 18px 44px rgba(15,23,42,0.06)",
                border: "1px solid rgba(15,23,42,0.04)",
              }}
            >
              <h2
                style={{
                  fontSize: "26px",
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
