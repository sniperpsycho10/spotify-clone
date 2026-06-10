import { NavLink } from "react-router-dom";

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

      <NavLink
        to="/"
        style={({ isActive }) => ({
          color: isActive ? "#1DB954" : "white",
          textDecoration: "none",
          marginBottom: "20px",
          fontWeight: isActive ? "bold" : "normal",
        })}
      >
        🏠 Home
      </NavLink>

      <NavLink
        to="/search"
        style={({ isActive }) => ({
          color: isActive ? "#1DB954" : "white",
          textDecoration: "none",
          marginBottom: "20px",
          fontWeight: isActive ? "bold" : "normal",
        })}
      >
        🔍 Search
      </NavLink>

      <NavLink
        to="/library"
        style={({ isActive }) => ({
          color: isActive ? "#1DB954" : "white",
          textDecoration: "none",
          marginBottom: "30px",
          fontWeight: isActive ? "bold" : "normal",
        })}
      >
        📚 Your Library
      </NavLink>

      <h3
        style={{
          marginBottom: "20px",
        }}
      >
        Your Library
      </h3>

      <div style={{ marginBottom: "15px" }}>
        <p>➕ Create Playlist</p>
      </div>

      <div>
        <p>❤️ Liked Songs</p>
      </div>
    </div>
  );
}

export default Sidebar;