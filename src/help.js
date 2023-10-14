import React, { useState, useEffect, Fragment } from "react";
// import "./progressbar.css";
// import BannerCard from "../cards/BannerCard";
function BannerSlider({ arrOfObjects, slideInterval = 3000 }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const slideNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % arrOfObjects.length);
  };

  const slideToIndex = (index) => {
    // can be used with buttons, manual control
    setActiveIndex(index);
  };

  ///// custom loader starts
  const intervals = 0.01;
  const [count, setCount] = useState(0);
  const [isRunning, setIsRunning] = useState(true);
  useEffect(() => {
    if (count >= 11.5) {
      resetTimer();
      slideNext();
    }
  }, [count]);
  useEffect(() => {
    let intervalId;

    if (isRunning) {
      intervalId = setInterval(() => {
        setCount((prevCount) => (prevCount >= 14 ? 14 : prevCount + intervals));
      }, slideInterval / (11.5 / intervals));
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [isRunning]);

  const pauseTimer = () => {
    setIsRunning(false);
  };

  const resumeTimer = () => {
    setIsRunning(true);
  };

  const resetTimer = () => {
    setCount(-3);
  };
  /// custom loader ends

  return (
    <Fragment>
      <div
        className="relative h-max w-full overflow-hidden flex items-center justify-center pt-3"
        onMouseOver={() => {
          pauseTimer();
        }}
        onMouseEnter={() => {
          pauseTimer();
        }}
        onMouseLeave={() => {
          resumeTimer();
        }}
      >
        {arrOfObjects?.length !== 1 && (
          <div className="absolute overflow-hidden top-0 left-0 w-full h-max text-xl pt-1 flex justify-center bg-[#ffffff00]">
            <span
              className="flex transition-all ease-linear duration-500 bg-[#5C276E] w-full h-1"
              style={{
                transform: `translateX(-${100 - (count * 100) / 10}%)`,
              }}
            ></span>
          </div>
        )}
        <div
          className="flex transition-transform ease-in-out duration-500 w-full "
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {arrOfObjects?.map((object, index) => (
            <div
              key={index}
              className="w-full h-max flex-shrink-0 flex justify-center p-[1px]"
            >
              {/* <img
              src={
                "https://lobbystore.blob.core.windows.net/images/banner-test.png"
              }
              alt={`Image ${index}`}
              className="w-full "
            /> */}
            </div>
          ))}
        </div>
        {/* <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2 ">
        {arrOfObjects.map((_, index) => (
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
    </Fragment>
  );
}

export default BannerSlider;
