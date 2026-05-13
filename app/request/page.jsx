export default function RequestPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg,#f8fafc 0%,#eef2ff 100%)",
        padding: "60px 28px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: "820px",
          margin: "0 auto",
          background: "white",
          borderRadius: "34px",
          padding: "42px",
          boxShadow:
            "0 30px 80px rgba(15,23,42,0.10)",
        }}
      >
        <div style={{ marginBottom: "40px" }}>
          <h1
            style={{
              fontSize: "44px",
              marginBottom: "16px",
              color: "#0f172a",
            }}
          >
            Support Request
          </h1>

          <p
            style={{
              color: "#64748b",
              lineHeight: "1.8",
              fontSize: "17px",
              maxWidth: "760px",
            }}
          >
            Submit a structured EV charging support request including
            charger details, site observations, photos, operational
            concerns, and diagnostics-related notes.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gap: "24px",
          }}
        >
          {/* COMPANY */}
          <div>
            <label
              style={{
                display: "block",
                marginBottom: "10px",
                fontWeight: "700",
                color: "#0f172a",
              }}
            >
              Company / Site Name
            </label>

            <input
              type="text"
              placeholder="Site or company name"
              style={inputStyle}
            />
          </div>

          {/* EMAIL */}
          <div>
            <label
              style={labelStyle}
            >
              Contact Email
            </label>

            <input
              type="email"
              placeholder="client@company.com"
              style={inputStyle}
            />
          </div>

          {/* ISSUE TYPE */}
          <div>
            <label style={labelStyle}>
              Request Type
            </label>

            <select style={inputStyle}>
              <option>Charging Interruption</option>
              <option>Site Diagnostics</option>
              <option>Cable Management</option>
              <option>Operational Support</option>
              <option>Infrastructure Review</option>
            </select>
          </div>

          {/* MESSAGE */}
          <div>
            <label style={labelStyle}>
              Request Details
            </label>

            <textarea
              placeholder="Describe the issue, charger behavior, operational concern, or field observations..."
              rows={7}
              style={{
                ...inputStyle,
                resize: "vertical",
              }}
            />
          </div>

          {/* FILE UPLOAD */}
          <div>
            <label style={labelStyle}>
              Upload Photos / Reports
            </label>

            <div
              style={{
                border:
                  "2px dashed rgba(15,23,42,0.12)",
                borderRadius: "20px",
                padding: "40px",
                textAlign: "center",
                background: "#f8fafc",
                color: "#64748b",
              }}
            >
              Drag & drop files here or upload charger photos,
              reports, and field documentation.
            </div>
          </div>

          {/* BUTTON */}
          <a
            href="/ticket"
            style={{
              marginTop: "12px",
              background:
                "linear-gradient(135deg,#2563eb 0%,#3b82f6 100%)",
              color: "white",
              padding: "18px",
              borderRadius: "16px",
              textDecoration: "none",
              fontWeight: "800",
              display: "flex",
              justifyContent: "center",
              boxShadow:
                "0 20px 44px rgba(37,99,235,0.26)",
            }}
          >
            Submit Support Request
          </a>
        </div>
      </div>
    </main>
  );
}

const inputStyle = {
  width: "100%",
  padding: "16px",
  borderRadius: "16px",
  border: "1px solid rgba(15,23,42,0.08)",
  background: "#f8fafc",
  fontSize: "15px",
  outline: "none",
  boxSizing: "border-box",
};

const labelStyle = {
  display: "block",
  marginBottom: "10px",
  fontWeight: "700",
  color: "#0f172a",
};
