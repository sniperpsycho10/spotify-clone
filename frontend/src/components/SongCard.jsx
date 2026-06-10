function SongCard({ song, onSelectSong }) {
  return (
    <div
      onClick={() => onSelectSong(song)}
      style={{
        backgroundColor: "#181818",
        minWidth: "180px",
        padding: "15px",
        borderRadius: "10px",
        cursor: "pointer",
        transition: "all 0.3s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform =
          "translateY(-8px)";

        e.currentTarget.style.backgroundColor =
          "#282828";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform =
          "translateY(0)";

        e.currentTarget.style.backgroundColor =
          "#181818";
      }}
    >
      <div
        style={{
          position: "relative",
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
          }}
        />

        <div
          style={{
            position: "absolute",
            right: "10px",
            bottom: "10px",
            width: "45px",
            height: "45px",
            borderRadius: "50%",
            backgroundColor: "#1DB954",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "20px",
            boxShadow:
              "0px 5px 15px rgba(0,0,0,0.4)",
          }}
        >
          ▶
        </div>
      </div>

      <h3
        style={{
          marginTop: "10px",
        }}
      >
        {song.title}
      </h3>

      <p
        style={{
          color: "gray",
          marginTop: "5px",
        }}
      >
        {song.artist}
      </p>
    </div>
  );
}

export default SongCard;