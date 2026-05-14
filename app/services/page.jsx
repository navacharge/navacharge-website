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
      <div style={{ maxWidth: "1120px", margin: "0 auto" }}>
        <a
          href="/"
          style={{
            display: "inline-block",
            marginBottom: "40px",
            color: "#2563eb",
            fontWeight: "800",
            textDecoration: "none",
          }}
        >
          ← Back to Website
        </a>

        <h1 style={{ fontSize: "56px", marginBottom: "20px" }}>
          Services
        </h1>

        <p style={{ fontSize: "19px", color: "#4b5563", lineHeight: "1.8", maxWidth: "760px" }}>
          Structured EV charging support for diagnostics, infrastructure visibility,
          cable management, and client support workflows.
        </p>
        <div
  style={{
    marginTop: "70px",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
    gap: "24px",
  }}
>
  {[
    [
      "Diagnostics Support",
      "Structured charger issue review and field-focused operational diagnostics.",
    ],
    [
      "Infrastructure Visibility",
      "Support workflows for charging environments, operational flow, and site coordination.",
    ],
    [
      "Cable Management",
      "Cleaner charging layouts with practical cable routing and wall-arm concepts.",
    ],
    [
      "Client Support Portal",
      "Structured support requests, uploads, ticket visibility, and diagnostics communication.",
    ],
  ].map(([title, text]) => (
    <div
      key={title}
      style={{
        background: "white",
        padding: "34px",
        borderRadius: "28px",
        boxShadow: "0 18px 44px rgba(15,23,42,0.08)",
      }}
    >
      <h2
        style={{
          fontSize: "28px",
          marginBottom: "18px",
        }}
      >
        {title}
      </h2>

      <p
        style={{
          color: "#4b5563",
          lineHeight: "1.8",
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
