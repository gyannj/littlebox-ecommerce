// "use client"
// import React, { useEffect, useRef, useState } from 'react';
// import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
// import { GoDot, GoDotFill } from "react-icons/go";


// const Slider = ({ slides }: { slides: { url: string }[] }) => {
//     let ref = useRef(0);
//     const [currentIndex, setCurrentIndex] = useState(0);
    
//     const sliderStyle = {
       
//         height: "100%",
//         width: "80%",
//         position: "relative" as const,
//         };
        
//         // useEffect(() => {
//         //     const interval = setInterval(() => {
//         //         console.log('Getting called')
//         //         goToRightIndex()}, 1000)
//         //     return () => clearInterval(interval)

//         // },[]) 
//   const leftButtonStyle = {
//     position: "absolute" as const,
//     top: "50%",
//     fontSize: "30px",
//     left: "10px",
//     transform: "translate(0,-50%)",
//     zIndex: 1,
//     cursor: "pointer"
//   };

//   const rightButtonStyle = {
//     position: "absolute" as const,
//     top: "50%",
//     fontSize: "30px",
//     right: "10px",
//     transform: "translate(0,-50%)",
//     zIndex: 1,
//     cursor: "pointer"
//   };

//   const dotContainerStyle = {
//     display: "flex",
//     justifyContent: "center",
//   };

//   const dotStyle = {
//     margin: "0 3px",
//     cursor: "pointer",
//     transition: "transform .2s",
//   };

//   const goToLeftIndex = () => {
//     const isFirstSlide = currentIndex === 0;
//     const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
//     if(!isFirstSlide){
//       const slide = document.getElementById('banner-container')
//       slide.scrollLeft -= slide.offsetWidth
      
//     }else{
//         const slide = document.getElementById(`banner-container`)
//         slide.scrollLeft += (slides.length - 1) * slide.offsetWidth
//     }
//     setCurrentIndex(newIndex);
//   };

//   const goToRightIndex = () => {
//     console.log("current index",currentIndex)
//     const isLastSlide = currentIndex === slides.length - 1;
//     if(!isLastSlide){
//       const slide = document.getElementById(`banner-container`)
//       slide.scrollLeft += slide.offsetWidth
      
      
//     }else{
//         const slide = document.getElementById(`banner-container`)
//         slide.scrollLeft -= (slides.length - 1) * slide.offsetWidth
      
//     }
//     const newIndex = isLastSlide ? 0 : currentIndex + 1;
//     setCurrentIndex(newIndex);
    
  
//   };

//   const goToSlide = (slideIndex: number) => {
//     setCurrentIndex(slideIndex);
//   };
// console.log(
//   "currentIndex:",
//   currentIndex
// )
//   return (
//     <div style={sliderStyle}>
//       <div style={leftButtonStyle} onClick={goToLeftIndex} className='text-white'>
//         <BsChevronCompactLeft />
//       </div>
//       <div style={rightButtonStyle} onClick={goToRightIndex} className='text-white'>
//         <BsChevronCompactRight />
//       </div>
//       <div id = "banner-container" className='overflow-hidden scroll-smooth snap-mandatory' style={{ height: "100%", width: "100%", borderRadius: "10px" }}>
//         <div className='slide w-[400%] h-full flex flex-row'>
//         {slides.map((slide, index) => (
//             <div
//             id= {`slide-${index}`}
//             key={index}
//             style={{
//               backgroundImage: `url(${slide.url})`,
//               height: "100%",
//               width: "100%",
//               backgroundSize: "cover",
//               backgroundPosition: "center",
//               }}
//               ></div>
//               ))}
//             </div>
//       </div>
//       <div style={dotContainerStyle}>
//         {slides.map((_, slideIndex) => (
//           <div key={slideIndex} style={dotStyle} onClick={() => goToSlide(slideIndex)}>
//             {  (slideIndex === currentIndex) ?
//                           <GoDotFill  className={`text-black transition ease-in-out delay-150 hover:scale-125 hover:-translate-y-1`} />
// :(

//   <GoDot className={`text-black transition ease-in-out delay-150 hover:scale-125 hover:-translate-y-1`} />
// )
//             }
            
//             </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Slider;


"use client";
import React, { useRef, useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { GoDot, GoDotFill } from "react-icons/go";

const Slider = ({ slides }: { slides: { url: string }[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToLeftIndex = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    const slide = document.getElementById("banner-container");
    if (slide) {
      if (!isFirstSlide) {
        slide.scrollLeft -= slide.offsetWidth;
      } else {
        slide.scrollLeft += (slides.length - 1) * slide.offsetWidth;
      }
    }
    setCurrentIndex(newIndex);
  };

  const goToRightIndex = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const slide = document.getElementById("banner-container");
    if (slide) {
      if (!isLastSlide) {
        slide.scrollLeft += slide.offsetWidth;
      } else {
        slide.scrollLeft -= (slides.length - 1) * slide.offsetWidth;
      }
    }
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
      <div id="banner-container" className="overflow-hidden scroll-smooth snap-x snap-mandatory w-full h-full rounded-lg">
        <div className="flex w-full h-full">
          {slides.map((slide, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-full h-full rounded-md"
              style={{
                backgroundImage: `url(${slide.url})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
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
