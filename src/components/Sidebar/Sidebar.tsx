"use client";
import React, { useState, useEffect } from "react";

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
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const [minValue, setMinValue] = useState(200000);
  const [maxValue, setMaxValue] = useState(500000);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  const handleMinChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.min(Number(event.target.value), maxValue - 1);
    setMinValue(value);
  };

  const handleMaxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.max(Number(event.target.value), minValue + 1);
    setMaxValue(value);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    const numericValue = Number(value);

    if (name === 'min') {
      const newMinValue = Math.min(numericValue, maxValue - 1);
      setMinValue(newMinValue);
    } else {
      const newMaxValue = Math.max(numericValue, minValue + 1);
      setMaxValue(newMaxValue);
    }
  };


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
      const sidebar = document.querySelector(".sidebar");
      const target = event.target as HTMLElement;
      if (sidebar && !sidebar.contains(target) && isSidebarOpen) {
        setIsSidebarOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isSidebarOpen]);

  return (
    <div className="container mx-auto mt-5">
      {/* Hamburger Menu */}
      <div className="md:hidden inline" title="Filter">
        {!isSidebarOpen && ( // Only show the hamburger button when the sidebar is closed
          <button className="text-3xl" onClick={() => setIsSidebarOpen(true)}>
            &#9776; {/* Hamburger Icon */}
          </button>
        )}
      </div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 p-4 z-40 transform ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 ease-in-out md:translate-x-0 md:static sidebar overflow-y-auto`} // Added overflow-y-auto for scrolling
      >
        {/* Category Filters */}
        <div className="category-filters">
          {data.map((category) => (
            <div
              key={category.name}
              className="mb-4 border-t-2 pt-2"
              id="accordion-collapse"
              data-accordion="collapse"
            >
              <h2 id="accordion-collapse-heading-1" className="mb-2">
                <button
                  type="button"
                  className="flex items-center justify-between w-full font-medium rtl:text-right gap-3"
                  data-accordion-target="#accordion-collapse-body-1"
                  aria-expanded={isOpen}
                  aria-controls="accordion-collapse-body-1"
                  onClick={toggleAccordion}
                >
                  <span>{category.name}</span>
                  <svg
                    data-accordion-icon
                    className={`w-3 h-3 shrink-0 ${isOpen ? "rotate-180" : ""}`}
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5 5 1 1 5"
                    />
                  </svg>
                </button>
              </h2>
              <div
                id="accordion-collapse-body-1"
                className={`${isOpen ? "" : "hidden"}`}
                aria-labelledby="accordion-collapse-heading-1"
              >
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
            </div>
          ))}
        </div>

        {/* Feature Filters */}
        <div className="feature-filters">
          <div
            className="mb-4 border-t-2 pt-2"
            id="accordion-collapse"
            data-accordion="collapse"
          >
            <h2 id="accordion-collapse-heading-1" className="mb-2">
              <button
                type="button"
                className="flex items-center justify-between w-full font-medium rtl:text-right gap-3"
                data-accordion-target="#accordion-collapse-body-1"
                aria-expanded={isOpen}
                aria-controls="accordion-collapse-body-1"
                onClick={toggleAccordion}
              >
                <span>Features</span>
                <svg
                  data-accordion-icon
                  className={`w-3 h-3 shrink-0 ${isOpen ? "rotate-180" : ""}`}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5 5 1 1 5"
                  />
                </svg>
              </button>
            </h2>
            <div
              id="accordion-collapse-body-1"
              className={`${isOpen ? "" : "hidden"}`}
              aria-labelledby="accordion-collapse-heading-1"
            >
              <ul className="space-y-2">
                <li>
                  <input
                    type="checkbox"
                    className="mr-2 border-gray-300 rounded-md"
                  />
                  <label className="text-gray-800">Metallic</label>
                </li>
                <li>
                  <input
                    type="checkbox"
                    className="mr-2 border-gray-300 rounded-md"
                  />
                  <label className="text-gray-800">Plastic cover</label>
                </li>
                <li>
                  <input
                    type="checkbox"
                    className="mr-2 border-gray-300 rounded-md"
                  />
                  <label className="text-gray-800">8GB Ram</label>
                </li>
                <li>
                  <input
                    type="checkbox"
                    className="mr-2 border-gray-300 rounded-md"
                  />
                  <label className="text-gray-800">Super power</label>
                </li>
                <li>
                  <input
                    type="checkbox"
                    className="mr-2 border-gray-300 rounded-md"
                  />
                  <label className="text-gray-800">Large Memory</label>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Price Range Filter */}
        <div className="price-range-filter mt-5">
          <div
            className="mb-4 border-t-2 pt-2"
            id="accordion-collapse"
            data-accordion="collapse"
          >
            <h2 id="accordion-collapse-heading-1" className="mb-2">
              <button
                type="button"
                className="flex items-center justify-between w-full font-medium rtl:text-right gap-3"
                data-accordion-target="#accordion-collapse-body-1"
                aria-expanded={isOpen}
                aria-controls="accordion-collapse-body-1"
                onClick={toggleAccordion}
              >
                <span>Price range</span>
                <svg
                  data-accordion-icon
                  className={`w-3 h-3 shrink-0 ${isOpen ? "rotate-180" : ""}`}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5 5 1 1 5"
                  />
                </svg>
              </button>
            </h2>
            <div
              id="accordion-collapse-body-1"
              className={`${isOpen ? "" : "hidden"}`}
              aria-labelledby="accordion-collapse-heading-1"
            >
              <div className="w-full">
                <div className="pt-2">
                  <div className="relative w-full h-8">
                    {/* Background light blue part (before min value) */}
                    <div
                      className="absolute top-1/2 transform -translate-y-1/2 h-1 bg-blue-200"
                      style={{
                        left: 0,
                        right: `${100 - (minValue / 999999) * 100}%`,
                      }}
                    ></div>

                    {/* Selected blue part for range */}
                    <div
                      className="absolute top-1/2 transform -translate-y-1/2 h-1 bg-blue-500"
                      style={{
                        left: `${(minValue / 999999) * 100}%`,
                        right: `${100 - (maxValue / 999999) * 100}%`,
                      }}
                    ></div>

                    {/* Background light blue part (after max value) */}
                    <div
                      className="absolute top-1/2 transform -translate-y-1/2 h-1 bg-blue-200"
                      style={{
                        left: `${(maxValue / 999999) * 100}%`,
                        right: 0,
                      }}
                    ></div>

                    {/* Min thumb */}
                    <input
                      type="range"
                      min="0"
                      max="999999"
                      value={minValue}
                      onChange={handleMinChange}
                      className="absolute w-full h-1 appearance-none bg-transparent"
                      style={{
                        zIndex: 3,
                        pointerEvents: 'auto',
                      }}
                    />

                    {/* Max thumb */}
                    <input
                      type="range"
                      min="0"
                      max="999999"
                      value={maxValue}
                      onChange={handleMaxChange}
                      className="absolute w-full h-1 appearance-none bg-transparent"
                      style={{
                        zIndex: 2,
                        pointerEvents: 'auto',
                      }}
                    />
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <div>
                    <label className="block text-gray-500">Min</label>
                    <input
                      type="number"
                      name="min"
                      min="0"
                      max="999999"
                      value={minValue}
                      onChange={handleInputChange}
                      className="w-24 px-2 py-1 border rounded-lg text-center"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-500">Max</label>
                    <input
                      type="number"
                      name="max"
                      min="0"
                      max="999999"
                      value={maxValue}
                      onChange={handleInputChange}
                      className="w-24 px-2 py-1 border rounded-lg text-center"
                    />
                  </div>
                </div>

                <div className="mt-4 text-center">
                  <button className="px-4 py-2 text-blue-500 border border-blue-500 rounded-lg hover:bg-blue-500 hover:text-white transition-colors">
                    Apply
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Condition Filter */}
        <div className="condition-filter mt-5">
          <div
            className="mb-4 border-t-2 pt-2"
            id="accordion-collapse"
            data-accordion="collapse"
          >
            <h2 id="accordion-collapse-heading-1" className="mb-2">
              <button
                type="button"
                className="flex items-center justify-between w-full font-medium rtl:text-right gap-3"
                data-accordion-target="#accordion-collapse-body-1"
                aria-expanded={isOpen}
                aria-controls="accordion-collapse-body-1"
                onClick={toggleAccordion}
              >
                <span>Condition</span>
                <svg
                  data-accordion-icon
                  className={`w-3 h-3 shrink-0 ${isOpen ? "rotate-180" : ""}`}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5 5 1 1 5"
                  />
                </svg>
              </button>
            </h2>
            <div
              id="accordion-collapse-body-1"
              className={`${isOpen ? "" : "hidden"}`}
              aria-labelledby="accordion-collapse-heading-1"
            >
              <div className="w-full">
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
            </div>
          </div>
        </div>

        {/* Ratings Filter */}
        <div className="ratings-filter mt-5">
          <div
            className="mb-4 border-t-2 pt-2"
            id="accordion-collapse"
            data-accordion="collapse"
          >
            <h2 id="accordion-collapse-heading-1" className="mb-2">
              <button
                type="button"
                className="flex items-center justify-between w-full font-medium rtl:text-right gap-3"
                data-accordion-target="#accordion-collapse-body-1"
                aria-expanded={isOpen}
                aria-controls="accordion-collapse-body-1"
                onClick={toggleAccordion}
              >
                <span>Ratings</span>
                <svg
                  data-accordion-icon
                  className={`w-3 h-3 shrink-0 ${isOpen ? "rotate-180" : ""}`}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5 5 1 1 5"
                  />
                </svg>
              </button>
            </h2>
            <div
              id="accordion-collapse-body-1"
              className={`${isOpen ? "" : "hidden"}`}
              aria-labelledby="accordion-collapse-heading-1"
            >
              <div className="w-full">
                <ul className="space-y-2">
                  <li>
                    <input
                      type="checkbox"
                      className="mr-2 border-gray-300 rounded-md"
                    />
                    <label className="text-gray-800 text-orange-500">★★★★★</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      className="mr-2 border-gray-300 rounded-md"
                    />
                    <label className="text-gray-800 text-orange-500">★★★★</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      className="mr-2 border-gray-300 rounded-md"
                    />
                    <label className="text-gray-800 text-orange-500">★★★</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      className="mr-2 border-gray-300 rounded-md"
                    />
                    <label className="text-gray-800 text-orange-500">★★</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      className="mr-2 border-gray-300 rounded-md"
                    />
                    <label className="text-gray-800 text-orange-500">★</label>
                  </li>
                </ul>
              </div>
            </div>
          </div>
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
