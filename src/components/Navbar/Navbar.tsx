"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import { FaHeart, FaShoppingBag } from 'react-icons/fa';
import { MdAccountCircle, MdMessage } from 'react-icons/md';
import { FaCartShopping } from 'react-icons/fa6';
import { IoReorderThreeOutline } from 'react-icons/io5';
import Image from 'next/image';

const Navbar: React.FC = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleMenuToggle = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className="bg-white shadow-md">
            <div className="container border-b-2 mb-2 mx-auto px-4 py-2 flex items-center justify-between">
                {/* Left Side */}
                <div className="flex w-full justify-between items-center space-x-4">
                    <Link href="/" className="flex text-[#8CB7F5] text-xl font-bold gap-2 items-center">
                        {/* Brand Logo */}
                        Brand
                    </Link>

                    {/* Search Bar */}
                    <div className="relative hidden md:block">
                        <input
                            type="text"
                            placeholder="Search"
                            className="border border-[#0D6EFD] rounded-lg py-2 pl-4 pr-10 w-[18rem] md:w-[30rem] focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <select className="absolute right-16 border-l-2 border-[#0D6EFD] top-1/2 transform -translate-y-1/2 text-[#1C1C1C] p-2 text-gray-500">
                            <option value="all">All category</option>
                        </select>
                        <button className='absolute border-[#0D6EFD] right-0 rounded-r-lg text-white top-1/2 transform -translate-y-1/2 p-2 bg-[#0D6EFD]'>Search</button>
                    </div>

                    {/* Hamburger Icon */}
                    <div className="lg:hidden">
                        <button onClick={handleMenuToggle}>
                            <IoReorderThreeOutline className="text-3xl text-gray-700" />
                        </button>
                    </div>

                    {/* Right Side Icons - hidden on smaller devices */}
                    <div className="hidden lg:flex space-x-4 text-[#8B96A5]">
                        <Link href="#" className="flex flex-col justify-center items-center">
                            <MdAccountCircle className="text-2xl" />
                            <span className="text-gray-700 hover:text-blue-500">Profile</span>
                        </Link>
                        <Link href="#" className="flex flex-col justify-center items-center">
                            <MdMessage className="text-2xl" />
                            <span className="text-gray-700 hover:text-blue-500">Messages</span>
                        </Link>
                        <Link href="#" className="flex flex-col justify-center items-center">
                            <FaHeart className="text-2xl" />
                            <span className="text-gray-700 hover:text-blue-500">Orders</span>
                        </Link>
                        <Link href="#" className="flex flex-col justify-center items-center">
                            <FaCartShopping className="text-2xl" />
                            <span className="text-gray-700 hover:text-blue-500">My Cart</span>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Dropdown menu for mobile/tablet */}
            {menuOpen && (
                <nav className="lg:hidden bg-white shadow-md transition-transform duration-300">
                    <ul className="flex flex-col items-start space-y-2 px-4 py-2">
                        <li>
                            <Link href="#" className="block text-gray-700 hover:text-blue-500">All Category</Link>
                        </li>
                        <li>
                            <Link href="#" className="block text-gray-700 hover:text-blue-500">Hot Offers</Link>
                        </li>
                        <li>
                            <Link href="#" className="block text-gray-700 hover:text-blue-500">Gift Boxes</Link>
                        </li>
                        <li>
                            <Link href="#" className="block text-gray-700 hover:text-blue-500">Projects</Link>
                        </li>
                        <li>
                            <Link href="#" className="block text-gray-700 hover:text-blue-500">Menu Item</Link>
                        </li>
                        <li>
                            <select className="w-full p-2 border border-gray-300">
                                <option value="all">Help</option>
                            </select>
                        </li>
                    </ul>
                </nav>
            )}

            {/* Desktop Menu */}
            <nav className="hidden lg:flex container mx-auto items-center justify-between">
                <div className="space-x-8 font-medium flex items-center mb-2">
                    <Link href="#" className="flex items-center gap-1">
                        <IoReorderThreeOutline className="font-bold text-xl" />
                        <span className="text-gray-700 hover:text-blue-500">All Category</span>
                    </Link>
                    <Link href="#">
                        <span className="text-gray-700 hover:text-blue-500">Hot Offers</span>
                    </Link>
                    <Link href="#">
                        <span className="text-gray-700 hover:text-blue-500">Gift Boxes</span>
                    </Link>
                    <Link href="#">
                        <span className="text-gray-700 hover:text-blue-500">Projects</span>
                    </Link>
                    <Link href="#">
                        <span className="text-gray-700 hover:text-blue-500">Menu Item</span>
                    </Link>
                    <select>
                        <option value="all">Help</option>
                    </select>
                </div>
                {/* Language and Shipping */}
                <div className="flex items-center font-medium space-x-4">
                    <select className="text-gray-700">
                        <option>English, USD</option>
                    </select>
                    <div>
                        <select className="text-gray-700">
                            <option>Ship to</option>
                        </select>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
