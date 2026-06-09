function Sidebar() {
  return (
    <div
      style={{
        width: "250px",
        backgroundColor: "#000",
        height: "100vh",
        padding: "20px",
      }}
    >
      <h2>Spotify</h2>

      <div style={{ marginTop: "30px" }}>
        <p>🏠 Home</p>
        <br />
        <p>🔍 Search</p>
        <br />
        <p>📚 Your Library</p>
      </div>
    </div>
  );
}

export default Sidebar;