interface TokenSelectorProps {
    label: string;
    tokens: string[];
    selected: string;
    setSelected: (token: string) => void;
  }
  
  const TokenSelector = ({ label, tokens, selected, setSelected }: TokenSelectorProps) => {
    return (
      <div className="mb-4">
        <label className="block font-semibold mb-1">{label}</label>
        <select
          value={selected}
          onChange={(e) => setSelected(e.target.value)}
          className="border border-gray-300 rounded-lg px-4 py-2 w-full"
        >
          {tokens.map((token) => (
            <option key={token} value={token}>
              {token}
            </option>
          ))}
        </select>
      </div>
    );
  };
  
  export default TokenSelector;
  