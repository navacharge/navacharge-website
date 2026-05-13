export default function TicketPage() {
  const nextSteps = [
    "Collect on-site observations and charger images",
    "Validate network signal stability in the area",
    "Review charger behavior and session history",
    "Provide preliminary diagnostic report",
  ];

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#f6f3ec",
        padding: "48px 28px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: "1180px",
          margin: "0 auto",
          background: "white",
          borderRadius: "34px",
          padding: "42px",
          boxShadow: "0 30px 80px rgba(15,23,42,0.12)",
        }}
      >
        <a
          href="/portal"
          style={{
            display: "inline-block",
            padding: "14px 22px",
            borderRadius: "999px",
            border: "1px solid #2563eb",
            color: "#2563eb",
            fontWeight: "800",
            textDecoration: "none",
            marginBottom: "34px",
          }}
        >
          ← Back to Portal
        </a>

        <div style={{ textAlign: "center", marginBottom: "46px" }}>
          <div
            style={{
              display: "inline-block",
              background: "#dbeafe",
              color: "#1d4ed8",
              padding: "10px 18px",
              borderRadius: "999px",
              fontWeight: "800",
              marginBottom: "24px",
            }}
          >
            Ticket #NC-1042
          </div>

          <h1
            style={{
              fontSize: "52px",
              lineHeight: "1.05",
              color: "#0f172a",
              marginBottom: "20px",
              letterSpacing: "-1.4px",
            }}
          >
            Charging interruption diagnostics
          </h1>

          <p
            style={{
              color: "#475569",
              fontSize: "19px",
              lineHeight: "1.8",
              maxWidth: "760px",
              margin: "0 auto",
            }}
          >
            Investigation related to intermittent charging interruptions and
            inconsistent charging sessions in a shared parking environment.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
            gap: "18px",
            background: "#f8fafc",
            borderRadius: "26px",
            padding: "24px",
            marginBottom: "30px",
            border: "1px solid rgba(15,23,42,0.06)",
          }}
        >
          {[
            ["Created", "May 12, 2026"],
            ["Status", "In Review"],
            ["Assigned Support", "NavaCharge"],
            ["Priority", "Medium"],
          ].map(([label, value]) => (
            <div key={label}>
              <p
                style={{
                  color: "#64748b",
                  fontSize: "14px",
                  marginBottom: "8px",
                  fontWeight: "700",
                }}
              >
                {label}
              </p>
              <p
                style={{
                  color: label === "Status" ? "#16a34a" : "#0f172a",
                  fontSize: "17px",
                  fontWeight: "800",
                }}
              >
                {value}
              </p>
            </div>
          ))}
        </div>

        <section style={cardStyle}>
          <h2 style={sectionTitle}>Diagnostics Notes</h2>
          <p style={bodyText}>
            Initial review indicates intermittent charging interruptions without
            a full charger fault condition. The behavior appears linked to
            network signal variation and inconsistent charging continuity during
            peak usage periods. Additional field visibility is required to
            validate charger telemetry and session history.
          </p>
        </section>

        <section style={cardStyle}>
          <h2 style={sectionTitle}>Next Steps</h2>
          <div style={{ display: "grid", gap: "14px" }}>
            {nextSteps.map((step) => (
              <div
                key={step}
                style={{
                  display: "flex",
                  gap: "12px",
                  alignItems: "center",
                  color: "#334155",
                  fontSize: "16px",
                  lineHeight: "1.6",
                }}
              >
                <span
                  style={{
                    width: "24px",
                    height: "24px",
                    borderRadius: "999px",
                    background: "#dcfce7",
                    color: "#16a34a",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: "900",
                    flexShrink: 0,
                  }}
                >
                  ✓
                </span>
                {step}
              </div>
            ))}
          </div>
        </section>

        <section style={cardStyle}>
          <h2 style={sectionTitle}>Attachments</h2>
          <div
            style={{
              border: "2px dashed #c4b5fd",
              borderRadius: "20px",
              padding: "42px",
              textAlign: "center",
              background: "#faf5ff",
              color: "#64748b",
            }}
          >
            <p style={{ fontWeight: "800", color: "#0f172a", marginBottom: "8px" }}>
              No files attached yet
            </p>
            <p>Files uploaded from the portal will appear here.</p>
          </div>
        </section>
      </div>
    </main>
  );
}

const cardStyle = {
  background: "white",
  borderRadius: "26px",
  padding: "32px",
  marginBottom: "28px",
  border: "1px solid rgba(15,23,42,0.06)",
  boxShadow: "0 18px 44px rgba(15,23,42,0.06)",
};

const sectionTitle = {
  fontSize: "28px",
  color: "#0f172a",
  marginBottom: "18px",
};

const bodyText = {
  color: "#334155",
  lineHeight: "1.9",
  fontSize: "17px",
};
