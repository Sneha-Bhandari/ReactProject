import React, { useEffect } from "react";
import { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { FaPlay } from "react-icons/fa";

function Banner() {
  const images = [
    "https://i.pinimg.com/474x/53/6d/53/536d53c303372028262f2c4dce22fb5d.jpg",
    "https://i.pinimg.com/474x/45/77/9d/45779d5a5247f91e57529ddb857269a5.jpg",
    "https://i.pinimg.com/474x/0b/af/2d/0baf2dc1146fa3d464381b1b1cb95e5f.jpg",
    "https://i.pinimg.com/474x/ce/ad/af/ceadafcdb609fceced702a091b160aed.jpg",
  ];

  const [slide, setSlide] = useState(0);
  function nextInd() {
    if (images.length - 1 == slide) {
      setSlide(0);
    } else {
      setSlide(slide + 1);
    }
  }

  function prevInd() {
    if (slide == 0) {
      setSlide(images.length - 1);
    } else {
      setSlide(slide - 1);
    }
  }

  return (
    <div className="relative   h-lvh">
      <img
        className="h-screen fixed -z-10 top-0 left-0 w-full object-cover"
        src="/img.jpg"
        alt=""
      />

      <div className="relative bg-black bg-opacity-25 flex items-center justify-center h-full ">
        <div className=" flex justify-between items-center   ">
          <div className="flex flex-col gap-10 ">
            <h1 className="text-7xl w-2/3  ">
              Counseling For Your Better Life
            </h1>
            <p className="w-1/2 flex gap-3 ">
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia.
            </p>

            <div className="gap-1 w-fit flex ">
              <button className="bg-[#589168] p-4 font-semibold rounded-md">
                Contact us
              </button>
              <button className="bg-white p-4 font-semibold rounded-md">
                Read more
              </button>
            </div>
          </div>

          <div className="relative h-16 w-16 rounded-full ">
            <div className="h-full w-full bg-green-500 rounded-full animate-ping absolute top-0 left-0"> </div>
            <button className="h-full w-full relative  rounded-full bg-white flex items-center justify-center">
              <FaPlay className="text-green-600" />
            </button>
          </div>
        </div>
      </div>
    </div>

    // <div className='flex flex-row relative overflow-clip w-screen h-lvh'>

    //       <div onClick={()=>{prevInd()}}className='text-6xl absolute bg-white z-10 top-1/2'><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50"><path fill="currentColor" d="M25 42c-9.4 0-17-7.6-17-17S15.6 8 25 8s17 7.6 17 17s-7.6 17-17 17m0-32c-8.3 0-15 6.7-15 15s6.7 15 15 15s15-6.7 15-15s-6.7-15-15-15"/><path fill="currentColor" d="M25.3 34.7L15.6 25l9.7-9.7l1.4 1.4l-8.3 8.3l8.3 8.3z"/><path fill="currentColor" d="M17 24h17v2H17z"/></svg></div>
    //       <Carousel autoPlay interval={1000} showStatus={false} infiniteLoop className='w-full' showThumbs={false} renderIndicator={false} showArrows={false}>
    //         {
    //           images.map((val,i)=>{
    //             return(

    //               <img src={val} alt="" className='w-full'/>
    //               // <img src={val} alt="" className={`h-100  absolute ${i==slide?"translate-x-0":i>slide?"translate-x-[10000px]":"-translate-x-[10000px]"} transition-all delay-75 duration-1000 ease-in-out top-0 w-screen`}/>
    //             )
    //           })
    //         }
    //         </Carousel>
    //       <div onClick={()=>{
    //         nextInd()
    //       }} className='text-6xl absolute bg-white right-0 top-1/2'><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50"><path fill="currentColor" d="M25 42c-9.4 0-17-7.6-17-17S15.6 8 25 8s17 7.6 17 17s-7.6 17-17 17m0-32c-8.3 0-15 6.7-15 15s6.7 15 15 15s15-6.7 15-15s-6.7-15-15-15"/><path fill="currentColor" d="m24.7 34.7l-1.4-1.4l8.3-8.3l-8.3-8.3l1.4-1.4l9.7 9.7z"/><path fill="currentColor" d="M16 24h17v2H16z"/></svg></div>
    //     </div>

    // <div>
    //   <div className="flex-col relative overflow-clip w-screen ">
    //     <Carousel au>
    //       {
    //         images.map((val,i)=>{
    //           return(
    //             <div className="">
    //               <img src={val} alt="" className='w-1/2'/>
    //               </div>
    //           )
    //         })
    //       }

    //     </Carousel>
    //   </div>

    // </div>
  );
}

export default Banner;
