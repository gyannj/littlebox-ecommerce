// import Image from "next/image";
// import CategorySection from "@/modules/components/categorysection"; 4
// import HeroSection from "@/modules/components/herosection";
// export default function Home() {
//   const slides =[
//     { url:"https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
//      {url:"https://images.unsplash.com/photo-1532274402911-5a369e4c4bb5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
//      {url:"https://images.unsplash.com/photo-1494500764479-0c8f2919a3d8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
//      {url:"https://images.pexels.com/photos/440731/pexels-photo-440731.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"},
//    ]

//    const containerStyle = {
//     width:"1500px",
//     height:"300px",
//     margin:"0 auto"
//   }
   

//   return (
//     <main className="flex min-h-screen flex-col items-start justify-between p-24 bg-dark-1">
//        <div className='flex p-3 w-5/6 sm:w-screen h-[300px]'>
//       <HeroSection slides={slides}/> 
//       </div>
//       <CategorySection/>
//     </main>
//   );
// }


import React from "react";
import CategorySection from "@/modules/components/categorysection";
import Slider from "@/modules/components/herosection";

export default function Home() {
  const slides = [
    { url: "https://www.bookswagon.com/bannerimages/81_inr.jpg?v=5.2" },
    { url: "https://www.bookswagon.com/bannerimages/85_inr.jpg?v=5.2" },
    { url: "https://www.bookswagon.com/bannerimages/84_inr.jpg?v=5.2" },
    { url: "https://www.bookswagon.com/bannerimages/83_inr.jpg?v=5.2" },
    { url: "https://www.bookswagon.com/bannerimages/79_inr.jpg?v=5.2" },
    { url: "https://www.bookswagon.com/bannerimages/80_inr.jpg?v=5.2" },
    { url: "https://www.bookswagon.com/bannerimages/89_inr.jpg?v=5.2" },
  ];

  return (
    <>
    <main className="flex flex-col items-center p-6 bg-dark-1 overflow-x-hidden">
      <div className="w-11/12 h-[300px] md:h-[400px] lg:h-[500px]">
        <Slider slides={slides} />
      </div>
    </main>
    <div className="flex min-h-screen flex-col items-start p-24 bg-dark-1">
    <CategorySection />
    
    </div>
    </>
  );
}
