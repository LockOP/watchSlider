import React, { useState } from "react";
import i1 from "../images/headerIcons/Person.svg";
import i2 from "../images/headerIcons/Search.svg";
import i3 from "../images/headerIcons/Shopping bag.svg";
function Header({ w }) {
  const [h, setH] = useState(false); // hover for search
  const [searchValue, setSearchValue] = useState(null);
  return (
    <div
      className={`absolute z-40 top-0 w-full h-[80px] flex flex-row justify-end items-center gap-6 px-20 font-medium text-[white] ${
        w < 1367 ? "text-lg" : "text-xl"
      }`}
    >
      <button className=" transition-all ease-linear duration-100 hover:border-b-2">
        Home
      </button>
      <button className=" transition-all ease-linear duration-100 hover:border-b-2">
        About
      </button>
      <button className=" transition-all ease-linear duration-100 hover:border-b-2">
        Gallery
      </button>
      <button className=" transition-all ease-linear duration-100 hover:border-b-2">
        E-Store
      </button>
      <button className=" transition-all ease-linear duration-100 hover:border-b-2">
        Contact
      </button>
      <button
        className={`${
          w < 1367 ? "h-6" : "h-8"
        } transition-all ease-linear duration-100 p-[1px] hover:border-[white] rounded-full border-[#ffffff00] border-2`}
      >
        <img className="h-full object-contain" src={i1} />
      </button>
      <button
        onMouseEnter={() => {
          setH(true);
        }}
        onMouseLeave={() => {
          if (
            searchValue === "" ||
            searchValue === " " ||
            searchValue === null
          ) {
            setH(false);
          }
        }}
        className={`${
          w < 1367 ? "h-6" : "h-8"
        } transition-all ease-linear duration-100 p-[1px] px-1 rounded-full border-2 relative flex items-center overflow-hidden ${
          h ? "w-max border-[white]" : "border-[#ffffff00] w-10"
        }`}
      >
        <img className="h-full object-contain" src={i2} />
        <input
          value={searchValue}
          onChange={(e) => {
            setSearchValue(e.target.value);
            setH(true);
          }}
          className="ml-2 bg-transparent text-[white] outline-none"
        ></input>
      </button>
      <button
        className={`${
          w < 1367 ? "h-6" : "h-8"
        } transition-all ease-linear duration-100  p-[1px] hover:border-[white] rounded-full border-[#ffffff00] border-2`}
      >
        <img className="h-full object-contain" src={i3} />
      </button>
    </div>
  );
}

export default Header;
