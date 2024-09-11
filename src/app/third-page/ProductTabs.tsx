"use client"
import { useState } from 'react';
import { TiTick } from 'react-icons/ti';

const ProductTabs = () => {
    const [activeTab, setActiveTab] = useState('description');

    const tabs = [
        { label: 'Description', value: 'description' },
        { label: 'Reviews', value: 'reviews' },
        { label: 'Shipping', value: 'shipping' },
        { label: 'About Seller', value: 'aboutSeller' },
    ];

    const renderContent = () => {
        switch (activeTab) {
            case 'description':
                return (
                    <div>
                        <p className="text-gray-600 mb-4">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit...
                        </p>
                        <table className="table-auto w-full mb-4">
                            <tbody>
                                <tr className='text-gray-600'>
                                    <td className="border border-gray-300 bg-gray-200 px-4 py-2">Model</td>
                                    <td className="border px-4 py-2">#8786867</td>
                                </tr>
                                <tr className='text-gray-600'>
                                    <td className="border border-gray-300 bg-gray-200 px-4 py-2">Style</td>
                                    <td className="border px-4 py-2">Classic Style</td>
                                </tr>
                                <tr className='text-gray-600'>
                                    <td className="border border-gray-300 bg-gray-200 px-4 py-2">Certificate</td>
                                    <td className="border px-4 py-2">ISO-898921212</td>
                                </tr>
                                <tr className='text-gray-600'>
                                    <td className="border border-gray-300 bg-gray-200 px-4 py-2">Size</td>
                                    <td className="border px-4 py-2">34mm x 450mm x 19mm</td>
                                </tr>
                                <tr className='text-gray-600'>
                                    <td className="border border-gray-300 bg-gray-200 px-4 py-2">Memory</td>
                                    <td className="border px-4 py-2">36GB RAM</td>
                                </tr>
                            </tbody>
                        </table>
                        <ul className="space-y-2">
                            <li className="hover:text-blue-500 flex items-center gap-2"><TiTick /> Some great feature name here</li>
                            <li className="hover:text-blue-500 flex items-center gap-2"><TiTick /> Lorem ipsum dolor sit amet</li>
                            <li className="hover:text-blue-500 flex items-center gap-2"><TiTick /> Duis aute irure dolor in reprehenderit</li>
                            <li className="hover:text-blue-500 flex items-center gap-2"><TiTick /> Another great feature name here</li>
                        </ul>
                    </div>
                );
            case 'reviews':
                return (
                    <div>
                        <p className="text-gray-600">
                            This product has amazing reviews! Here's a sample review: "Excellent quality and quick shipping!"
                        </p>
                    </div>
                );
            case 'shipping':
                return (
                    <div>
                        <p className="text-gray-600">
                            We offer fast and reliable shipping with various options. Your package will arrive in 3-5 business days.
                        </p>
                    </div>
                );
            case 'aboutSeller':
                return (
                    <div>
                        <p className="text-gray-600">
                            This seller has been rated 4.8/5 and has been a trusted partner for over 5 years.
                        </p>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div className="mx-auto flex lg:flex-row flex-col lg:gap-8 container mt-10">
            <div className="border-2 rounded-lg py-2 px-4 lg:w-2/3 border-gray-200 mb-4">
                <ul className="flex space-x-4">
                    {tabs.map((tab) => (
                        <li key={tab.value} className={`${activeTab === tab.value ? 'border-b-2 border-blue-500 font-medium' : ''} cursor-pointer`}>
                            <button onClick={() => setActiveTab(tab.value)} className="py-2 px-4 text-gray-600">
                                {tab.label}
                            </button>
                        </li>
                    ))}
                </ul>
                <div className='mt-4'>
                    {renderContent()}
                </div>
            </div>
            {/* You May Like Section */}
            <div className="mt-8 border-2 border-gray-200 h-fit p-4 rounded-lg lg:w-1/3">
                <h2 className="text-xl font-semibold mb-4">You may like</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4">
                    <div className="flex items-center space-x-4">
                        <img src="https://picsum.photos/56" alt="Product 1" className="w-14 p-2 border-2 border-gray-200 rounded-lg h-14 object-cover hover:opacity-75" />
                        <div>
                            <h3 className="text-gray-800 font-semibold">Men Blazers Sets Elegant Formal</h3>
                            <p className="text-gray-500">$7.00 - $99.50</p>
                        </div>
                    </div>
                    <div className="flex items-center space-x-4">
                        <img src="https://picsum.photos/56" alt="Product 2" className="w-14 p-2 border-2 border-gray-200 rounded-lg h-14 object-cover hover:opacity-75" />
                        <div>
                            <h3 className="text-gray-800 font-semibold">Men Shirt Sleeve Polo Contrast</h3>
                            <p className="text-gray-500">$7.00 - $99.50</p>
                        </div>
                    </div>
                    {/* Add other recommended items similarly */}
                </div>
            </div>
        </div>
    );
};

export default ProductTabs;