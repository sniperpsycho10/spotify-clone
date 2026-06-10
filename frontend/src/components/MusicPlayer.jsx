import { useEffect, useRef } from "react";

function MusicPlayer({ currentSong }) {
  const audioRef = useRef(null);

  useEffect(() => {
    if (currentSong && audioRef.current) {
      audioRef.current.load();
      audioRef.current.play();
    }
  }, [currentSong]);

  return (
    <div
      style={{
        position: "fixed",
        bottom: 0,
        left: 250,
        right: 0,
        height: "90px",
        backgroundColor: "#181818",
        borderTop: "1px solid #333",
        display: "flex",
        alignItems: "center",
        padding: "10px 20px",
        gap: "15px",
      }}
    >
      {currentSong ? (
        <>
          <img
            src={currentSong.cover}
            alt={currentSong.title}
            style={{
              width: "60px",
              height: "60px",
              objectFit: "cover",
            }}
          />

          <div>
            <h3>{currentSong.title}</h3>
            <p style={{ color: "gray" }}>
              {currentSong.artist}
            </p>
          </div>

          <audio
            controls
            ref={audioRef}
            style={{
              marginLeft: "30px",
              width: "400px",
            }}
          >
            <source
              src={currentSong.audio}
              type="audio/mpeg"
            />
          </audio>
        </>
      ) : (
        <p>Select a song</p>
      )}
    </div>
  );
}

export default MusicPlayer;