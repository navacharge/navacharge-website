import {
  Instagram,
  Linkedin,
  Facebook,
  Youtube,
} from "lucide-react";

export default function Home() {
  const heroImage =
    "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&w=1600&q=80";

  const focusItems = [
    {
      number: "01",
      title: "EVSE Diagnostics",
      text:
        "Charger symptoms, session behaviour, fault patterns, and field observations turned into clearer technical evidence.",
      className: "item-one",
    },
    {
      number: "02",
      title: "RMA Validation",
      text:
        "Returned units, issue isolation, functional checks, and redeployment readiness reviewed with a practical field mindset.",
      className: "item-two",
    },
    {
      number: "03",
      title: "Cable Management",
      text:
        "Cable flow, handling risk, placement problems, and daily site friction reviewed before small issues become bigger problems.",
      className: "item-three",
    },
    {
      number: "04",
      title: "Uptime Support",
      text:
        "Repeat issues, support history, site visibility, and operational continuity brought into one reliability-focused workflow.",
      className: "item-four",
    },
  ];

  return (
    <main
      style={{
        background: "#f6f3ec",
        color: "#111827",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <nav
        style={{
          position: "sticky",
          top: 0,
          zIndex: 1000,
          background: "rgba(246,243,236,0.92)",
          backdropFilter: "blur(14px)",
          boxShadow: "0 6px 24px rgba(15,23,42,0.06)",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
        }}
      >
        <div
          style={{
            maxWidth: "1220px",
            margin: "0 auto",
            padding: "18px 34px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "24px",
          }}
        >
          <strong
            style={{
              fontSize: "26px",
              letterSpacing: "-0.6px",
            }}
          >
            NavaCharge
          </strong>

          <div
            className="nav-links"
            style={{
              display: "flex",
              gap: "28px",
              alignItems: "center",
              fontSize: "14px",
            }}
          >
            <a
              href="#focus"
              style={{
                color: "#111827",
                textDecoration: "none",
                fontWeight: "500",
              }}
            >
              Reliability Flow
            </a>

            <a
              href="#support"
              style={{
                color: "#111827",
                textDecoration: "none",
                fontWeight: "500",
              }}
            >
              Support
            </a>

            <a
              href="#contact"
              style={{
                color: "#111827",
                textDecoration: "none",
                fontWeight: "500",
              }}
            >
              Contact
            </a>
          </div>
        </div>
      </nav>

      <section
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "88px 28px 120px",
        }}
      >
        <div
          style={{
            minHeight: "660px",
            borderRadius: "34px",
            overflow: "hidden",
            boxShadow: "0 40px 120px rgba(15,23,42,0.28)",
            border: "1px solid rgba(255,255,255,0.06)",
            backgroundImage: `
              linear-gradient(
                135deg,
                rgba(2,6,23,0.94) 0%,
                rgba(15,23,42,0.72) 38%,
                rgba(15,23,42,0.32) 72%,
                rgba(15,23,42,0.16) 100%
              ),
              url(${heroImage})
            `,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
            color: "white",
            padding: "64px 72px",
            display: "flex",
            alignItems: "flex-end",
          }}
        >
          <div
            style={{
              maxWidth: "620px",
              minHeight: "520px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div>
              <p
                style={{
                  color: "#93c5fd",
                  fontWeight: "800",
                  marginBottom: "22px",
                  letterSpacing: "0.4px",
                }}
              >
                EV Charging Diagnostics & Reliability Support
              </p>

              <h1
                style={{
                  fontSize: "clamp(42px, 5vw, 72px)",
                  lineHeight: "0.98",
                  margin: "0 0 24px",
                  fontWeight: "900",
                  letterSpacing: "-2.4px",
                }}
              >
                EV charging reliability, made visible.
              </h1>

              <p
                style={{
                  fontSize: "clamp(17px, 2vw, 21px)",
                  lineHeight: "1.85",
                  color: "#dbeafe",
                  maxWidth: "590px",
                }}
              >
                NavaCharge helps property managers and charging teams turn
                charger issues, cable problems, field notes, and repeat
                failures into clear technical evidence.
              </p>
            </div>

            <div
              style={{
                display: "flex",
                gap: "16px",
                flexWrap: "wrap",
              }}
            >
              <a
                href="#contact"
                style={{
                  background:
                    "linear-gradient(135deg,#2563eb 0%,#3b82f6 100%)",
                  boxShadow: "0 14px 34px rgba(37,99,235,0.35)",
                  color: "white",
                  padding: "15px 24px",
                  borderRadius: "13px",
                  textDecoration: "none",
                  fontWeight: "900",
                }}
              >
                Request Support Review
              </a>

              <a
                href="#focus"
                style={{
                  color: "white",
                  padding: "15px 24px",
                  borderRadius: "13px",
                  border: "1px solid rgba(255,255,255,0.10)",
                  background: "rgba(255,255,255,0.07)",
                  backdropFilter: "blur(6px)",
                  textDecoration: "none",
                  fontWeight: "900",
                }}
              >
                Explore Reliability Flow
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="focus" className="focus-flow">
        <style>{`
          .focus-flow {
            background: #f6f3ec;
            padding: 40px 20px 130px;
            overflow: hidden;
          }

          .focus-head {
            text-align: center;
            max-width: 820px;
            margin: 0 auto 70px;
          }

          .focus-kicker {
            color: #2563eb;
            font-weight: 900;
            letter-spacing: 10px;
            font-size: 13px;
            margin-bottom: 18px;
          }

          .focus-title {
            font-size: clamp(38px, 5vw, 68px);
            line-height: 1.02;
            letter-spacing: -2px;
            color: #071b33;
            margin: 0 0 20px;
            font-weight: 900;
          }

          .focus-subtitle {
            color: #4b5563;
            font-size: 18px;
            line-height: 1.8;
            margin: 0 auto;
            max-width: 680px;
          }

          .focus-wrap {
            position: relative;
            max-width: 1280px;
            height: 1680px;
            margin: 0 auto;
          }

          .plug {
            position: absolute;
            top: 0;
            left: 50%;
            width: 72px;
            height: 76px;
            transform: translateX(-50%);
            border-radius: 0 0 26px 26px;
            background: #071b33;
            box-shadow: 0 18px 42px rgba(7,27,51,0.18);
            z-index: 3;
          }

          .plug::before,
          .plug::after {
            content: "";
            position: absolute;
            top: -48px;
            width: 8px;
            height: 48px;
            background: #2563eb;
            border-radius: 8px;
          }

          .plug::before {
            left: 18px;
          }

          .plug::after {
            right: 18px;
          }

          .plug-base {
            position: absolute;
            left: 50%;
            top: 72px;
            width: 28px;
            height: 62px;
            transform: translateX(-50%);
            background: #071b33;
            border-radius: 0 0 16px 16px;
            z-index: 3;
          }

          .cable {
            position: absolute;
            inset: 0;
            width: 100%;
            height: 100%;
            z-index: 1;
            pointer-events: none;
          }

          .cable-shadow {
            filter: drop-shadow(0 24px 38px rgba(37,99,235,0.16));
          }

          .focus-item {
            position: absolute;
            z-index: 4;
            width: min(430px, 35vw);
            background: rgba(255,255,255,0.76);
            border: 1px solid rgba(15,23,42,0.08);
            border-radius: 28px;
            padding: 28px;
            box-shadow:
              0 24px 60px rgba(15,23,42,0.10),
              0 2px 10px rgba(15,23,42,0.04);
            backdrop-filter: blur(12px);
          }

          .focus-item.item-one {
            top: 230px;
            left: 70px;
          }

          .focus-item.item-two {
            top: 545px;
            right: 70px;
          }

          .focus-item.item-three {
            top: 870px;
            left: 70px;
          }

          .focus-item.item-four {
            top: 1195px;
            right: 70px;
          }

          .item-number {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 46px;
            height: 46px;
            border-radius: 50%;
            background: #071b33;
            color: #dbeafe;
            font-weight: 900;
            font-size: 14px;
            margin-bottom: 20px;
            box-shadow: 0 14px 30px rgba(7,27,51,0.18);
          }

          .focus-item h3 {
            margin: 0 0 14px;
            color: #071b33;
            font-size: 28px;
            letter-spacing: -0.8px;
          }

          .focus-item p {
            margin: 0;
            color: #4b5563;
            line-height: 1.75;
            font-size: 16px;
          }

          .node {
            position: absolute;
            z-index: 5;
            width: 28px;
            height: 28px;
            border-radius: 50%;
            background: #f6f3ec;
            border: 8px solid #2563eb;
            box-shadow:
              0 0 0 10px rgba(37,99,235,0.10),
              0 16px 34px rgba(37,99,235,0.20);
          }

          .node-one {
            top: 305px;
            left: calc(50% - 14px);
          }

          .node-two {
            top: 625px;
            left: calc(50% - 14px);
          }

          .node-three {
            top: 950px;
            left: calc(50% - 14px);
          }

          .node-four {
            top: 1278px;
            left: calc(50% - 14px);
          }

          .operational-hub {
            position: absolute;
            left: 50%;
            bottom: 0;
            transform: translateX(-50%);
            z-index: 3;
            width: min(1060px, 92%);
            border-radius: 34px;
            background:
              radial-gradient(circle at top left, rgba(37,99,235,0.34), transparent 34%),
              linear-gradient(135deg,#07111f 0%,#0f172a 54%,#111827 100%);
            color: white;
            padding: 46px;
            box-shadow:
              0 30px 90px rgba(7,27,51,0.24),
              0 0 0 1px rgba(255,255,255,0.08);
            overflow: hidden;
          }

          .hub-grid {
            display: grid;
            grid-template-columns: 1.1fr 1fr;
            gap: 34px;
            align-items: center;
            position: relative;
            z-index: 2;
          }

          .hub-label {
            color: #93c5fd;
            font-weight: 900;
            letter-spacing: 3px;
            font-size: 12px;
            margin-bottom: 16px;
          }

          .operational-hub h3 {
            font-size: clamp(30px, 4vw, 48px);
            line-height: 1.05;
            letter-spacing: -1.6px;
            margin: 0 0 18px;
          }

          .operational-hub p {
            color: #cbd5e1;
            line-height: 1.8;
            font-size: 17px;
            margin: 0;
          }

          .hub-list {
            display: grid;
            gap: 12px;
          }

          .hub-list div {
            background: rgba(255,255,255,0.07);
            border: 1px solid rgba(255,255,255,0.10);
            border-radius: 16px;
            padding: 16px 18px;
            color: #dbeafe;
            font-weight: 700;
          }

          @media (max-width: 980px) {
            .focus-wrap {
              height: auto;
              display: grid;
              gap: 22px;
              padding-top: 100px;
            }

            .plug,
            .plug-base,
            .cable,
            .node {
              display: none;
            }

            .focus-item {
              position: relative;
              top: auto !important;
              left: auto !important;
              right: auto !important;
              width: auto;
            }

            .operational-hub {
              position: relative;
              left: auto;
              bottom: auto;
              transform: none;
              width: auto;
              margin-top: 26px;
            }

            .hub-grid {
              grid-template-columns: 1fr;
            }
          }

          @media (max-width: 720px) {
            .focus-flow {
              padding: 20px 18px 90px;
            }

            .focus-kicker {
              letter-spacing: 6px;
            }

            .operational-hub {
              padding: 30px;
              border-radius: 26px;
            }

            .focus-item {
              padding: 24px;
            }

            .nav-links {
              gap: 16px !important;
              font-size: 13px !important;
            }
          }
        `}</style>

        <div className="focus-head">
          <div className="focus-kicker">OUR FOCUS</div>

          <h2 className="focus-title">
            One reliability flow from symptoms to site decisions.
          </h2>

          <p className="focus-subtitle">
            NavaCharge follows the path from charger problems to evidence,
            support actions, and clearer operational decisions.
          </p>
        </div>

        <div className="focus-wrap">
          <div className="plug" />
          <div className="plug-base" />

          <svg className="cable" viewBox="0 0 1280 1680" fill="none">
            <path
              className="cable-shadow"
              d="
                M640 110
                V235

                C640 300 590 325 520 325
                H250

                C150 325 95 380 95 480
                V500

                C95 600 150 655 250 655
                H1030

                C1130 655 1185 710 1185 810
                V825

                C1185 925 1130 980 1030 980
                H250

                C150 980 95 1035 95 1135
                V1150

                C95 1250 150 1305 250 1305
                H1030

                C1130 1305 1185 1360 1185 1460
                V1505

                C1185 1575 1130 1610 1060 1610
                H640
              "
              stroke="#2563eb"
              strokeWidth="22"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            <path
              d="
                M640 110
                V235

                C640 300 590 325 520 325
                H250

                C150 325 95 380 95 480
                V500

                C95 600 150 655 250 655
                H1030

                C1130 655 1185 710 1185 810
                V825

                C1185 925 1130 980 1030 980
                H250

                C150 980 95 1035 95 1135
                V1150

                C95 1250 150 1305 250 1305
                H1030

                C1130 1305 1185 1360 1185 1460
                V1505

                C1185 1575 1130 1610 1060 1610
                H640
              "
              stroke="rgba(255,255,255,0.42)"
              strokeWidth="5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <div className="node node-one" />
          <div className="node node-two" />
          <div className="node node-three" />
          <div className="node node-four" />

          {focusItems.map((item) => (
            <article key={item.title} className={`focus-item ${item.className}`}>
              <div className="item-number">{item.number}</div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}

          <div className="operational-hub" id="support">
            <div className="hub-grid">
              <div>
                <div className="hub-label">SUPPORT LAYER</div>

                <h3>Field signals become clearer support decisions.</h3>

                <p>
                  NavaCharge is built around practical EV charging visibility:
                  what is failing, what keeps repeating, what needs review, and
                  what should be documented before the next action.
                </p>
              </div>

              <div className="hub-list">
                <div>Field photos and site context</div>
                <div>Charger symptoms and repeat issues</div>
                <div>Cable risk and placement friction</div>
                <div>RMA notes and redeployment readiness</div>
                <div>Clearer support history for decisions</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="contact"
        style={{
          maxWidth: "1220px",
          margin: "0 auto",
          padding: "30px 28px 110px",
        }}
      >
        <div
          style={{
            background:
              "linear-gradient(135deg,#0f172a 0%,#111827 55%,#1e293b 100%)",
            color: "white",
            borderRadius: "34px",
            padding: "68px",
            display: "flex",
            justifyContent: "space-between",
            gap: "30px",
            flexWrap: "wrap",
            alignItems: "center",
            boxShadow: "0 28px 80px rgba(15,23,42,0.18)",
          }}
        >
          <div>
            <h2
              style={{
                fontSize: "clamp(34px, 4vw, 52px)",
                margin: "0 0 16px",
                letterSpacing: "-1.4px",
              }}
            >
              Need EV charging support?
            </h2>

            <p
              style={{
                color: "#cbd5e1",
                lineHeight: "1.8",
                maxWidth: "650px",
                fontSize: "17px",
                margin: 0,
              }}
            >
              Start with a structured support request. Share the issue, charger
              details, photos, and site context so the first review is useful.
            </p>
          </div>

          <a
            href="mailto:hello@navacharge.com"
            style={{
              background:
                "linear-gradient(135deg,#2563eb 0%,#3b82f6 100%)",
              boxShadow: "0 16px 36px rgba(37,99,235,0.32)",
              color: "white",
              padding: "16px 28px",
              borderRadius: "14px",
              textDecoration: "none",
              fontWeight: "900",
              whiteSpace: "nowrap",
            }}
          >
            Submit Support Request
          </a>
        </div>
      </section>

      <footer
        style={{
          background: "#0f172a",
          color: "#94a3b8",
          padding: "56px 32px",
        }}
      >
        <div
          style={{
            maxWidth: "1220px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
            gap: "28px",
          }}
        >
          <div>
            <strong
              style={{
                color: "white",
                fontSize: "22px",
                fontWeight: "700",
                letterSpacing: "-0.5px",
              }}
            >
              NavaCharge
            </strong>

            <p>EV Charging Diagnostics & Reliability Support</p>
            <p>Vancouver, BC, Canada</p>
          </div>

          <div>
            <strong style={{ color: "#f8fafc" }}>Navigation</strong>
            <p>Reliability Flow</p>
            <p>Support</p>
            <p>Contact</p>
          </div>

          <div>
            <strong style={{ color: "white" }}>Connect</strong>

            <div
              style={{
                display: "grid",
                gap: "12px",
                marginTop: "14px",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <Linkedin size={18} />
                <span>LinkedIn</span>
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <Instagram size={18} />
                <span>Instagram</span>
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <Facebook size={18} />
                <span>Facebook</span>
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <Youtube size={18} />
                <span>YouTube</span>
              </div>
            </div>
          </div>

          <div>
            <strong style={{ color: "white" }}>Contact</strong>
            <p>hello@navacharge.com</p>
            <p>© 2026 NavaCharge</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
