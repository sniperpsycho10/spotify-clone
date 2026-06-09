import { Link } from "react-router-dom";

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
        <Link
          to="/"
          style={{
            color: "white",
            textDecoration: "none",
          }}
        >
          🏠 Home
        </Link>

        <br />
        <br />

        <Link
          to="/search"
          style={{
            color: "white",
            textDecoration: "none",
          }}
        >
          🔍 Search
        </Link>

        <br />
        <br />

        <Link
          to="/library"
          style={{
            color: "white",
            textDecoration: "none",
          }}
        >
          📚 Your Library
        </Link>
      </div>
    </div>
  );
}

export default Sidebar;