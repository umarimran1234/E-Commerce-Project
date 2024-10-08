import React from 'react';
import CountdownTimer from './CountDown';

const deals = [
  { name: 'Smart watches', discount: '25%', imgSrc: '/images/Watch.png' },
  { name: 'Laptops', discount: '15%', imgSrc: '/images/Laptop.png' },
  { name: 'GoPro cameras', discount: '40%', imgSrc: '/images/Canon.png' },
  { name: 'Headphones', discount: '25%', imgSrc: '/images/Headphone.png' },
  { name: 'Canon cameras', discount: '25%', imgSrc: '/images/Smartphone.png' },
];

const DealsSection: React.FC = () => {
  return (
    <section className="container mx-auto mt-10">
      <div className="bg-white flex md:flex-row flex-col gap-10 shadow-md rounded-lg border-2 border-gray-300">
        {/* Responsive Layout for Timer and Header */}
        <div className="flex flex-col md:items-start items-center gap-4 pl-2 pt-2 items-start lg:items-center">
          <div className="mb-4 lg:mb-0">
            <h2 className="text-xl font-bold">Deals and offers</h2>
            <p className="text-gray-500">Hygiene equipments</p>
          </div>
          <CountdownTimer targetDate="2024-12-31T23:59:59" />
        </div>

        {/* Responsive Grid for Products */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {deals.map((deal, index) => (
            <a href="/" key={index} className="group p-4 border-l border-gray-300 block text-center">
              <div className="relative">
                <img
                  src={deal.imgSrc}
                  alt={deal.name}
                  className="w-full h-40 object-cover rounded-md group-hover:opacity-75 transition-opacity"
                />
                <span className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded text-sm group-hover:bg-red-600 transition-colors">
                  {deal.discount}
                </span>
              </div>
              <h3 className="mt-4 font-medium">{deal.name}</h3>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DealsSection;
