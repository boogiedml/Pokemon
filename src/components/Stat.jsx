import React from "react";

export const Stat = ({ title, rangeValue }) => {
  const normalizedRangeValue = Math.min(Math.max(rangeValue, 0), 50);
  const colorMap = {
    hp: "bg-[#60D394]",
    attack: "bg-[#F14B3D]",
    defense: "bg-[#FDD85D]",
    speed: "bg-[#FF844F]",
  };

  const color = colorMap[title.toLowerCase()] || "bg-reallyGray";

  return (
    <div className="mb-4">
      <label className="block mb-1 text-sm font-poppins capitalize">
        {title}
      </label>
      <div className="relative h-1.5 bg-gray-300 rounded-md">
        <div
          className={`absolute inset-0 ${color} bg-opacity-20 rounded-md`}
        ></div>
        <div
          style={{ width: `${(normalizedRangeValue / 50) * 100}%` }}
          className={`absolute inset-0 ${color} rounded-md`}
        ></div>
      </div>
    </div>
  );
};
