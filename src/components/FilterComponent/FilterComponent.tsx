"use client"
import React, { useState } from 'react';

const FilterComponent: React.FC = () => {
    // Static array for initial filter labels
    const initialFilters = ['Samsung', 'Apple', 'Poco', 'Metallic', '4 star', '3 star'];

    // State to manage active filters
    const [filters, setFilters] = useState(initialFilters);

    // Function to remove a specific filter
    const removeFilter = (filter: string) => {
        setFilters(filters.filter((item) => item !== filter));
    };

    // Function to clear all filters
    const clearAllFilters = () => {
        setFilters([]);
    };

    return (
        <div className="hidden md:grid lg:grid-cols-7 md:grid-cols-4 grid-cols-3 gap-1 md:gap-2 lg:gap-0 lg:w-9/12 space-x-2 mt-4">
            {filters.map((filter, index) => (
                <div
                    key={index}
                    className="flex items-center px-3 py-1 border border-blue-500 rounded-lg text-gray-600"
                >
                    <span>{filter}</span>
                    <button
                        onClick={() => removeFilter(filter)}
                        className="ml-2 text-blue-500 hover:text-blue-700 focus:outline-none"
                    >
                        &times;
                    </button>
                </div>
            ))}
            {filters.length > 0 && (
                <button
                    onClick={clearAllFilters}
                    className="text-[#0D6EFD] hover:text-blue-700 focus:outline-none"
                >
                    Clear all filter
                </button>
            )}
        </div>
    );
};

export default FilterComponent;
