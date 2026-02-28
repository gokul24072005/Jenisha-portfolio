import React from "react";
import "./App.css";
import profile from "./assets/profile.jpg";
import { Mail, Phone, MapPin, Github } from "lucide-react";

const App: React.FC = () => {
  return (
    <div style={styles.container} className="app-container">
      
      {/* HERO SECTION */}
      <section style={styles.hero} className="hero-section">
        <img src={profile} alt="Jenisha" style={styles.image} className="profile-img" />
        <div>
          <h1 style={styles.name}>Jenisha S</h1>
          <h2 style={styles.degree}>BE – Computer Science and Engineering</h2>
          <p style={styles.location}>
            <MapPin size={16} /> Cuddalore, Tamil Nadu
          </p>
        </div>
      </section>

      {/* CAREER OBJECTIVE */}
      <section>
        <h3 style={styles.heading} className="section-heading">Career Objective</h3>
        <p style={styles.text}>
          Aspiring Software Engineer with strong foundational knowledge in SEO,
          Web Development and Computer Science Engineering. Seeking to contribute
          technical skills and grow professionally in a challenging environment.
        </p>
      </section>

      {/* SKILLS */}
      <section>
        <h3 style={styles.heading}>Technical Skills</h3>

        <div style={styles.card} className="info-card">
          <h4>Frontend</h4>
          <p>HTML, CSS, JavaScript</p>
        </div>

        <div style={styles.card} className="info-card">
          <h4>Backend</h4>
          <p>Java, Python</p>
        </div>

        <div style={styles.card} className="info-card">
          <h4>Tools</h4>
          <p>VS Code, Windows</p>
        </div>

        <div style={styles.card} className="info-card">
          <h4>SEO Tools</h4>
          <p>Semrush, Ahrefs, Google Search Console, PageSpeed Insights</p>
        </div>
      </section>

      {/* INTERNSHIP */}
      <section>
        <h3 style={styles.heading}>Intern Experience</h3>

        <div style={styles.card} className="info-card">
          <h4>Mobile App Development</h4>
          <p>
            Assisted in building Android applications using modern frameworks
            at Scode Software Solution.
          </p>
        </div>

        <div style={styles.card} className="info-card">
          <h4>Full Stack Development</h4>
          <p>
            Worked with Java, Spring Boot (Backend), Angular (Frontend),
            MongoDB (Database) via Career Shaper.
          </p>
        </div>
      </section>

      {/* PROJECT */}
      <section>
        <h3 style={styles.heading}>Project</h3>
        <div style={styles.card} className="info-card">
          <h4>Student Information System</h4>
          <p>
            Built backend using Spring Boot (Java), frontend using Angular,
            database MongoDB.
          </p>
          <a
            href="https://github.com/sjenisha489/student"
            target="_blank"
            rel="noreferrer"
            style={styles.link}
            className="project-link"
          >
            <Github size={16} /> View Project
          </a>
        </div>
      </section>

      {/* CONTACT */}
      <section>
        <h3 style={styles.heading} className="section-heading">Contact</h3>
        <p><Phone size={16} /> 9976317974</p>
        <p><Mail size={16} /> sjenisha489@gmail.com</p>
      </section>

      <footer style={styles.footer} className="site-footer">
        © 2026 Jenisha S | Software Engineer Portfolio
      </footer>

    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    fontFamily: "Segoe UI, sans-serif",
    maxWidth: "900px",
    margin: "auto",
    padding: "40px",
    color: "#333",
  },
  hero: {
    display: "flex",
    alignItems: "center",
    gap: "30px",
    marginBottom: "40px",
  },
  image: {
    width: "180px",
    height: "180px",
    borderRadius: "50%",
    objectFit: "cover",
    border: "4px solid #0f172a",
  },
  name: {
    fontSize: "36px",
    marginBottom: "5px",
  },
  degree: {
    color: "#555",
    marginBottom: "10px",
  },
  location: {
    display: "flex",
    alignItems: "center",
    gap: "5px",
  },
  heading: {
    marginTop: "30px",
    marginBottom: "10px",
    fontSize: "22px",
    borderBottom: "2px solid #0f172a",
    paddingBottom: "5px",
  },
  text: {
    lineHeight: "1.6",
  },
  card: {
    backgroundColor: "#f8fafc",
    padding: "15px",
    borderRadius: "8px",
    marginBottom: "10px",
    border: "1px solid #e2e8f0",
  },
  link: {
    color: "#2563eb",
    textDecoration: "none",
    display: "flex",
    alignItems: "center",
    gap: "5px",
  },
  footer: {
    textAlign: "center",
    marginTop: "40px",
    paddingTop: "20px",
    borderTop: "1px solid #ddd",
    fontSize: "14px",
    color: "#777",
  },
};

export default App;