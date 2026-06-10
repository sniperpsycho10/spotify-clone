import { useState } from "react";

import Sidebar from "./components/Sidebar";
import MusicPlayer from "./components/MusicPlayer";

import Home from "./pages/Home";
import Search from "./pages/Search";
import Library from "./pages/Library";

import { Routes, Route } from "react-router-dom";

function App() {
  const [currentSong, setCurrentSong] = useState(null);

  return (
    <>
      <div
        style={{
          display: "flex",
        }}
      >
        <Sidebar />

        <div
          style={{
            flex: 1,
            padding: "30px",
            marginBottom: "100px",
          }}
        >
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  onSelectSong={setCurrentSong}
                />
              }
            />

            <Route
              path="/search"
              element={<Search />}
            />

            <Route
              path="/library"
              element={<Library />}
            />
          </Routes>
        </div>
      </div>

      <MusicPlayer currentSong={currentSong} />
    </>
  );
}

export default App;