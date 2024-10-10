"use client";
import React, { useState, useEffect } from 'react';

interface FilterItem {
    label: string;
    value: string;
}

interface FilterCategory {
    name: string;
    options: FilterItem[];
}

interface SidebarProps {
    data: FilterCategory[]; // This will hold the JSON data
    onFilterChange: (selectedFilters: string[]) => void; // Function to handle filter selection changes
}

const Sidebar: React.FC<SidebarProps> = ({ data, onFilterChange }) => {
    const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const handleFilterChange = (value: string) => {
        const updatedFilters = selectedFilters.includes(value)
            ? selectedFilters.filter((filter) => filter !== value)
            : [...selectedFilters, value];
        setSelectedFilters(updatedFilters);
        onFilterChange(updatedFilters);
    };

    // const handleResetFilters = () => {
    //     setSelectedFilters([]);
    //     onFilterChange([]);
    // };

    // Close sidebar on outside click
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const sidebar = document.querySelector('.sidebar');
            const target = event.target as HTMLElement;
            if (sidebar && !sidebar.contains(target) && isSidebarOpen) {
                setIsSidebarOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isSidebarOpen]);

    return (
        <div className="container mx-auto mt-5">
            {/* Hamburger Menu */}
            <div className="md:hidden inline" title='Filter'>
                {!isSidebarOpen && ( // Only show the hamburger button when the sidebar is closed
                    <button
                        className="text-3xl"
                        onClick={() => setIsSidebarOpen(true)}
                    >
                        &#9776; {/* Hamburger Icon */}
                    </button>
                )}
            </div>

            {/* Sidebar */}
            <div
                className={`fixed top-0 left-0 h-full w-64 bg-white p-4 z-40 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out md:translate-x-0 md:static sidebar overflow-y-auto`} // Added overflow-y-auto for scrolling
            >
                <h2 className="text-xl font-bold mb-4">Filters</h2>

                {/* Category Filters */}
                <div className="category-filters">
                    {data.map((category) => (
                        <div key={category.name} className="mb-4">
                            <h3 className="text-lg border-t-2 font-semibold mb-2">{category.name}</h3>
                            <ul className="space-y-2">
                                {category.options.map((option) => (
                                    <li key={option.value}>
                                        <input
                                            type="checkbox"
                                            className="mr-2 border-gray-300 rounded-md"
                                            checked={selectedFilters.includes(option.value)}
                                            onChange={() => handleFilterChange(option.value)}
                                        />
                                        <label className="text-gray-800">{option.label}</label>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Feature Filters */}
                <div className="feature-filters">
                    <h3 className="text-lg font-semibold border-t-2 mb-2">Features</h3>
                    <ul className="space-y-2">
                        <li>
                            <input type="checkbox" className="mr-2 border-gray-300 rounded-md" />
                            <label className="text-gray-800">Metallic</label>
                        </li>
                        <li>
                            <input type="checkbox" className="mr-2 border-gray-300 rounded-md" />
                            <label className="text-gray-800">Plastic cover</label>
                        </li>
                        <li>
                            <input type="checkbox" className="mr-2 border-gray-300 rounded-md" />
                            <label className="text-gray-800">8GB Ram</label>
                        </li>
                        <li>
                            <input type="checkbox" className="mr-2 border-gray-300 rounded-md" />
                            <label className="text-gray-800">Super power</label>
                        </li>
                        <li>
                            <input type="checkbox" className="mr-2 border-gray-300 rounded-md" />
                            <label className="text-gray-800">Large Memory</label>
                        </li>
                    </ul>
                </div>

                {/* Price Range Filter */}
                <div className="price-range-filter mt-5">
                    <h3 className="text-lg border-t-2 font-semibold mb-2">Price range</h3>
                    <input type="range" className="w-1/2" min="0" max="999999" />
                    <div className="flex gap-8">
                        <label className="text-gray-600">Min</label>
                        <label className="text-gray-600">Max</label>
                    </div>
                    <button className="bg-blue-500 text-white mt-2 px-4 py-2 rounded-md hover:bg-blue-600">Apply</button>
                </div>

                {/* Condition Filter */}
                <div className="condition-filter mt-5">
                    <h3 className="text-lg border-t-2 font-semibold mb-2">Condition</h3>
                    <ul className="space-y-2">
                        <li>
                            <input type="radio" name="condition" className="mr-2" />
                            <label className="text-gray-800">Any</label>
                        </li>
                        <li>
                            <input type="radio" name="condition" className="mr-2" />
                            <label className="text-gray-800">Refurbished</label>
                        </li>
                        <li>
                            <input type="radio" name="condition" className="mr-2" />
                            <label className="text-gray-800">Brand new</label>
                        </li>
                        <li>
                            <input type="radio" name="condition" className="mr-2" />
                            <label className="text-gray-800">Old items</label>
                        </li>
                    </ul>
                </div>

                {/* Ratings Filter */}
                <div className="ratings-filter mt-5">
                    <h3 className="text-lg border-t-2 font-semibold mb-2">Ratings</h3>
                    <ul className="space-y-2">
                        <li>
                            <input type="checkbox" className="mr-2 border-gray-300 rounded-md" />
                            <label className="text-gray-800 text-orange-500">★★★★★</label>
                        </li>
                        <li>
                            <input type="checkbox" className="mr-2 border-gray-300 rounded-md" />
                            <label className="text-gray-800 text-orange-500">★★★★</label>
                        </li>
                        <li>
                            <input type="checkbox" className="mr-2 border-gray-300 rounded-md" />
                            <label className="text-gray-800 text-orange-500">★★★</label>
                        </li>
                        <li>
                            <input type="checkbox" className="mr-2 border-gray-300 rounded-md" />
                            <label className="text-gray-800 text-orange-500">★★</label>
                        </li>
                        <li>
                            <input type="checkbox" className="mr-2 border-gray-300 rounded-md" />
                            <label className="text-gray-800 text-orange-500">★</label>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Overlay when sidebar is open on mobile */}
            {isSidebarOpen && (
                <div
                    className="fixed inset-0 bg-black opacity-50 z-30 md:hidden"
                    onClick={() => setIsSidebarOpen(false)}
                />
            )}
        </div>
    );
};

export default Sidebar;
