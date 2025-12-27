import { NavLink } from "react-router-dom";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";
import About from "./About";
import Skills from "./Skills";
import Projects from "./projects"
import Contact from "./Contact"
// import images from './assets/laptop.jpeg';

export default function HomePage() {
  
  const navStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "40px",
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    padding: "20px 0",
    position: "fixed",
    top: 0,
    width: "100%",
    zIndex: 1000,
    backdropFilter: "blur(10px)",
    borderBottom: "1px solid #00ffff50",
  };

  const linkStyle = ({ isActive }) => ({
    color: isActive ? "#00ffff" : "#fff",
    textDecoration: "none",
    fontWeight: "500",
    fontSize: "18px",
    transition: "0.3s",
  });

  return (
    <>
    
    <div
      style={{
        minHeight: "100vh",
        backgroundImage: `url(/images/laptop.jpeg)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "#fff",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: "80px",
      }}
    >
      {/* 🌙 Navbar */}
      <nav style={navStyle}>
        
        <NavLink to="/about" style={linkStyle}>
          About
        </NavLink>
        <NavLink to="/skills" style={linkStyle}>
          Skills
        </NavLink>
        <NavLink to="/projects" style={linkStyle}>
          Projects
        </NavLink>
        <NavLink to="/contact" style={linkStyle}>
          Contact
        </NavLink>
      </nav>

      {/* 🏠 Home Content */}
      <div
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.7)",
          padding: "40px",
          borderRadius: "20px",
          backdropFilter: "blur(5px)",
          animation: "fadeIn 1.5s ease",
        }}
      >
        <h1 style={{ fontSize: "3.5rem", fontWeight: "700" }}>
          Hi, I'm <span style={{ color: "#00ffff" }}>Mathumitha</span>
        </h1>
        <h2 style={{ color: "#ccc", marginTop: "10px" }}>Software Developer</h2>
        <p
          style={{
            color: "#aaa",
            marginTop: "15px",
            maxWidth: "600px",
            lineHeight: "1.7",
          }}
        >
          I create elegant and modern web apps using HTML,CSS, JS, Boostrap, React, combining design and
          functionality for a smooth user experience.
        </p>

        <div
          style={{
            marginTop: "30px",
            display: "flex",
            gap: "25px",
            justifyContent: "center",
          }}
        >
          <a
            href="https://www.linkedin.com/in/mathumitha-m-7b4578329"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "#00ffff",
              fontSize: "1.8rem",
              transition: "0.3s",
            }}
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:mathumitham9361@gmail.com"
            style={{
              color: "#00ffff",
              fontSize: "1.8rem",
              transition: "0.3s",
            }}
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
    </div>
    <About/>
    <Skills/>
    <Projects/>
    <Contact/>
    
    </>
  );
}




