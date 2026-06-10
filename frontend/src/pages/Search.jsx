import { useState } from "react";
import songs from "../songs";
import SongCard from "../components/SongCard";

function Search({ onSelectSong }) {
  const [query, setQuery] = useState("");

  const filteredSongs = songs.filter((song) =>
    song.title
      .toLowerCase()
      .includes(query.toLowerCase())
  );

  return (
    <div>
      <h1>Search</h1>

      <input
        type="text"
        placeholder="Search songs..."
        value={query}
        onChange={(e) =>
          setQuery(e.target.value)
        }
        style={{
          width: "100%",
          maxWidth: "500px",
          padding: "12px",
          marginTop: "20px",
          borderRadius: "8px",
          border: "none",
          outline: "none",
          fontSize: "16px",
        }}
      />

      <div
        style={{
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
          marginTop: "30px",
        }}
      >
        {filteredSongs.map((song) => (
          <SongCard
            key={song.id}
            song={song}
            onSelectSong={onSelectSong}
          />
        ))}
      </div>
    </div>
  );
}

export default Search;