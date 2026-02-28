import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import jenishaImg from "./assets/jenisha.jpeg";
import {
  Mail, Phone, MapPin, Github, ChevronDown,
  Code2, Database, Globe, Wrench, ExternalLink,
  Briefcase, GraduationCap, Award, Heart, Star,
  Terminal, Layers, Zap, Menu, X
} from "lucide-react";

/* ================= DATA ================= */
const SKILLS = [
  {
    category: "Frontend",
    icon: <Globe size={22} />,
    color: "cyan",
    items: ["HTML5", "CSS3", "JavaScript", "Angular"],
  },
  {
    category: "Backend",
    icon: <Terminal size={22} />,
    color: "purple",
    items: ["Java", "Python", "Spring Boot"],
  },
  {
    category: "Database",
    icon: <Database size={22} />,
    color: "pink",
    items: ["MongoDB"],
  },
  {
    category: "SEO Tools",
    icon: <Zap size={22} />,
    color: "orange",
    items: ["Semrush", "Ahrefs", "Google Search Console", "Google PageSpeed Insights"],
  },
  {
    category: "Dev Tools",
    icon: <Wrench size={22} />,
    color: "green",
    items: ["VS Code", "Eclipse IDE", "Windows OS", "Git"],
  },
  {
    category: "Frameworks",
    icon: <Layers size={22} />,
    color: "blue",
    items: ["Spring Boot", "Angular", "Java EE"],
  },
];

const EXPERIENCE = [
  {
    role: "Full Stack Development Intern",
    company: "Career Shaper",
    period: "2024",
    type: "Internship",
    description:
      "Worked on a complete full-stack ecosystem — designed RESTful APIs using Java & Spring Boot on the backend, built responsive UIs with Angular on the frontend, and managed data with MongoDB. Used Eclipse IDE throughout development.",
    tech: ["Java", "Spring Boot", "Angular", "MongoDB", "Eclipse IDE"],
    color: "purple",
  },
  {
    role: "Mobile App Development Intern",
    company: "Scode Software Solution",
    period: "2024",
    type: "Internship",
    description:
      "Assisted in building cross-platform Android applications using modern development frameworks and tools. Gained hands-on experience in mobile UI design, debugging, and app lifecycle management.",
    tech: ["Android", "Mobile Development", "Modern Frameworks"],
    color: "cyan",
  },
];

const EDUCATION = [
  {
    degree: "B.E. – Computer Science & Engineering",
    institution: "MRK Institute of Technology",
    location: "Tamil Nadu",
    period: "2021 – 2025",
    cgpa: "8.17",
    status: "IV Year",
    icon: <GraduationCap size={24} />,
  },
  {
    degree: "12th Standard (HSC)",
    institution: "Government Girls Hr. Sec. School",
    location: "Tamil Nadu",
    period: "2020 – 2022",
    cgpa: "—",
    status: "Completed",
    icon: <Award size={24} />,
  },
];

const PROJECTS = [
  {
    name: "Student Information System",
    description:
      "A full-stack web application for managing student records, academic data, and administrative workflows. Features secure authentication, CRUD operations, and a clean responsive dashboard.",
    tech: ["Spring Boot", "Angular", "MongoDB", "Java", "REST API"],
    github: "https://github.com/sjenisha489/student",
    color: "purple",
    emoji: "🎓",
  },
];

const STRENGTHS = [
  { label: "Fast Learner", icon: <Zap size={18} />, desc: "Quickly adapts to new technologies and frameworks" },
  { label: "Problem Solver", icon: <Code2 size={18} />, desc: "Analytical approach to complex technical challenges" },
  { label: "Communicator", icon: <Globe size={18} />, desc: "Fluent in Tamil & English with strong written skills" },
  { label: "Team Player", icon: <Heart size={18} />, desc: "Collaborative and supportive in cross-functional teams" },
];

const INTERESTS = [
  { label: "Tech Tutorials", emoji: "📺" },
  { label: "Podcasts & Music", emoji: "🎧" },
  { label: "Drawing & Painting", emoji: "🎨" },
  { label: "Outdoor Games", emoji: "🏃" },
  { label: "SEO Research", emoji: "🔍" },
  { label: "Open Source", emoji: "💻" },
];

/* ================= HOOKS ================= */
function useScrollReveal(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);
  return { ref, visible };
}

/* ================= COMPONENTS ================= */

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Education", href: "#education" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <div className="navbar__inner">
        <a href="#hero" className="navbar__brand">
          <span className="brand-dot"></span>
          <span>Jenisha<span className="brand-accent"> S</span></span>
        </a>
        <ul className={`navbar__links ${menuOpen ? "navbar__links--open" : ""}`}>
          {navLinks.map((l) => (
            <li key={l.label}>
              <a href={l.href} onClick={() => setMenuOpen(false)}>{l.label}</a>
            </li>
          ))}
          <li>
            <a href="#contact" className="navbar__cta" onClick={() => setMenuOpen(false)}>
              Hire Me
            </a>
          </li>
        </ul>
        <button
          className="navbar__hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
    </nav>
  );
}

function HeroSection() {
  return (
    <section id="hero" className="hero">
      {/* Decorative orbs */}
      <div className="hero__orb hero__orb--1"></div>
      <div className="hero__orb hero__orb--2"></div>
      <div className="hero__orb hero__orb--3"></div>

      <div className="hero__inner">
        {/* Left: Text */}
        <div className="hero__text">
          <div className="hero__badge">
            <span className="badge-dot"></span>
            Available for Opportunities
          </div>
          <h1 className="hero__name">
            Hi, I'm <span className="gradient-text">Jenisha S</span>
          </h1>
          <h2 className="hero__title">
            Software Engineer &amp;{" "}
            <span className="gradient-text-2">SEO Specialist</span>
          </h2>
          <p className="hero__desc">
            Aspiring Software Engineer with hands-on experience in Full Stack
            Development (Java · Spring Boot · Angular · MongoDB) and SEO tooling.
            Currently pursuing B.E. CSE at MRK Institute of Technology with a
            CGPA of 8.17.
          </p>
          <div className="hero__meta">
            <span className="hero__meta-item">
              <MapPin size={15} /> Cuddalore, Tamil Nadu
            </span>
            <span className="hero__meta-item">
              <Star size={15} /> CGPA: 8.17
            </span>
            <span className="hero__meta-item">
              <GraduationCap size={15} /> Class of 2025
            </span>
          </div>
          <div className="hero__actions">
            <a href="#contact" className="btn btn--primary" id="hire-btn">
              <Mail size={16} /> Get In Touch
            </a>
            <a
              href="https://github.com/sjenisha489"
              target="_blank"
              rel="noreferrer"
              className="btn btn--outline"
              id="github-btn"
            >
              <Github size={16} /> GitHub
            </a>
          </div>
          {/* Tech tags */}
          <div className="hero__tags">
            {["Java", "Spring Boot", "Angular", "MongoDB", "SEO", "Python"].map((t) => (
              <span key={t} className="tag">{t}</span>
            ))}
          </div>
        </div>

        {/* Right: Image */}
        <div className="hero__image-wrap">
          <div className="hero__image-ring hero__image-ring--outer"></div>
          <div className="hero__image-ring hero__image-ring--middle"></div>
          <div className="hero__image-container">
            <img src={jenishaImg} alt="Jenisha S – Software Engineer" className="hero__photo" />
          </div>
          {/* Floating badges */}
          <div className="float-badge float-badge--tl">
            <Code2 size={14} /> Full Stack
          </div>
          <div className="float-badge float-badge--br">
            <Zap size={14} /> SEO Expert
          </div>
          <div className="float-badge float-badge--tr">
            <Star size={14} /> 8.17 CGPA
          </div>
        </div>
      </div>

      <a href="#about" className="hero__scroll-hint" aria-label="Scroll down">
        <ChevronDown size={24} />
      </a>
    </section>
  );
}

function AboutSection() {
  const { ref, visible } = useScrollReveal();
  return (
    <section id="about" className="section about-section" ref={ref}>
      <div className={`section-reveal ${visible ? "section-reveal--visible" : ""}`}>
        <div className="section-header">
          <span className="section-label">About Me</span>
          <h2 className="section-title">The Story Behind the <span className="gradient-text">Code</span></h2>
        </div>

        <div className="about__grid">
          {/* Image card */}
          <div className="about__image-card">
            <div className="about__image-glow"></div>
            <img src={jenishaImg} alt="Jenisha S" className="about__photo" />
            <div className="about__contact-pill">
              <Phone size={14} />
              <span>9976317974</span>
            </div>
            <div className="about__contact-pill about__contact-pill--2">
              <Mail size={14} />
              <span>sjenisha489@gmail.com</span>
            </div>
          </div>

          {/* Text content */}
          <div className="about__content">
            <p className="about__intro">
              I'm <strong>Jenisha S</strong>, a passionate Software Engineer from Tamil Nadu with a B.E.
              in Computer Science &amp; Engineering. My journey spans full-stack web
              development and search engine optimization — two disciplines I believe
              go hand in hand for building products that work <em>and</em> get found.
            </p>
            <p className="about__intro">
              Through internships at <strong>Career Shaper</strong> and{" "}
              <strong>Scode Software Solution</strong>, I've built real-world projects
              using Java, Spring Boot, Angular and MongoDB — and explored mobile
              development. I'm driven by curiosity, committed to clean code, and
              always hungry to learn the next thing.
            </p>

            <div className="about__stats">
              {[
                { value: "8.17", label: "CGPA", color: "purple" },
                { value: "2", label: "Internships", color: "cyan" },
                { value: "1+", label: "Projects", color: "pink" },
                { value: "5+", label: "Tech Stacks", color: "orange" },
              ].map((s) => (
                <div key={s.label} className={`about__stat about__stat--${s.color}`}>
                  <span className="about__stat-value">{s.value}</span>
                  <span className="about__stat-label">{s.label}</span>
                </div>
              ))}
            </div>

            <div className="about__obj-card">
              <h4><Zap size={16} /> Career Objective</h4>
              <p>
                Aspiring Software Engineer with a focus on SEO and full-stack web
                development. Seeking a role where I can translate my Computer Science
                foundation and hands-on internship experience into measurable results —
                while growing professionally in a collaborative, innovation-driven team.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SkillsSection() {
  const { ref, visible } = useScrollReveal();
  return (
    <section id="skills" className="section skills-section" ref={ref}>
      <div className={`section-reveal ${visible ? "section-reveal--visible" : ""}`}>
        <div className="section-header">
          <span className="section-label">What I Know</span>
          <h2 className="section-title">Technical <span className="gradient-text">Skills</span></h2>
        </div>
        <div className="skills__grid">
          {SKILLS.map((skill, i) => (
            <div
              key={skill.category}
              className={`skill-card skill-card--${skill.color}`}
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className="skill-card__icon">{skill.icon}</div>
              <h3 className="skill-card__title">{skill.category}</h3>
              <ul className="skill-card__list">
                {skill.items.map((item) => (
                  <li key={item} className="skill-card__item">
                    <span className="skill-pill">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Proficiency bars for key skills */}
        <div className="skills__bars">
          <h3 className="skills__bars-title">Core Proficiency</h3>
          <div className="skills__bars-grid">
            {[
              { name: "Java / Spring Boot", pct: 82, color: "purple" },
              { name: "Angular (TypeScript)", pct: 78, color: "cyan" },
              { name: "MongoDB", pct: 75, color: "pink" },
              { name: "SEO Tools", pct: 80, color: "orange" },
              { name: "Python", pct: 70, color: "green" },
              { name: "HTML / CSS / JS", pct: 88, color: "blue" },
            ].map((bar) => (
              <div key={bar.name} className="skill-bar">
                <div className="skill-bar__header">
                  <span>{bar.name}</span>
                  <span>{bar.pct}%</span>
                </div>
                <div className="skill-bar__track">
                  <div
                    className={`skill-bar__fill skill-bar__fill--${bar.color}`}
                    style={visible ? { width: `${bar.pct}%` } : { width: 0 }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ExperienceSection() {
  const { ref, visible } = useScrollReveal();
  return (
    <section id="experience" className="section experience-section" ref={ref}>
      <div className={`section-reveal ${visible ? "section-reveal--visible" : ""}`}>
        <div className="section-header">
          <span className="section-label">Work History</span>
          <h2 className="section-title">Intern <span className="gradient-text">Experience</span></h2>
        </div>
        <div className="exp__timeline">
          {EXPERIENCE.map((exp, i) => (
            <div
              key={exp.role}
              className={`exp__card exp__card--${exp.color}`}
              style={{ animationDelay: `${i * 150}ms` }}
            >
              <div className="exp__card-left">
                <div className={`exp__dot exp__dot--${exp.color}`}></div>
                <div className="exp__line"></div>
              </div>
              <div className="exp__card-content">
                <div className="exp__card-header">
                  <div>
                    <span className={`exp__badge exp__badge--${exp.color}`}>
                      <Briefcase size={12} /> {exp.type}
                    </span>
                    <h3 className="exp__role">{exp.role}</h3>
                    <p className="exp__company">{exp.company} · {exp.period}</p>
                  </div>
                </div>
                <p className="exp__desc">{exp.description}</p>
                <div className="exp__tech">
                  {exp.tech.map((t) => (
                    <span key={t} className="tech-chip">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectsSection() {
  const { ref, visible } = useScrollReveal();
  return (
    <section id="projects" className="section projects-section" ref={ref}>
      <div className={`section-reveal ${visible ? "section-reveal--visible" : ""}`}>
        <div className="section-header">
          <span className="section-label">My Work</span>
          <h2 className="section-title">Featured <span className="gradient-text">Projects</span></h2>
        </div>
        <div className="projects__grid">
          {PROJECTS.map((project) => (
            <div key={project.name} className={`project-card project-card--${project.color}`}>
              <div className="project-card__header">
                <span className="project-card__emoji">{project.emoji}</span>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="project-card__github"
                  aria-label="View on GitHub"
                >
                  <Github size={18} />
                </a>
              </div>
              <h3 className="project-card__name">{project.name}</h3>
              <p className="project-card__desc">{project.description}</p>
              <div className="project-card__tech">
                {project.tech.map((t) => (
                  <span key={t} className="tech-chip">{t}</span>
                ))}
              </div>
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="project-card__link"
              >
                <ExternalLink size={14} /> View Project
              </a>
            </div>
          ))}

          {/* More coming soon card */}
          <div className="project-card project-card--coming">
            <div className="project-card__header">
              <span className="project-card__emoji">🚀</span>
            </div>
            <h3 className="project-card__name">More Coming Soon</h3>
            <p className="project-card__desc">
              Currently working on new projects that combine SEO optimization with full-stack
              web development. Stay tuned on GitHub for updates!
            </p>
            <a
              href="https://github.com/sjenisha489"
              target="_blank"
              rel="noreferrer"
              className="project-card__link"
            >
              <Github size={14} /> Follow on GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function EducationSection() {
  const { ref, visible } = useScrollReveal();
  return (
    <section id="education" className="section education-section" ref={ref}>
      <div className={`section-reveal ${visible ? "section-reveal--visible" : ""}`}>
        <div className="section-header">
          <span className="section-label">Academic Background</span>
          <h2 className="section-title">My <span className="gradient-text">Education</span></h2>
        </div>
        <div className="edu__grid">
          {EDUCATION.map((edu, i) => (
            <div
              key={edu.degree}
              className="edu__card"
              style={{ animationDelay: `${i * 120}ms` }}
            >
              <div className="edu__icon">{edu.icon}</div>
              <div className="edu__content">
                <span className="edu__status">{edu.status}</span>
                <h3 className="edu__degree">{edu.degree}</h3>
                <p className="edu__institution">{edu.institution}</p>
                <div className="edu__meta">
                  <span><MapPin size={13} /> {edu.location}</span>
                  <span>📅 {edu.period}</span>
                  {edu.cgpa !== "—" && <span><Star size={13} /> CGPA: {edu.cgpa}</span>}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Strengths */}
        <div className="strengths">
          <h3 className="strengths__title">
            <Award size={20} /> Strengths &amp; Soft Skills
          </h3>
          <div className="strengths__grid">
            {STRENGTHS.map((s) => (
              <div key={s.label} className="strength-card">
                <div className="strength-card__icon">{s.icon}</div>
                <h4>{s.label}</h4>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function InterestsSection() {
  const { ref, visible } = useScrollReveal();
  return (
    <section className="section interests-section" ref={ref}>
      <div className={`section-reveal ${visible ? "section-reveal--visible" : ""}`}>
        <div className="section-header">
          <span className="section-label">Beyond the Code</span>
          <h2 className="section-title">Hobbies &amp; <span className="gradient-text">Interests</span></h2>
        </div>
        <div className="interests__grid">
          {INTERESTS.map((item) => (
            <div key={item.label} className="interest-card">
              <span className="interest-card__emoji">{item.emoji}</span>
              <span className="interest-card__label">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  const { ref, visible } = useScrollReveal();
  return (
    <section id="contact" className="section contact-section" ref={ref}>
      <div className={`section-reveal ${visible ? "section-reveal--visible" : ""}`}>
        <div className="section-header">
          <span className="section-label">Let's Connect</span>
          <h2 className="section-title">Get In <span className="gradient-text">Touch</span></h2>
        </div>
        <p className="contact__tagline">
          Open to internship opportunities, full-time roles, and exciting collaborations.
          Feel free to reach out — I'd love to chat!
        </p>
        <div className="contact__cards">
          <a href="tel:9976317974" className="contact-card" id="phone-contact">
            <div className="contact-card__icon contact-card__icon--purple">
              <Phone size={24} />
            </div>
            <h4>Phone</h4>
            <p>+91 99763 17974</p>
          </a>
          <a href="mailto:sjenisha489@gmail.com" className="contact-card" id="email-contact">
            <div className="contact-card__icon contact-card__icon--cyan">
              <Mail size={24} />
            </div>
            <h4>Email</h4>
            <p>sjenisha489@gmail.com</p>
          </a>
          <a
            href="https://github.com/sjenisha489"
            target="_blank"
            rel="noreferrer"
            className="contact-card"
            id="github-contact"
          >
            <div className="contact-card__icon contact-card__icon--pink">
              <Github size={24} />
            </div>
            <h4>GitHub</h4>
            <p>sjenisha489</p>
          </a>
          <div className="contact-card" id="location-contact">
            <div className="contact-card__icon contact-card__icon--orange">
              <MapPin size={24} />
            </div>
            <h4>Location</h4>
            <p>Cuddalore, Tamil Nadu</p>
          </div>
        </div>

        <div className="contact__cta-wrap">
          <a href="mailto:sjenisha489@gmail.com" className="btn btn--hero" id="send-email-btn">
            <Mail size={18} /> Say Hello 👋
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__brand">
          <span className="brand-dot"></span>
          <span>Jenisha<span className="brand-accent"> S</span></span>
        </div>
        <p className="footer__copy">
          © 2025 Jenisha S. Crafted with ❤️ | Software Engineer & SEO Specialist
        </p>
        <div className="footer__socials">
          <a href="https://github.com/sjenisha489" target="_blank" rel="noreferrer" aria-label="GitHub">
            <Github size={18} />
          </a>
          <a href="mailto:sjenisha489@gmail.com" aria-label="Email">
            <Mail size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}

/* ================= MAIN APP ================= */
const App: React.FC = () => {
  return (
    <div className="portfolio">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <EducationSection />
      <InterestsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default App;