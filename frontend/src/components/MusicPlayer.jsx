function MusicPlayer({ currentSong }) {
  return (
    <div
      style={{
        position: "fixed",
        bottom: 0,
        left: 250,
        right: 0,
        height: "80px",
        backgroundColor: "#181818",
        borderTop: "1px solid #333",
        display: "flex",
        alignItems: "center",
        padding: "0 20px",
      }}
    >
      {currentSong ? (
        <>
          <div>
            <h3>{currentSong.title}</h3>
            <p style={{ color: "gray" }}>
              {currentSong.artist}
            </p>
          </div>

          <div
            style={{
              marginLeft: "50px",
              fontSize: "30px",
            }}
          >
            ▶️
          </div>
        </>
      ) : (
        <p>Select a song</p>
      )}
    </div>
  );
}

export default MusicPlayer;