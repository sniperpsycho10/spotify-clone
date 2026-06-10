import { useState } from "react";

function PlaylistModal({
  isOpen,
  onClose,
  onCreate,
}) {
  const [playlistName, setPlaylistName] =
    useState("");

  if (!isOpen) return null;

  const handleSubmit = () => {
    if (!playlistName.trim()) return;

    onCreate(playlistName);

    setPlaylistName("");

    onClose();
  };

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background:
          "rgba(0,0,0,0.7)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 2000,
      }}
    >
      <div
        style={{
          background: "#181818",
          padding: "30px",
          borderRadius: "12px",
          width: "350px",
        }}
      >
        <h2>Create Playlist</h2>

        <input
          type="text"
          placeholder="Playlist Name"
          value={playlistName}
          onChange={(e) =>
            setPlaylistName(
              e.target.value
            )
          }
          style={{
            width: "100%",
            marginTop: "20px",
            padding: "12px",
            borderRadius: "8px",
            border: "none",
          }}
        />

        <div
          style={{
            marginTop: "20px",
            display: "flex",
            gap: "10px",
          }}
        >
          <button
            onClick={handleSubmit}
          >
            Create
          </button>

          <button
            onClick={onClose}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default PlaylistModal;