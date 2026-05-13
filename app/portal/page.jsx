export default function PortalPage() {
  const tickets = [
    {
      id: "#NC-1042",
      title: "Charging interruption",
      status: "In Review",
    },
    {
      id: "#NC-1043",
      title: "Cable organization request",
      status: "Scheduled",
    },
    {
      id: "#NC-1044",
      title: "Site diagnostics follow-up",
      status: "Draft Report",
    },
  ];

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#f6f3ec",
        fontFamily: "Arial, sans-serif",
        padding: "40px 28px",
      }}
    >
      {/* TOP BAR */}
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto 40px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div>
          <h1
            style={{
              fontSize: "34px",
              marginBottom: "8px",
              color: "#0f172a",
            }}
          >
            NavaCharge Portal
          </h1>

          <p style={{ color: "#475569", fontSize: "16px" }}>
            Client support workflow and diagnostics dashboard
          </p>
        </div>

        <button
          style={{
            background:
              "linear-gradient(135deg,#2563eb 0%,#3b82f6 100%)",
            color: "white",
            border: "none",
            padding: "14px 22px",
            borderRadius: "14px",
            fontWeight: "700",
            cursor: "pointer",
            boxShadow: "0 14px 30px rgba(37,99,235,0.28)",
          }}
        >
          New Support Request
        </button>
      </div>

      {/* DASHBOARD */}
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "320px 1fr",
          gap: "28px",
        }}
      >
        {/* SIDEBAR */}
        <div
          style={{
            background: "white",
            borderRadius: "28px",
            padding: "28px",
            boxShadow:
              "0 14px 40px rgba(15,23,42,0.08)",
            height: "fit-content",
          }}
        >
          <h3
            style={{
              marginBottom: "24px",
              color: "#0f172a",
            }}
          >
            Portal Navigation
          </h3>

          {[
            "Dashboard",
            "Tickets",
            "Uploads",
            "Reports",
            "Site Visits",
          ].map((item) => (
            <div
              key={item}
              style={{
                padding: "14px 16px",
                borderRadius: "14px",
                marginBottom: "12px",
                background:
                  item === "Dashboard"
                    ? "#dbeafe"
                    : "#f8fafc",
                fontWeight: "600",
                color: "#0f172a",
              }}
            >
              {item}
            </div>
          ))}
        </div>

        {/* MAIN CONTENT */}
        <div
          style={{
            display: "grid",
            gap: "24px",
          }}
        >
          {/* STATS */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit,minmax(220px,1fr))",
              gap: "20px",
            }}
          >
            {[
              ["12", "Open Tickets"],
              ["4", "Site Reviews"],
              ["7", "Pending Uploads"],
            ].map(([number, label]) => (
              <div
                key={label}
                style={{
                  background: "white",
                  borderRadius: "24px",
                  padding: "28px",
                  boxShadow:
                    "0 14px 40px rgba(15,23,42,0.08)",
                }}
              >
                <h2
                  style={{
                    fontSize: "42px",
                    marginBottom: "8px",
                    color: "#0f172a",
                  }}
                >
                  {number}
                </h2>

                <p
                  style={{
                    color: "#475569",
                  }}
                >
                  {label}
                </p>
              </div>
            ))}
          </div>

          {/* TICKET LIST */}
          <div
            style={{
              background: "white",
              borderRadius: "28px",
              padding: "32px",
              boxShadow:
                "0 14px 40px rgba(15,23,42,0.08)",
            }}
          >
            <h2
              style={{
                marginBottom: "26px",
                color: "#0f172a",
              }}
            >
              Active Support Tickets
            </h2>

            <div
              style={{
                display: "grid",
                gap: "18px",
              }}
            >
              {tickets.map((ticket) => (
                <a
                  href="/ticket"
                  key={ticket.id}
                  style={{
                    padding: "22px",
                    borderRadius: "20px",
                    background: "#f8fafc",
                    textDecoration: "none",
                    display: "block",
                    border:
                      "1px solid rgba(15,23,42,0.06)",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent:
                        "space-between",
                      alignItems: "center",
                    }}
                  >
                    <div>
                      <h3
                        style={{
                          marginBottom: "8px",
                          color: "#0f172a",
                        }}
                      >
                        {ticket.title}
                      </h3>

                      <p
                        style={{
                          color: "#64748b",
                        }}
                      >
                        {ticket.id}
                      </p>
                    </div>

                    <div
                      style={{
                        background: "#dbeafe",
                        color: "#1d4ed8",
                        padding: "10px 14px",
                        borderRadius: "999px",
                        fontWeight: "700",
                        fontSize: "14px",
                      }}
                    >
                      {ticket.status}
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
