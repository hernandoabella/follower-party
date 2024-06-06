"use client";

import { useState } from "react";
import {
  RiTwitterXFill,
  RiFacebookFill,
  RiInstagramFill,
} from "react-icons/ri";

export default function Home() {
  const [followers, setFollowers] = useState<number>(100);
  const [selectedIcon, setSelectedIcon] = useState<JSX.Element>(
    <RiInstagramFill />
  );

  const amounts = [
    100, 300, 500, 1000, 2000, 5000, 10000, 20000, 30000, 50000, 100000, 200000,
    300000, 500000, 1000000, 2000000,
  ];

  const handleButtonClick = (amount: number) => {
    setFollowers(amount);
  };

  const handleIconClick = (icon: JSX.Element) => {
    setSelectedIcon(icon);
  };

  const socialMediaIcons = [
    { icon: <RiFacebookFill />, name: "Facebook" },
    { icon: <RiInstagramFill />, name: "Instagram" },
    { icon: <RiTwitterXFill />, name: "Twitter" },
  ];

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="">
        <div className="flex align-center gap-5 shadow-lg rounded-lg">
          <div>
            <img
              src="/profile-image.jpg"
              alt="profile-image"
              width={180}
              height={180}
              className="rounded-xl"
            />
          </div>
          <div className="text-xl">
            <h2 className="font-bold text-4xl">Congratulations!</h2>
            <div>@hernandoabella</div>
            <div className="flex items-center justify-center">
              You&apos;ve reached{" "}
              {followers >= 1000000
                ? `${followers / 1000000}M`
                : followers >= 1000
                ? `${followers / 1000}K`
                : followers}{" "}
              followers on{" "}
              <span
                className="p-2"
                onClick={() => handleIconClick(selectedIcon)}
              >
                {selectedIcon}
              </span>{" "}
              🎉
            </div>
          </div>
        </div>

        <div className="flex mt-10">
          <div>
            <div>
              <h2 className="text-1xl font-bold mb-2">Number of followers</h2>
            </div>
            <div className="flex gap-5 flex-wrap w-1/2">
              {amounts.map((amount) => (
                <button
                  key={amount}
                  className="btn border p-2 rounded-lg"
                  onClick={() => handleButtonClick(amount)}
                >
                  {amount >= 1000000
                    ? `${amount / 1000000}M`
                    : amount >= 1000
                    ? `${amount / 1000}K`
                    : amount}
                </button>
              ))}
            </div>
          </div>
          <div>
            <div>
              <h2 className="text-1xl font-bold mb-2">Select social media</h2>
            </div>
            <div className="flex gap-5">
              {socialMediaIcons.map((socialMedia) => (
                <button
                  key={socialMedia.name}
                  className="btn p-2 shadow-lg"
                  onClick={() => handleIconClick(socialMedia.icon)}
                >
                  {socialMedia.icon}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
