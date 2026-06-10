import "./SongCard.css";

function SongCard({ song, onSelectSong }) {
  return (
    <div
      className="song-card"
      onClick={() => onSelectSong(song)}
    >
      <div className="song-image-wrapper">
        <img
          src={song.cover}
          alt={song.title}
          className="song-image"
        />

        <div className="play-button">
          ▶
        </div>
      </div>

      <h3>{song.title}</h3>

      <p>{song.artist}</p>
    </div>
  );
}

export default SongCard;