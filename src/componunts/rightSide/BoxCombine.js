import React from "react";
import BoxA from "./BoxA";
import Box2 from "./Box2";

export default function BoxCombine() {
  return (
    <div className="flex flex-col justify-between items-center">
      <BoxA />
      <div className="h-[5px] w-[614px] bg-[#363C43] shadow-2xl shadow-gray-800  rounded-full"></div>
      <Box2 />
      <div className="h-[5px] w-[614px] bg-[#363C43] shadow-2xl shadow-gray-800  rounded-full"></div>
    </div>
  );
}
