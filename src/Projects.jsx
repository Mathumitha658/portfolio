export default function Projects() {
  const projects = [
    {
      title: "Aura Jewels 💍",
      description:
        "An elegant online jewellery shopping platform where users can browse, view, and purchase premium jewellery. Built using React with a clean, modern interface and secure user dashboard.",
    },
    {
      title: "AI Chatbot Assistant 🤖",
      description:
        "A virtual assistant chatbot designed to help users with instant replies and smart suggestions. Developed using NLP concepts and integrated into a user-friendly web interface.",
    },
    {
      title: "Automated Telemedicine System 🏥",
      description:
        "A healthcare support system with AI-powered chatbot assistance that helps connect patients and doctors online. Features symptom checking, appointment scheduling, and data management.",
    },
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#0b0b0b",
        color: "#fff",
        paddingTop: "100px",
        paddingBottom: "50px",
        textAlign: "center",
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
        My Projects
      </h1>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "30px",
          width: "85%",
          margin: "0 auto",
        }}
      >
        {projects.map((project, index) => (
          <div
            key={index}
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.05)",
              border: "1px solid #00ffff40",
              borderRadius: "15px",
              padding: "25px",
              width: "300px",
              textAlign: "left",
              boxShadow: "0 0 20px #00ffff20",
              transition: "0.3s",
              cursor: "pointer",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.boxShadow = "0 0 25px #00ffff")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.boxShadow = "0 0 20px #00ffff20")
            }
          >
            <h2
              style={{
                color: "#00ffff",
                fontSize: "1.3rem",
                marginBottom: "10px",
              }}
            >
              {project.title}
            </h2>
            <p style={{ color: "#ccc", fontSize: "0.95rem", lineHeight: "1.6" }}>
              {project.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

