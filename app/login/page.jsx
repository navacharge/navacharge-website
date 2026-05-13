export default function LoginPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg,#f8fafc 0%,#eef2ff 100%)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "28px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "460px",
          background: "white",
          borderRadius: "34px",
          padding: "42px",
          boxShadow:
            "0 30px 80px rgba(15,23,42,0.12)",
        }}
      >
        <div style={{ marginBottom: "34px" }}>
          <h1
            style={{
              fontSize: "38px",
              marginBottom: "12px",
              color: "#0f172a",
            }}
          >
            NavaCharge Portal
          </h1>

          <p
            style={{
              color: "#64748b",
              lineHeight: "1.7",
            }}
          >
            Secure access to support tickets, diagnostics reports,
            uploads, and infrastructure coordination workflows.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gap: "18px",
          }}
        >
          <div>
            <label
              style={{
                display: "block",
                marginBottom: "10px",
                fontWeight: "700",
                color: "#0f172a",
              }}
            >
              Email Address
            </label>

            <input
              type="email"
              placeholder="client@company.com"
              style={{
                width: "100%",
                padding: "16px",
                borderRadius: "14px",
                border:
                  "1px solid rgba(15,23,42,0.08)",
                background: "#f8fafc",
                fontSize: "15px",
                outline: "none",
              }}
            />
          </div>

          <div>
            <label
              style={{
                display: "block",
                marginBottom: "10px",
                fontWeight: "700",
                color: "#0f172a",
              }}
            >
              Password
            </label>

            <input
              type="password"
              placeholder="Enter password"
              style={{
                width: "100%",
                padding: "16px",
                borderRadius: "14px",
                border:
                  "1px solid rgba(15,23,42,0.08)",
                background: "#f8fafc",
                fontSize: "15px",
                outline: "none",
              }}
            />
          </div>
      
          <a
            href="/portal"
            style={{
            marginTop: "10px",
            background:
            "linear-gradient(135deg,#2563eb 0%,#3b82f6 100%)",
            color: "white",
            border: "none",
            padding: "16px",
            borderRadius: "14px",
            fontWeight: "800",
            fontSize: "15px",
            cursor: "pointer",
            boxShadow:
               "0 18px 40px rgba(37,99,235,0.28)",
            textDecoration: "none",
            display: "flex",
            justifyContent: "center",
           }}
           >
          Access Client Portal
          </a>
        </div>
      </div>
    </main>
  );
}
