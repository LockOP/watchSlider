import { useEffect, useState } from "react";
import "./App.css";
import StrapSlider from "./components/StrapSlider";
import Header from "./components/Header";
import SideNav from "./components/SideNav";
import { AiFillCaretRight } from "react-icons/ai";
import { BiSolidChevronLeft, BiSolidChevronRight } from "react-icons/bi";
const colorArr = [
  "bg-[#495261]",
  "bg-[#846766]",
  "bg-[#444953]",
  "bg-[#5A3236]",
  "bg-[#93847A]",
];
const titleArr = [
  "BLUE SPORT LOOP",
  "PINK SPORT BAND",
  "DARK BLUE SPORT LOOP",
  "RED SPORT BAND",
  "STARLIGHT SPORT LOOP",
];
function App() {
  const [color, setColor] = useState("bg-[#495261]");
  const [title, setTitle] = useState("BLUE SPORT LOOP");

  const [activeIndex, setActiveIndex] = useState(0);
  const [w, setW] = useState(window.innerWidth);
  const [h, setH] = useState(window.innerHeight);

  function logInnerScreenSize() {
    setW(window.innerWidth);
    setH(window.innerHeight);
    console.log(
      `Inner Screen Size: Width = ${window.innerWidth}, Height = ${window.innerHeight}`
    );
  }
  window.addEventListener("resize", logInnerScreenSize);
  return (
    <div className="select-none font-['Inconsolata'] h-screen w-screen flex justify-center items-center relative overflow-hidden bg-[#2F2F2F] min-[1367px]:bg-[red]">
      <SideNav w={w} />
      <Header w={w} />
      <div
        className={`absolute z-50 h-full right-0 top-0 bottom-0 mt-20 mr-20 flex flex-col text-[white] pl-20 justify-center pb-32 ${
          w < 1367 ? "scale-75 w-2/3 right-[-100px]" : "scale-100 w-1/2"
        }`}
      >
        <p className="font-bold text-xl">Series 9</p>
        <p className="transition-all ease-in-out duration-500 font-['Inter'] font-bold text-5xl mt-5">
          {title}
        </p>
        <p className="transition-all ease-in-out duration-500 font-['Inter'] font-light text-6xl mt-8">
          ₹ 41,900
        </p>
        <div className="flex flex-col w-full mt-8 gap-2">
          <p className="font-normal text-xl leading-normal tracking-[0.99PX]">
            Custom Apple silicon makes Apple Watch Series 9 more capable,
            intuitive and faster.
          </p>
          <p className="font-normal text-xl leading-normal tracking-[0.99PX]">
            The new dual-core CPU has 5.6 billion transistors — 60% more than
            the S8 chip.
          </p>
          <p className="font-normal text-xl leading-normal tracking-[0.99PX]">
            A new 4-core Neural Engine processes machine learning tasks up to
            two times faster.
          </p>
        </div>
        <div className="flex flex-row justify-start gap-9 mt-11">
          <button className="border-[2px] border-[white] transition-colors ease-in-out duration-500 rounded-sm flex py-5 px-8 text-xl font-bold hover:bg-[#000]">
            DETAILS
          </button>
          <button
            className={` border-[2px] border-[#ffffff00] transition-colors ease-in-out duration-500 ${color} rounded-sm flex py-5 px-8 text-xl font-bold hover:bg-[#000] hover:border-[#ffffff]`}
          >
            ADD TO CART
          </button>
        </div>
      </div>

      <div className="absolute z-20  w-max font-['Inter'] font-bold text-[275px] text-[rgba(255,255,255,0.05)] right-[250px] translate-y-[-40%]">
        SERIES 9
      </div>
      <div className="absolute z-20  w-max font-['Inter'] font-bold text-[275px] text-[rgba(255,255,255,0.05)] right-[-370px] translate-y-[40%]">
        SERIES 9
      </div>
      <div
        className={`absolute z-10 overflow-hidden flex items-center justify-center ${
          w < 1367
            ? " w-[700px] h-[430px] left-[-190px]"
            : "w-[900px] h-[630px] left-[-130px]"
        }   bg-[rgba(0,0,0,0.5)] skew-x-[-32deg]`}
      >
        {" "}
        <StrapSlider
          w={w}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        />
      </div>
      <div
        className={`absolute transition-colors ease-in-out duration-500 z-0 left-0 translate-x-[-50%] h-[300%] w-[1011px] ${color} ${
          w < 1367 ? "w-[700px]" : "w-[900px]"
        } rotate-[32deg]`}
      />
      <div className="absolute z-[60] right-0 bottom-0 flex flex-col">
        <button
          onClick={() => {
            setActiveIndex((activeIndex + 1) % 5);
            setColor(colorArr[(activeIndex + 1) % 5]);
            setTitle(titleArr[(activeIndex + 1) % 5]);
          }}
          className={`${color} border-2 border-[#ffffff00] transition-colors ease-in-out duration-500 rounded-sm flex py-1 px-1 text-4xl font-bold hover:border-[#ffffff7a]`}
        >
          <BiSolidChevronRight color="#fff" size={60} />
        </button>
        <button
          onClick={() => {
            if (activeIndex === 0) {
              setActiveIndex(4);
              setColor(colorArr[4]);
              setTitle(titleArr[4]);
            } else {
              setActiveIndex((activeIndex - 1) % 5);
              setColor(colorArr[(activeIndex - 1) % 5]);
              setTitle(titleArr[(activeIndex - 1) % 5]);
            }
          }}
          className="bg-[black] border-2 border-[#ffffff00] transition-colors ease-in-out duration-500 rounded-sm flex py-1 px-1 text-4xl font-bold hover:border-[#ffffff7a]"
        >
          <BiSolidChevronLeft color="#fff" size={60} />
        </button>
      </div>
    </div>
  );
}

export default App;
