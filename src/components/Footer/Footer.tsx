import Image from "next/image";
import Link from "next/link";
import { FaGooglePlay, FaApple } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="py-12">
            {/* Main Footer Section */}
            <div className="container mx-auto px-6 md:px-12 lg:px-16">
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-7 gap-8 mb-8">
                    {/* First Section - About Us */}
                    <div className="col-span-2">
                        <Link href="/" className="flex gap-2 items-center">
                            {/* Brand Logo */}
                            <Image
                                width={100}
                                height={100}
                                alt="Website logo"
                                src="/images/E-CommerceLogo-1.png"
                                className="w-24 h-auto md:w-36" // Ensure logo resizes properly
                            />
                        </Link>
                        <p className="text-gray-400 leading-relaxed">
                            Best information about the company gies here but now lorem ipsum is.
                        </p>
                    </div>

                    {/* List Section 1 - Services */}
                    <div>
                        <h2 className="text-xl font-semibold mb-4">About</h2>
                        <ul className="space-y-4">
                            <li>
                                <a href="#" className="text-gray-400 hover:text-white">
                                    About Us
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-400 hover:text-white">
                                    Find Store
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-400 hover:text-white">
                                    Categories
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-400 hover:text-white">
                                    Blogs
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* List Section 2 - Resources */}
                    <div>
                        <h2 className="text-xl font-semibold mb-4">Partnership</h2>
                        <ul className="space-y-4">
                            <li>
                                <a href="#" className="text-gray-400 hover:text-white">
                                    About Us
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-400 hover:text-white">
                                    Find Store
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-400 hover:text-white">
                                    Categories
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-400 hover:text-white">
                                    Blogs
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* List Section 3 - Support */}
                    <div>
                        <h2 className="text-xl font-semibold mb-4">Information</h2>
                        <ul className="space-y-4">
                            <li>
                                <a href="#" className="text-gray-400 hover:text-white">
                                    Help Center
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-400 hover:text-white">
                                    Money Refund
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-400 hover:text-white">
                                    Shipping
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-400 hover:text-white">
                                    Contact us
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* List Section 4 - Legal */}
                    <div>
                        <h2 className="text-xl font-semibold mb-4">For users</h2>
                        <ul className="space-y-4">
                            <li>
                                <a href="#" className="text-gray-400 hover:text-white">
                                    Login
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-400 hover:text-white">
                                    Register
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-400 hover:text-white">
                                    Settings
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-400 hover:text-white">
                                    My Orders
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Last Section - Available Here */}
                    <div className="col-span-1">
                        <h2 className="text-xl font-semibold mb-4">Get App</h2>
                        <div className="flex space-x-4">
                            <a href="#" className="text-3xl text-gray-400">
                                <FaGooglePlay />
                            </a>
                            <a href="#" className="text-3xl text-gray-400">
                                <FaApple />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Lower Footer Section */}
                <div className="border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
                    <p>
                        &copy; {new Date().getFullYear()} Ecommerce
                    </p>
                    <div className="space-x-4 mt-4 md:mt-0">
                        <a href="#">
                            English
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;