export default function Home() {
  const services = [
    {
      title: "EV Charging Diagnostics",
      text: "Structured troubleshooting and field-oriented analysis for EV charging environments.",
    },
    {
      title: "Infrastructure Support",
      text: "Practical support for charging deployments, site coordination, and infrastructure workflows.",
    },
    {
      title: "Site Assessments",
      text: "Technical review of charging locations, hardware conditions, and deployment readiness.",
    },
    {
      title: "Smart Cable Management",
      text: "Clean, practical cable management solutions for residential and commercial installations.",
    },
  ];

  const projects = [
    "Level 2 charging environment review",
    "Cable management improvement concept",
    "Field diagnostics and issue documentation",
  ];

  return (
    <main style={{ background: "#0b1220", color: "white", minHeight: "100vh", fontFamily: "Arial, sans-serif" }}>
      <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "26px 48px", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
        <strong style={{ fontSize: "22px" }}>NavaCharge</strong>
        <div style={{ display: "flex", gap: "24px", fontSize: "14px" }}>
          <a href="#services" style={{ color: "#cbd5e1", textDecoration: "none" }}>Services</a>
          <a href="#projects" style={{ color: "#cbd5e1", textDecoration: "none" }}>Projects</a>
          <a href="#contact" style={{ color: "#cbd5e1", textDecoration: "none" }}>Contact</a>
        </div>
      </nav>

      <section style={{ padding: "120px 32px 110px", textAlign: "center", background: "linear-gradient(180deg,#111827 0%,#0b1220 100%)" }}>
        <p style={{ color: "#60a5fa", marginBottom: "24px" }}>EV Charging Diagnostics & Infrastructure Support</p>
        <h1 style={{ fontSize: "64px", lineHeight: "1.05", maxWidth: "980px", margin: "0 auto 28px", fontWeight: "800" }}>
          Practical Support for EV Charging Infrastructure
        </h1>
        <p style={{ color: "#cbd5e1", fontSize: "20px", lineHeight: "1.7", maxWidth: "760px", margin: "0 auto 40px" }}>
          NavaCharge supports EV charging environments through diagnostics, field insight, site review, and clean cable management solutions.
        </p>
        <div style={{ display: "flex", justifyContent: "center", gap: "16px", flexWrap: "wrap" }}>
          <a href="#services" style={{ background: "#2563eb", color: "white", padding: "15px 28px", borderRadius: "12px", textDecoration: "none", fontWeight: "700" }}>Explore Services</a>
          <a href="#contact" style={{ color: "white", padding: "15px 28px", borderRadius: "12px", textDecoration: "none", border: "1px solid rgba(255,255,255,0.16)", fontWeight: "700" }}>Contact</a>
        </div>
      </section>

      <section id="services" style={{ padding: "90px 48px", maxWidth: "1200px", margin: "0 auto" }}>
        <h2 style={{ fontSize: "42px", textAlign: "center", marginBottom: "18px" }}>Services</h2>
        <p style={{ color: "#94a3b8", textAlign: "center", maxWidth: "700px", margin: "0 auto 56px", lineHeight: "1.7" }}>
          Focused, practical support for EV charging environments without exaggerated claims.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: "24px" }}>
          {services.map((item) => (
            <div key={item.title} style={{ background: "#111827", padding: "30px", borderRadius: "20px", border: "1px solid rgba(255,255,255,0.08)" }}>
              <h3 style={{ fontSize: "22px", marginBottom: "14px" }}>{item.title}</h3>
              <p style={{ color: "#94a3b8", lineHeight: "1.7" }}>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="projects" style={{ padding: "80px 48px", maxWidth: "1100px", margin: "0 auto" }}>
        <h2 style={{ fontSize: "42px", textAlign: "center", marginBottom: "48px" }}>Field Work & Project Areas</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: "22px" }}>
          {projects.map((item) => (
            <div key={item} style={{ padding: "26px", borderRadius: "18px", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}>
              {item}
            </div>
          ))}
        </div>
      </section>

      <section id="contact" style={{ padding: "100px 48px", textAlign: "center" }}>
        <h2 style={{ fontSize: "48px", marginBottom: "22px" }}>Let’s Talk</h2>
        <p style={{ color: "#94a3b8", maxWidth: "680px", margin: "0 auto 36px", lineHeight: "1.8" }}>
          Need EV charging diagnostics, site review, field support, or cable management improvement?
        </p>
        <a href="mailto:hello@navacharge.ca" style={{ background: "#2563eb", color: "white", padding: "16px 30px", borderRadius: "14px", textDecoration: "none", fontWeight: "700" }}>
          Email NavaCharge
        </a>
      </section>

      <footer style={{ borderTop: "1px solid rgba(255,255,255,0.08)", padding: "34px 48px", display: "flex", justifyContent: "space-between", gap: "24px", flexWrap: "wrap", color: "#94a3b8", fontSize: "14px" }}>
        <div>
          <strong style={{ color: "white" }}>NavaCharge</strong>
          <p>EV Charging Diagnostics & Infrastructure Support</p>
          <p>Vancouver, BC, Canada</p>
        </div>
        <div>
          <strong style={{ color: "white" }}>Connect</strong>
          <p>LinkedIn · Instagram · Facebook · YouTube · X</p>
        </div>
        <div>
          <strong style={{ color: "white" }}>Contact</strong>
          <p>hello@navacharge.ca</p>
          <p>© 2026 NavaCharge</p>
        </div>
      </footer>
    </main>
  );
}
