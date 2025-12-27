export default function About() {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#0b0b0b",
        color: "#fff",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
      }}
    >
      <div
        style={{
          maxWidth: "700px",
          backgroundColor: "rgba(255, 255, 255, 0.05)",
          border: "1px solid #00ffff40",
          borderRadius: "15px",
          padding: "40px",
          boxShadow: "0 0 25px #00ffff30",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            color: "#00ffff",
            fontSize: "2.5rem",
            marginBottom: "20px",
            textShadow: "0 0 10px #00ffff",
          }}
        >
          About Me
        </h1>
        <p
          style={{
            color: "#ddd",
            fontSize: "1rem",
            lineHeight: "1.7",
          }}
        >
          Hi! I’m <span style={{ color: "#00ffff", fontWeight: "bold" }}>Mathumitha</span>,  
          an enthusiastic IT student with a strong passion for learning and creating.
          I’m deeply interested in exploring modern web technologies and currently
          learning the <span style={{ color: "#00ffff" }}>MERN Stack</span> —  
          MongoDB, Express.js, React.js, and Node.js.  
        </p>

        <p
          style={{
            color: "#ccc",
            fontSize: "1rem",
            lineHeight: "1.7",
            marginTop: "15px",
          }}
        >
          I love designing clean, user-friendly web interfaces and building 
          responsive full-stack applications. My goal is to become a skilled 
          software developer who builds creative, impactful digital solutions. 🌟
        </p>
      </div>
    </div>
  );
}

