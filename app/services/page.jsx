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
      </div>
    </main>
  );
}
