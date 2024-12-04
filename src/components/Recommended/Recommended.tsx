import React from 'react';

type Item = {
  id: number;
  name: string;
  price: string;
  image: string;
  description: string;
};

const recommendedItems: Item[] = [
  { id: 1, name: 'T-shirts', price: '$10.30', image: '/images/T-Shirt.png', description: 'T-shirts with multiple colors, for men' },
  { id: 2, name: 'Jeans shorts', price: '$10.30', image: '/images/WoodJacket.jpeg', description: 'Jeans shorts for men, blue color' },
  { id: 3, name: 'Winter coat', price: '$12.50', image: '/images/Suit.png', description: 'Brown winter coat, medium size' },
  { id: 4, name: 'Jeans bag', price: '$34.00', image: '/images/BlueBag.png', description: 'Jeans bag for travel, for men' },
  { id: 5, name: 'Leather wallet', price: '$99.00', image: '/images/SchoolBag.png', description: 'Leather wallet' },
  { id: 6, name: 'Camera black', price: '$9.99', image: '/images/Short.png', description: 'Canon camera black, 100x zoom' },
  { id: 7, name: 'Headset', price: '$8.99', image: '/images/WhiteHeadphone.png', description: 'Headset for gaming with mic' },
  { id: 8, name: 'Smartwatch', price: '$10.30', image: '/images/SchoolBag.png', description: 'Smartwatch silver color, modern' },
  { id: 9, name: 'Blue Wallet', price: '$10.30', image: '/images/Plate.png', description: 'Blue wallet for men, leather material' },
  { id: 10, name: 'Travel Bag', price: '$80.95', image: '/images/Kettle.png', description: 'Jeans bag for travel, for men' },
];

const RecommendedItems: React.FC = () => {
  return (
    <section className="container mt-4 ml-2 bg-gray-100/30 mx-auto md:p-6 p-2 overflow-x-hidden">
      <h2 className="text-md  lg:text-2xl font-semibold mb-4">Recommended items</h2>
      <div className="hidden sm:grid  sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 lg:gap-4 overflow-x-hidden">
        {recommendedItems.map((item) => (
          <div key={item.id} className="border rounded-lg md:p-4 p-2 bg-white hover:shadow-lg">
            <img src={item.image} alt={item.name} className="m-2 w-[80%] lg:w-full h-32 lg:h-52 object-cover mb-2" />
            <h3 className="text-lg text-center font-medium">{item.price}</h3>
            <p className="text-sm text-center text-[#8B96A5]">{item.description}</p>
          </div>
        ))}
      </div>

     {/* Mobile Screen Portion */}
     <div className="overflow-x-hidden scrollbar-hidden">
       <div className="grid grid-cols-2 sm:hidden gap-2">
         {recommendedItems.slice(0, 4).map((item) => (
           <div key={item.id} className="border rounded-lg p-2 bg-white hover:shadow-lg">
             {/* Make sure image doesn't overflow */}
             <img
               src={item.image}
               alt={item.name}
               className="m-2 w-full max-w-full h-32 object-cover mb-2"
             />
             <h3 className="text-lg font-medium">{item.price}</h3>
             <p className="text-sm text-[#8B96A5]">{item.description}</p>
           </div>
         ))}
       </div>
     </div>
     
    </section>
  );
};

export default RecommendedItems;
