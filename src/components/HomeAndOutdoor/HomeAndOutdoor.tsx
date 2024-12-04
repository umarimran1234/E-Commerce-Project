import Image from "next/image";
import React from "react";
import Link from 'next/link'



const items = [
  { name: "Soft chairs", imgSrc: "/images/Chair.png" },
  { name: "Kitchen Mixer", imgSrc: "/images/Mixer.png" },
  { name: "Blenders", imgSrc: "/images/Blender.png" },
  { name: "Kitchen dishes",imgSrc: "/images/Dish.png" },
  { name: "Plates", imgSrc: "/images/Plate.png" },
];

const HomeAndOutdoor = () => {

  return (
    <div className="container w-full bg-white mx-auto">
      <div className="bg-white mt-4 lg:mt-[2rem] rounded-lg border-none lg:border-2 lg:border-gray-300">
        {/* Main Container */}
        <div className="hidden lg:flex lg:flex-row items-start space-y-6 lg:space-y-0 ">
          {/* Left Section - Background Image, Title, and Button */}
          <div
            id="backimg"
            className=" w-full lg:w-1/5  h-[23rem]  bg-cover bg-left p-4 "
            style={{
              backgroundImage: `url("/images/OutdoorBg.jpeg")`,
            }}
          >
            <h2 className="text-3xl font-bold mb-4">Home and outdoor</h2>
            <button className="bg-white px-4 py-2 rounded-lg font-bold">
              Source now
            </button>
          </div>

          {/* Right Section - Products Grid */}
          <div className="w-full lg:w-4/5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
            {/* Product 1 */}
            <div className="bg-white border-l-2 border-b-2 p-4 text-start">
              <div className="">
                <p className="text-sm font-semibold">Soft chairs</p>
                <p className="text-xs text-gray-500">From USD 19</p>
              </div>
              <div className="flex justify-end  item-start">
                <Image
                  width={1000}
                  height={1000}
                  src="/images/Chair.png"
                  alt="Soft chairs"
                  className="w-20 mb-4"
                />
              </div>
            </div>

            {/* Product 2 */}
            <div className="bg-white border-l-2 border-b-2 p-4 text-start">
              <div>
                <p className="text-sm font-semibold">Sofa & chair</p>
                <p className="text-xs text-gray-500">From USD 19</p>
              </div>
              <div className="flex justify-end item-start">
                <Image
                  width={1000}
                  height={1000}
                  src="/images/Lamp.png"
                  alt="Sofa & chair"
                  className="w-20 mb-4"
                />
              </div>
            </div>

            {/* Product 3 */}
            <div className="bg-white border-l-2 border-b-2 p-4 text-start">
              <div className="mb-2">
                <p className="text-sm font-semibold">Kitchen dishes</p>
                <p className="text-xs text-gray-500">From USD 19</p>
              </div>
              <div className="flex justify-end item-start">
                <Image
                  width={1000}
                  height={1000}
                  src="/images/Dish.png"
                  alt="Kitchen dishes"
                  className="w-20 mb-4"
                />
              </div>
            </div>

            {/* Product 4 */}
            <div className="bg-white border-l-2 border-b-2 p-4 tex-start">
              <div>
                <p className="text-sm font-semibold">Smart watches</p>
                <p className="text-xs text-gray-500">From USD 19</p>
              </div>
              <div className="flex justify-end item-start">
                <Image
                  width={1000}
                  height={1000}
                  src="/images/Plate.png"
                  alt="Smart watches"
                  className="w-20 mb-4"
                />
              </div>
            </div>

            {/* Product 5 */}
            <div className="bg-white border-l-2 md:border-b-0 border-b-2 p-4 text-start">
              <div>
                <p className="text-sm font-semibold">Kitchen mixer</p>
                <p className="text-xs text-gray-500">From USD 100</p>
              </div>
              <div className="flex justify-end item-start">
                <Image
                  width={1000}
                  height={1000}
                  src="/images/Mixer.png"
                  alt="Kitchen mixer"
                  className="w-20 mb-4"
                />
              </div>
            </div>

            {/* Product 6 */}
            <div className="bg-white border-l-2 md:border-b-0 border-b-2 p-4 text-start">
              <div>
                <p className="text-sm font-semibold">Blenders</p>
                <p className="text-xs text-gray-500">From USD 39</p>
              </div>
              <div className="flex justify-end item-start">
                <Image
                  width={1000}
                  height={1000}
                  src="/images/Blender.png"
                  alt="Blenders"
                  className="w-20 mb-4"
                />
              </div>
            </div>

            {/* Product 7 */}

            <div className="bg-white border-l-2 p-4 text-start">
              <p className="text-sm font-semibold">Home appliance</p>
              <p className="text-xs text-gray-500">From USD 19</p>
              <div className="flex justify-end">
                <Image
                  width={1000}
                  height={1000}
                  src="/images/MoneyBag.png"
                  alt="Home appliance"
                  className="w-20 mb-4"
                />
              </div>
            </div>

            {/* Product 8 */}
            <div className="bg-white border-l-2 p-4 text-start">
              <p className="text-sm font-semibold">Coffee maker</p>
              <p className="text-xs text-gray-500">From USD 10</p>
              <div className="flex justify-end">
                <Image
                  width={1000}
                  height={1000}
                  src="/images/Tree.png"
                  alt="Coffee maker"
                  className="w-20 mb-4"
                />
              </div>
            </div>
          </div>
        </div>
        {/* Mobile Screen Portion*/}
        <div className="flex bg-white border-b border-sky-100 flex-col lg:hidden pt-2">
          <h2 className="font-semibold text-lg pb-2 ml-2">Home and Outdoor</h2>

          {/* Product Grid View For Mobile Screen */}
        <div className="flex overflow-x-auto mt-2 scroll-smooth scrollbar-hidden">
          {items.map((item, index) => (
            <a
              href="/"
              key={index}
              className={`shrink-0 w-1/2 ${index === 0 ? 'pl-4' : ''} ${index === items.length - 1 ? 'pr-4' : ''} p-4 border border-gray-300 block text-center`}
            >
              <div className="relative">
                <Image
                  width={600}
                  height={600}
                  src={item.imgSrc}
                  alt={item.name}
                  className="w-full h-32 object-contain rounded-md group-hover:opacity-75 transition-opacity"
                />
              </div>
              <h3 className="mt-4 mb-2 font-medium">{item.name}</h3>
              <p className="text-xs font-medium text-gray-500">From $19</p>
            </a>
          ))}
        </div>

{/*Source Now Route*/}
<Link href="/" className="text-blue-500 text-md font-medium mt-4 ml-2 pb-3 flex items-center gap-x-2">Source now <svg className="flex items-center" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.0003 3.66663L9.70783 4.95913L14.8228 10.0833H3.66699V11.9166H14.8228L9.70783 17.0408L11.0003 18.3333L18.3337 11L11.0003 3.66663Z" fill="#0D6EFD"/>
</svg>
 </Link>
          </div>
      </div>
    </div>
  );
};

export default HomeAndOutdoor;
