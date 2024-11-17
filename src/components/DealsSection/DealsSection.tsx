import React from "react";
import CountdownTimer from "./CountDown";
import Image from "next/image";

const deals = [
  { name: "Smart watches", discount: "25%", imgSrc: "/images/Watch.png" },
  { name: "Laptops", discount: "15%", imgSrc: "/images/Laptop.png" },
  { name: "GoPro cameras", discount: "40%", imgSrc: "/images/Canon.png" },
  { name: "Headphones", discount: "25%", imgSrc: "/images/Headphone.png" },
  { name: "Canon cameras", discount: "25%", imgSrc: "/images/Smartphone.png" },
];

const DealsSection: React.FC = () => {
  return (
    <section className="container bg-white mx-auto mt-4 lg:mt-10">
      <div className="bg-white flex md:flex-row flex-col shadow-none lg:gap-10 lg:shadow-md rounded-lg border-none lg:border-2 lg:border-gray-300">
        {/* Responsive Layout for Timer and Header */}
        <div className="flex justify-between mb-1 lg:flex-col md:items-start gap-2 pl-2 pt-2 items-start lg:items-center">
          <div className="mb-4 -mt-1 flex flex-col lg:mb-0">
            <h2 className="text-lg lg:text-xl font-semibold">Deals and offers</h2>
            <p className="text-sm lg:text-md text-gray-500">Electronic equipments</p>
          </div>
          <CountdownTimer targetDate="2024-12-31T23:59:59" />
        </div>

        {/* Responsive Grid for Products (Desktop) */}
        <div className="hidden lg:grid lg:grid-cols-5 gap-0 lg:gap-4">
          {deals.map((deal, index) => (
            <a
              href="/"
              key={index}
              className="group p-4 border lg:border-l border-gray-300 block text-center"
            >
              <div className="relative">
                <Image
                  width={1000}
                  height={1000}
                  src={deal.imgSrc}
                  alt={deal.name}
                  className="w-full h-40 object-cover rounded-md group-hover:opacity-75 transition-opacity"
                />
              </div>
              <h3 className="mt-4 mb-2 font-medium">{deal.name}</h3>
              <span className="bg-[#FFE3E3] text-[#EB001B] px-2 py-1 rounded text-sm font-medium transition-colors">
                -{deal.discount}
              </span>
            </a>
          ))}
        </div>

        {/* Product Grid View For Mobile Screen */}
        <div className="flex overflow-x-auto scroll-smooth scrollbar-hidden">
          {deals.map((deal, index) => (
            <a
              href="/"
              key={index}
              className={`shrink-0 w-1/2 ${index === 0 ? 'pl-4' : ''} ${index === deals.length - 1 ? 'pr-4' : ''} p-4 border border-gray-300 block text-center`}
            >
              <div className="relative">
                <Image
                  width={600}
                  height={600}
                  src={deal.imgSrc}
                  alt={deal.name}
                  className="w-full h-32 object-contain rounded-md group-hover:opacity-75 transition-opacity"
                />
              </div>
              <h3 className="mt-4 mb-2 font-medium">{deal.name}</h3>
              <span className="bg-[#FFE3E3] text-[#EB001B] px-2 py-1 rounded text-sm font-medium transition-colors">
                -{deal.discount}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DealsSection;