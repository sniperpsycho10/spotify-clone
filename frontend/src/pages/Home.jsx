import SongCard from "../components/SongCard";
import songs from "../songs";

function Home() {
  return (
    <div>
      <h1>Good Evening</h1>

      <h2 style={{ marginTop: "30px" }}>
        Recently Played
      </h2>

      <div
        style={{
          display: "flex",
          gap: "20px",
          marginTop: "20px",
          flexWrap: "wrap",
        }}
      >
        {songs.map((song) => (
          <SongCard
            key={song.id}
            title={song.title}
            artist={song.artist}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;