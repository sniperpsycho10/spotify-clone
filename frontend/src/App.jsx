import { useState, useContext } from "react";
import { Routes, Route } from "react-router-dom";

import Sidebar from "./components/Sidebar";
import MusicPlayer from "./components/MusicPlayer";
import RightSidebar from "./components/RightSidebar";

import Home from "./pages/Home";
import Search from "./pages/Search";
import Library from "./pages/Library";
import LikedSongs from "./pages/LikedSongs";

import songs from "./songs";

import { MusicContext } from "./context/MusicContext";

function App() {
  const [currentSong, setCurrentSong] =
    useState(null);

  const [isPlaying, setIsPlaying] =
    useState(false);

  const { addRecentlyPlayed } =
    useContext(MusicContext);

  const handleSongSelect = (song) => {
    setCurrentSong(song);
    addRecentlyPlayed(song);
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          height: "100vh",
        }}
      >
        <Sidebar />

        <div
          style={{
            flex: 1,
            padding: "30px",
            marginBottom: "130px",
            overflowY: "auto",
          }}
        >
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  onSelectSong={
                    handleSongSelect
                  }
                />
              }
            />

            <Route
              path="/liked"
              element={
                <LikedSongs
                  onSelectSong={
                    handleSongSelect
                  }
                />
              }
            />

            <Route
              path="/search"
              element={
                <Search
                  onSelectSong={
                    handleSongSelect
                  }
                />
              }
            />

            <Route
              path="/library"
              element={<Library />}
            />
          </Routes>
        </div>

        <RightSidebar
          setCurrentSong={
            handleSongSelect
          }
        />
      </div>

      <MusicPlayer
        songs={songs}
        currentSong={currentSong}
        setCurrentSong={setCurrentSong}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
      />
    </>
  );
}

export default App;