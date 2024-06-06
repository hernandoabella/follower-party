"use client";

import { useState } from "react";
import { RiTwitterFill, RiFacebookFill, RiInstagramFill } from "react-icons/ri";

export default function Home() {
  const [followers, setFollowers] = useState<number>(0);

  const amounts = [
    100, 300, 500, 1000, 2000, 5000, 10000, 20000, 30000, 50000, 100000, 200000,
    300000, 500000, 1000000, 2000000,
  ];

  const handleButtonClick = (amount: number) => {
    setFollowers(amount);
  };

  const socialMediaIcons = [
    { icon: <RiTwitterFill />, name: "Twitter" },
    { icon: <RiFacebookFill />, name: "Facebook" },
    { icon: <RiInstagramFill />, name: "Instagram" },
  ];

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="">
        <div className="flex justify-center items-center text-xl border p-5 rounded-lg shadow-lg text-center">
          Congratulations! You&apos;ve reached{" "}
          {followers >= 1000000 ? `${followers / 1000000}M` : followers}{" "}
          followers on{" "}
          <span className="p-2">
            <RiInstagramFill />
          </span>{" "}
          🎉
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
        <div>
          <h2 className="text-1xl py-5">Select social media</h2>
        </div>
        <div className="flex gap-5">
          {socialMediaIcons.map((socialMedia) => (
            <button key={socialMedia.name} className="btn p-2 shadow-lg">
              {socialMedia.icon}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
