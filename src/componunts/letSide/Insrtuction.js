import React from "react";
import Data from "./Data";


export default function Insrtuction() {
  return (
    <>
      <div className="bg-[#616161] text-[#FFFFFF] w-[836px] h-[689px] border-[1px] border-[#96BEE7] rounded-3xl px-5">
        {Data.map((currEle) => {
          return (
            <>
              <div
                className="flex flex-col gap-2 mt-1 font-semibold text-[18px] "
                key={currEle.id}
              >
                <h3 className="font-bold mb-16 mt-10">{currEle.title}</h3>

                {currEle.texts.map((item) => {
                  return (
                    <>
                      <div className="flex gap-1 ">
                        <span>{item.id}</span>
                        <p className="">{item.text}</p>
                      </div>
                    </>
                  );
                })}
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}
