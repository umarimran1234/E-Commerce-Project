import { FC } from 'react';

interface ProductProps {
    name: string;
    image: string;
    price: number;
    rating: number;
    orders: number;
    description: string;
}

const ProductCard: FC<ProductProps> = ({
    name,
    image,
    price,
    rating,
    orders,
    description,
}) => {
    return (
        <div className="bg-white border-2 border-gray-300 rounded-lg shadow-md overflow-hidden">
            <div className='flex md:flex-row flex-col'>
                <img src={image} alt={name} className="w-fit mx-auto md:mx-0 h-48 object-cover" />
                <div className="p-4">
                    <h2 className="text-lg font-bold">{name}</h2>
                    <div className="flex md:flex-row flex-col justify-between">
                        <div>
                            <p className="text-2xl mt-2 font-semibold text-blue-500">${price.toFixed(2)}</p>
                            <p className="text-gray-400">
                                <span className="text-yellow-500">★★★★★</span> {rating}
                            </p>
                        </div>
                        <div className='flex gap-2 pt-6'>
                            <p className="text-gray-400">Orders: {orders}</p>
                            <p className='text-[#00B517]'>Free Shipping</p>
                        </div>
                    </div>
                    <div className='mt-2'>
                        <p className="text-gray-500">{description}</p>
                        <button className="font-medium text-[#0D6EFD]">
                            View Details
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;