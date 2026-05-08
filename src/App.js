import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const skills = [
    "Penetration Testing", "Vulnerability Assessment", "SOC / SIEM",
    "Network Security", "Web App Security", "Cloud Security & IAM",
    "Bash Scripting & Automation", "Incident Detection & Response",
    "Firewall & SSH Hardening", "Risk Management", "Ethical Hacking",
  ];

  const labs = [
    { title: "SOC Stack Deployment", desc: "Built and deployed a fully integrated SOC using Wazuh, Suricata, and VirusTotal with automated threat detection, real-time alerting, and active response scripting." },
    { title: "Penetration Testing", desc: "Full-stack pen test on VulnBank.org covering reconnaissance, business logic, and API exploitation. Assessments on Metasploitable & DevGuru." },
    { title: "Post-Exploitation", desc: "PostgreSQL reverse shell, C2 session pivoting, lateral movement, SSH exploitation, and Metasploit attack & defence simulation." },
    { title: "Web App Attacks", desc: "SQL injection, XSS, session hijacking, and brute force across hands-on lab environments." },
    { title: "Network Enumeration", desc: "Stealth analysis focused on detection thresholds and vulnerability discovery." },
    { title: "Security Monitoring Toolkit", desc: "Automated Bash toolkit with SSH hardening and firewall rule configuration." },
  ];

  const certs = [
    { icon: "🛡️", name: "CompTIA Security+", org: "SY0-701 · Score 803/900", date: "May 2026" },
    { icon: "🔍", name: "Google Cybersecurity", org: "Coursera Professional Certificate", date: "2025" },
    { icon: "☁️", name: "AWS Cloud Practitioner", org: "Amazon Web Services", date: "2026" },
    { icon: "🎓", name: "TS Academy", org: "Cybersecurity Program", date: "Apr 2026" },
    { icon: "💻", name: "GoMyCode", org: "CompTIA Security+ Bootcamp", date: "Feb 2026" },
    { icon: "🏛️", name: "B.Tech — FUTA", org: "Fed. University of Technology Akure", date: "2023" },
  ];

  return (
    <div className="app">
      {/* Navbar */}
      <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <div className="nav-logo">MO // SECURITY</div>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#certs">Certifications</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* Hero */}
      <section className="hero">
        <div className="hero-inner">
          <span className="hero-tag">AVAILABLE FOR OPPORTUNITIES</span>
          <h1>Mohammed<br /><span className="accent">Orunsolu</span></h1>
          <p className="hero-sub">
            Cybersecurity Professional · Security Operations · Penetration Testing · Vulnerability Assessment
            <br />📍 Ibadan, Oyo, Nigeria
          </p>
          <div className="hero-btns">
            <a href="#experience" className="btn-primary">View My Work</a>
            <a href="mailto:mohammedorunsolu@gmail.com" className="btn-outline">Contact Me</a>
          </div>
          <div className="stats-bar">
            <div className="stat"><span className="stat-num">803</span><span className="stat-label">Security+ Score</span></div>
            <div className="stat-divider" />
            <div className="stat"><span className="stat-num">6+</span><span className="stat-label">Lab Projects</span></div>
            <div className="stat-divider" />
            <div className="stat"><span className="stat-num">5+</span><span className="stat-label">Certifications</span></div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="section light">
        <div className="section-inner">
          <p className="sec-label">ABOUT</p>
          <h2>Who I Am</h2>
          <p className="about-text">
            Cybersecurity professional with hands-on expertise in security operations, vulnerability assessment,
            and penetration testing — driven by a passion for breaking things to make them stronger. I build,
            test, and automate, from deploying integrated SOC stacks to executing full-stack penetration tests
            in my home lab. I thrive at the intersection of offensive and defensive security.
          </p>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="section white">
        <div className="section-inner">
          <p className="sec-label">EXPERTISE</p>
          <h2>Core Skills</h2>
          <div className="skills-wrap">
            {skills.map((s, i) => (
              <span key={s} className={`skill-pill ${i < 3 ? "accent-pill" : ""}`}>{s}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="section light">
        <div className="section-inner">
          <p className="sec-label">WORK</p>
          <h2>Experience</h2>
          <div className="exp-card">
            <div className="exp-header">
              <div>
                <h3 className="exp-title">Information Security Lead</h3>
                <p className="exp-company">Verixar Ltd · London, UK · InsurTech Startup</p>
              </div>
              <span className="exp-badge">Current</span>
            </div>
            <ul className="exp-list">
              <li>Architected the company's entire security framework from scratch — policies, incident response plan, BCP & risk register</li>
              <li>Leading NCSC Cyber Essentials certification across all five domains</li>
              <li>Enforced MFA across GitHub, Vercel, Railway, Namecheap & Private Email org-wide</li>
              <li>Implemented device security in a fully BYOD environment with Cloudflare DNS-level filtering</li>
              <li>Conducted secret scanning across all code repositories to eliminate exposed credentials</li>
              <li>Designed vendor security assessment framework including pre-onboarding questionnaire & third-party risk checklist</li>
              <li>Delivered the company's first security awareness training programme</li>
            </ul>
          </div>

          <h2 style={{ marginTop: "2.5rem" }}>Home Lab & Projects</h2>
          <div className="labs-grid">
            {labs.map((l) => (
              <div className="lab-card" key={l.title}>
                <div className="lab-dot" />
                <h4 className="lab-title">{l.title}</h4>
                <p className="lab-desc">{l.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section id="certs" className="section dark">
        <div className="section-inner">
          <p className="sec-label">CREDENTIALS</p>
          <h2 className="light-heading">Certifications & Education</h2>
          <div className="cert-grid">
            {certs.map((c) => (
              <div className="cert-card" key={c.name}>
                <div className="cert-icon">{c.icon}</div>
                <h4 className="cert-name">{c.name}</h4>
                <p className="cert-org">{c.org}</p>
                <span className="cert-badge">{c.date}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section white">
        <div className="section-inner">
          <p className="sec-label">GET IN TOUCH</p>
          <h2>Contact</h2>
          <div className="contact-list">
            <a href="mailto:mohammedorunsolu@gmail.com" className="contact-item">
              <span className="contact-dot" />mohammedorunsolu@gmail.com
            </a>
            <a href="https://linkedin.com/in/mohammedorunsolu/" target="_blank" rel="noreferrer" className="contact-item">
              <span className="contact-dot" />linkedin.com/in/mohammedorunsolu
            </a>
            <a href="https://github.com/MDPorsch" target="_blank" rel="noreferrer" className="contact-item">
              <span className="contact-dot" />github.com/MDPorsch
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2026 Mohammed Orunsolu · Cybersecurity Professional · Deployed via AWS Amplify</p>
      </footer>
    </div>
  );
}

export default App;