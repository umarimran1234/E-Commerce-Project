import React from 'react';
import { IoGridSharp, IoReorderThreeOutline } from 'react-icons/io5';
import ProductCard from '../Products/ProductCard';

const products = [
    {
        name: 'Canon Cmera EOS 2000, Black 10x zoom',
        image: 'https://picsum.photos/300/300',
        price: 998,
        rating: 7.5,
        orders: 154,
        description: 'Lorem ipsum dolor sit amet...',
    },
    {
        name: 'Canon Cmera EOS 2000, Black 10x zoom',
        image: 'https://picsum.photos/300/300',
        price: 998,
        rating: 7.5,
        orders: 154,
        description: 'Lorem ipsum dolor sit amet...',
    },
    {
        name: 'Canon Cmera EOS 2000, Black 10x zoom',
        image: 'https://picsum.photos/300/300',
        price: 998,
        rating: 7.5,
        orders: 154,
        description: 'Lorem ipsum dolor sit amet...',
    },
    // ... more products
];

function LayoutShift() {
    return (
        <>
            <div className='container mx-auto'>
                <div className="flex border-2 p-2 md:items-center md:gap-2 flex-col rounded-lg lg:flex-row lg:justify-between w-11/12 mt-10 sm:flex-col sm:items-start">
                    <p className="">12,911 items in <span className='font-semibold'>Mobile accessory</span></p>
                    <div className="flex items-center md:space-x-4">
                        <div className="flex items-center">
                            <input type="checkbox" className="w-4 h-4 border-gray-300 rounded" />
                            <label className="ml-1 md:ml-2">Verified only</label>
                        </div>
                        <div className="flex gap-1 md:gap-2 items-center">
                            <select className="border-2 rounded px-2">
                                <option value="">Featured</option>
                                {/* Add more options as needed */}
                            </select>
                            <span className='p-1 md:text-xl rounded-lg border-2'><IoGridSharp /></span>
                            <span className='md:text-xl border-2 rounded-lg p-1'><IoReorderThreeOutline /></span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mx-auto mt-10">
            <div className="grid gap-8 grid-cols-1">
                {products.map((product) => (
                    <ProductCard key={product.name} {...product} />
                ))}
            </div>
        </div>
        </>
    )
}

export default LayoutShift;