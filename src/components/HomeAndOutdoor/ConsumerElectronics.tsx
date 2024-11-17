import Image from "next/image";
import Link from "next/link";
import React from "react";


const items = [
    { name: "Smart Phones",imgSrc: "/images/Tablet.png" },
    { name: "IPhone", imgSrc: "/images/iPhone.png" },
    { name: "Headphones", imgSrc: "/images/WhiteHeadphone.png" },
    { name: "Kettle", imgSrc: "/images/Kettle.png" },
    { name: "Gaming Set", imgSrc: "/images/Headphone.png" }
    
  ];

const ConsumerElectronics = () => {
    return (
        <div className="container mx-auto">
            <div className="bg-white mt-[2rem] rounded-lg border-none lg:border-2 lg:border-gray-300">
                {/* Main Container */}
                <div className="hidden lg:flex-row items-start space-y-6 lg:space-y-0 ">
                    {/* Left Section - Background Image, Title, and Button */}
                    <div
                        id="backimg"
                        className="w-full lg:w-1/5  h-[21.6rem]  bg-cover bg-center p-4 "
                        style={{
                            backgroundImage: `url("/images/Consumer.png")`,
                        }}
                    >
                        <h2 className="text-3xl font-bold mb-4">Consumer electronics and gadgets</h2>
                        <button className="bg-white px-4 py-2 rounded-lg font-bold">
                            Source now
                        </button>
                    </div>

                    {/* Right Section - Products Grid */}
                    <div className="w-full lg:w-4/5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
                        {/* Product 1 */}
                        <div className="bg-white border-l-2 border-b-2 p-4 text-start">
                            <div className="">
                                <p className="text-sm font-semibold">Smart Watches</p>
                                <p className="text-xs text-gray-500">From USD 19</p>
                            </div>
                            <div className="flex justify-end  item-start">
                                <Image
                                    width={1000}
                                    height={1000}
                                    src="/images/Watch.png"
                                    alt="Smart Watches"
                                    className="w-20 mb-4"
                                />
                            </div>
                        </div>

                        {/* Product 2 */}
                        <div className="bg-white border-l-2 border-b-2 p-4 text-start">
                            <div>
                                <p className="text-sm font-semibold">Cameras</p>
                                <p className="text-xs text-gray-500">From USD 19</p>
                            </div>
                            <div className="flex justify-end item-start">
                                <Image
                                    width={1000}
                                    height={1000}
                                    src="/images/Canon.png"
                                    alt="Cameras"
                                    className="w-20 mb-4"
                                />
                            </div>
                        </div>

                        {/* Product 3 */}
                        <div className="bg-white border-l-2 border-b-2 p-4 text-start">
                            <div className="mb-2">
                                <p className="text-sm font-semibold">Headphones</p>
                                <p className="text-xs text-gray-500">From USD 19</p>
                            </div>
                            <div className="flex justify-end item-start">
                                <Image
                                    width={1000}
                                    height={1000}
                                    src="/images/WhiteHeadphone.png"
                                    alt="Headphones"
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
                                    src="/images/Kettle.png"
                                    alt="Smart watches"
                                    className="w-20 mb-4"
                                />
                            </div>
                        </div>

                        {/* Product 5 */}
                        <div className="bg-white border-l-2 md:border-b-0 border-b-2 p-4 text-start">
                            <div>
                                <p className="text-sm font-semibold">Gaming Set</p>
                                <p className="text-xs text-gray-500">From USD 100</p>
                            </div>
                            <div className="flex justify-end item-start">
                                <Image
                                    width={1000}
                                    height={1000}
                                    src="/images/Headphone.png"
                                    alt="Gaming Set"
                                    className="w-20 mb-4"
                                />
                            </div>
                        </div>

                        {/* Product 6 */}
                        <div className="bg-white border-l-2 md:border-b-0 border-b-2 p-4 text-start">
                            <div>
                                <p className="text-sm font-semibold">Laptop & PC</p>
                                <p className="text-xs text-gray-500">From USD 39</p>
                            </div>
                            <div className="flex justify-end item-start">
                                <Image
                                    height={1000}
                                    width={1000}
                                    src="/images/Laptop.png"
                                    alt="Laptop & PC"
                                    className="w-20 mb-4"
                                />
                            </div>
                        </div>

                        {/* Product 7 */}

                        <div className="bg-white border-l-2 p-4 text-start">
                            <p className="text-sm font-semibold">Smart Phones</p>
                            <p className="text-xs text-gray-500">From USD 19</p>
                            <div className="flex justify-end">
                                <Image
                                    width={1000}
                                    height={1000}
                                    src="/images/Tablet.png"
                                    alt="Smart Phones"
                                    className="w-20 mb-4"
                                />
                            </div>
                        </div>

                        {/* Product 8 */}
                        <div className="bg-white border-l-2 p-4 text-start">
                            <p className="text-sm font-semibold">Electric Kettle</p>
                            <p className="text-xs text-gray-500">From USD 10</p>
                            <div className="flex justify-end">
                                <Image
                                    height={1000}
                                    width={1000}
                                    src="/images/iPhone.png"
                                    alt="Electric Kettle"
                                    className="w-20 mb-4"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                 {/* Mobile Screen Portion*/}
        <div className="flex bg-white border-b border-sky-100 flex-col lg:hidden pt-2">
          <h2 className="font-semibold text-lg pb-2 ml-2">Consumer Electronics</h2>

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

export default ConsumerElectronics;
