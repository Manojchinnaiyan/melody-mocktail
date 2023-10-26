import "./App.css";
import Forms from "./components/Forms";

function App() {
  return (
    <div>
      <div className="videoClass">
        <video className="videoTag" muted playsInline loop autoPlay>
          <source
            src="https://storage.googleapis.com/deviear/bg.mov"
            type="video/mp4"
          ></source>
        </video>
      </div>

      <Forms />
    </div>
  );
}

export default App;
