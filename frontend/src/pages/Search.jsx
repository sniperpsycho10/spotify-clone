import { useState } from "react";
import songs from "../songs";
import "./Search.css";

function Search({ onSelectSong }) {
  const [query, setQuery] = useState("");

  const filteredSongs = songs.filter(
    (song) =>
      song.title
        .toLowerCase()
        .includes(query.toLowerCase()) ||
      song.artist
        .toLowerCase()
        .includes(query.toLowerCase())
  );

  return (
    <div>
      <div className="search-header">
        <input
          type="text"
          placeholder="What do you want to listen to?"
          value={query}
          onChange={(e) =>
            setQuery(e.target.value)
          }
          className="search-input"
        />
      </div>

      {query ? (
        <>
          <h2 className="section-title">
            Results
          </h2>

          <div className="search-results">
            {filteredSongs.map((song) => (
              <div
                key={song.id}
                className="search-card"
                onClick={() =>
                  onSelectSong(song)
                }
              >
                <img
                  src={song.cover}
                  alt={song.title}
                />

                <h3>{song.title}</h3>

                <p>{song.artist}</p>
              </div>
            ))}
          </div>
        </>
      ) : (
        <>
          <h2 className="section-title">
            Browse All
          </h2>

          <div className="genre-grid">
            <div className="genre-card pop">
              Pop
            </div>

            <div className="genre-card rock">
              Rock
            </div>

            <div className="genre-card hiphop">
              Hip-Hop
            </div>

            <div className="genre-card edm">
              EDM
            </div>

            <div className="genre-card chill">
              Chill
            </div>

            <div className="genre-card workout">
              Workout
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Search;