export default function Contact() {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#0b0b0b",
        color: "#fff",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "40px 20px",
      }}
    >
      <div
        style={{
          maxWidth: "900px",
          width: "100%",
          backgroundColor: "rgba(255, 255, 255, 0.05)",
          border: "1px solid #00ffff40",
          borderRadius: "15px",
          boxShadow: "0 0 25px #00ffff30",
          padding: "40px",
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        {/* Left Side - Contact Info */}
        <div style={{ flex: "1 1 300px", marginBottom: "30px" }}>
          <h1
            style={{
              color: "#00ffff",
              fontSize: "2.2rem",
              marginBottom: "20px",
              textShadow: "0 0 10px #00ffff",
            }}
          >
            Contact Me
          </h1>
          <p style={{ color: "#ccc", fontSize: "1rem", lineHeight: "1.8" }}>
            I’d love to connect! Feel free to reach out through email or LinkedIn.
          </p>

          <div style={{ marginTop: "30px", fontSize: "1rem", lineHeight: "2" }}>
            <p>
              📧{" "}
              <a
                href="mailto:mathumitha@gmail.com"
                style={{
                  color: "#00ffff",
                  textDecoration: "none",
                }}
              >
                mathumitham9361@gmail.com
              </a>
            </p>
            <p>
              🔗{" "}
              <a
                href="https://www.linkedin.com/in/mathumitha-m-7b4578329"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "#00ffff",
                  textDecoration: "none",
                }}
              >
                 LinkedIn Profile
              </a>
            </p>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div
          style={{
            flex: "1 1 300px",
            display: "flex",
            flexDirection: "column",
            gap: "15px",
          }}
        >
          <input
            type="text"
            placeholder="Your Name"
            style={{
              padding: "12px",
              borderRadius: "10px",
              border: "1px solid #00ffff60",
              backgroundColor: "transparent",
              color: "#fff",
              outline: "none",
            }}
          />
          <input
            type="email"
            placeholder="Your Email"
            style={{
              padding: "12px",
              borderRadius: "10px",
              border: "1px solid #00ffff60",
              backgroundColor: "transparent",
              color: "#fff",
              outline: "none",
            }}
          />
          <textarea
            placeholder="Your Message"
            rows="4"
            style={{
              padding: "12px",
              borderRadius: "10px",
              border: "1px solid #00ffff60",
              backgroundColor: "transparent",
              color: "#fff",
              outline: "none",
            }}
          />
          <button
            style={{
              padding: "12px",
              backgroundColor: "#00ffff",
              color: "#000",
              fontWeight: "bold",
              border: "none",
              borderRadius: "10px",
              cursor: "pointer",
              transition: "0.3s",
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#00cccc")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#00ffff")}
          >
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
}


