"use client";
import React, { useState } from "react";
import { ChangeEvent } from "react";
import Link from "next/link";
import { FaChevronDown, FaHeart } from "react-icons/fa";
import { MdAccountCircle, MdMessage } from "react-icons/md";
import { FaCartShopping } from "react-icons/fa6";
import { IoReorderThreeOutline } from "react-icons/io5";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Filter, X } from "lucide-react";

const SecondPageNavbar: React.FC = () => {
  const router = useRouter();
  const categories = ["Tablets", "Phones", "Ipads", "Ipods","Laptops"];

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    // console.log("Changed")
    const selectedValue = event.target.value;
    if (selectedValue !== "all") {
      router.push(`/${selectedValue}`);
    }
  };

  

  return (
    <header className="bg-white shadow-none lg:shadow-md">
      <div className="container border-none lg:border-b-2 mb-2 pt-4 mx-auto px-4 py-2 flex items-center justify-between">
         {/* Hamburger Icon */}
         <div className="md:hidden mr-4">
              {/* <IoReorderThreeOutline className="text-[33px] leading-loose text-gray-700" /> */}
             <Link href="/"> <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20 11H7.83L13.42 5.41L12 4L4 12L12 20L13.41 18.59L7.83 13H20V11Z" fill="#1C1C1C"/>
</svg></Link>

          </div>
        {/* Left Side */}
        <div className="flex w-full justify-between items-center">
          <h2 className="block md:hidden text-black text-lg font-semibold ml-2">Mobile accessory</h2>
       <Link href="/" className="hidden md:flex text-[#8CB7F5] text-xl font-bold gap-2 items-center"> <svg
  className="md:w-9 md:h-9"
  viewBox="0 0 46 46"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M15.125 2H38.875C42.81 2 46 5.52576 46 9.875V36.125C46 40.4742 42.81 44 38.875 44H15.125C11.19 44 8 40.4742 8 36.125L8 9.875C8 5.52576 11.19 2 15.125 2Z"
                fill="#0D6EFD"
                fillOpacity="0.2"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8.5 2H33.5C37.6421 2 41 5.52576 41 9.875V36.125C41 40.4742 37.6421 44 33.5 44H8.5C4.35786 44 0.999999 40.4742 1 36.125L1 9.875C1 5.52576 4.35786 2 8.5 2Z"
                fill="#0D6EFD"
              />
              <g opacity="0.7">
                <path
                  opacity="0.3"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M15.9848 19.1907H14.9597C14.9069 19.1907 14.8285 19.2642 14.8255 19.3127L14.0703 31.5181L28.1797 31.5154L27.417 19.3127C27.4141 19.266 27.3338 19.1907 27.2828 19.1907H26.2577V21.2452C26.2577 21.8126 25.7977 22.2725 25.2304 22.2725C24.663 22.2725 24.2031 21.8126 24.2031 21.2452V19.1907H18.0394V21.2452C18.0394 21.8126 17.5795 22.2725 17.0121 22.2725C16.4447 22.2725 15.9848 21.8126 15.9848 21.2452V19.1907Z"
                  fill="white"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M21.1216 12C23.9569 12 26.258 14.3014 26.258 17.134L27.2831 17.1364C28.4191 17.1364 29.3973 18.0554 29.4679 19.1849L30.2392 31.5246C30.3099 32.6559 29.4502 33.573 28.3177 33.573H13.9256C12.7936 33.573 11.9335 32.6541 12.0041 31.5246L12.7753 19.1849C12.846 18.0536 13.8222 17.1364 14.9601 17.1364H15.9852C15.9852 14.2999 18.2882 12 21.1216 12ZM24.2035 17.1365C24.2035 15.4362 22.8222 14.0547 21.1216 14.0547C19.4222 14.0547 18.0397 15.4353 18.0397 17.1341L24.2035 17.1365ZM15.9852 19.1909H14.9601C14.9072 19.1909 14.8289 19.2644 14.8259 19.313L14.0707 31.5184L28.18 31.5157L27.4174 19.313C27.4144 19.2663 27.3341 19.1909 27.2831 19.1909H26.258V21.2455C26.258 21.8129 25.7981 22.2728 25.2308 22.2728C24.6634 22.2728 24.2035 21.8129 24.2035 21.2455V19.1909H18.0397V21.2455C18.0397 21.8129 17.5798 22.2728 17.0125 22.2728C16.4451 22.2728 15.9852 21.8129 15.9852 21.2455V19.1909Z"
                  fill="white"
                />
              </g>
            </svg>
            Brand
          </Link>

          {/* Cart and Profile Icons for Mobile Screen*/}
          <div className="flex gap-x-4 md:hidden">
            {/* Shopping Cart Icon*/}
          <svg className="cursor-pointer" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.5461 13C17.2961 13 17.9561 12.59 18.2961 11.97L21.8761 5.48C22.2461 4.82 21.7661 4 21.0061 4H6.20609L5.26609 2H1.99609V4H3.99609L7.59609 11.59L6.24609 14.03C5.51609 15.37 6.47609 17 7.99609 17H19.9961V15H7.99609L9.09609 13H16.5461ZM7.15609 6H19.3061L16.5461 11H9.52609L7.15609 6ZM7.99609 18C6.89609 18 6.00609 18.9 6.00609 20C6.00609 21.1 6.89609 22 7.99609 22C9.09609 22 9.99609 21.1 9.99609 20C9.99609 18.9 9.09609 18 7.99609 18ZM17.9961 18C16.8961 18 16.0061 18.9 16.0061 20C16.0061 21.1 16.8961 22 17.9961 22C19.0961 22 19.9961 21.1 19.9961 20C19.9961 18.9 19.0961 18 17.9961 18Z" fill="#1C1C1C"/>
</svg>

{/* Profile Icon*/}
<svg className="cursor-pointer"  width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 6C13.1 6 14 6.9 14 8C14 9.1 13.1 10 12 10C10.9 10 10 9.1 10 8C10 6.9 10.9 6 12 6ZM12 16C14.7 16 17.8 17.29 18 18H6C6.23 17.28 9.31 16 12 16ZM12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z" fill="#1C1C1C"/>
</svg>
      
          </div>

          {/* Search Bar */}
          <div className="relative hidden md:block">
            <input
              type="text"
              placeholder="Search"
              className="border-2 border-[#0D6EFD] rounded-lg py-2 pl-4 pr-10 w-[18rem] md:w-[30rem] lg:w-[50rem] focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <select className="absolute right-16 border-l-2 border-[#0D6EFD] top-1/2 transform -translate-y-1/2 text-[#1C1C1C] p-2">
              <option value="all">All category</option>
            </select>
            <button className="absolute border-[#0D6EFD] right-0 rounded-r-lg text-white top-1/2 transform -translate-y-1/2 p-2 bg-[#0D6EFD]">
              Search
            </button>
          </div>
         

          {/* Right Side Icons - hidden on smaller devices */}
          <div className="hidden md:flex space-x-6 font-medium">
            <Link
              href="#"
              className="flex text-gray-500 flex-col justify-center items-center"
            >
              <MdAccountCircle className="text-2xl" />
              <span className="text-[12px] hover:text-blue-500">Profile</span>
            </Link>
            <Link
              href="#"
              className="flex text-gray-500 flex-col justify-center items-center"
            >
              <MdMessage className="text-2xl" />
              <span className="text-[12px] hover:text-blue-500">Messages</span>
            </Link>
            <Link
              href="#"
              className="flex text-gray-500 flex-col justify-center items-center"
            >
              <FaHeart className="text-2xl" />
              <span className="text-[12px] hover:text-blue-500">Orders</span>
            </Link>
            <Link
              href="#"
              className="flex text-gray-500 flex-col justify-center items-center"
            >
              <FaCartShopping className="text-2xl" />
              <span className="text-[12px] hover:text-blue-500">My Cart</span>
            </Link>
          </div>
        </div>
      </div>

          {/* Search Bar For Mobile Screen*/}
          <div className="md:hidden block mt-2 ml-4 ">
        <div className=" w-[95%] h-10 rounded-md border border-sky-200 flex gap-x-4 bg-gray-100/40">
       {/*Search Icon*/}
       <div className=" flex items-center ml-2">
       <svg className="cursor-pointer" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.4417 13.067H13.7176L13.4609 12.8195C14.3592 11.7745 14.9001 10.4178 14.9001 8.94198C14.9001 5.65114 12.2326 2.98364 8.94173 2.98364C5.6509 2.98364 2.9834 5.65114 2.9834 8.94198C2.9834 12.2328 5.6509 14.9003 8.94173 14.9003C10.4176 14.9003 11.7742 14.3595 12.8192 13.4611L13.0667 13.7178V14.442L17.6501 19.0161L19.0159 17.6503L14.4417 13.067ZM8.94173 13.067C6.65923 13.067 4.81673 11.2245 4.81673 8.94198C4.81673 6.65948 6.65923 4.81698 8.94173 4.81698C11.2242 4.81698 13.0667 6.65948 13.0667 8.94198C13.0667 11.2245 11.2242 13.067 8.94173 13.067Z" fill="#8B96A5"/>
</svg></div>

{/* Input Area*/}
<input type="text" placeholder="Search" className="-ml-2 bg-gray-100/40 text-lg h-full border-none outline-none text-gray-500"/>
        </div>

       </div>

{/*Navigation for Mobile  */}
       <div className="ml-4 mt-3 bg-white pb-4 flex lg:hidden overflow-x-auto scrollbar-hidden">
      <div className="flex space-x-1 w-max">
        {categories.map((category, index) => (
          <div
            key={index}
            className="bg-gray-200/60 text-blue-600 font-semibold text-sm px-3 py-1.5 rounded-lg cursor-pointer whitespace-nowrap"
          >
            {category}
          </div>
        ))}
      </div>
    </div>

     
      {/* Desktop Menu */}
      <nav className="hidden lg:flex container mx-auto items-center justify-between">
        <div className="space-x-8 font-medium flex items-center mb-2">
          <Link href="#" className="flex items-center gap-1">
            <IoReorderThreeOutline className="font-bold text-xl" />
            <span className="text-gray-700 hover:text-blue-500">
              All Category
            </span>
          </Link>
          <Link href="#">
            <span className="text-gray-700 hover:text-blue-500">
              Hot Offers
            </span>
          </Link>
          <Link href="#">
            <span className="text-gray-700 hover:text-blue-500">
              Gift Boxes
            </span>
          </Link>
          <Link href="#">
            <span className="text-gray-700 hover:text-blue-500">Projects</span>
          </Link>
          <Link href="#">
            <span className="text-gray-700 hover:text-blue-500">Menu Item</span>
          </Link>
          <select onChange={handleChange}>
            <option value="all">Help</option>
            <option value="second-page">Second Page</option>
            <option value="third-page">Third Page</option>
            <option value="fourth-page">Fourth Page</option>
          </select>
        </div>
        {/* Language and Shipping */}
        <div className="flex items-center font-medium space-x-4">
          <select className="text-gray-700">
            <option>English, USD</option>
          </select>
          <div className="flex text-gray-700 items-center gap-2">
            <span>Ship to</span>
            <Image
              src="/images/Flag.jpg"
              alt="Flag"
              className="h-[15px]"
              height={10}
              width={25}
            ></Image>
            <FaChevronDown className="text-[12px]" />
          </div>
        </div>
      </nav>
      {/* Filter and Sort portion for Mobile Screen*/}
<div className="flex justify-center gap-x-2 mt-1 p-2 border-t border-b border-gray-200 md:hidden">
{/* Sort*/}
    <div className="rounded-md px-5 py-1 cursor-pointer flex border gap-x-2 justify-center items-center border-sky-300">
    <p className="text-sm font-semibold">Sort: Newest</p>

    </div>
    {/* Filter*/}
    <div className="rounded-md px-5 py-1 cursor-pointer flex border gap-x-3 justify-center items-center border-sky-300">
    <p className="text-sm font-semibold">Filter(3)</p>
    <Filter size={15} color={'gray'} />
    </div>
    </div>
    <div className="flex justify-center gap-x-2 mt-1 p-2 bg-gray-100/80 md:hidden">
      <div className="border border-blue-500 cursor-pointer rounded-md  gap-x-2 flex justify-center items-center px-3 py-1.5 text-gray-700 text-md bg-white">
      Huawei
      <X color={'gray'} />
        </div>
        <div className="border border-blue-500 cursor-pointer rounded-md gap-x-2 flex justify-center items-center px-3 py-1.5 text-gray-700 text-md bg-white">
      Apple
      <X color={'gray'}/>
        </div>
        <div className="border border-blue-500 cursor-pointer rounded-md gap-x-2 flex justify-center items-center px-3 py-1.5 text-gray-700 text-md bg-white">
      64GB
      <X color={'gray'}/>
        </div>

    </div>
    </header>
  );
};

export default SecondPageNavbar;
