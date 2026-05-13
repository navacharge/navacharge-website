export default function TicketPage() {
  const updates = [
    {
      title: "Support request received",
      time: "May 12 • 09:42 AM",
    },
    {
      title: "Field diagnostics review started",
      time: "May 12 • 11:10 AM",
    },
    {
      title: "Customer photos uploaded",
      time: "May 12 • 01:35 PM",
    },
    {
      title: "Technician notes added",
      time: "May 12 • 03:20 PM",
    },
  ];

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#f6f3ec",
        padding: "40px 28px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          display: "grid",
          gap: "28px",
        }}
      >
        {/* TOP SECTION */}
        <div
          style={{
            background: "white",
            borderRadius: "30px",
            padding: "36px",
            boxShadow:
              "0 18px 44px rgba(15,23,42,0.08)",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "18px",
            }}
          >
            <div>
              <p
                style={{
                  color: "#2563eb",
                  fontWeight: "700",
                  marginBottom: "12px",
                }}
              >
                Ticket #NC-1042
              </p>

              <h1
                style={{
                  fontSize: "42px",
                  color: "#0f172a",
                  marginBottom: "14px",
                }}
              >
                Charging interruption diagnostics
              </h1>

              <p
                style={{
                  color: "#64748b",
                  lineHeight: "1.8",
                  maxWidth: "760px",
                }}
              >
                Investigation related to intermittent
                charging interruptions and inconsistent
                charging session behavior in a shared
                parking environment.
              </p>
            </div>

            <div
              style={{
                background: "#dbeafe",
                color: "#1d4ed8",
                padding: "12px 18px",
                borderRadius: "999px",
                fontWeight: "800",
                height: "fit-content",
              }}
            >
              In Review
            </div>
          </div>
        </div>

        {/* MAIN GRID */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "1fr 340px",
            gap: "28px",
          }}
        >
          {/* LEFT */}
          <div
            style={{
              display: "grid",
              gap: "24px",
            }}
          >
            {/* NOTES */}
            <div
              style={{
                background: "white",
                borderRadius: "28px",
                padding: "32px",
                boxShadow:
                  "0 18px 44px rgba(15,23,42,0.08)",
              }}
            >
              <h2
                style={{
                  marginBottom: "24px",
                  color: "#0f172a",
                }}
              >
                Diagnostics Notes
              </h2>

              <p
                style={{
                  color: "#475569",
                  lineHeight: "1.9",
                }}
              >
                Initial review indicates intermittent
                charging interruptions without a full
                charger fault condition. Customer
                observations suggest inconsistent
                charging continuity during peak usage
                periods. Additional field visibility
                and charging session review may be
                required.
              </p>
            </div>

            {/* UPLOADS */}
            <div
              style={{
                background: "white",
                borderRadius: "28px",
                padding: "32px",
                boxShadow:
                  "0 18px 44px rgba(15,23,42,0.08)",
              }}
            >
              <h2
                style={{
                  marginBottom: "24px",
                  color: "#0f172a",
                }}
              >
                Uploaded Files
              </h2>

              <div
                style={{
                  display: "grid",
                  gap: "16px",
                }}
              >
                {[
                  "charger-area-photo.jpg",
                  "parking-layout.png",
                  "session-observations.pdf",
                ].map((file) => (
                  <div
                    key={file}
                    style={{
                      padding: "18px",
                      borderRadius: "16px",
                      background: "#f8fafc",
                      border:
                        "1px solid rgba(15,23,42,0.06)",
                    }}
                  >
                    {file}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div
            style={{
              display: "grid",
              gap: "24px",
            }}
          >
            {/* TIMELINE */}
            <div
              style={{
                background: "white",
                borderRadius: "28px",
                padding: "28px",
                boxShadow:
                  "0 18px 44px rgba(15,23,42,0.08)",
              }}
            >
              <h2
                style={{
                  marginBottom: "24px",
                  color: "#0f172a",
                }}
              >
                Activity Timeline
              </h2>

              <div
                style={{
                  display: "grid",
                  gap: "18px",
                }}
              >
                {updates.map((update) => (
                  <div
                    key={update.title}
                    style={{
                      paddingBottom: "18px",
                      borderBottom:
                        "1px solid rgba(15,23,42,0.06)",
                    }}
                  >
                    <h3
                      style={{
                        marginBottom: "8px",
                        color: "#0f172a",
                        fontSize: "15px",
                      }}
                    >
                      {update.title}
                    </h3>

                    <p
                      style={{
                        color: "#64748b",
                        fontSize: "14px",
                      }}
                    >
                      {update.time}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* TECHNICIAN */}
            <div
              style={{
                background: "white",
                borderRadius: "28px",
                padding: "28px",
                boxShadow:
                  "0 18px 44px rgba(15,23,42,0.08)",
              }}
            >
              <h2
                style={{
                  marginBottom: "20px",
                  color: "#0f172a",
                }}
              >
                Assigned Support
              </h2>

              <p
                style={{
                  color: "#475569",
                  lineHeight: "1.8",
                }}
              >
                NavaCharge field diagnostics workflow
                assigned for operational review and
                support coordination.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
