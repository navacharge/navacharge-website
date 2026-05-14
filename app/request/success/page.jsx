export default function RequestSuccessPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#f6f3ec",
        fontFamily: "Arial, sans-serif",
        padding: "60px 28px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          maxWidth: "720px",
          background: "white",
          borderRadius: "34px",
          padding: "48px",
          boxShadow: "0 30px 80px rgba(15,23,42,0.12)",
          textAlign: "center",
        }}
      >
        <div
          style={{
            width: "72px",
            height: "72px",
            borderRadius: "999px",
            background: "#dcfce7",
            color: "#16a34a",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "34px",
            fontWeight: "900",
            margin: "0 auto 26px",
          }}
        >
          ✓
        </div>

        <h1
          style={{
            fontSize: "44px",
            color: "#0f172a",
            marginBottom: "18px",
          }}
        >
          Request received
        </h1>

        <p
          style={{
            color: "#475569",
            fontSize: "18px",
            lineHeight: "1.8",
            marginBottom: "34px",
          }}
        >
          Your support request has been received. NavaCharge will review the
          details and follow up by email. If portal access is needed, we will
          provide it after the request is reviewed.
        </p>

        <a
          href="/"
          style={{
            display: "inline-block",
            padding: "14px 24px",
            borderRadius: "999px",
            background: "linear-gradient(135deg,#2563eb 0%,#3b82f6 100%)",
            color: "white",
            fontWeight: "800",
            textDecoration: "none",
            boxShadow: "0 16px 36px rgba(37,99,235,0.28)",
          }}
        >
          Back to Website
        </a>
      </div>
    </main>
  );
}
