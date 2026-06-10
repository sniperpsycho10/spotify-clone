import SongCard from "../components/SongCard";
import songs from "../songs";
import "./Home.css";

function Home({ onSelectSong }) {
  const hour = new Date().getHours();

  let greeting = "Good Evening";

  if (hour < 12) {
    greeting = "Good Morning";
  } else if (hour < 18) {
    greeting = "Good Afternoon";
  }

  return (
    <div>
      {/* Sticky Header */}
      <div className="top-bar">
        <h2>Spotify Clone</h2>
      </div>

      {/* Hero Section */}
      <div className="hero-section">
        <h1>{greeting}</h1>

        <p>
          Welcome back to your Spotify Clone
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

      <Section
        title="Popular Artists"
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
    <div className="section">
      <h2>{title}</h2>

      <div className="section-row">
        {songs.map((song) => (
          <SongCard
            key={`${title}-${song.id}`}
            song={song}
            onSelectSong={onSelectSong}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;