"use client"
import React from 'react';
import Sidebar from './Sidebar';

const FilterSidebar = () => {
  const filterData = [
    {
      name: "Category",
      options: [
        { label: "Mobile accessory", value: "mobile-accessory" },
        { label: "Electronics", value: "electronics" },
        { label: "Smartphones", value: "smartphones" },
        { label: "Modern tech", value: "modern-tech" }
      ]
    },
    {
      name: "Brands",
      options: [
        { label: "Samsung", value: "samsung" },
        { label: "Apple", value: "apple" },
        { label: "Huawei", value: "huawei" },
        { label: "Poco", value: "poco" },
        { label: "Lenovo", value: "lenovo" }
      ]
    }
  ];

  const handleFilterChange = (selectedFilters: string[]) => {
    // console.log('Selected filters:', selectedFilters);
    // Implement your filtering logic here based on the selected filters
  };

  return (
    <div>
      <Sidebar data={filterData} onFilterChange={handleFilterChange} />
    </div>
  );
};

export default FilterSidebar;