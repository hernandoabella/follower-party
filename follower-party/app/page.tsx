"use client";

import { useState } from "react";

export default function Home() {
  const [followers, setFollowers] = useState<number>(0);

  const amounts = [
    100, 300, 500, 1000, 2000, 5000, 10000, 20000, 30000, 50000, 100000, 200000,
    300000, 500000, 1000000, 2000000,
  ];

  const handleButtonClick = (amount: number) => {
    setFollowers(amount);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-1/2">
        <div>
          <div className="text-xl border p-5 rounded-lg shadow-lg text-center">
            Congratulations! You&apos;ve reached{" "}
            {followers >= 1000000 ? `${followers / 1000000}M` : followers}{" "}
            followers on social media! 🎉
          </div>
        </div>
        <div className="flex gap-5 mt-5 flex-wrap">
          {amounts.map((amount) => (
            <button
              key={amount}
              className="btn border p-2 rounded-lg"
              onClick={() => handleButtonClick(amount)}
            >
              {amount >= 1000000 ? `${amount / 1000000}M` : amount}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
