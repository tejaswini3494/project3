import React, { useState } from "react";

import Data2 from "./Data2";
import Navbar from "./Navbar";
export default function BoxA() {
  const [inti, setInti] = useState(Data2[0]);

  console.log(Data2[0].text);

  const handleData = (data) => {
    setInti(data);
  };
  return (
    <>
      <div className="flex  w-[720px] h-[316px] bg-[#363C43] rounded-3xl  justify-between p-5 overflow-x-hidden">
        <div className="flex flex-col w-[24px] h-[159px] fixed justify-between ">
          <img src="Vector (7).svg" alt="" />
          <img src="Frame 1000002250.svg" alt="" />
        </div>

        <div className="mx-10">
          <div className="flex justify-around bg-[#171717] rounded-2xl h-[62px] w-[614px] items-center  ">
            {Data2.map((item) => {
              return (
                <Navbar
                  title={item.title}
                  isactive={inti.title === item.title}
                  onClick={() => {
                    handleData(item);
                  }}
                />
              );
            })}
          </div>

          <div className="pt-7 flex justify-between items-start">
            <p className="text-[#969696] text-[20px] ">{inti.text}</p>
            <img src="Rectangle 39335.svg" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
