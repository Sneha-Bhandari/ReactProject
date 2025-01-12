import React from "react";

const CardList = () => {
  // Sample data array
  const cards = [
    {
      id: 1,
      date: "18",
      month: "April",
      year: "2020",
      title: "Social Media Risks To Mental Health",
      description:
        "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
      image: "img1.jpg"
    },
    {
      id: 2,
      date: "18",
      month: "April",
      year: "2020",
      title: "Social Media Risks To Mental Health",
      description:
        "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
      image: "2.jpg",
    },
    {
      id: 3,
      date: "18",
      month: "April",
      year: "2020",
      title: "Social Media Risks To Mental Health",
      description:
        "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
      image: "3.jpg",
    },
  ];

  return (
    <div className="bg-white">
        <div className="flex flex-col gap-4  justify-center items-center p-12">
        <div className="text-sm uppercase font-bold text-green-900 tracking-wide">Blog</div>
        <div className="text-4xl font-semibold tracking-normal text-gray-600">Recent Blog</div>
        </div>

    <div className="container mx-auto w-11/12 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 ">
        {cards.map((card) => (
          <div
            key={card.id}
            className="bg-white overflow-hidden cursor-pointer "
          >
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-1/2 object-cover"
            />
            <div className="p-6 my-auto   ">
              <div className="flex items-center justify-center ">
                <div className="text-center bg-green-100 px-6 py-2  rounded-full">
                  <p className="text-3xl text-green-800 font-bold">{card.date}</p>
                  <p className="uppercase font-semibold">{card.month}</p>
                  <p className="text-gray-500 text-xs">{card.year}</p>
                </div>
              </div>
              <h2 className="text-xl font-semibold mt-4 text-center">
                {card.title}
              </h2>
              <p className="text-gray-500 text-base mt-2 text-center">
                {card.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default CardList;