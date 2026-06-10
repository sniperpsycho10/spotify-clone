import { NavLink } from "react-router-dom";
import { useState, useContext } from "react";

import {
  FaSpotify,
  FaHome,
  FaSearch,
  FaHeart,
  FaMusic,
  FaPlus,
} from "react-icons/fa";

import {
  MdLibraryMusic,
} from "react-icons/md";

import { MusicContext }
  from "../context/MusicContext";

import PlaylistModal
  from "./PlaylistModal";
function Sidebar() {
  const {
    playlists,
    createPlaylist,
  } = useContext(MusicContext);

  const [showModal, setShowModal] =
    useState(false);

  const linkStyle = ({
    isActive,
  }) => ({
    color: isActive
      ? "#1DB954"
      : "#b3b3b3",

    textDecoration: "none",

    padding: "12px 15px",

    borderRadius: "8px",

    marginBottom: "8px",

    backgroundColor: isActive
      ? "#282828"
      : "transparent",

    transition: "all 0.3s ease",

    display: "block",

    fontWeight: isActive
      ? "bold"
      : "normal",
  });

  return (
    <>
      <div
        style={{
          width: "250px",
          backgroundColor:
            "#121212",

          height: "100vh",

          padding: "20px",

          display: "flex",

          flexDirection: "column",

          borderRight:
            "1px solid #282828",

          overflowY: "auto",
        }}
      >
        <h1
          style={{
            color: "#1DB954",
            marginBottom: "30px",
            fontSize: "38px",
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <FaSpotify />
          Spotify
        </h1>

        <NavLink
          to="/"
          style={linkStyle}
        >
          <>
            <FaHome
              style={{
                marginRight: "10px",
              }}
            />
            Home
          </>
        </NavLink>

        <NavLink
          to="/search"
          style={linkStyle}
        >
          <>
            <FaSearch
              style={{
                marginRight: "10px",
              }}
            />
            Search
          </>
        </NavLink>

        <NavLink
          to="/library"
          style={linkStyle}
        >
          <>
            <MdLibraryMusic
              style={{
                marginRight: "10px",
              }}
            />
            Your Library
          </>
        </NavLink>

        <div
          style={{
            marginTop: "25px",

            borderTop:
              "1px solid #282828",

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
            onClick={() =>
              setShowModal(true)
            }
            style={{
              marginBottom: "15px",

              color: "#b3b3b3",

              cursor: "pointer",
            }}
          >
            <>
              <FaPlus
                style={{
                  marginRight: "10px",
                }}
              />
              Create Playlist
            </>
          </p>

          <NavLink
            to="/liked"
            style={{
              color: "#b3b3b3",

              textDecoration:
                "none",
            }}
          >
            <>
              <FaHeart
                style={{
                  marginRight: "10px",
                  color: "#1DB954",
                }}
              />
              Liked Songs
            </>
          </NavLink>
        </div>

        <div
          style={{
            marginTop: "25px",

            borderTop:
              "1px solid #282828",

            paddingTop: "15px",
          }}
        >
          <h4
            style={{
              marginBottom: "15px",
            }}
          >
            <>
              <FaMusic
                style={{
                  marginRight: "10px",
                }}
              />
              Playlists
            </>
          </h4>

          {playlists.map(
            (playlist) => (
              <p
                key={playlist.id}
                style={{
                  color: "#888",

                  marginBottom:
                    "10px",
                }}
              >
                <>
                  <FaMusic
                    style={{
                      marginRight: "8px",
                      color: "#888",
                    }}
                  />
                  {playlist.name}
                </>
              </p>
            )
          )}
        </div>
      </div>

      <PlaylistModal
        isOpen={showModal}
        onClose={() =>
          setShowModal(false)
        }
        onCreate={
          createPlaylist
        }
      />
    </>
  );
}

export default Sidebar;
