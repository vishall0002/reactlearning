import { useState } from "react";
import "./App.css";
import InputBox from "./components/InputBox";
import useCurrencyInfo from "../../06currencyconverter/src/hooks/useCurrencyInfo";

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  };

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };

  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center bg-blue-900 px-4 py-6">
      {/* Title */}
      <h1 className="text-white text-2xl md:text-4xl font-bold text-center mb-6">
        Currency Converter App
      </h1>

      {/* Card Container */}
      <div className="w-full max-w-lg mx-auto border border-gray-200 rounded-xl p-6 backdrop-blur-md bg-white/20 shadow-lg">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            convert();
          }}
        >
          {/* From Input */}
          <div className="w-full mb-4">
            <InputBox
              label="From"
              amount={amount}
              currencyOptions={options}
              onCurrencyChange={(currency) => setFrom(currency)}
              onAmountChange={(amount) => setAmount(amount)}
              selectedCurrency={from}
            />
          </div>

          {/* Swap Button */}
          <div className="relative w-full h-10 flex justify-center items-center mb-4">
            <button
              type="button"
              className="border-2 border-white rounded-md bg-blue-600 text-white px-4 py-1 text-sm md:text-base hover:bg-blue-700 transition"
              onClick={swap}
            >
              Swap
            </button>
          </div>

          {/* To Input */}
          <div className="w-full mb-6">
            <InputBox
              label="To"
              amount={convertedAmount}
              currencyOptions={options}
              onCurrencyChange={(currency) => setTo(currency)}
              selectedCurrency={to}
              amountDisable
            />
          </div>

          {/* Convert Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-lg font-semibold transition"
          >
            Convert {from.toUpperCase()} to {to.toUpperCase()}
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
