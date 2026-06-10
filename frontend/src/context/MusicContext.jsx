import {
  createContext,
  useState,
  useEffect,
} from "react";

export const MusicContext =
  createContext();

export function MusicProvider({
  children,
}) {
  const [likedSongs, setLikedSongs] =
    useState(() => {
      const saved =
        localStorage.getItem(
          "likedSongs"
        );

      return saved
        ? JSON.parse(saved)
        : [];
    });

  const [
    recentlyPlayed,
    setRecentlyPlayed,
  ] = useState(() => {
    const saved =
      localStorage.getItem(
        "recentlyPlayed"
      );

    return saved
      ? JSON.parse(saved)
      : [];
  });

  const [playlists, setPlaylists] =
    useState(() => {
      const saved =
        localStorage.getItem(
          "playlists"
        );

      return saved
        ? JSON.parse(saved)
        : [];
    });

  const [queue, setQueue] =
    useState(() => {
      const saved =
        localStorage.getItem(
          "queue"
        );

      return saved
        ? JSON.parse(saved)
        : [];
    });

  useEffect(() => {
    localStorage.setItem(
      "likedSongs",
      JSON.stringify(likedSongs)
    );
  }, [likedSongs]);

  useEffect(() => {
    localStorage.setItem(
      "recentlyPlayed",
      JSON.stringify(
        recentlyPlayed
      )
    );
  }, [recentlyPlayed]);

  useEffect(() => {
    localStorage.setItem(
      "playlists",
      JSON.stringify(playlists)
    );
  }, [playlists]);

  useEffect(() => {
    localStorage.setItem(
      "queue",
      JSON.stringify(queue)
    );
  }, [queue]);

  const toggleLikeSong = (
    song
  ) => {
    const exists =
      likedSongs.find(
        (s) => s.id === song.id
      );

    if (exists) {
      setLikedSongs(
        likedSongs.filter(
          (s) => s.id !== song.id
        )
      );
    } else {
      setLikedSongs([
        ...likedSongs,
        song,
      ]);
    }
  };

  const addRecentlyPlayed = (
    song
  ) => {
    const filtered =
      recentlyPlayed.filter(
        (s) => s.id !== song.id
      );

    setRecentlyPlayed([
      song,
      ...filtered,
    ].slice(0, 10));
  };

  const createPlaylist = (
    name
  ) => {
    const playlist = {
      id: Date.now(),
      name,
      songs: [],
    };

    setPlaylists([
      ...playlists,
      playlist,
    ]);
  };

  const addSongToPlaylist = (
    playlistId,
    song
  ) => {
    setPlaylists(
      playlists.map(
        (playlist) => {
          if (
            playlist.id !==
            playlistId
          )
            return playlist;

          const exists =
            playlist.songs.find(
              (s) =>
                s.id === song.id
            );

          if (exists)
            return playlist;

          return {
            ...playlist,
            songs: [
              ...playlist.songs,
              song,
            ],
          };
        }
      )
    );
  };

  const addToQueue = (song) => {
    setQueue((prev) => {
      const exists =
        prev.find(
          (s) => s.id === song.id
        );

      if (exists)
        return prev;

      return [...prev, song];
    });
  };

  const removeFromQueue = (
    songId
  ) => {
    setQueue((prev) =>
      prev.filter(
        (song) =>
          song.id !== songId
      )
    );
  };

  const clearQueue = () => {
    setQueue([]);
  };

  const getNextQueuedSong =
    () => {
      if (queue.length === 0)
        return null;

      return queue[0];
    };

  return (
    <MusicContext.Provider
      value={{
        likedSongs,
        toggleLikeSong,

        recentlyPlayed,
        addRecentlyPlayed,

        playlists,
        createPlaylist,
        addSongToPlaylist,

        queue,
        addToQueue,
        removeFromQueue,
        clearQueue,
        getNextQueuedSong,
      }}
    >
      {children}
    </MusicContext.Provider>
  );
}