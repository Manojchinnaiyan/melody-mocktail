import HeaderLogo from "../src/images/Rectangle 3.png";
import "./App.css";
import Forms from "./components/Forms";

function App() {
  return (
    <div>
      <img
        style={{ width: "100%", height: "400px" }}
        src={HeaderLogo}
        alt="Header Logo"
      />
      <h1 style={{ textAlign: "center" }}>TRAVEL PLANNER</h1>
      <Forms />
    </div>
  );
}

export default App;
