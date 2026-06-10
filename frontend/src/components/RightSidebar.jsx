import { useContext } from "react";
import { MusicContext } from "../context/MusicContext";

import {
  FaHistory,
  FaListUl,
  FaTrash,
  FaPlay,
  FaMusic,
} from "react-icons/fa";

function RightSidebar({
  setCurrentSong,
}) {
  const {
    queue,
    recentlyPlayed,
    removeFromQueue,
    clearQueue,
  } = useContext(MusicContext);

  return (
    <div
      style={{
        width: "350px",
        background: "#121212",
        borderLeft: "1px solid #282828",
        padding: "20px",
        paddingBottom: "150px",
        overflowY: "auto",
        height: "100vh",
      }}
    >
      {/* QUEUE HEADER */}

      <h2
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          marginBottom: "20px",
        }}
      >
        <FaListUl />
        Queue ({queue.length})
      </h2>

      <button
        onClick={clearQueue}
        style={{
          background: "#ff4d4d",
          border: "none",
          color: "white",
          padding: "10px 14px",
          borderRadius: "8px",
          cursor: "pointer",
          marginBottom: "20px",
          display: "flex",
          alignItems: "center",
          gap: "8px",
          fontWeight: "bold",
        }}
      >
        <FaTrash />
        Clear Queue
      </button>

      {queue.length === 0 ? (
        <p
          style={{
            color: "#888",
          }}
        >
          Queue Empty
        </p>
      ) : (
        queue.map((song) => (
          <div
            key={song.id}
            style={{
              background: "#181818",
              padding: "14px",
              borderRadius: "12px",
              marginBottom: "12px",
              transition: "0.3s",
            }}
          >
            <div
              onClick={() => {
                setCurrentSong(song);
                removeFromQueue(song.id);
              }}
              style={{
                cursor: "pointer",
              }}
            >
              <p
                style={{
                  fontWeight: "bold",
                  marginBottom: "5px",
                }}
              >
                {song.title}
              </p>

              <p
                style={{
                  color: "#888",
                  fontSize: "14px",
                }}
              >
                {song.artist}
              </p>
            </div>

            <div
              style={{
                marginTop: "12px",
                display: "flex",
                gap: "10px",
              }}
            >
              <button
                onClick={() => {
                  setCurrentSong(song);
                  removeFromQueue(song.id);
                }}
                style={{
                  background: "#1DB954",
                  border: "none",
                  color: "white",
                  padding: "8px 12px",
                  borderRadius: "8px",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                }}
              >
                <FaPlay />
                Play
              </button>

              <button
                onClick={() =>
                  removeFromQueue(song.id)
                }
                style={{
                  background: "#ff4d4d",
                  border: "none",
                  color: "white",
                  padding: "8px 12px",
                  borderRadius: "8px",
                  cursor: "pointer",
                }}
              >
                Remove
              </button>
            </div>
          </div>
        ))
      )}

      {/* RECENTLY PLAYED */}

      <hr
        style={{
          margin: "30px 0",
          borderColor: "#282828",
        }}
      />

      <h2
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          marginBottom: "20px",
        }}
      >
        <FaHistory />
        Recently Played
      </h2>

      {recentlyPlayed.length === 0 ? (
        <p
          style={{
            color: "#888",
          }}
        >
          No recently played songs
        </p>
      ) : (
        recentlyPlayed.map((song) => (
          <div
            key={song.id}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              marginBottom: "12px",
              padding: "10px",
              borderRadius: "10px",
              background: "#181818",
            }}
          >
            <FaMusic
              style={{
                color: "#1DB954",
              }}
            />

            <div>
              <div
                style={{
                  color: "white",
                  fontWeight: "600",
                }}
              >
                {song.title}
              </div>

              <div
                style={{
                  color: "#888",
                  fontSize: "13px",
                }}
              >
                {song.artist}
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default RightSidebar;