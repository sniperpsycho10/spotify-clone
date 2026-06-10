import SongCard from "../components/SongCard";
import songs from "../songs";
import "./Home.css";

import { useContext } from "react";
import { MusicContext } from "../context/MusicContext";

function Home({ onSelectSong }) {
  const { addToQueue } =
    useContext(MusicContext);

  const hour = new Date().getHours();

  let greeting = "Good Evening";

  if (hour < 12) {
    greeting = "Good Morning";
  } else if (hour < 18) {
    greeting = "Good Afternoon";
  }

  return (
    <div>
      <div className="top-bar">
        <h2>Spotify Clone</h2>
      </div>

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
        addToQueue={addToQueue}
      />

      <Section
        title="Trending Now"
        songs={songs}
        onSelectSong={onSelectSong}
        addToQueue={addToQueue}
      />

      <Section
        title="Made For You"
        songs={songs}
        onSelectSong={onSelectSong}
        addToQueue={addToQueue}
      />

      <Section
        title="Popular Artists"
        songs={songs}
        onSelectSong={onSelectSong}
        addToQueue={addToQueue}
      />
    </div>
  );
}

function Section({
  title,
  songs,
  onSelectSong,
  addToQueue,
}) {
  return (
    <div className="section">
      <h2>{title}</h2>

      <div className="section-row">
        {songs.map((song) => (
          <div
            key={`${title}-${song.id}`}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <SongCard
              song={song}
              onSelectSong={onSelectSong}
            />

            <button
              onClick={() =>
                addToQueue(song)
              }
              style={{
                marginTop: "10px",
                background: "#1DB954",
                color: "white",
                border: "none",
                borderRadius: "8px",
                padding:
                  "8px 14px",
                cursor: "pointer",
                fontWeight: "bold",
              }}
            >
              ➕ Queue
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;