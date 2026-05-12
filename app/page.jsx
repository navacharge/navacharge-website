export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#ffffff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        fontFamily: "Arial",
        padding: "40px",
        textAlign: "center",
      }}
    >
      <h1
        style={{
          fontSize: "48px",
          fontWeight: "700",
          marginBottom: "20px",
          color: "#111827",
        }}
      >
        NavaCharge
      </h1>

      <p
        style={{
          fontSize: "20px",
          color: "#4b5563",
          maxWidth: "700px",
          lineHeight: "1.7",
        }}
      >
        EV Charging Support, Diagnostics, and Smart Cable
        Management Solutions.
      </p>
    </main>
  );
}
