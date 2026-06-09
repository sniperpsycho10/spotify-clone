import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";

function App() {
  return (
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
        }}
      >
        <Home />
      </div>
    </div>
  );
}

export default App;