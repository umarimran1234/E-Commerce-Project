"use client";
import Image from "next/image";
import { useState } from "react";

const Banner: React.FC = () => {
  const [activeTab, setActiveTab] = useState("Automobiles");

  const tabs = [
    "Automobiles",
    "Clothes and wear",
    "Home interiors",
    "Computer and tech",
    "Tools, equipments",
    "Sports and outdoor",
    "Animal and pets",
    "Machinery tools",
    "More category",
  ];

  const getContent = () => {
    switch (activeTab) {
      case "Automobiles":
        return (
          <span className="flex flex-col">
            <span className="text-[28px] text-[#1C1C1C] font-semibold">
              Latest trending
            </span>{" "}
            <span className="text-[32px] font-bold">Electronic items</span>
          </span>
        ); // Replace with actual content
      case "Clothes and wear":
        return (
          <span className="flex flex-col">
            <span className="text-[28px] text-[#1C1C1C] font-semibold">
              Clothes and wear
            </span>
          </span>
        );
      case "Home interiors":
        return (
          <span className="flex flex-col">
            <span className="text-[28px] text-[#1C1C1C] font-semibold">
              Home interiors
            </span>
          </span>
        );
      case "Computer and tech":
        return (
          <span className="flex flex-col">
            <span className="text-[28px] text-[#1C1C1C] font-semibold">
              Computer and tech
            </span>
          </span>
        );
      case "Tools, equipments":
        return (
          <span className="flex flex-col">
            <span className="text-[28px] text-[#1C1C1C] font-semibold">
              Tools, equipments
            </span>
          </span>
        );
      case "Sports and outdoor":
        return (
          <span className="flex flex-col">
            <span className="text-[28px] text-[#1C1C1C] font-semibold">
              Sports and outdoor
            </span>
          </span>
        );
      case "Animal and pets":
        return (
          <span className="flex flex-col">
            <span className="text-[28px] text-[#1C1C1C] font-semibold">
              Animal and pets
            </span>
          </span>
        );
      case "Machinery tools":
        return (
          <span className="flex flex-col">
            <span className="text-[28px] text-[#1C1C1C] font-semibold">
              Machinery tools
            </span>
          </span>
        );
      case "More category":
        return (
          <span className="flex flex-col">
            <span className="text-[28px] text-[#1C1C1C] font-semibold">
              More category
            </span>
          </span>
        );
      // Add cases for other tabs
      default:
        return "No content available";
    }
  };

  return (
    <div className="container mx-auto mt-10">
      <div className="flex flex-col bg-white md:flex-row md:justify-between border-2 rounded-lg border-gray-200 p-1">
        {/* Sidebar */}
        <aside className="w-full md:w-1/5 p-4">
          <ul>
            {tabs.map((tab) => (
              <li
                key={tab}
                className={`cursor-pointer p-2 ${
                  activeTab === tab ? "bg-blue-200 text-[#1C1C1C] font-medium rounded-lg" : "text-gray-600"
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </li>
            ))}
          </ul>
        </aside>

        {/* Main Content Area */}
        <main className="w-full md:w-3/5 p-4">
          <div className="bg-green-200 p-10 rounded-lg bg-banner h-[26rem]">
            <h2 className="">{getContent()}</h2>
            <button className="bg-white text-black font-medium py-2 px-4 mt-4 rounded-md">
              Learn more
            </button>
          </div>
        </main>

        {/* User/Promotion Panel */}
        <aside className="w-full md:w-1/5 p-4 flex flex-col gap-4">
          <div className="bg-[#E3F0FF] p-4 rounded-lg">
            <h3 className="flex items-center gap-2">
              <Image
                alt="User Image"
                height={44}
                width={44}
                className="rounded-full"
                src="/images/User.jpg"
              ></Image>{" "}
              <span className="flex flex-col">
                <span>{`Hi, user`}</span>
                <span>{`let's get started`}</span>
              </span>
            </h3>
            <div className="flex flex-col">
              <button className="bg-[#127FFF] font-medimum text-white py-2 px-4 rounded-md mt-2">
                Join now
              </button>
              <button className="bg-white text-[#0D6EFD] font-medium py-2 px-4 rounded-md mt-2">
                Log in
              </button>
            </div>
          </div>
          <div className="bg-[#F38332] text-white p-4 rounded-lg">
            <p className="flex flex-col"><span>Get US $10 off</span> <span>with a new</span> supplier</p>
          </div>
          <div className="bg-[#55BDC3] text-white p-4 rounded-lg">
            <p className="flex flex-col"><span>Send quotes with</span> <span>supplier</span> preferences</p>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Banner;
