
"use client";
import Image from "next/image";
import React, { useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { IoGridSharp, IoReorderThreeOutline } from "react-icons/io5";
import FilterComponent from "../FilterComponent/FilterComponent";

const items = [
  { name: "Smart watches", discount: "25%", imgSrc: "/images/Watch.png" },
  { name: "Laptops", discount: "15%", imgSrc: "/images/Laptop.png" },
  { name: "GoPro cameras", discount: "40%", imgSrc: "/images/Canon.png" },
  { name: "Headphones", discount: "25%", imgSrc: "/images/Headphone.png" },
  { name: "Canon cameras", discount: "25%", imgSrc: "/images/Smartphone.png" },
];

const products = [
  {
    name: "Canon Camera EOS 2000",
    image: "/images/iPhone.png",
    price: 998,
    rating: 7.5,
    orders: 154,
    description: "Lorem ipsum dolor sit amet...",
  },
  {
    name: "Canon Camera EOS 2000",
    image: "/images/Smartphone.png",
    price: 998,
    rating: 7.5,
    orders: 154,
    description: "Lorem ipsum dolor sit amet...",
  },
  {
    name: "Canon Camera EOS 2000",
    image: "/images/Tablet.png",
    price: 998,
    rating: 7.5,
    orders: 154,
    description: "Lorem ipsum dolor sit amet...",
  },
];

function LayoutShift() {
  const [isGrid, setIsGrid] = useState(false);

  const handleGrid = () => setIsGrid(true);
  const handleNormal = () => setIsGrid(false);

  return (
    <>
      <div className="hidden md:block container mx-auto">
        <div className="flex bg-white items-center gap-1 border-2 md:p-2 py-2 md:gap-2 flex-col rounded-lg lg:flex-row lg:justify-between mt-8">
          <p className="">
            12,911 items in{" "}
            <span className="font-semibold">Mobile accessory</span>
          </p>
          <div className="flex gap-2 items-center md:space-x-4">
            <div className="flex items-center">
              <input
                type="checkbox"
                className="w-4 h-4 border-gray-300 rounded"
              />
              <label className="ml-1 md:ml-2">Verified only</label>
            </div>
            <div className="flex gap-2 items-center">
              <select className="border-2 rounded px-2">
                <option value="">Featured</option>
              </select>
              <button
                onClick={handleGrid}
                className={`p-1 md:text-xl rounded-lg border-2 ${isGrid ? "bg-gray-300" : ""}`}
              >
                <IoGridSharp />
              </button>
              <button
                onClick={handleNormal}
                className={`p-1 md:text-xl rounded-lg border-2 ${!isGrid ? "bg-gray-300" : ""}`}
              >
                <IoReorderThreeOutline />
              </button>
            </div>
          </div>
        </div>
      </div>

      <FilterComponent />

      <div className="container mx-auto mt-10">
        <div
          className={`grid ${isGrid ? "lg:grid-cols-3 md:grid-cols-2 gap-4" : "gap-4 grid-cols-1 md:grid-cols-3"}`}
        >
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white border-2 p-4 cursor-pointer rounded-lg shadow-md"
            >
              <div className={`flex ${isGrid ? "flex-col items-center" : "flex-row items-start md:flex-col"}`}>
                <Image
                  width={1000}
                  height={1000}
                  src={product.image}
                  alt={product.name}
                  className={`${isGrid ? "h-48 w-full object-cover" : "h-28 w-28 object-contain md:w-full md:h-48"}`}
                />
                <div className="p-4 w-full">
                  <div className="flex items-center justify-between">
                    <h2 className="text-md md:text-lg font-semibold text-gray-700">
                      {product.name}
                    </h2>
                    <FaRegHeart
                      className="text-[#0D6EFD] text-2xl md:text-4xl border rounded-lg p-1 md:p-2"
                    />
                  </div>
                  <p className="text-lg font-bold text-gray-800 mt-2">
                    ${product.price.toFixed(2)}
                  </p>
                  <p className="text-[#FF9017] flex items-center gap-1 text-md md:text-lg">
                    <span className="text-lg">★★★★★</span> {product.rating}
                  </p>
                  <div className="flex justify-between items-center text-sm md:text-md mt-2">
                    <p className="text-gray-500">Orders: {product.orders}</p>
                    <p className="text-[#00B517] text-sm md:text-md">Free Shipping</p>
                  </div>
                  {!isGrid && (
                    <div className="hidden md:block mt-2">
                      <p className="text-gray-500 text-sm md:text-md">
                        {product.description}
                      </p>
                      <button className="text-[#0D6EFD] font-medium">
                        View Details
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* You may like section for Mobile Screen only*/}
      <div className="flex flex-col md:hidden pt-12 pb-6 bg-gray-100">
      <p className=" font-bold text-xl max-w-2xl mx-auto mb-4 tracking-wider">You may also like</p>
      <div className="w-full h-auto mt-2">
  {/* Scrollable container */}
  <div className="flex overflow-x-auto scroll-smooth scrollbar-hidden w-full px-4 snap-x snap-mandatory">
    {items.map((item, index) => (
      <a
        href="/"
        key={index}
        className={`shrink-0 w-1/2 snap-center border border-gray-300 text-center bg-white rounded-md`}
      >
        <div className="relative h-32">
          <Image
            width={600}
            height={600}
            src={item.imgSrc}
            alt={item.name}
            className="w-[80%] h-24 ml-4 mt-2 object-contain rounded-md group-hover:opacity-75 transition-opacity"
          />
        </div>
        <h3 className="-mt-1 mb-2 font-semibold text-md">{item.name}</h3>
        <span className="bg-[#FFE3E3] text-[#EB001B] px-3 py-1 mb-2 rounded text-sm font-medium">
          -{item.discount}
        </span>
      </a>
    ))}
  </div>
</div>
</div>

    </>
  );
}

export default LayoutShift;

