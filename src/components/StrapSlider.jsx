import { useEffect, useState } from "react";
import React from "react";
import s1 from "../images/strap1.svg";
import s2 from "../images/strap2.svg";
import s3 from "../images/strap3.svg";
import s4 from "../images/strap4.svg";
import s5 from "../images/strap5.svg";
import f from "../images/face.svg";

const strapArray = [s1, s2, s3, s4, s5];
function StrapSlider({ w, activeIndex, setActiveIndex }) {
  //   const [activeIndex, setActiveIndex] = useState(0);
  console.log(-1 / 5);
  //   const slideToIndex = (index) => {
  //     setActiveIndex(index);
  //   };
  return (
    <div
      className={`absolute skew-x-[+32deg] z-30 left-[280px] h-max  flex items-center justify-center pt-3 ${
        w < 1367 ? "w-[460px]" : "w-[650px]"
      }`}
    >
      <img
        className={`absolute z-[60] ${
          w < 1367 ? "h-[206px] translate-y-[-1px]" : "h-[292px] translate-y-[-3px]"
        }`}
        src={f}
      />
      <div
        className="flex transition-transform ease-in-out duration-500 w-full"
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {strapArray?.map((object, index) => (
          <div key={index} className="w-full flex-shrink-0 p-[1px]">
            <img
              src={object}
              className={`transition-opacity ease-in-out duration-500 ${
                activeIndex === index ? "opacity-100" : "opacity-0"
              }`}
            />
          </div>
        ))}
      </div>
      {/* <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2 ">
        {strapArray.map((_, index) => (
          <button
            key={index}
            className={`w-[6px] h-[6px] rounded-full ${
              index === activeIndex ? "bg-[#5C276E]" : "bg-[#e69aff]"
            }`}
            onClick={() => slideToIndex(index)}
          ></button>
        ))}
      </div> */}
    </div>
  );
}

export default StrapSlider;
