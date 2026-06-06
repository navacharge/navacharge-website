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
          padding: "88px 28px 110px",
        }}
      >
        <div
          style={{
            minHeight: "650px",
            borderRadius: "34px",
            overflow: "hidden",
            boxShadow: "0 40px 120px rgba(15,23,42,0.28)",
            border: "1px solid rgba(255,255,255,0.06)",
            backgroundImage: `
              linear-gradient(
                135deg,
                rgba(2,6,23,0.94) 0%,
                rgba(15,23,42,0.72) 38%,
                rgba(15,23,42,0.34) 72%,
                rgba(15,23,42,0.18) 100%
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
              minHeight: "500px",
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

            <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
              <a
                href="#contact"
                style={{
                  background: "linear-gradient(135deg,#2563eb 0%,#3b82f6 100%)",
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
          html {
            scroll-behavior: smooth;
          }

          .focus-flow {
            background: #f6f3ec;
            padding: 20px 20px 130px;
            overflow: hidden;
          }

          .focus-head {
            text-align: center;
            max-width: 860px;
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
            max-width: 700px;
          }

          .focus-wrap {
            position: relative;
            max-width: 1280px;
            height: 2320px;
            margin: 0 auto;
          }

          .plug {
            position: absolute;
            top: 0;
            left: 50%;
            width: 74px;
            height: 76px;
            transform: translateX(-50%);
            border-radius: 0 0 26px 26px;
            background: linear-gradient(180deg, #071b33 0%, #0f172a 100%);
            box-shadow: 0 18px 42px rgba(7,27,51,0.18);
            z-index: 5;
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
            height: 68px;
            transform: translateX(-50%);
            background: linear-gradient(180deg, #071b33 0%, #0f172a 100%);
            border-radius: 0 0 16px 16px;
            z-index: 5;
          }

          .cable {
            position: absolute;
            top: -330px;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 1;
            pointer-events: none;
          }

          .cable-shadow {
            filter: drop-shadow(0 26px 34px rgba(37,99,235,0.20));
          }

          .signal {
            position: absolute;
            top: -330px;
            left: 0;
            width: 18px;
            height: 18px;
            border-radius: 999px;
            background: #ffffff;
            z-index: 8;
            pointer-events: none;
            box-shadow:
              0 0 0 8px rgba(147,197,253,0.16),
              0 0 22px rgba(147,197,253,0.90),
              0 0 46px rgba(37,99,235,0.85);
            offset-path: path("M640 252 V410 C640 500 580 540 500 540 H260 C170 540 120 590 120 680 V735 C120 825 175 880 265 880 H1015 C1105 880 1160 935 1160 1025 V1050 C1160 1140 1105 1195 1015 1195 H265 C175 1195 120 1250 120 1340 V1385 C120 1475 175 1530 265 1530 H610 C630 1530 640 1540 640 1560 V1705");
            offset-rotate: 0deg;
            animation: signalMove 12s cubic-bezier(0.72, 0, 0.22, 1) infinite;
          }

          .signal::after {
            content: "";
            position: absolute;
            inset: -12px;
            border-radius: 999px;
            background: radial-gradient(circle, rgba(59,130,246,0.44) 0%, rgba(59,130,246,0.08) 48%, transparent 70%);
            animation: signalPulse 1.4s ease-in-out infinite;
          }

          @keyframes signalMove {
            0% {
              offset-distance: 0%;
              opacity: 0;
            }

            4% {
              opacity: 1;
            }

            90% {
              opacity: 1;
            }

            100% {
              offset-distance: 100%;
              opacity: 0;
            }
          }

          @keyframes signalPulse {
            0%, 100% {
              transform: scale(0.82);
              opacity: 0.75;
            }

            50% {
              transform: scale(1.25);
              opacity: 1;
            }
          }

          .focus-item {
            position: absolute;
            z-index: 6;
            width: min(410px, 34vw);
            background: rgba(255,255,255,0.80);
            border: 1px solid rgba(15,23,42,0.08);
            border-radius: 28px;
            padding: 28px;
            box-shadow:
              0 24px 60px rgba(15,23,42,0.10),
              0 2px 10px rgba(15,23,42,0.04);
            backdrop-filter: blur(12px);
            transition: all 0.4s ease;
          }

          .focus-item.item-one {
            top: 250px;
            left: 70px;
            animation: highlightOne 12s ease-in-out infinite;
          }

          .focus-item.item-two {
            top: 550px;
            right: 70px;
            animation: highlightTwo 12s ease-in-out infinite;
          }

          .focus-item.item-three {
            top: 920px;
            left: 70px;
            animation: highlightThree 12s ease-in-out infinite;
          }

          .focus-item.item-four {
            top: 1300px;
            right: 70px;
            animation: highlightFour 12s ease-in-out infinite;
          }

          @keyframes highlightOne {
            0%, 12%, 28%, 100% {
              transform: translateY(0);
              border-color: rgba(15,23,42,0.08);
              box-shadow:
                0 24px 60px rgba(15,23,42,0.10),
                0 2px 10px rgba(15,23,42,0.04);
            }

            16%, 23% {
              transform: translateY(-6px);
              border-color: rgba(37,99,235,0.52);
              box-shadow:
                0 30px 74px rgba(37,99,235,0.18),
                0 0 0 1px rgba(37,99,235,0.22);
            }
          }

          @keyframes highlightTwo {
            0%, 34%, 50%, 100% {
              transform: translateY(0);
              border-color: rgba(15,23,42,0.08);
              box-shadow:
                0 24px 60px rgba(15,23,42,0.10),
                0 2px 10px rgba(15,23,42,0.04);
            }

            38%, 46% {
              transform: translateY(-6px);
              border-color: rgba(37,99,235,0.52);
              box-shadow:
                0 30px 74px rgba(37,99,235,0.18),
                0 0 0 1px rgba(37,99,235,0.22);
            }
          }

          @keyframes highlightThree {
            0%, 56%, 72%, 100% {
              transform: translateY(0);
              border-color: rgba(15,23,42,0.08);
              box-shadow:
                0 24px 60px rgba(15,23,42,0.10),
                0 2px 10px rgba(15,23,42,0.04);
            }

            60%, 68% {
              transform: translateY(-6px);
              border-color: rgba(37,99,235,0.52);
              box-shadow:
                0 30px 74px rgba(37,99,235,0.18),
                0 0 0 1px rgba(37,99,235,0.22);
            }
          }

          @keyframes highlightFour {
            0%, 76%, 92%, 100% {
              transform: translateY(0);
              border-color: rgba(15,23,42,0.08);
              box-shadow:
                0 24px 60px rgba(15,23,42,0.10),
                0 2px 10px rgba(15,23,42,0.04);
            }

            80%, 88% {
              transform: translateY(-6px);
              border-color: rgba(37,99,235,0.52);
              box-shadow:
                0 30px 74px rgba(37,99,235,0.18),
                0 0 0 1px rgba(37,99,235,0.22);
            }
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
            margin-bottom: 18px;
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

          .charger-wrap {
            position: absolute;
            left: 50%;
            top: 1460px;
            transform: translateX(-50%);
            z-index: 4;
            width: min(1100px, 96%);
            min-height: 860px;
            display: flex;
            justify-content: center;
            align-items: flex-start;
          }

          .charger-panel {
            position: relative;
            width: 760px;
            height: 860px;
            display: flex;
            align-items: flex-end;
            justify-content: center;
          }

          .charger-halo {
            position: absolute;
            width: 680px;
            height: 680px;
            border-radius: 50%;
            background: radial-gradient(
              circle,
              rgba(37,99,235,0.18) 0%,
              rgba(37,99,235,0.05) 56%,
              transparent 78%
            );
            top: 40px;
            left: 50%;
            transform: translateX(-50%);
            filter: blur(8px);
          }

          .charger-shadow {
            position: absolute;
            bottom: 8px;
            width: 460px;
            height: 42px;
            border-radius: 50%;
            background: rgba(7,27,51,0.18);
            filter: blur(24px);
          }

          .charger-top-slot {
            position: absolute;
            top: 58px;
            left: 50%;
            transform: translateX(-50%);
            width: 170px;
            height: 34px;
            border-radius: 18px 18px 8px 8px;
            background: linear-gradient(180deg, #050b14 0%, #111827 100%);
            box-shadow:
              inset 0 0 0 1px rgba(255,255,255,0.06),
              0 12px 26px rgba(0,0,0,0.24);
            z-index: 8;
          }

          .charger-bottom-slot {
            position: absolute;
            bottom: 0;
            left: 50%;
            transform: translateX(-50%);
            width: 210px;
            height: 38px;
            border-radius: 10px 10px 24px 24px;
            background: linear-gradient(180deg, #111827 0%, #050b14 100%);
            box-shadow:
              inset 0 0 0 1px rgba(255,255,255,0.06),
              0 18px 34px rgba(0,0,0,0.22);
            z-index: 7;
          }

          .charger {
            position: relative;
            width: 500px;
            height: 760px;
            border-radius: 48px 48px 34px 34px;
            background: linear-gradient(180deg, #1a2335 0%, #07111f 100%);
            box-shadow:
              0 52px 130px rgba(7,27,51,0.32),
              inset 0 0 0 1px rgba(255,255,255,0.08);
            overflow: hidden;
            z-index: 5;
          }

          .charger::before {
            content: "";
            position: absolute;
            inset: 0;
            background:
              radial-gradient(circle at top left, rgba(37,99,235,0.26), transparent 34%),
              linear-gradient(180deg, rgba(255,255,255,0.10), transparent 24%);
            pointer-events: none;
          }

          .charger::after {
            content: "";
            position: absolute;
            left: 34px;
            top: 30px;
            bottom: 30px;
            width: 1px;
            background: linear-gradient(
              180deg,
              transparent,
              rgba(255,255,255,0.18),
              transparent
            );
            opacity: 0.55;
          }

          .charger-screen {
            position: absolute;
            top: 90px;
            left: 50%;
            transform: translateX(-50%);
            width: 340px;
            height: 210px;
            border-radius: 28px;
            background:
              radial-gradient(circle at top, rgba(59,130,246,0.20), transparent 58%),
              linear-gradient(180deg, rgba(10,19,34,0.98) 0%, rgba(3,8,18,0.98) 100%);
            border: 1px solid rgba(147,197,253,0.20);
            box-shadow:
              inset 0 0 0 1px rgba(255,255,255,0.03),
              0 18px 44px rgba(7,27,51,0.18);
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            padding: 20px 22px;
            color: #dbeafe;
            z-index: 6;
            animation: screenGlow 12s ease-in-out infinite;
          }

          .screen-top-row {
            display: flex;
            justify-content: space-between;
            align-items: center;
          }

          .screen-network {
            font-size: 12px;
            font-weight: 800;
            letter-spacing: 2px;
            color: #93c5fd;
            text-transform: uppercase;
          }

          .screen-badge {
            font-size: 11px;
            font-weight: 800;
            padding: 5px 10px;
            border-radius: 999px;
            background: rgba(59,130,246,0.16);
            color: #dbeafe;
            border: 1px solid rgba(59,130,246,0.22);
          }

          .screen-main {
            font-size: 32px;
            line-height: 1.02;
            font-weight: 900;
            letter-spacing: -0.9px;
            color: #ffffff;
            margin-top: 8px;
          }

          .screen-sub {
            font-size: 14px;
            line-height: 1.45;
            font-weight: 700;
            color: #bfdbfe;
            max-width: 250px;
          }

          .screen-footer {
            display: flex;
            justify-content: space-between;
            gap: 12px;
            margin-top: 10px;
          }

          .screen-footer span {
            flex: 1;
            font-size: 11px;
            font-weight: 700;
            color: #cbd5e1;
            padding: 8px 10px;
            border-radius: 12px;
            background: rgba(255,255,255,0.04);
            border: 1px solid rgba(255,255,255,0.05);
            text-align: center;
          }

          @keyframes screenGlow {
            0%, 88%, 100% {
              box-shadow:
                inset 0 0 0 1px rgba(255,255,255,0.03),
                0 18px 44px rgba(7,27,51,0.18);
            }

            92%, 97% {
              box-shadow:
                0 0 48px rgba(59,130,246,0.36),
                inset 0 0 34px rgba(59,130,246,0.10),
                0 18px 44px rgba(7,27,51,0.18);
            }
          }

          .charger-port {
            position: absolute;
            top: 405px;
            left: 50%;
            transform: translateX(-50%);
            width: 135px;
            height: 135px;
            border-radius: 50%;
            background: #0f172a;
            border: 14px solid #2563eb;
            box-shadow:
              0 0 0 16px rgba(37,99,235,0.12),
              0 20px 42px rgba(37,99,235,0.26),
              inset 0 0 0 9px rgba(255,255,255,0.05);
            z-index: 6;
          }

          .charger-port::after {
            content: "";
            position: absolute;
            inset: 28px;
            border-radius: 50%;
            background: rgba(147,197,253,0.14);
            box-shadow: inset 0 0 0 1px rgba(255,255,255,0.10);
          }

          .charger-base {
            position: absolute;
            bottom: 34px;
            left: 50%;
            transform: translateX(-50%);
            width: 230px;
            height: 18px;
            border-radius: 999px;
            background: rgba(255,255,255,0.14);
            z-index: 6;
          }

          .charger-glow {
            position: absolute;
            top: 382px;
            left: 50%;
            width: 260px;
            height: 260px;
            transform: translateX(-50%);
            border-radius: 50%;
            background: radial-gradient(circle, rgba(59,130,246,0.24), transparent 68%);
            filter: blur(6px);
            z-index: 3;
            animation: chargerPulse 12s ease-in-out infinite;
          }

          @keyframes chargerPulse {
            0%, 88%, 100% {
              opacity: 0.35;
              transform: translateX(-50%) scale(0.92);
            }

            92%, 97% {
              opacity: 1;
              transform: translateX(-50%) scale(1.10);
            }
          }

          @media (max-width: 1080px) {
            .focus-wrap {
              height: auto;
              display: grid;
              gap: 24px;
              padding-top: 100px;
            }

            .plug,
            .plug-base,
            .cable,
            .signal {
              display: none;
            }

            .focus-item {
              position: relative;
              top: auto !important;
              left: auto !important;
              right: auto !important;
              width: auto;
              animation: none !important;
            }

            .charger-wrap {
              position: relative;
              left: auto;
              top: auto;
              transform: none;
              width: auto;
              min-height: 860px;
            }

            .charger-panel {
              width: 100%;
              height: 860px;
            }
          }

          @media (max-width: 720px) {
            .focus-flow {
              padding: 20px 18px 90px;
            }

            .focus-kicker {
              letter-spacing: 6px;
            }

            .focus-item {
              padding: 24px;
            }

            .nav-links {
              gap: 16px !important;
              font-size: 13px !important;
            }

            .charger {
              width: 330px;
              height: 560px;
            }

            .charger-screen {
              width: 245px;
              height: 170px;
              top: 76px;
            }

            .screen-main {
              font-size: 25px;
            }

            .screen-sub {
              font-size: 12px;
            }

            .screen-footer span {
              font-size: 10px;
              padding: 7px 6px;
            }

            .charger-port {
              top: 330px;
              width: 112px;
              height: 112px;
            }

            .charger-port::after {
              inset: 24px;
            }

            .charger-glow {
              top: 305px;
              width: 220px;
              height: 220px;
            }

            .charger-base {
              bottom: 28px;
            }

            .charger-top-slot {
              top: 72px;
              width: 140px;
              height: 30px;
            }

            .charger-bottom-slot {
              width: 180px;
              height: 34px;
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

          <svg className="cable" viewBox="0 0 1280 1900" fill="none">
            <path
              className="cable-shadow"
              d="
                M640 252
                V410

                C640 500 580 540 500 540
                H260

                C170 540 120 590 120 680
                V735

                C120 825 175 880 265 880
                H1015

                C1105 880 1160 935 1160 1025
                V1050

                C1160 1140 1105 1195 1015 1195
                H265

                C175 1195 120 1250 120 1340
                V1385

                C120 1475 175 1530 265 1530
                H610

                C630 1530 640 1540 640 1560
                V1705
              "
              stroke="#2563eb"
              strokeWidth="24"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            <path
              d="
                M640 252
                V410

                C640 500 580 540 500 540
                H260

                C170 540 120 590 120 680
                V735

                C120 825 175 880 265 880
                H1015

                C1105 880 1160 935 1160 1025
                V1050

                C1160 1140 1105 1195 1015 1195
                H265

                C175 1195 120 1250 120 1340
                V1385

                C120 1475 175 1530 265 1530
                H610

                C630 1530 640 1540 640 1560
                V1705
              "
              stroke="rgba(255,255,255,0.42)"
              strokeWidth="5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <div className="signal" />

          {focusItems.map((item) => (
            <article key={item.title} className={`focus-item ${item.className}`}>
              <div className="item-number">{item.number}</div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}

          <div className="charger-wrap" id="support">
            <div className="charger-panel">
              <div className="charger-halo" />
              <div className="charger-shadow" />

              <div className="charger-top-slot" />

              <div className="charger">
                <div className="charger-screen">
                  <div className="screen-top-row">
                    <span className="screen-network">CONNECTED</span>
                    <span className="screen-badge">LIVE</span>
                  </div>

                  <div className="screen-main">Clearer action</div>

                  <div className="screen-sub">
                    Field issues → practical decisions
                  </div>

                  <div className="screen-footer">
                    <span>Evidence visible</span>
                    <span>Support ready</span>
                  </div>
                </div>

                <div className="charger-glow" />
                <div className="charger-port" />
                <div className="charger-base" />
              </div>

              <div className="charger-bottom-slot" />
            </div>
          </div>
        </div>
      </section>

      <section
        id="contact"
        style={{
          maxWidth: "1220px",
          margin: "0 auto",
          padding: "10px 28px 110px",
        }}
      >
        <div
          style={{
            background: "linear-gradient(135deg,#0f172a 0%,#111827 55%,#1e293b 100%)",
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
              background: "linear-gradient(135deg,#2563eb 0%,#3b82f6 100%)",
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
            <div style={{ display: "grid", gap: "12px", marginTop: "14px" }}>
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
