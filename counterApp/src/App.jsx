import { useState } from "react";
import "./App.css";

function App() {
  const [valueInitial, SetValueNext] = useState(0);

  const addValue = () => {
    SetValueNext(valueInitial + 1);
  };

  const removeValue = () => {
    SetValueNext(valueInitial - 1);
  };
  return (
    <>
      <div>
        <h1>simple increment / decrement app</h1>
      </div>

      <div>
        <button onClick={addValue}>Increment</button>
        <button onClick={removeValue}>Decrement</button>
        <h3>value = {valueInitial}</h3>
      </div>
    </>
  );
}

export default App;
