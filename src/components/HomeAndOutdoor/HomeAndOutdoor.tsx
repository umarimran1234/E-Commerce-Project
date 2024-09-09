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
                        className="w-full lg:w-1/5  h-[24rem]  bg-cover bg-center p-4 "
                        style={{
                            backgroundImage: `url("https://picsum.photos/300/300")`,
                        }}
                    >
                        <h2 className="text-3xl font-bold mb-4">Home and outdoor</h2>
                        <button className="bg-gray-800 text-white px-4 py-2 rounded-full font-bold">
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
                                <img
                                    src="https://picsum.photos/100"
                                    alt="Soft chairs"
                                    className=" mb-4"
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
                                <img
                                    src="https://picsum.photos/100"
                                    alt="Sofa & chair"
                                    className=" mb-4"
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
                                <img
                                    src="https://picsum.photos/100"
                                    alt="Kitchen dishes"
                                    className=" mb-4"
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
                                <img
                                    src="https://picsum.photos/100"
                                    alt="Smart watches"
                                    className=" mb-4"
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
                                <img
                                    src="https://picsum.photos/100"
                                    alt="Kitchen mixer"
                                    className=" mb-4"
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
                                <img
                                    src="https://picsum.photos/100"
                                    alt="Blenders"
                                    className=" mb-4"
                                />
                            </div>
                        </div>

                        {/* Product 7 */}

                        <div className="bg-white border-l-2 p-4 text-start">
                            <p className="text-sm font-semibold">Home appliance</p>
                            <p className="text-xs text-gray-500">From USD 19</p>
                            <div className="flex justify-end">
                                <img
                                    src="https://picsum.photos/100"
                                    alt="Home appliance"
                                    className=" mb-4"
                                />
                            </div>
                        </div>

                        {/* Product 8 */}
                        <div className="bg-white border-l-2 p-4 text-start">
                            <p className="text-sm font-semibold">Coffee maker</p>
                            <p className="text-xs text-gray-500">From USD 10</p>
                            <div className="flex justify-end">
                                <img
                                    src="https://picsum.photos/100"
                                    alt="Coffee maker"
                                    className=" mb-4"
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