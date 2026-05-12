export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#0b1120",
        color: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Arial",
        padding: "40px",
        textAlign: "center",
      }}
    >
      <h1
        style={{
          fontSize: "64px",
          fontWeight: "700",
          marginBottom: "20px",
        }}
      >
        NavaCharge
      </h1>

      <p
        style={{
          fontSize: "24px",
          maxWidth: "800px",
          color: "#cbd5e1",
          lineHeight: "1.7",
          marginBottom: "40px",
        }}
      >
        EV Charging Reliability, Diagnostics, Support,
        and Smart Cable Management Solutions.
      </p>

      <div
        style={{
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <button
          style={{
            padding: "16px 32px",
            background: "#2563eb",
            color: "white",
            border: "none",
            borderRadius: "12px",
            fontSize: "18px",
            cursor: "pointer",
          }}
        >
          Explore Services
        </button>

        <button
          style={{
            padding: "16px 32px",
            background: "transparent",
            color: "white",
            border: "1px solid #475569",
            borderRadius: "12px",
            fontSize: "18px",
            cursor: "pointer",
          }}
        >
          Contact Us
        </button>
      </div>
    </main>
  );
}
