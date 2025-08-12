// src/App.tsx
import { useEffect, useState } from "react";
import axios from "axios";
import TokenSelector from "./components/TokenSelector";

interface TokenPrice {
  currency: string;
  price: number;
}

function App() {
  const [prices, setPrices] = useState<TokenPrice[]>([]);
  const [usd, setUsd] = useState<number[]>([0]);
  const [tokens, setTokens] = useState<string[]>([]);
  const [fromToken, setFromToken] = useState<string>("");
  const [toToken, setToToken] = useState<string>("");
  const [amount, setAmount] = useState<number>(0);
  const [converted, setConverted] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    axios
      .get<TokenPrice[]>("https://interview.switcheo.com/prices.json")
      .then((res) => {
        const validTokens = res.data.filter((t) => t.price);
        setPrices(validTokens);
        setUsd(validTokens.map((t) => t.price));
        setTokens(validTokens.map((t) => t.currency));
        setFromToken(validTokens[0].currency);
        setToToken(validTokens[1].currency);
      });
  }, []);

  useEffect(() => {
    if (amount > 0 && fromToken && toToken && fromToken !== toToken) {
      const fromPrice = prices.find((p) => p.currency === fromToken)?.price || 0;
      const toPrice = prices.find((p) => p.currency === toToken)?.price || 0;
      setConverted((amount * fromPrice) / toPrice);
    }
  }, [amount, fromToken, toToken, prices]);

  const handleSwap = () => {
    if (fromToken === toToken) {
      setError("Tokens must be different.");
      return;
    }
    if (amount <= 0) {
      setError("Amount must be greater than zero.");
      return;
    }
    setError("");
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      alert(`Swapped ${amount} ${fromToken} to ${converted.toFixed(4)} ${toToken}`);
    }, 1500);
  };

  return (
    <div className="min-h-screen w-[100vw] bg-[url('/bg.jpg')] bg-cover bg-center flex flex-col gap-[4vw] items-center justify-start  pt-[5vw]">
      <h1
        className="font-extrabold text-[7vw] text-[#fce4ec]"
        style={{
          textShadow: `
          -0.0075em 0.0075em 0 #fdf2f8,
          0.005em 0.005em 0 #f8bbd0,
          0.01em 0.01em 0 #f48fb1,
          0.015em 0.015em 0 #f06292,
          0.02em 0.02em 0 #ec407a,
          0.025em 0.025em 0 #e91e63,
          0.03em 0.03em 0 #d81b60,
          0.035em 0.035em 0 #c2185b
        `
        }}
      >
        Currency Swap
      </h1>
      <div className="bg-white flex flex-col justify-between  rounded-2xl shadow-lg p-6 w-[50vw]">

        <div className="text-center flex space-x-[2vw] items-center justify-center h-[10vw] bg-red-200 px-[2vw] rounded-2xl">
          <TokenSelector label="From" tokens={tokens} selected={fromToken} tokenprice={usd} setSelected={setFromToken} />
          <input
            type="number"
            className="border border-gray-300 rounded-lg px-4 py-2 w-full text-xl font-bold "
            placeholder="Enter amount"
            value={amount}
            onChange={(e) => setAmount(parseFloat(e.target.value))}
          />
        </div>
        <div className="flex justify-center w-full h-fit">
          <button
            onClick={handleSwap}
            className={`text-black border-[1px] border-gray-300 h-[4vw] bg-white mt-2 text-white font-bold rounded-full hover:bg-grey-200 transition disabled:opacity-50 ${loading ? "w-fit" : "w-[4vw]"}`}
            disabled={loading}
          >
            {loading ? "Swapping..." : <img src="/swap-icon.svg" alt="Swap Icon" className="inline-block w-6 h-6 rotate-90 " />}
          </button>
        </div>
        <div className="text-center flex space-x-[2vw] items-center justify-center h-[10vw] bg-red-200 px-[2vw] rounded-2xl mt-4">
          <TokenSelector label="To" tokens={tokens} selected={toToken} tokenprice={usd} setSelected={setToToken} />
          <div className="border border-gray-300 rounded-lg px-4 py-2 w-full bg-gray-50 text-xl font-bold  text-start">
            {converted ? converted.toFixed(4) : "0.0000"}
          </div>
        </div>

        {error && <p className="text-red-500 text-sm mb-2">{error}</p>}


      </div>
    </div>
  );
}

export default App;
