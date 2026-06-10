import { useContext } from "react";
import { MusicContext } from "../context/MusicContext";

function Library() {
  const {
    likedSongs,
    recentlyPlayed,
    playlists,
  } = useContext(MusicContext);

  return (
    <div>
      <h1
        style={{
          marginBottom: "30px",
        }}
      >
        📚 Your Library
      </h1>

      <div
        style={{
          display: "flex",
          gap: "20px",
          marginBottom: "40px",
          flexWrap: "wrap",
        }}
      >
        <div
          style={{
            background: "#181818",
            padding: "20px",
            borderRadius: "12px",
            minWidth: "220px",
          }}
        >
          <h2>❤️ Liked Songs</h2>

          <p
            style={{
              marginTop: "10px",
              color: "#b3b3b3",
            }}
          >
            {likedSongs.length} songs
          </p>
        </div>

        <div
          style={{
            background: "#181818",
            padding: "20px",
            borderRadius: "12px",
            minWidth: "220px",
          }}
        >
          <h2>🕒 Recently Played</h2>

          <p
            style={{
              marginTop: "10px",
              color: "#b3b3b3",
            }}
          >
            {recentlyPlayed.length} songs
          </p>
        </div>

        <div
          style={{
            background: "#181818",
            padding: "20px",
            borderRadius: "12px",
            minWidth: "220px",
          }}
        >
          <h2>🎵 Playlists</h2>

          <p
            style={{
              marginTop: "10px",
              color: "#b3b3b3",
            }}
          >
            {playlists.length} playlists
          </p>
        </div>
      </div>

      <div>
        <h2
          style={{
            marginBottom: "20px",
          }}
        >
          Your Playlists
        </h2>

        {playlists.length === 0 ? (
          <p
            style={{
              color: "#888",
            }}
          >
            No playlists created yet.
          </p>
        ) : (
          playlists.map((playlist) => (
            <div
              key={playlist.id}
              style={{
                background: "#181818",
                padding: "15px",
                borderRadius: "10px",
                marginBottom: "15px",
              }}
            >
              <h3>{playlist.name}</h3>

              <p
                style={{
                  color: "#888",
                }}
              >
                {playlist.songs.length} songs
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Library;