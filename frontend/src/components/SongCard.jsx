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
      <img
        src={song.cover}
        alt={song.title}
        style={{
          width: "100%",
          height: "150px",
          objectFit: "cover",
          borderRadius: "8px",
          marginBottom: "10px",
        }}
      />

      <h3>{song.title}</h3>
      <p style={{ color: "gray" }}>
        {song.artist}
      </p>
    </div>
  );
}

export default SongCard;