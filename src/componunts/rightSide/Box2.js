import React from "react";

export default function Box2() {
  return (
    <div className="flex  w-[720px] h-[316px] bg-[#363C43] rounded-3xl  justify-between p-5 overflow-x-hidden  ">
      <div className="flex flex-col w-[24px] h-[159px] fixed justify-between ">
        <img src="Vector (7).svg" alt="" />
        <img src="Frame 1000002250.svg" alt="" />
      </div>

      <div className="mx-10 justify-between items-center ">
        <div className="flex justify-between  h-[62px] w-[614px] items-center ">
          <div className="flex justify-around bg-[#171717] text-[#FFFFFF] font-semibold text-[20px] rounded-3xl h-[62px] w-[149px] items-center  ">
            Gallery
          </div>

          <div className="flex  items-center justify-center gap-2 ">
            <div className="flex justify-around bg-[#363C43] text-[#FFFFFF] rounded-full h-[58px] w-[149px] items-center text-[15px] shadow-2xl shadow-gray-950 font-semibold">
              + ADD IMAGE
            </div>

            <div className="flex ">
              <img src="Component 313.svg" className=" -mx-5" />
              <img src="Component 312.svg" className=" -mx-5" />
            </div>
          </div>
        </div>
        <div className="flex justify-between mt-10 ">
          <img src="Rectangle 5160.svg" />
          <img src="Rectangle 5160.svg" />
          <img src="Rectangle 5160.svg" />
        </div>
      </div>
    </div>
  );
}
