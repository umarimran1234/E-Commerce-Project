"use client"
import React, { useState } from 'react';

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

    const handleFilterChange = (value: string) => {
        const updatedFilters = selectedFilters.includes(value)
            ? selectedFilters.filter((filter) => filter !== value)
            : [...selectedFilters, value];
        setSelectedFilters(updatedFilters);
        onFilterChange(updatedFilters);
    };

    const handleResetFilters = () => {
        setSelectedFilters([]);
        onFilterChange([]);
    };

    return (
        <div className='container mx-auto'>
            <div className="sidebar mt-5 w-36 md:w-52 p-4">
            <h2 className="text-xl font-bold mb-4">Filters</h2>
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
            <div className="brand-filters">
                {/* ... similar structure for brand filters */}
            </div>
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
            <div className="price-range-filter mt-5">
                <h3 className="text-lg border-t-2 font-semibold mb-2">Price range</h3>
                <input type="range" className="w-1/2" min="0" max="999999" />
                <div className="flex gap-8">
                    <label className="text-gray-600">Min</label>
                    <label className="text-gray-600">Max</label>
                </div>
                <button className="bg-blue-500 text-white mt-2 px-4 py-2 rounded-md hover:bg-blue-600">Apply</button>
            </div>
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
        </div>
    );
}

export default Sidebar;