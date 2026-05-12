export default function Home() {
  const services = [
    ["EV Charging Diagnostics", "Structured troubleshooting and field-oriented analysis for EV charging environments."],
    ["Infrastructure Support", "Support for site coordination, charging workflows, and deployment visibility."],
    ["Site Assessments", "Review of charging locations, hardware conditions, layout, and readiness."],
    ["Cable Management", "Clean and practical cable management solutions for residential and commercial spaces."],
  ];

  const projects = [
    ["Charging Site Review", "Field observation, issue documentation, and practical recommendations."],
    ["Cable Organization", "Cleaner charging areas with safer and more professional cable handling."],
    ["Operational Support", "Support for teams managing EV charging environments and customer issues."],
  ];

  return (
    <main style={{ background: "#f5f1e8", color: "#111827", fontFamily: "Arial, sans-serif", minHeight: "100vh" }}>
      <nav style={{ maxWidth: "1180px", margin: "0 auto", padding: "22px 28px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <strong style={{ fontSize: "22px" }}>NavaCharge</strong>
        <div style={{ display: "flex", gap: "24px", fontSize: "14px" }}>
          <a href="#services" style={{ color: "#111827", textDecoration: "none" }}>Services</a>
          <a href="#projects" style={{ color: "#111827", textDecoration: "none" }}>Projects</a>
          <a href="#contact" style={{ color: "#111827", textDecoration: "none" }}>Contact</a>
        </div>
      </nav>

      <section style={{ maxWidth: "1180px", margin: "0 auto", padding: "70px 28px 80px" }}>
        <div style={{ background: "#0f172a", color: "white", borderRadius: "28px", padding: "80px 60px", minHeight: "420px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <p style={{ color: "#93c5fd", marginBottom: "20px" }}>EV Charging Diagnostics & Infrastructure Support</p>
          <h1 style={{ fontSize: "62px", lineHeight: "1.05", maxWidth: "820px", margin: "0 0 26px", fontWeight: "800" }}>
            Practical Support for Better EV Charging Environments
          </h1>
          <p style={{ color: "#cbd5e1", fontSize: "20px", lineHeight: "1.7", maxWidth: "680px", marginBottom: "34px" }}>
            NavaCharge helps EV charging owners and operators improve visibility, diagnostics, site organization, and field-level support.
          </p>
          <div style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
            <a href="#contact" style={{ background: "#2563eb", color: "white", padding: "15px 26px", borderRadius: "10px", textDecoration: "none", fontWeight: "700" }}>Request Support</a>
            <a href="#services" style={{ color: "white", padding: "15px 26px", borderRadius: "10px", border: "1px solid rgba(255,255,255,0.25)", textDecoration: "none", fontWeight: "700" }}>View Services</a>
          </div>
        </div>
      </section>

      <section id="services" style={{ maxWidth: "1180px", margin: "0 auto", padding: "30px 28px 80px" }}>
        <h2 style={{ fontSize: "40px", marginBottom: "14px" }}>Services</h2>
        <p style={{ color: "#4b5563", maxWidth: "650px", lineHeight: "1.7", marginBottom: "36px" }}>
          Focused technical support for real-world EV charging environments.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: "22px" }}>
          {services.map(([title, text]) => (
            <div key={title} style={{ background: "white", padding: "30px", borderRadius: "22px", boxShadow: "0 10px 30px rgba(15,23,42,0.08)" }}>
              <h3 style={{ fontSize: "22px", marginBottom: "14px" }}>{title}</h3>
              <p style={{ color: "#4b5563", lineHeight: "1.7" }}>{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="projects" style={{ maxWidth: "1180px", margin: "0 auto", padding: "40px 28px 90px" }}>
        <h2 style={{ fontSize: "40px", marginBottom: "34px" }}>Field Work & Project Areas</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: "22px" }}>
          {projects.map(([title, text]) => (
            <div key={title} style={{ background: "#111827", color: "white", padding: "34px", borderRadius: "22px", minHeight: "170px" }}>
              <h3 style={{ fontSize: "24px", marginBottom: "14px" }}>{title}</h3>
              <p style={{ color: "#cbd5e1", lineHeight: "1.7" }}>{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" style={{ maxWidth: "1180px", margin: "0 auto", padding: "60px 28px 90px" }}>
        <div style={{ background: "white", borderRadius: "26px", padding: "55px", display: "flex", justifyContent: "space-between", gap: "30px", flexWrap: "wrap", boxShadow: "0 10px 30px rgba(15,23,42,0.08)" }}>
          <div>
            <h2 style={{ fontSize: "42px", marginBottom: "14px" }}>Let’s Talk</h2>
            <p style={{ color: "#4b5563", lineHeight: "1.7", maxWidth: "560px" }}>
              Need EV charging diagnostics, site review, field support, or cable management improvement?
            </p>
          </div>
          <a href="mailto:hello@navacharge.ca" style={{ alignSelf: "center", background: "#2563eb", color: "white", padding: "16px 28px", borderRadius: "12px", textDecoration: "none", fontWeight: "700" }}>
            Email NavaCharge
          </a>
        </div>
      </section>

      <footer style={{ background: "#0f172a", color: "#cbd5e1", padding: "38px 28px" }}>
        <div style={{ maxWidth: "1180px", margin: "0 auto", display: "flex", justifyContent: "space-between", gap: "24px", flexWrap: "wrap" }}>
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
        </div>
      </footer>
    </main>
  );
}
