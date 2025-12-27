import { NavLink } from "react-router-dom";

export default function Navbar() {
  const navStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "40px",
    backgroundColor: "#0d0d0d",
    padding: "20px 0",
    position: "sticky",
    top: 0,
    zIndex: 1000,
  };

  const linkStyle = ({ isActive }) => ({
    color: isActive ? "#00ffff" : "#fff",
    textDecoration: "none",
    fontWeight: "500",
    fontSize: "18px",
    transition: "0.3s",
  });

  return (
    <nav style={navStyle}>
      <NavLink to="/" style={linkStyle}>
        Home
      </NavLink>
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
  );
}
