import { useState } from "react";

export default function LiXiPicker() {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [amount, setAmount] = useState(null);
  const possibleAmounts = [1000, 2000, 5000, 10000, 20000];
  const amounts = Array.from({ length: 10 }, () =>
    possibleAmounts[Math.floor(Math.random() * possibleAmounts.length)]
  );

  const handleClick = (index) => {
    if (selectedIndex === null) {
      setSelectedIndex(index);
      setAmount(amounts[index]);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-red-100">
      <h1 className="text-2xl font-bold mb-4">Chọn một bao lì xì</h1>
      <div className="grid grid-cols-5 gap-4">
        {amounts.map((_, index) => (
          <button
            key={index}
            onClick={() => handleClick(index)}
            className={`w-24 h-32 bg-red-500 text-white flex items-center justify-center font-bold rounded-lg shadow-md transition-all ${
              selectedIndex === index ? "bg-yellow-300 text-black" : "hover:bg-red-700"
            }`}
            disabled={selectedIndex !== null}
          >
            {selectedIndex === index ? `${amount.toLocaleString()} VND` : "💰"}
          </button>
        ))}
      </div>
    </div>
  );
}
