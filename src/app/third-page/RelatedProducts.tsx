import React from 'react';

type Product = {
    id: number;
    name: string;
    priceRange: string;
    imageUrl: string;
};

const relatedProducts: Product[] = [
    { id: 1, name: 'Xiaomi Redmi 8 Original', priceRange: '$32.00–$40.00', imageUrl: 'https://picsum.photos/128' },
    { id: 2, name: 'Xiaomi Redmi 8 Original', priceRange: '$32.00–$40.00', imageUrl: 'https://picsum.photos/128' },
    { id: 3, name: 'Xiaomi Redmi 8 Original', priceRange: '$32.00–$40.00', imageUrl: 'https://picsum.photos/128' },
    { id: 4, name: 'Xiaomi Redmi 8 Original', priceRange: '$32.00–$40.00', imageUrl: 'https://picsum.photos/128' },
    { id: 5, name: 'Xiaomi Redmi 8 Original', priceRange: '$32.00–$40.00', imageUrl: 'https://picsum.photos/128' },
];

const RelatedProducts: React.FC = () => {
    return (
        <div className='container mt-5 mx-auto'>
            <div className="p-4 border-2 rounded-lg">
                <h2 className="text-lg font-semibold mb-4">Related products</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
                    {relatedProducts.map((product) => (
                        <div
                            key={product.id}
                            className="p-2 rounded-lg hover:shadow-lg transition-shadow duration-300"
                        >
                            <img
                                src={product.imageUrl}
                                alt={product.name}
                                className="w-full p-2 h-32 bg-gray-100 mx-auto rounded-lg object-contain mb-2"
                            />
                            <h3 className="text-sm font-medium">{product.name}</h3>
                            <p className="text-gray-500 text-sm">{product.priceRange}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default RelatedProducts;