"use client"
import React, { useState } from 'react';
import { ChangeEvent } from 'react';
import Link from 'next/link';
import { FaHeart } from 'react-icons/fa';
import { MdAccountCircle, MdMessage } from 'react-icons/md';
import { FaCartShopping } from 'react-icons/fa6';
import { IoReorderThreeOutline } from 'react-icons/io5';
import { useRouter } from 'next/navigation';

const Navbar: React.FC = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const router = useRouter()

    const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
        // console.log("Changed")
        const selectedValue = event.target.value;
        if (selectedValue !== "all") {
            router.push(`/${selectedValue}`)
        }
    }

    const handleMenuToggle = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className="bg-white shadow-md">
            <div className="container border-b-2 mb-2 pt-4 mx-auto px-4 py-2 flex items-center justify-between">
                {/* Left Side */}
                <div className="flex w-full justify-between items-center">
                    <Link href="/" className="flex text-[#8CB7F5] text-xl font-bold gap-2 items-center">
                        {/* Brand Logo */}
                        <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M15.125 2H38.875C42.81 2 46 5.52576 46 9.875V36.125C46 40.4742 42.81 44 38.875 44H15.125C11.19 44 8 40.4742 8 36.125L8 9.875C8 5.52576 11.19 2 15.125 2Z" fill="#0D6EFD" fill-opacity="0.2" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M8.5 2H33.5C37.6421 2 41 5.52576 41 9.875V36.125C41 40.4742 37.6421 44 33.5 44H8.5C4.35786 44 0.999999 40.4742 1 36.125L1 9.875C1 5.52576 4.35786 2 8.5 2Z" fill="#0D6EFD" />
                            <g opacity="0.7">
                                <path opacity="0.3" fill-rule="evenodd" clip-rule="evenodd" d="M15.9848 19.1907H14.9597C14.9069 19.1907 14.8285 19.2642 14.8255 19.3127L14.0703 31.5181L28.1797 31.5154L27.417 19.3127C27.4141 19.266 27.3338 19.1907 27.2828 19.1907H26.2577V21.2452C26.2577 21.8126 25.7977 22.2725 25.2304 22.2725C24.663 22.2725 24.2031 21.8126 24.2031 21.2452V19.1907H18.0394V21.2452C18.0394 21.8126 17.5795 22.2725 17.0121 22.2725C16.4447 22.2725 15.9848 21.8126 15.9848 21.2452V19.1907Z" fill="white" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M21.1216 12C23.9569 12 26.258 14.3014 26.258 17.134L27.2831 17.1364C28.4191 17.1364 29.3973 18.0554 29.4679 19.1849L30.2392 31.5246C30.3099 32.6559 29.4502 33.573 28.3177 33.573H13.9256C12.7936 33.573 11.9335 32.6541 12.0041 31.5246L12.7753 19.1849C12.846 18.0536 13.8222 17.1364 14.9601 17.1364H15.9852C15.9852 14.2999 18.2882 12 21.1216 12ZM24.2035 17.1365C24.2035 15.4362 22.8222 14.0547 21.1216 14.0547C19.4222 14.0547 18.0397 15.4353 18.0397 17.1341L24.2035 17.1365ZM15.9852 19.1909H14.9601C14.9072 19.1909 14.8289 19.2644 14.8259 19.313L14.0707 31.5184L28.18 31.5157L27.4174 19.313C27.4144 19.2663 27.3341 19.1909 27.2831 19.1909H26.258V21.2455C26.258 21.8129 25.7981 22.2728 25.2308 22.2728C24.6634 22.2728 24.2035 21.8129 24.2035 21.2455V19.1909H18.0397V21.2455C18.0397 21.8129 17.5798 22.2728 17.0125 22.2728C16.4451 22.2728 15.9852 21.8129 15.9852 21.2455V19.1909Z" fill="white" />
                            </g>
                        </svg>
                        Brand
                    </Link>

                    {/* Search Bar */}
                    <div className="relative hidden md:block">
                        <input
                            type="text"
                            placeholder="Search"
                            className="border-2 border-[#0D6EFD] rounded-lg py-2 pl-4 pr-10 w-[18rem] md:w-[50rem] focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                    <div className="hidden lg:flex space-x-6 font-medium">
                        <Link href="#" className="flex text-gray-500 flex-col justify-center items-center">
                            <MdAccountCircle className="text-2xl" />
                            <span className="text-[12px] hover:text-blue-500">Profile</span>
                        </Link>
                        <Link href="#" className="flex text-gray-500 flex-col justify-center items-center">
                            <MdMessage className="text-2xl" />
                            <span className="text-[12px] hover:text-blue-500">Messages</span>
                        </Link>
                        <Link href="#" className="flex text-gray-500 flex-col justify-center items-center">
                            <FaHeart className="text-2xl" />
                            <span className="text-[12px] hover:text-blue-500">Orders</span>
                        </Link>
                        <Link href="#" className="flex text-gray-500 flex-col justify-center items-center">
                            <FaCartShopping className="text-2xl" />
                            <span className="text-[12px] hover:text-blue-500">My Cart</span>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Dropdown menu for mobile/tablet */}
            {menuOpen && (
                <nav className="lg:hidden z-50 bg-white shadow-md transition-transform duration-300">
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
                            <select onChange={handleChange} className="w-full p-2 border border-gray-300">
                                <option value="all">Help</option>
                                <option value="second-page">Second Page</option>
                                <option value="third-page">Third Page</option>
                                <option value="fourth-page">Fourth Page</option>
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
                    <select onChange={handleChange}>
                        <option value="all">Help</option>
                        <option value="second-page">Second Page</option>
                        <option value="third-page">Third Page</option>
                        <option value="fourth-page">Fourth Page</option>
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
