import Image from "next/image";
import React from "react";

const HomeAndOutdoor = () => {
  return (
    <div className="container mx-auto">
      <div className="bg-white mt-[2rem] rounded-lg border-2 border-gray-300">
        {/* Main Container */}
        <div className="flex flex-col lg:flex-row items-start space-y-6 lg:space-y-0 ">
          {/* Left Section - Background Image, Title, and Button */}
          <div
            id="backimg"
            className="w-full lg:w-1/5  h-[23rem]  bg-cover bg-left p-4 "
            style={{
              backgroundImage: `url("/images/OutdoorBg.jpeg")`,
            }}
          >
            <h2 className="text-3xl font-bold mb-4">Home and outdoor</h2>
            <button className="bg-white px-4 py-2 rounded-full font-bold">
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
      </div>
    </div>
  );
};

export default HomeAndOutdoor;
