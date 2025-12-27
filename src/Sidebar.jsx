export default function Home() {
  return (
    <section
      style={{
        marginLeft: "250px",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        backgroundColor: "#0b0b0b",
        color: "#fff",
      }}
    >
      <h2 style={{ fontSize: "3rem" }}>
        Hi, I’m <span style={{ color: "#00ffff" }}>Mathumitha</span>
      </h2>
      <h3 style={{ color: "#ccc", marginTop: "10px" }}>Web Developer</h3>
      <p style={{ color: "#aaa", marginTop: "15px" }}>
        Front End Developer | React Enthusiast
      </p>
    </section>
  );
}
