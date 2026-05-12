export default function Home() {
  return (
    <main
      style={{
        background: "#f3f4f6",
        color: "#111827",
        fontFamily: "Arial, sans-serif",
      }}
    >

      {/* NAVBAR */}

      <nav
        style={{
          position: "sticky",
          top: 0,
          background: "rgba(255,255,255,0.92)",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
          zIndex: 1000,
        }}
      >
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "20px 32px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h2 style={{ margin: 0 }}>NavaCharge</h2>

          <div
            style={{
              display: "flex",
              gap: "28px",
              alignItems: "center",
              fontSize: "14px",
            }}
          >
            <a href="#services">Services</a>
            <a href="#diagnostics">Diagnostics</a>
            <a href="#projects">Projects</a>
            <a href="#portal">Portal</a>
            <a href="#contact">Contact</a>

            <button
              style={{
                background: "#2563eb",
                color: "white",
                border: "none",
                padding: "12px 18px",
                borderRadius: "10px",
                cursor: "pointer",
                fontWeight: "bold",
              }}
            >
              Request Support
            </button>
          </div>
        </div>
      </nav>

      {/* HERO */}

      <section
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "60px 32px 100px",
        }}
      >
        <div
          style={{
            background:
              "linear-gradient(135deg,#0f172a 0%,#172554 100%)",
            borderRadius: "32px",
            overflow: "hidden",
            minHeight: "620px",
            position: "relative",
            display: "flex",
            alignItems: "center",
            padding: "70px",
            color: "white",
          }}
        >

          {/* LEFT */}

          <div style={{ maxWidth: "700px", zIndex: 2 }}>
            <p
              style={{
                color: "#93c5fd",
                marginBottom: "24px",
                fontSize: "15px",
              }}
            >
              EV Charging Diagnostics & Infrastructure Support
            </p>

            <h1
              style={{
                fontSize: "72px",
                lineHeight: "1.02",
                marginBottom: "28px",
                fontWeight: "800",
              }}
            >
              Reliability-Focused Support for EV Charging Infrastructure
            </h1>

            <p
              style={{
                fontSize: "21px",
                lineHeight: "1.8",
                color: "#cbd5e1",
                marginBottom: "34px",
                maxWidth: "620px",
              }}
            >
              Field diagnostics, deployment visibility,
              operational support, and real-world charging
              environment analysis.
            </p>

            <div
              style={{
                display: "flex",
                gap: "16px",
                flexWrap: "wrap",
              }}
            >
              <button
                style={{
                  background: "#2563eb",
                  color: "white",
                  border: "none",
                  padding: "16px 24px",
                  borderRadius: "12px",
                  fontWeight: "700",
                  cursor: "pointer",
                }}
              >
                Request Support
              </button>

              <button
                style={{
                  background: "transparent",
                  color: "white",
                  border: "1px solid rgba(255,255,255,0.2)",
                  padding: "16px 24px",
                  borderRadius: "12px",
                  fontWeight: "700",
                  cursor: "pointer",
                }}
              >
                Explore Services
              </button>
            </div>
          </div>

          {/* RIGHT VISUAL */}

          <div
            style={{
              position: "absolute",
              right: "60px",
              top: "90px",
              width: "420px",
              height: "420px",
              borderRadius: "28px",
              background:
                "linear-gradient(135deg,#1e293b,#0f172a)",
              border: "1px solid rgba(255,255,255,0.08)",
              boxShadow:
                "0 30px 80px rgba(0,0,0,0.45)",
            }}
          />

        </div>
      </section>

      {/* TRUST STRIP */}

      <section
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 32px 100px",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(180px,1fr))",
            gap: "18px",
          }}
        >
          {[
            "Field Diagnostics",
            "Deployment Visibility",
            "Operational Support",
            "Site Coordination",
            "Reliability Thinking",
          ].map((item) => (
            <div
              key={item}
              style={{
                background: "white",
                borderRadius: "18px",
                padding: "28px",
                textAlign: "center",
                boxShadow:
                  "0 10px 30px rgba(15,23,42,0.05)",
                fontWeight: "700",
              }}
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* EMPTY PLACEHOLDERS */}

      <section id="services" style={{ height: "400px" }} />
      <section id="diagnostics" style={{ height: "400px" }} />
      <section id="projects" style={{ height: "400px" }} />
      <section id="portal" style={{ height: "400px" }} />
      <section id="contact" style={{ height: "400px" }} />

    </main>
  );
}
