import { NavLink } from "react-router-dom";

function Sidebar() {
  const linkStyle = ({ isActive }) => ({
    color: isActive ? "#1DB954" : "#b3b3b3",
    textDecoration: "none",
    padding: "12px 15px",
    borderRadius: "8px",
    marginBottom: "8px",
    backgroundColor: isActive
      ? "#282828"
      : "transparent",
    transition: "all 0.3s ease",
    display: "block",
    fontWeight: isActive ? "bold" : "normal",
  });

  return (
    <div
      style={{
        width: "250px",
        backgroundColor: "#121212",
        height: "100vh",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        borderRight: "1px solid #282828",
      }}
    >
      <h1
        style={{
          color: "#1DB954",
          marginBottom: "30px",
          fontSize: "42px",
        }}
      >
        Spotify
      </h1>

      <NavLink to="/" style={linkStyle}>
        🏠 Home
      </NavLink>

      <NavLink to="/search" style={linkStyle}>
        🔍 Search
      </NavLink>

      <NavLink to="/library" style={linkStyle}>
        📚 Your Library
      </NavLink>

      <div
        style={{
          marginTop: "25px",
          borderTop: "1px solid #282828",
          paddingTop: "20px",
        }}
      >
        <h3
          style={{
            marginBottom: "15px",
          }}
        >
          Your Library
        </h3>

        <p
          style={{
            marginBottom: "15px",
            color: "#b3b3b3",
            cursor: "pointer",
          }}
        >
          ➕ Create Playlist
        </p>

        <p
          style={{
            color: "#b3b3b3",
            cursor: "pointer",
          }}
        >
          ❤️ Liked Songs
        </p>
      </div>

      <div
        style={{
          marginTop: "30px",
          borderTop: "1px solid #282828",
          paddingTop: "15px",
        }}
      >
        <p style={{ color: "#888" }}>
          Believer
        </p>

        <p style={{ color: "#888" }}>
          Starboy
        </p>

        <p style={{ color: "#888" }}>
          Blinding Lights
        </p>
      </div>
    </div>
  );
}

export default Sidebar;