import "./App.css";
import Forms from "./components/Forms";

function App() {
  return (
    <div>
      <div className="overLay">
        <div className="videoClass">
          <video className="videoTag" muted playsInline loop autoPlay>
            <source
              src="https://storage.googleapis.com/roamaroundbg/bg"
              type="video/mp4"
            ></source>
          </video>
        </div>
      </div>
      <Forms />
    </div>
  );
}

export default App;
