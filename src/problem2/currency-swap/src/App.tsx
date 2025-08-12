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
    <div className="min-h-screen w-[100vw] flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white rounded-2xl shadow-lg p-6 w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Currency Swap</h1>

        <TokenSelector label="From" tokens={tokens} selected={fromToken} setSelected={setFromToken} />
        <input
          type="number"
          className="border border-gray-300 rounded-lg px-4 py-2 w-full mb-4"
          placeholder="Enter amount"
          value={amount}
          onChange={(e) => setAmount(parseFloat(e.target.value))}
        />

        <TokenSelector label="To" tokens={tokens} selected={toToken} setSelected={setToToken} />
        <div className="border border-gray-300 rounded-lg px-4 py-2 w-full mb-4 bg-gray-50">
          {converted ? converted.toFixed(4) : "0.0000"}
        </div>

        {error && <p className="text-red-500 text-sm mb-2">{error}</p>}

        <button
          onClick={handleSwap}
          className="w-full mt-2 bg-indigo-600 text-white font-bold py-3 rounded-lg hover:bg-indigo-700 transition disabled:opacity-50"
          disabled={loading}
        >
          {loading ? "Swapping..." : "Swap"}
        </button>
      </div>
    </div>
  );
}

export default App;
