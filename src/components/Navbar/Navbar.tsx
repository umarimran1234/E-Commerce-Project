import React from 'react';
import Link from 'next/link';
import { FaHeart, FaShoppingBag } from 'react-icons/fa';
import { MdAccountCircle, MdMessage } from 'react-icons/md';
import { FaCartShopping } from 'react-icons/fa6';
import { IoReorderThreeOutline } from 'react-icons/io5';
import Image from 'next/image';

const Navbar: React.FC = () => {
    return (
        <header className="bg-white shadow-md">
            <div className="container border-b-2 mb-2 mx-auto px-4 py-2 flex items-center justify-between">
                {/* Left Side */}
                <div className="flex w-1/2 mb-2 justify-between items-center space-x-4">
                    <Link href={"/"} className="flex gap-2 items-center">
                        {/* Brand Logo */}
                        <Image width={100} height={100} alt="Website logo" src={"/images/E-CommerceLogo-1.png"}></Image>
                    </Link>

                    {/* Search Bar */}
                    <div className="relative">
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
                </div>

                {/* Right Side */}
                <div className="flex items-center lg:block hidden space-x-4">
                    {/* Icons */}
                    <div className="flex space-x-4 text-[#8B96A5]">
                        <Link href="#" className='flex flex-col justify-center items-center'>
                            <MdAccountCircle className='text-2xl' />
                            <span className="text-gray-700 hover:text-blue-500 text-[#8B96A5]">Profile</span>
                        </Link>
                        <Link href="#" className='flex flex-col justify-center items-center'>
                            <MdMessage className='text-2xl' />
                            <span className="text-gray-700 hover:text-blue-500 text-[#8B96A5]">Messages</span>
                        </Link>
                        <Link href="#" className='flex flex-col justify-center items-center'>
                            <FaHeart className='text-2xl' />
                            <span className="text-gray-700 hover:text-blue-500 text-[#8B96A5]">Orders</span>
                        </Link>
                        <Link href="#" className='flex flex-col justify-center items-center'>
                            <FaCartShopping className='text-2xl' />
                            <span className="text-gray-700 hover:text-blue-500 text-[#8B96A5]">My Cart</span>
                        </Link>
                    </div>
                </div>
            </div>
            {/* Nav Links */}
            <nav className="hidden container mx-auto lg:flex items-center justify-between">
                <div className='space-x-8 font-medium lg:flex items-center mb-2'>
                    <Link href="#" className='flex items-center gap-1'>
                        <IoReorderThreeOutline className='font-bold text-xl' />
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
                            <option>
                                Ship to
                            </option>
                        </select>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
