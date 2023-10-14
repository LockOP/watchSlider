import React, { useState } from "react";
import { AiFillApple } from "react-icons/ai";
import st from "../images/sideNav/EXPLORE ALL - MAC, IPAD, IPHONE, WATCH, ACCESSORIES.svg";

function SideNav({ w }) {
  const [h, setH] = useState(false);
  return (
    <div
      onMouseEnter={() => {
        setH(true);
      }}
      onMouseLeave={() => {
        setH(false);
      }}
      className={`${h?"cursor-pointer":""} absolute z-50 left-0 h-full w-[80px] flex flex-col`}
    >
      <div
        className={`w-[80px] h-[80px]  ${
          h ? "bg-[white]" : "bg-[#2F2F2F]"
        } flex items-center justify-center transition-colors ease-in-out duration-500`}
      >
        <AiFillApple
          className={`${h ? "fill-[#2F2F2F]" : "fill-[white]"} transition-colors ease-in-out duration-500`}
          size={w < 1367 ? 24 : 28}
        />
      </div>
      <div className="bg-[white] flex-grow items-start pt-8 flex justify-center">
        <img
          src={st}
          className={`object-contain ${w < 1367 ? "w-[11px]" : "w-[16px]"}`}
        />
      </div>
    </div>
  );
}

export default SideNav;
