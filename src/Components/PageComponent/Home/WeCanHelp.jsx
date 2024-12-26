import React from "react";
import { useState } from "react";
import image1 from "/img1.jpg";

const WeCanHelp = () => {
  const services = [
    {
      title: "Relation Problem",
    },
    {
      title: "Couples Counseling",
    },
    {
      title: "Depression Treatment",
    },
    {
      title: "Family Problem",
    },
    {
      title: "Personal Problem",
    },
    {
      title: "Business Problem",
    },
  ];

  const rightside = [
    {
      img: image1,
      title: "Relation Problem",
      description:
        "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
    },
    // {
    //   img:"./img2.jpg",
    //   title: "Couples Counseling",
    //   description:"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean."
    // },
    // {
    //   img:"./img3.jpg",
    //   title: "Depression Treatment",
    //   description:"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean."
    // },
    // {
    //   img:"./img4.jpg",
    //   title: "Family Problem",
    //   description:"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean."
    // },
    // {
    //   img:"./img5.jpg",
    //   title: "Personal Problem",
    //   description:"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean."
    // },
    // {
    //   img:"./img6.jpg",
    //   title: "Business Problem",
    //   description:"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean."
    // },
  ];

  const [selectedService, setSelectedService] = useState(true);
  return (
    <div className="bg-white">
      <div className="flex h-fit  mx-20 ">
        <div className="flex flex-col items-center w-full h-full py-12 bg-red-400">
          <div className="flex bg-blue-900 w-full flex-col gap-12">
            <div className="w-full flex flex-col items-center gap-3 justify-center">
              <div className="text-green-900 font-bold uppercase text-sm">
                Our Services
              </div>
              <div className="text-4xl font-bold tracking-normal text-gray-600">
                We Can Help You With This Situation
              </div>
            </div>

            <div className=" rounded-sm  gap-2 flex flex-col w-80">
              {services.map((val, i) => {
                return (
                  <div
                    key={i}
                    onClick={() => setSelectedService(true)}
                    className={`cursor-pointer p-4 rounded-sm text-gray-800 font-semibold text-2xl  ${
                      selectedService === val.title
                        ? "bg-green-500 text-white"
                        : "bg-white border border-gray-300 hover:bg-gray-50"
                    }`}
                  >
                    {val.title}
                  </div>
                );
              })}
            </div>
          </div>

          {selectedService && (
            <div
              className="right-0 top-40  left-0 bottom-0  w-1/2 h-full relative"
              onClick={() => selectedService((prev) => !prev)}
            >
              <div className="border-2 border-black h-1/2 w-full bg-green-400">
                {rightside.map((val, i) => {
                  return (
                    <div
                      key={i}
                      onClick={() => selectedService == false}
                      className={`cursor-pointer p-4 rounded-sm text-gray-800 font-semibold text-2xl  ${
                        selectedService === val.title
                          ? "bg-green-500 text-white"
                          : "bg-white border border-gray-300 hover:bg-gray-50"
                      }`}
                    >
                      <img src={val.img} alt="image1" />
                      {val.title}
                      {val.description}
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default WeCanHelp;
