function SongCard({ song, onSelectSong }) {
  return (
    <div
      onClick={() => onSelectSong(song)}
      style={{
        backgroundColor: "#181818",
        width: "180px",
        padding: "15px",
        borderRadius: "10px",
        cursor: "pointer",
      }}
    >
      <div
        style={{
          height: "150px",
          backgroundColor: "#282828",
          borderRadius: "8px",
          marginBottom: "10px",
        }}
      ></div>

      <h3>{song.title}</h3>

      <p style={{ color: "gray" }}>
        {song.artist}
      </p>
    </div>
  );
}

export default SongCard;