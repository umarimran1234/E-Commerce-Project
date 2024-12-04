import Image from 'next/image';
import React from 'react';
import { MdOutlineShoppingCart } from 'react-icons/md';

interface Product {
    id: number;
    name: string;
    price: string;
    description: string;
    image: string;
}

const products: Product[] = [
    {
        id: 1,
        name: 'GoPro HERO6 4K Action Camera - Black',
        price: '$99.50',
        description: 'GoPro HERO6 4K Action Camera - Black',
        image: '/images/Tablet.png', // Replace with actual image paths
    },
    {
        id: 2,
        name: 'iPhone 12 - Blue',
        price: '$99.50',
        description: 'iPhone 12 - Blue',
        image: '/images/BlueiPhone.png',
    },
    {
        id: 3,
        name: 'Smart Watch - Silver',
        price: '$99.50',
        description: 'Smart Watch - Silver',
        image: '/images/Watch.png',
    },
    {
        id: 4,
        name: 'MacBook Pro - Silver',
        price: '$99.50',
        description: 'MacBook Pro - Silver',
        image: '/images/Laptop.png',
    },
];

const SavedForLater: React.FC = () => {
    return (
        <div className="container bg-white rounded-lg p-4 mx-auto mt-10">
            <h2 className="text-xl font-bold md:text-2xl md:font-semibold px-2 mb-4">Saved for later</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-6">
                {products.map((product) => (
                    <div
                        key={product.id}
                        className="rounded-lg flex md:flex-col p-2 border-2 border-gray-200 md:p-4 shadow-sm hover:shadow-lg transition-shadow duration-300"
                    >
                        <Image
                            src={product.image}
                            alt={product.name}
                            width="1000"
                            height={1000}
                            className="md:w-full object-contain w-20 h-20 md:h-64 rounded-lg p-0 md:p-8 bg-white md:bg-[#EEEEEE] md:object-cover mb-4"
                        />
                        <div className="flex flex-col">
                        <div className="flex ml-2 flex-col-reverse md:flex-col">
                        <h3 className="text-lg font-bold md:font-semibold mt-1 md:mt-0">{product.price}</h3>
                        <p className="text-gray-400 md:text-gray-500 font-medium md:mb-4">{product.description}</p>
                        </div>
                        <button className="hidden mt-2 text-[#0D6EFD] font-medium md:flex gap-x-4 border-2 items-center w-40 h-10 rounded-md hover:text-blue-600 transition-colors duration-300">
                            <MdOutlineShoppingCart size={20} className="ml-2" /> Move to cart
                        </button>
                        {/*Save to cart and Remove Button for Mobile Screen*/}

                        <div className="flex md:hidden mt-4 gap-x-4">
                            {/*Save To cart Button*/}
                        <div className="px-3 py-1.5 flex items-center cursor-pointer justify-center rounded-md bg-white border border-gray-300 text-sm font-medium text-blue-600">Move to cart</div>
                        {/*Remove Button*/}
                        <div className="px-4 py-1.5 flex items-center cursor-pointer justify-center rounded-md bg-white border border-gray-300 font-medium text-sm text-red-500">Remove</div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SavedForLater;