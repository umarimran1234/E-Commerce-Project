import Image from 'next/image';
import React from 'react';

type Product = {
    id: number;
    name: string;
    priceRange: string;
    imageUrl: string;
};


const relatedProducts: Product[] = [
    { id: 1, name: 'Xiaomi Redmi 8 Original', priceRange: '$32.00–$40.00', imageUrl: '/images/Short.png' },
    { id: 2, name: 'Xiaomi Redmi 8 Original', priceRange: '$32.00–$40.00', imageUrl: '/images/BlueBag.png' },
    { id: 3, name: 'Xiaomi Redmi 8 Original', priceRange: '$32.00–$40.00', imageUrl: '/images/Watch.png' },
    { id: 4, name: 'Xiaomi Redmi 8 Original', priceRange: '$32.00–$40.00', imageUrl: '/images/WhiteHeadphone.png' },
    { id: 5, name: 'Xiaomi Redmi 8 Original', priceRange: '$32.00–$40.00', imageUrl: '/images/Kettle.png' }
];

const RelatedProducts: React.FC = () => {
    return (
        <>
        <div className='hidden md:block container mt-5 mx-auto'>
            <div className="p-4 bg-white border-2 rounded-lg">
                <h2 className="text-lg font-semibold mb-4">Related products</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
                    {relatedProducts.map((product) => (
                        <div
                            key={product.id}
                            className="p-2 rounded-lg hover:shadow-lg transition-shadow duration-300"
                        >
                            <Image
                                width={1000}
                                height={1000}
                                src={product.imageUrl}
                                alt={product.name}
                                className="w-full p-2 h-32 bg-[#EEEEEE] border-gray-100 border mx-auto rounded-lg object-contain mb-2"
                            />
                            <h3 className="text-sm font-medium">{product.name}</h3>
                            <p className="text-gray-500 text-sm">{product.priceRange}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        {/* Similar for Mobile Screen only*/}
      <div className="flex flex-col md:hidden pt-12 pb-6 bg-gray-100">
      <p className=" font-bold text-xl max-w-2xl mx-auto mb-4 tracking-wider">Similar Products</p>
      <div className="w-full h-auto mt-2">
  {/* Scrollable container */}
  <div className="flex overflow-x-auto scroll-smooth scrollbar-hidden w-full px-4 snap-x snap-mandatory">
    {relatedProducts.map((item, index) => (
      <a
        href="/"
        key={index}
        className={`shrink-0 w-1/2 snap-center border border-gray-300 text-center bg-white rounded-md`}
      >
        <div className="relative h-36">
          <Image
            width={600}
            height={600}
            src={item.imageUrl}
            alt={item.name}
            className="w-[80%] h-32 ml-4 mt-2 object-contain rounded-md group-hover:opacity-75 transition-opacity"
          />
        </div>
        <span className="text-md font-semibold -mt-2">
          {item.priceRange}
        </span>
        <h3 className="mt-1 mb-2 text-gray-500 text-xs">{item.name}</h3>
      </a>
    ))}
  </div>
</div>
</div>
        </>
    );
};

export default RelatedProducts;