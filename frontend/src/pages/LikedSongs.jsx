import { useContext } from "react";

import { MusicContext }
  from "../context/MusicContext";

import SongCard from "../components/SongCard";

function LikedSongs({
  onSelectSong,
}) {
  const { likedSongs } =
    useContext(MusicContext);

  return (
    <div>
      <h1>❤️ Liked Songs</h1>

      <div
        style={{
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
          marginTop: "30px",
        }}
      >
        {likedSongs.map((song) => (
          <SongCard
            key={song.id}
            song={song}
            onSelectSong={
              onSelectSong
            }
          />
        ))}
      </div>
    </div>
  );
}

export default LikedSongs;