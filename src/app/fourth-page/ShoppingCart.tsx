"use client"
import Image from 'next/image';
import { useState } from 'react';
import { FaApplePay, FaArrowLeft, FaPaypal } from 'react-icons/fa';
import { RiMastercardFill, RiVisaLine } from 'react-icons/ri';
import { SiAmericanexpress } from 'react-icons/si';

interface CartItem {
    id: number;
    name: string;
    price: number;
    quantity: number;
    image: string;
    size: string;
    color: string;
    material: string;
    seller: string;
}

const ShoppingCart = () => {
    // Static data for now
    const [cartItems, setCartItems] = useState<CartItem[]>([
        {
            id: 1,
            name: 'T-shirts with multiple colors, for men and lady',
            price: 78.99,
            quantity: 9,
            image: '/images/T-Shirt.png', // Placeholder image path
            size: 'medium',
            color: 'blue',
            material: 'Plastic',
            seller: 'Artel Market',
        },
        {
            id: 2,
            name: 'T-shirts with multiple colors, for men and lady',
            price: 39.0,
            quantity: 3,
            image: '/images/SchoolBag.png', // Placeholder image path
            size: 'medium',
            color: 'blue',
            material: 'Plastic',
            seller: 'Best factory LLC',
        },
        {
            id: 3,
            name: 'Lamp with modern design',
            price: 170.5,
            quantity: 1,
            image: '/images/Lamp.png', // Placeholder image path
            size: 'medium',
            color: 'blue',
            material: 'Plastic',
            seller: 'Artel Market',
        },
    ]);

    const discount = 60.0; // Static discount
    const tax = 14.0; // Static tax

    // Calculate subtotal
    const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const total = subtotal - discount + tax;

    return (
        <div className="container mx-auto mt-10">
            {/* Cart Items */}
            <div className="flex flex-col lg:flex-row">
                <div className="w-full lg:w-2/3 bg-white border-2 p-4 rounded-lg shadow-md">
                    <h2 className="text-2xl font-semibold mb-4">My cart ({cartItems.length})</h2>
                    {cartItems.map((item) => (
                        <div key={item.id} className="flex items-center border-b py-4">
                            <Image
                                src={item.image}
                                alt={item.name}
                                className="w-24 h-24 border p-2 bg-gray-200 object-cover rounded-md mr-4"
                                width={1000}
                                height={1000}
                            />
                            <div className="flex-grow">
                                <h3 className="font-medium">{item.name}</h3>
                                <p className="text-gray-500">
                                    Size: {item.size}, Color: {item.color}, Material: {item.material}
                                </p>
                                <p className="text-gray-500">Seller: {item.seller}</p>
                                <div className="flex mt-2 space-x-2">
                                    <button className="text-red-500 border-2 text-[13px] font-medium rounded-lg p-1">Remove</button>
                                    <button className="text-blue-500 text-[13px] font-medium border-2 rounded-lg p-1">Save for later</button>
                                </div>
                            </div>
                            <div className="flex flex-col items-center space-y-2">
                                <p className="font-semibold">${item.price.toFixed(2)}</p>
                                <div className="flex items-center space-x-2">
                                    <label htmlFor={`quantity-${item.id}`} className="text-sm">Qty:</label>
                                    <select
                                        id={`quantity-${item.id}`}
                                        className="border rounded-md p-1"
                                        value={item.quantity}
                                        onChange={(e) => {
                                            const newQuantity = parseInt(e.target.value);
                                            setCartItems((prev) =>
                                                prev.map((cartItem) =>
                                                    cartItem.id === item.id
                                                        ? { ...cartItem, quantity: newQuantity }
                                                        : cartItem
                                                )
                                            );
                                        }}
                                    >
                                        {[...Array(20)].map((_, i) => (
                                            <option key={i} value={i + 1}>
                                                {i + 1}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                        </div>
                    ))}
                    <div className='flex justify-between'>
                        <button className="mt-4 flex items-center font-medium gap-2 bg-[#127FFF] text-white px-4 py-2 rounded-md">
                            <FaArrowLeft /> Back to shop
                        </button>
                        <button className="mt-4 ml-4 border-2 font-medium rounded-lg py-1 px-2 text-[#0D6EFD]">Remove all</button>
                    </div>
                </div>

                {/* Summary Section */}
                <div className="w-full lg:w-1/3 bg-white p-4 border-2 rounded-lg shadow-md mt-4 lg:mt-0 lg:ml-4">
                    <div className="mb-4">
                        <label htmlFor="coupon" className="text-gray-600">
                            Have a coupon?
                        </label>
                        <div className="flex items-center space-x-2 mt-2">
                            <input
                                type="text"
                                id="coupon"
                                placeholder="Add coupon"
                                className="border rounded-md p-2 w-full"
                            />
                            <button className="text-[#0D6EFD] font-medium border-2 bg-white px-4 py-1 rounded-md">Apply</button>
                        </div>
                    </div>
                    <div className="flex justify-between text-gray-600 py-2 border-b">
                        <span>Subtotal:</span>
                        <span>${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b">
                        <span className='text-gray-600'>Discount:</span>
                        <span className="text-red-500">-${discount.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b">
                        <span className='text-gray-600'>Tax:</span>
                        <span className="text-green-500">+${tax.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between py-4 font-semibold text-lg">
                        <span>Total:</span>
                        <span>${total.toFixed(2)}</span>
                    </div>
                    <button className="bg-[#00B517] text-white w-full py-5 text-[18px] font-medium rounded-md">Checkout</button>
                    <div className="flex items-center justify-center gap-4 mt-4">
                        <SiAmericanexpress className='text-2xl' />
                        <RiMastercardFill className='text-2xl' />
                        <FaPaypal className='text-2xl' />
                        <RiVisaLine className='text-2xl' />
                        <FaApplePay className='text-3xl' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShoppingCart;