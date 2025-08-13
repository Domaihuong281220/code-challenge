import { useState } from "react";

interface TokenSelectorProps {
    tokenprice: number[];
    tokens: string[];
    selected: string;
    setSelected: (token: string) => void;
}

const TokenSelector = ({ tokens, selected, tokenprice, setSelected }: TokenSelectorProps) => {
    const [open, setOpen] = useState(false);

    return (
        <div className="relative w-72 font-sans select-none">

            {/* Selected box */}
            <div
                onClick={() => setOpen(!open)}
                tabIndex={0}
                onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && setOpen(!open)}
                className={`
          flex items-center justify-between px-6 py-3 rounded-full cursor-pointer
          bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400
          shadow-[8px_8px_15px_rgba(0,0,0,0.15),-8px_-8px_15px_rgba(255,255,255,0.8)]
          hover:shadow-[4px_4px_8px_rgba(0,0,0,0.2),-4px_-4px_8px_rgba(255,255,255,1)]
          active:shadow-[inset_4px_4px_6px_rgba(0,0,0,0.2),inset_-4px_-4px_6px_rgba(255,255,255,0.7)]
          transition-shadow duration-300 ease-out
          transform hover:-translate-y-0.5 active:scale-95
        `}
            >
                <div className="flex items-center gap-4">
                    <img
                        src={`https://raw.githubusercontent.com/Switcheo/token-icons/main/tokens/${selected}.svg`}
                        alt={selected}
                        className="w-10 h-10 rounded-full drop-shadow-lg border-2 border-white"
                        draggable={false}
                    />
                    <div className="flex flex-col">
                        <p className="text-white font-semibold text-lg tracking-wide drop-shadow-md">
                            {selected}
                        </p>
                        <p className="text-white text-sm">
                            {tokenprice[tokens.indexOf(selected)] ? `$${tokenprice[tokens.indexOf(selected)]?.toFixed(4)}` : "N/A"}
                        </p>
                    </div>
                </div>

                <svg
                    className={`w-6 h-6 mb-[1vw] text-white transition-transform duration-400 ${open ? "rotate-180 animate-bounce" : "rotate-0"
                        }`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
            </div>

            {/* Dropdown */}
            {open && (
                <div
                    className={`
            absolute z-40 mt-3 w-full rounded-3xl
            bg-gradient-to-b from-pink-100 via-purple-50 to-indigo-100
            border border-purple-200
            shadow-[12px_12px_20px_rgba(0,0,0,0.12),-12px_-12px_20px_rgba(255,255,255,0.85)]
            max-h-64 overflow-y-auto
            animate-[fadeSlideBounce_300ms_ease-out]
          `}
                // Define the keyframes for fadeSlideBounce in your CSS file instead of inline styles.
                >
                    {tokens.map((token, key) => {
                        const isSelected = token === selected;
                        console.log(`Token: ${token}, Price: ${tokenprice[key]}`);
                        return (
                            <div
                                key={token}
                                onClick={() => {
                                    setSelected(token);
                                    setOpen(false);
                                }}
                                className={`
                  flex items-center gap-4 px-6 py-3 rounded-2xl cursor-pointer
                  transition-all duration-250
                  ${isSelected
                                        ? "bg-purple-300 text-purple-900 font-semibold shadow-[inset_6px_6px_10px_rgba(0,0,0,0.15),inset_-6px_-6px_10px_rgba(255,255,255,0.8)]"
                                        : "bg-purple-50 text-purple-800 hover:bg-purple-200 hover:scale-[1.03] hover:shadow-[8px_8px_15px_rgba(0,0,0,0.1),-8px_-8px_15px_rgba(255,255,255,0.7)]"
                                    }
                `}
                            >
                                <img
                                    src={`https://raw.githubusercontent.com/Switcheo/token-icons/main/tokens/${token}.svg`}
                                    alt={token}
                                    className="w-7 h-7 rounded-full drop-shadow-md border border-white"
                                    draggable={false}
                                />
                                <div className="flex flex-col">
                                    <p>{token}</p>
                                    <p className="text-sm text-gray-500">
                                        {tokenprice[key] ? `$${tokenprice[key].toFixed(4)}` : "N/A"}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
};

export default TokenSelector;
