import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaPython,
  FaBootstrap,
} from "react-icons/fa";

export default function Skills() {
  const skills = [
    { name: "HTML", icon: <FaHtml5 color="#E44D26" />, level: "Advanced" },
    { name: "CSS", icon: <FaCss3Alt color="#1572B6" />, level: "Advanced" },
    { name: "JavaScript", icon: <FaJs color="#F7DF1E" />, level: "Intermediate" },
    { name: "React.js", icon: <FaReact color="#61DAFB" />, level: "Advanced" },
    { name: "Node.js", icon: <FaNodeJs color="#68A063" />, level: "Intermediate" },
    { name: "Python", icon: <FaPython color="#FFD43B" />, level: "Intermediate" },
    { name: "Bootstrap", icon: <FaBootstrap color="#7952B3" />, level: "Advanced" },
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#0b0b0b",
        color: "#fff",
        textAlign: "center",
        paddingTop: "100px",
        paddingBottom: "50px",
      }}
    >
      <h1
        style={{
          color: "#00ffff",
          fontSize: "2.5rem",
          marginBottom: "40px",
          textShadow: "0 0 10px #00ffff",
        }}
      >
        My Skills
      </h1>

      {/* Horizontal Row */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "20px",
          width: "85%",
          margin: "0 auto",
        }}
      >
        {skills.map((skill, index) => (
          <div
            key={index}
            style={{
              backgroundColor: "rgba(255,255,255,0.05)",
              border: "1px solid #00ffff40",
              borderRadius: "12px",
              padding: "20px",
              width: "150px",
              transition: "0.3s",
              boxShadow: "0 0 10px #00ffff20",
              cursor: "pointer",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.boxShadow = "0 0 18px #00ffff")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.boxShadow = "0 0 10px #00ffff20")
            }
          >
            <div style={{ fontSize: "2rem", marginBottom: "10px" }}>
              {skill.icon}
            </div>
            <h2
              style={{
                color: "#00ffff",
                fontSize: "1rem",
                marginBottom: "5px",
              }}
            >
              {skill.name}
            </h2>
            <p style={{ color: "#ccc", fontSize: "0.85rem" }}>{skill.level}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

