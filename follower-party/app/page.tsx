"use client";

import { useState } from "react";
import "tailwindcss/tailwind.css";

export default function Home() {
  const [followerCount, setFollowerCount] = useState<number>(0);
  const [celebrationText, setCelebrationText] = useState<string>(
    "🎉 Congratulations! You've reached 11 followers on social media! 🎉"
  );
  const [bgColor, setBgColor] = useState<string>("white");
  const [fontFamily, setFontFamily] = useState<string>("Roboto, sans-serif");
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  const formatNumber = (number: number): string => {
    if (number >= 1000000) {
      return (number / 1000000).toFixed(1) + "M";
    } else if (number >= 1000) {
      return (number / 1000).toFixed(1) + "k";
    } else {
      return number.toString();
    }
  };

  const handleFollowerCountChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = parseInt(e.target.value, 10) || 0;
    setFollowerCount(value);
    setCelebrationText(
      `🎉 Congratulations! You've reached ${formatNumber(
        value
      )} followers on social media! 🎉`
    );
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div>
      <main className="p-8 text-center">
        <div className="mb-8">
          <label htmlFor="followerCount" className="block mb-2">
            Follower Count
          </label>
          <input
            type="number"
            id="followerCount"
            min="0"
            value={followerCount}
            onChange={handleFollowerCountChange}
            placeholder="1000"
            className="p-2 text-lg border border-gray-300 rounded"
          />
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {[
            100, 300, 500, 1000, 2000, 5000, 10000, 20000, 50000, 100000,
            1000000, 2000000,
          ].map((value) => (
            <div key={value} className="p-4 border border-gray-300 rounded">
              {formatNumber(value)}
            </div>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-8 mb-8">
          <div>
            <div>Select Background</div>
            <ul className="list-none p-0">
              {["white", "blue", "green", "yellow", "red", "gray"].map(
                (color) => (
                  <li
                    key={color}
                    onClick={() => setBgColor(color)}
                    className="cursor-pointer p-2"
                    style={{ backgroundColor: color }}
                  >
                    {color.charAt(0).toUpperCase() + color.slice(1)}
                  </li>
                )
              )}
            </ul>
          </div>

          <div>
            <div>Select Font</div>
            <ul className="list-none p-0">
              {[
                "Arial, sans-serif",
                "Georgia, serif",
                "Courier New, monospace",
                "Verdana, sans-serif",
                "Times New Roman, serif",
                "Impact, fantasy",
              ].map((font) => (
                <li
                  key={font}
                  onClick={() => setFontFamily(font)}
                  className="cursor-pointer p-2"
                >
                  {font.split(",")[0]}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div>Select Emoji</div>
            <ul className="list-none p-0">
              {["😀", "❤️", "🎉", "🌟", "🍀", "🔥"].map((emoji) => (
                <li
                  key={emoji}
                  onClick={() =>
                    setCelebrationText(`${emoji} ${celebrationText} ${emoji}`)
                  }
                  className="cursor-pointer p-2"
                >
                  {emoji}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div
          id="celebrationText"
          className="p-8 rounded mb-8"
          style={{ backgroundColor: bgColor }}
        >
          {celebrationText}
        </div>
      </main>
    </div>
  );
}
