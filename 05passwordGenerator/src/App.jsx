import { useState, useCallback, useEffect, useRef } from "react";

import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numeric, isNumeric] = useState(false);
  const [specialCharacter, isSpecialCharacters] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null);

  const copyPassword = () => {
    window.navigator.clipboard.writeText(password);
    passwordRef.current?.select();
  };
  const generatePassword = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (numeric) str += "0123456789";
    if (specialCharacter) str += "@#$%&";

    for (let i = 1; i <= length; i++) {
      const char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numeric, specialCharacter]);

  useEffect(() => {
    generatePassword();
  }, [length, numeric, specialCharacter]);

  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className="text-white text-center my-3">Password Generator</h1>
      <div className="flex shadow rounder-lg overflow-hidden mb-4">
        <input
          type="text"
          value={password}
          className="outline-none w-full py-1 px-3"
          placeholder="Password"
          readOnly
          ref={passwordRef}
        />
        <button
          className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0"
          onClick={copyPassword}
        >
          copy
        </button>
      </div>

      <div className="flex text-sm gap-x-2">
        {/* length  */}
        <div className="flex items-center gap-x-1">
          <input
            type="range"
            name=""
            min={6}
            max={100}
            value={length}
            className="cursor-pointer"
            onChange={(e) => setLength(e.target.value)}
            id=""
          />
          <label htmlFor="length">Length {length} </label>
        </div>
        {/* numeric */}
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={numeric}
            onChange={() => {
              isNumeric((prev) => !prev);
            }}
          />
          <label htmlFor="number">Numbers</label>
        </div>
        {/* specialCharacter */}
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={numeric}
            onChange={() => {
              isSpecialCharacters((prev) => !prev);
            }}
          />
          <label htmlFor="character">Characters</label>
        </div>
      </div>
    </div>
  );
}

export default App;
