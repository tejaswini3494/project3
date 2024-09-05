import React from "react";

export default function Navbar({ title, isactive, onClick }) {
  return (
    <div
      className={` ${
        isactive
          ? "text-white bg-[#404345]  rounded-2xl shadow-lg shadow-gray-800"
          : "text-[#A3ADB2]"
      }`}
      onClick={() => onClick()}
    >
      <p className="  hover:bg-[#404345] hover:text-[#FFFFFF] px-[24px] rounded-2xl py-[10px] font-medium">
        {title}
      </p>
    </div>
  );
}
