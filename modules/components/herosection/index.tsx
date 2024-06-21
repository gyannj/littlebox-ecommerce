"use client";
import React, { useEffect, useRef, useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { GoDot, GoDotFill } from "react-icons/go";

const Slider = ({ slides }: { slides: { url: string }[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToLeftIndex = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    const slide = document.getElementById("banner-container");
    // if (slide) {
    //   if (!isFirstSlide) {
    //     slide.scrollLeft -= slide.offsetWidth;
    //   } else {
    //     slide.scrollLeft += (slides.length - 1) * slide.offsetWidth;
    //   }
    // }
    setCurrentIndex(newIndex);
  };

  const goToRightIndex = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const slide = document.getElementById("banner-container");
    // if (slide) {
    //   if (!isLastSlide) {
    //     slide.scrollLeft += slide.offsetWidth;
    //   } else {
    //     slide.scrollLeft -= (slides.length - 1) * slide.offsetWidth;
    //   }
    // }
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
    const slide = document.getElementById("banner-container");
    if (slide) {
      slide.scrollLeft = slideIndex * slide.offsetWidth;
    }
  };

  useEffect(() => {
    const interval = setInterval(goToRightIndex, 3000); // Change slide every 3 seconds
    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, [currentIndex]);

  return (
    <div className="relative w-full h-full">
      <div
        className="absolute top-1/2 left-2 transform -translate-y-1/2 z-10 cursor-pointer text-white"
        onClick={goToLeftIndex}
      >
        <BsChevronCompactLeft size={30} />
      </div>
      <div
        className="absolute top-1/2 right-2 transform -translate-y-1/2 z-10 cursor-pointer text-white"
        onClick={goToRightIndex}
      >
        <BsChevronCompactRight size={30} />
      </div>
      <div id="banner-container" className="overflow-hidden w-full h-full rounded-lg">
        <div className="flex w-full h-full ">
          {slides.map((slide, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-full h-full rounded-md transition ease-in duration-500"
              style={{
                backgroundImage: `url(${slide.url})`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                transform : `translateX(-${currentIndex * 100}%)`,
              }}
            ></div>
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-4 absolute bottom-0 w-full">
        {slides.map((_, slideIndex) => (
          <div key={slideIndex} className="mx-1 cursor-pointer" onClick={() => goToSlide(slideIndex)}>
            {slideIndex === currentIndex ? (
              <GoDotFill className="text-white transition ease-in-out delay-150 hover:scale-125 hover:-translate-y-1" />
            ) : (
              <GoDot className="text-white transition ease-in-out delay-150 hover:scale-125 hover:-translate-y-1" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
