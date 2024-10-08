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
        <div className="container mx-auto mt-10">
            <h2 className="text-2xl font-semibold px-2 mb-4">Saved for later</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {products.map((product) => (
                    <div
                        key={product.id}
                        className="border rounded-lg p-4 shadow-sm hover:shadow-lg transition-shadow duration-300"
                    >
                        <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-64 object-cover mb-4"
                        />
                        <h3 className="text-lg font-semibold">{product.price}</h3>
                        <p className="text-gray-500 mb-4">{product.description}</p>
                        <button className="mt-2 text-[#0D6EFD] font-medium border-2 rounded-lg flex items-center gap-2 px-2 py-1 rounded hover:text-blue-600 transition-colors duration-300">
                            <MdOutlineShoppingCart /> Move to cart
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SavedForLater;