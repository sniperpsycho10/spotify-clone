import { useContext } from "react";
import { MusicContext } from "../context/MusicContext";

function QueuePanel({
  isOpen,
  onClose,
  setCurrentSong,
}) {
  const {
    queue,
    removeFromQueue,
    clearQueue,
  } = useContext(MusicContext);

  return (
    <div
      style={{
        position: "fixed",
        top: "0",
        right: isOpen ? "0" : "-380px",
        width: "420px",
        bottom: "110px",
        height: "calc(100vh - 110px)",
        background:
        "rgba(18,18,18,0.96)",
        backdropFilter: "blur(25px)",
        borderLeft: "1px solid #282828",
        transition: "0.3s",
        zIndex: 9999,
        padding: "20px",
        overflowY: "auto",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent:
            "space-between",
          alignItems: "center",
        }}
      >
        <h2>📋 Queue</h2>

        <button
          onClick={onClose}
        >
          ✕
        </button>
      </div>

      <button
        onClick={clearQueue}
        style={{
          marginTop: "10px",
          background: "#ff4d4d",
          border: "none",
          padding: "8px",
          borderRadius: "8px",
          cursor: "pointer",
        }}
      >
        Clear Queue
      </button>

      {queue.length === 0 ? (
        <p
          style={{
            marginTop: "20px",
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
              marginTop: "15px",
              background:
              "linear-gradient(135deg,#1f1f1f,#111)",
              cursor: "pointer",
              transition: "0.3s",
              padding: "10px",
              borderRadius: "8px",
            }}
          >
            <p
              style={{
                fontWeight: "bold",
                cursor: "pointer",
              }}
              onClick={() =>
                setCurrentSong(song)
              }
            >
              {song.title}
            </p>

            <p
              style={{
                color: "#888",
              }}
            >
              {song.artist}
            </p>

            <button
              onClick={() =>
                removeFromQueue(
                  song.id
                )
              }
            >
              Remove
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default QueuePanel;