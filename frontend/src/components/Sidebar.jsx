import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div
      style={{
        width: "250px",
        backgroundColor: "#000",
        height: "100vh",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <h1
        style={{
          marginBottom: "30px",
          color: "#1DB954",
        }}
      >
        Spotify
      </h1>

      <Link
        to="/"
        style={{
          color: "white",
          textDecoration: "none",
          marginBottom: "20px",
        }}
      >
        🏠 Home
      </Link>

      <Link
        to="/search"
        style={{
          color: "white",
          textDecoration: "none",
          marginBottom: "30px",
        }}
      >
        🔍 Search
      </Link>

      <h3>Your Library</h3>

      <div style={{ marginTop: "20px" }}>
        <p>➕ Create Playlist</p>
      </div>

      <div style={{ marginTop: "15px" }}>
        <p>❤️ Liked Songs</p>
      </div>
    </div>
  );
}

export default Sidebar;