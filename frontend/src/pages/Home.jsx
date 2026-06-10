import SongCard from "../components/SongCard";
import songs from "../songs";

function Home({ onSelectSong }) {
  return (
    <div>
      <div
        style={{
          background:
            "linear-gradient(to bottom,#5038a0,#121212)",
          padding: "40px",
          borderRadius: "12px",
          marginBottom: "40px",
        }}
      >
        <h1
          style={{
            fontSize: "48px",
          }}
        >
          Good Evening
        </h1>

        <p
          style={{
            marginTop: "10px",
            color: "#ddd",
          }}
        >
          Welcome back to Spotify Clone
        </p>
      </div>

      <Section
        title="Recently Played"
        songs={songs}
        onSelectSong={onSelectSong}
      />

      <Section
        title="Trending Now"
        songs={songs}
        onSelectSong={onSelectSong}
      />

      <Section
        title="Made For You"
        songs={songs}
        onSelectSong={onSelectSong}
      />
    </div>
  );
}

function Section({
  title,
  songs,
  onSelectSong,
}) {
  return (
    <>
      <h2
        style={{
          marginBottom: "20px",
          marginTop: "30px",
        }}
      >
        {title}
      </h2>

      <div
        style={{
          display: "flex",
          gap: "20px",
          overflowX: "auto",
          paddingBottom: "10px",
        }}
      >
        {songs.map((song) => (
          <SongCard
            key={`${title}-${song.id}`}
            song={song}
            onSelectSong={onSelectSong}
          />
        ))}
      </div>
    </>
  );
}

export default Home;