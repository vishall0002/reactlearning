import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="w-full h-screen flex flex-wrap justify-center items-center bg-blue-900">
      <h3 className="text-white text-lg">Currency coverter app</h3>
    </div>
  );
}

export default App;
