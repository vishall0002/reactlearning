import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("white");

  const changeColor = (color) => {
    setColor(color);
  };

  return (
    <>
      <div
        className="relative w-full h-screen"
        style={{ backgroundColor: color }}
      >
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-8">
          <button
            onClick={() => changeColor("red")}
            className="button bg-red-500 hover:bg-red-600 text-white font-bold py-4 px-8 text-xl rounded-full shadow-lg"
          >
            RED
          </button>

          <button
            onClick={() => changeColor("yellow")}
            className="button bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-4 px-8 text-xl rounded-full shadow-lg"
          >
            YELLOW
          </button>

          <button
            onClick={() => changeColor("orange")}
            className="button bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 text-xl rounded-full shadow-lg"
          >
            ORANGE
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
