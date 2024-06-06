"use client";

import { useState, useRef } from "react";
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
  const [backgroundColor, setBackgroundColor] = useState<string>("bg-white");

  const amounts = [
    100, 300, 500, 1000, 2000, 5000, 10000, 20000, 30000, 50000, 100000, 200000,
    300000, 500000, 1000000, 2000000,
  ];

  const canvasRef = useRef<HTMLCanvasElement>(null);

  const handleButtonClick = (amount: number) => {
    setFollowers(amount);
  };

  const handleIconClick = (icon: JSX.Element) => {
    setSelectedIcon(icon);
  };

  const handleBackgroundColorChange = (color: string) => {
    setBackgroundColor(color);
  };

  const socialMediaIcons = [
    { icon: <RiFacebookFill />, name: "Facebook" },
    { icon: <RiInstagramFill />, name: "Instagram" },
    { icon: <RiTwitterXFill />, name: "Twitter" },
  ];

  const downloadScreenshot = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const link = document.createElement("a");
    link.href = canvas.toDataURL("image/png");
    link.download = "screenshot.png";
    link.click();
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="">
        <div className={`relative shadow-lg rounded-lg ${backgroundColor} p-10`}>
          <canvas
            ref={canvasRef}
            className="absolute top-0 left-0 pointer-events-none opacity-0"
            width="400"
            height="400"
          />
          <div className="flex align-center gap-5">
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
        </div>

        <div className="mt-10">
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
              <h2 className="text-1xl font-bold mb-2">Select background</h2>
            </div>
            <div className="flex gap-5">
              <button
                className="btn glass bg-red-500"
                onClick={() => handleBackgroundColorChange("bg-red-500")}
              >
                Red
              </button>
              <button
                className="btn glass bg-blue-500"
                onClick={() => handleBackgroundColorChange("bg-blue-500")}
              >
                Blue
              </button>
              <button
                className="btn glass bg-green-500"
                onClick={() => handleBackgroundColorChange("bg-green-500")}
              >
                Green
              </button>
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

          <div className="mt-5">
            <button className="btn" onClick={downloadScreenshot}>
              Download Screenshot
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
