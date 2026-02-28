import React from "react";
import "./App.css";
import profile from "./assets/profile.jpg";
import { Mail, Phone, MapPin, Github } from "lucide-react";

const App: React.FC = () => {
  return (
    <div className="app-container">
      
      {/* HERO SECTION */}
      <section className="hero-section">
        <img src={profile} alt="Jenisha" className="profile-img" />
        <div>
          <h1 className="hero-name">Jenisha S</h1>
          <h2 className="hero-degree">BE – Computer Science and Engineering</h2>
          <p className="location">
            <MapPin size={16} /> Cuddalore, Tamil Nadu
          </p>
        </div>
      </section>

      {/* CAREER OBJECTIVE */}
      <section>
        <h3 className="section-heading">Career Objective</h3>
        <p className="section-text">
          Aspiring Software Engineer with strong foundational knowledge in SEO,
          Web Development and Computer Science Engineering. Seeking to contribute
          technical skills and grow professionally in a challenging environment.
        </p>
      </section>

      {/* SKILLS */}
      <section>
        <h3 className="section-heading">Technical Skills</h3>

        <div className="info-card">
          <h4>Frontend</h4>
          <p>HTML, CSS, JavaScript</p>
        </div>

        <div className="info-card">
          <h4>Backend</h4>
          <p>Java, Python</p>
        </div>

        <div className="info-card">
          <h4>Tools</h4>
          <p>VS Code, Windows</p>
        </div>

        <div className="info-card">
          <h4>SEO Tools</h4>
          <p>Semrush, Ahrefs, Google Search Console, PageSpeed Insights</p>
        </div>
      </section>

      {/* INTERNSHIP */}
      <section>
        <h3 className="section-heading">Intern Experience</h3>

        <div className="info-card">
          <h4>Mobile App Development</h4>
          <p>
            Assisted in building Android applications using modern frameworks
            at Scode Software Solution.
          </p>
        </div>

        <div className="info-card">
          <h4>Full Stack Development</h4>
          <p>
            Worked with Java, Spring Boot (Backend), Angular (Frontend),
            MongoDB (Database) via Career Shaper.
          </p>
        </div>
      </section>

      {/* PROJECT */}
      <section>
        <h3 className="section-heading">Project</h3>
        <div className="info-card">
          <h4>Student Information System</h4>
          <p>
            Built backend using Spring Boot (Java), frontend using Angular,
            database MongoDB.
          </p>
            <a
            href="https://github.com/sjenisha489/student"
            target="_blank"
            rel="noreferrer"
              className="project-link"
          >
            <Github size={16} /> View Project
          </a>
        </div>
      </section>

      {/* CONTACT */}
      <section>
        <h3 className="section-heading">Contact</h3>
        <p><Phone size={16} /> 9976317974</p>
        <p><Mail size={16} /> sjenisha489@gmail.com</p>
      </section>
      <footer className="site-footer">
        © 2026 Jenisha S | Software Engineer Portfolio
      </footer>

    </div>
  );
};

export default App;