import React from "react";
import { BiDollar } from "react-icons/bi";
import { TiTick } from "react-icons/ti";

const Affordable = () => {
  const pricelist = [
    {
      amount: "$ 49 /mo",
      title: "For Adults",
      topic: "Individual Counseling ",
      buttons: "Get Started",
    },
    {
      amount: "$ 49 /mo",
      title: "For Adults",
      topic: "Individual Counseling",
      buttons: "Get Started",
    },
    {
      amount: "$ 49 /mo",
      title: "For Adults",
      topic: "Individual Counseling",
      buttons: "Get Started",
    },
  ];
  return (
    <div className="bg-gray-100 h-screen w-full flex flex-col ">
      <div className="flex flex-col p-3  justify-center items-center mx-auto">
        <div className="text-sm text-[#589168] tracking-wider font-bold  uppercase">
          Price & Plans
        </div>
        <div className="text-4xl text-gray-800 font-bold tracking-wide ">
          Affordable Packages
        </div>
      </div>

      <div className=" h-full w-full  mx-auto flex flex-col items-center justify-center">
        
          <div className="flex gap-8 w-full h-full justify-center items-center mx-auto  ">
            {pricelist.map((val, i) => {
              return (
                <div key={i} className="flex gap-3 border-gray-400 shadow-sm border-1 bg-white group ">
                  <div className=" flex flex-col gap-3 px-20 py-12 group-hover:bg-gray-200 transition duration-300 group-hover:scale-105 transform ease-in-out  ">
                    <div className="text-3xl text-[#589168]">{val.amount}</div>
                    <div className="text-2xl font-bold tracking-tight">
                      {val.title}
                    </div>
                    <div className="flex  gap-3 font-thin font-sans"> <h1><TiTick/></h1>{val.topic}</div>
                    <div className="bg-[#589168] h-fit w-fit flex text-white p-2 cursor-pointer">{val.buttons}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
   
  
  );
};

export default Affordable;
