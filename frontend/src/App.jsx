import Sidebar from "./components/Sidebar";

import Home from "./pages/Home";
import Search from "./pages/Search";
import Library from "./pages/Library";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />

      <div
        style={{
          flex: 1,
          padding: "30px",
        }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/library" element={<Library />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;