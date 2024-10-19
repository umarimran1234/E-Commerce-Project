"use client"
import Image from 'next/image';
import React, { useState } from 'react';
import { IoGridSharp, IoReorderThreeOutline } from 'react-icons/io5';
const products = [
    {
        name: 'Canon Cmera EOS 2000, Black 10x zoom',
        image: '/images/iPhone.png',
        price: 998,
        rating: 7.5,
        orders: 154,
        description: 'Lorem ipsum dolor sit amet...',
    },
    {
        name: 'Canon Cmera EOS 2000, Black 10x zoom',
        image: '/images/Smartphone.png',
        price: 998,
        rating: 7.5,
        orders: 154,
        description: 'Lorem ipsum dolor sit amet...',
    },
    {
        name: 'Canon Cmera EOS 2000, Black 10x zoom',
        image: '/images/Tablet.png',
        price: 998,
        rating: 7.5,
        orders: 154,
        description: 'Lorem ipsum dolor sit amet...',
    },
    // ... more products
];

function LayoutShift() {
    const [isGrid, setIsGrid] = useState(false)

    const handleGrid = () => {
        // console.log("Grid Clicked")
        setIsGrid(true)
    }

    const handleNormal = () => {
        // console.log("Normal Layout")
        setIsGrid(false)
    }

    // console.log(isGrid)

    return (
        <>
            <div className='container mx-auto'>
                <div className="flex bg-white items-center gap-1 border-2 md:p-2 py-2 md:items-center md:gap-2 flex-col rounded-lg lg:flex-row lg:justify-between mt-8">
                    <p className="">12,911 items in <span className='font-semibold'>Mobile accessory</span></p>
                    <div className="flex gap-2 items-center md:space-x-4">
                        <div className="flex items-center">
                            <input type="checkbox" className="w-4 h-4 border-gray-300 rounded" />
                            <label className="ml-1 md:ml-2">Verified only</label>
                        </div>
                        <div className="flex gap-2 md:gap-2 items-center">
                            <select className="border-2 rounded px-2">
                                <option value="">Featured</option>
                                {/* Add more options as needed */}
                            </select>
                            <button onClick={() => handleGrid()} className={`${isGrid ? "p-1 md:text-xl bg-gray-300 rounded-lg border-2" : "p-1 md:text-xl rounded-lg border-2"}`}><IoGridSharp /></button>
                            <button onClick={() => handleNormal()} className={`${!isGrid ? "p-1 md:text-xl bg-gray-300 rounded-lg border-2" : "p-1 md:text-xl rounded-lg border-2"}`}><IoReorderThreeOutline /></button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mx-auto mt-10">
                <div className={`grid ${!isGrid ? "gap-8 grid-cols-1" : "lg:grid-cols-3 md:grid-cols-2 gap-4"}`}>
                    {products.map((product, index) => (
                        <div key={index} className="bg-white border-2 p-4 border-gray-300 rounded-lg shadow-md overflow-hidden">
                            <div className={`flex ${!isGrid ? "md:flex-row flex-col" : "flex-col"}`}>
                                <Image width={1000} height={1000} src={product?.image} alt={product?.name} className={`${!isGrid ? "w-fit mx-auto md:mx-0 h-48 object-cover" : ""}`} />
                                <div className="p-4">
                                    {!isGrid ? <div><h2 className="text-lg font-bold">{product?.name}</h2></div> : ""}
                                    <div className="flex md:flex-row gap-2 flex-col justify-between">
                                        <div>
                                            <p className="text-2xl mt-2 font-semibold">${product?.price.toFixed(2)}</p>
                                            <p className="text-[#FF9017] flex gap-2">
                                                <span>★★★★★</span> {product?.rating}
                                            </p>
                                        </div>
                                        {!isGrid ? <div className={`flex gap-2 pt-10`}>
                                            <p className="text-gray-400">Orders: {product?.orders}</p>
                                            <p className='text-[#00B517]'>Free Shipping</p>
                                        </div> : ""}
                                    </div>
                                    {!isGrid ? <div className='mt-2'>
                                        <p className="text-gray-500">{product?.description}</p>
                                        <button className="font-medium text-[#0D6EFD]">
                                            View Details
                                        </button>
                                    </div> : ""}
                                    {isGrid ? <h2 className="text-lg text-[#606060]">{product?.name}</h2> : ""}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default LayoutShift;