"use client"
import Image from 'next/image';
import { useState } from 'react';
import { FaRegHeart } from 'react-icons/fa';
import { MdOutlineMessage, MdOutlineVerifiedUser } from 'react-icons/md';
import { RiSailboatFill } from 'react-icons/ri';
import { TbWorld } from 'react-icons/tb';
import { TiTick } from 'react-icons/ti';

interface Product {
    name: string;
    stock: string;
    ratings: number;
    reviews: number;
    sold: number;
    priceTiers: { range: string; price: JSX.Element }[];
    type: string;
    material: string;
    design: string;
    customization: string;
    protection: string;
    warranty: string;
    supplier: { name: string; location: string };
    images: string[];
}

const ProductComponent: React.FC = () => {
    const [selectedImage, setSelectedImage] = useState(0);

    const product: Product = {
        name: 'Mens Long Sleeve T-shirt ',
        stock: "In Stock",
        ratings: 9.3,
        reviews: 32,
        sold: 154,
        priceTiers: [
            { range: '50-100 pcs', price: <p className='text-[#FA3434]'>$98.00</p> },
            { range: '100-700 pcs', price: <p>$90.00</p> },
            { range: '700+ pcs', price: <p>$78.00</p> },
        ],
        type: 'Classic shoes',
        material: 'Plastic material',
        design: 'Modern nice',
        customization: 'Customized logo design ',
        protection: 'Refund Policy',
        warranty: '2 years full warranty',
        supplier: { name: 'Guanjoi Trading LLC', location: 'Germany' },
        images: [
            '/images/WhiteShirt.jpeg',
            '/images/WhiteShirt.jpeg',
            '/images/WhiteShirt.jpeg',
            '/images/WhiteShirt.jpeg',
            '/images/WhiteShirt.jpeg',
            '/images/WhiteShirt.jpeg',
        ],
    };

    return (
        <div className="container mx-auto mt-5">
            <div className="grid bg-white border-none md:border-gray-200 p-4 md:border-2 rounded-lg grid-cols-1 md:grid-cols-2 gap-4">
                {/* Left section: Image */}
                <div className="space-y-4">
                    <Image width={380} height={380} src={product.images[selectedImage]} alt="Product" className="object-cover mx-auto border-2  border-gray-200 p-2 rounded-lg" />
                    <div className="grid grid-cols-6 gap-2">
                        {product.images.map((img, idx) => (
                            <Image
                                width={1000}
                                height={1000}
                                key={idx}
                                src={img}
                                alt={`Product thumbnail ${idx + 1}`}
                                className={`cursor-pointehttps://picsum.photos/380] hover:opacity-80 ${selectedImage === idx ? 'border-2 rounded-lg border-gray-600' : 'rounded-lg'}`}
                                onClick={() => setSelectedImage(idx)}
                            />
                        ))}
                    </div>
                </div>

                {/* Right section: Product Details */}
                <div className="space-y-4 flex lg:flex-row flex-col lg:gap-8">
                    <div>
                        <p className='hidden text-green-500 md:flex items-center'><TiTick />{product.stock}</p>
                        <h1 className="hidden md:block text-xl font-semibold">{product.name}</h1>
                        <div className="flex items-center space-x-5 md:space-x-2 mt-1">
                            <p className="text-md text-[#FF9017] flex items-center gap-x-1"><span className="text-xl">★★★★★ </span> {product.ratings}</p>
                            <span className="text-gray-400 md:text-gray-500 flex items-center gap-1 text-sm md:text-md"><MdOutlineMessage /> {product.reviews} reviews</span>
                            <span className="text-gray-400 md:text-gray-500 flex items-center text-sm md:text-md"><RiSailboatFill /> {product.sold} sold</span>
                        </div>
                        <div className="flex mt-2 ml-2">
                            <h2 className="block text-lg font-semibold md:hidden">{product.name}</h2>
                            </div>

                            {/*Product price for Mobile Screen */}
                        <div className="mt-1 ml-2 gap-x-4 flex items-center md:hidden">
                           <p className="text-[#FA3434] font-semibold text-lg">{product.priceTiers[0].price}</p>
                           <p className="text-gray-400/70 text-sm">({product.priceTiers[0].range})</p>
                           </div>

                           {/*Send Inquiry Button for Mobile Screen */}
                           <div className="flex gap-x-4 md:hidden mt-4">
                            <button className="px-20 py-2 text-white bg-blue-700 hover:bg-blue-600 transition-all duration-300 flex justify-center items-center rounded-md text-md font-medium">Send Inquiry</button>
                            <FaRegHeart
                      className="text-[#0D6EFD]  flex items-baseline cursor-pointer text-4xl border rounded-lg p-1 md:p-2"
                    />
                            </div>

                        <div className="hidden md:block space-y-2">
                            <div className='flex bg-[#FFF0DF] justify-between p-2 rounded'>
                                {product.priceTiers.map((tier, index) => (
                                    <div key={index} className="flex flex-col-reverse">
                                        <span>{tier.range}</span>
                                        <span className="font-semibold">{tier.price}</span>
                                    </div>
                                ))}
                            </div>
                            <div className='flex border-b-2 border-gray-200 pb-2 gap-20 items-center'><span className="text-gray-500">Price:</span> <span className="text-gray-600">Negotiable</span></div>
                        </div>

                        <div className="flex mt-6 gap-20 md:mt-2 items-center">
                            <div className="text-gray-400">Type:</div>
                            <span className="text-gray-700">{product.type}</span>
                        </div>

                        <div className="flex gap-14 mt-2 items-center">
                            <div className="text-gray-400">Material:</div>
                            <span className="text-gray-700">{product.material}</span>
                        </div>

                        <div className="flex pb-2 border-none md:border-b-2 border-gray-200 gap-16 mt-2 items-center">
                            <div className="text-gray-400">Design:</div>
                            <span className="text-gray-700">{product.design}</span>
                        </div>

                        <div className="flex gap-4 mt-2 items-center">
                            <div className="text-gray-400">Customization:</div>
                            <span className="text-gray-700">{product.customization}</span>
                        </div>

                        <div className="flex gap-10 mt-2 items-center">
                            <div className="text-gray-400">Protection:</div>
                            <span className="text-gray-700">{product.protection}</span>
                        </div>

                        <div className="flex pb-2 border-none md:border-b-2 border-gray-200 gap-12 mt-2 items-center">
                            <div className="text-gray-400">Warranty:</div>
                            <span className="text-gray-700">{product.warranty}</span>
                        </div>
                    </div>

                    <div className='w-full lg:w-1/2'>
                        <div className='boder-gray-200 border-2 h-fit p-2 rounded-lg'>
                            <div className="flex flex-col">
                                <div className='flex gap-2 boder-gray-200 border-b-2 pb-2'>
                                    <p className='h-12 w-12 flex items-center justify-center bg-[#C6F3F1] text-[28px] text-[#4CA7A799] rounded-lg font-medium'>R</p>
                                    <div className="ml-2 md:ml-0">
                                        <div className="text-gray-700">Supplier</div>
                                        <span className="text-gray-700">{product.supplier.name}</span>
                                    </div>
                                </div>
<div className="flex gap-x-2 md:flex-col">
                                <span className='mt-2 flex items-center gap-2 text-gray-500'> <Image
                                    src="/images/Flag.jpg"
                                    alt="Flag"
                                    className="h-[15px]"
                                    height={10}
                                    width={20}
                                ></Image>{product.supplier.location}</span>
                                <span className='mt-2 text-gray-500 flex items-center gap-1 md:gap-2'><MdOutlineVerifiedUser size={18}/> Verified</span>
                                <span className='mt-2 text-gray-500 flex items-center gap-1 md:gap-2'><TbWorld size={18} /> Worldwide</span>
                            </div></div>
                            <div className="hidden md:flex flex-col gap-2 mt-4">
                                <button className="bg-blue-500 text-white px-4 py-1 font-semibold rounded">Send inquiry</button>
                                <button className="border-2 border-gray-200 text-[#0D6EFD] font-medium px-4 py-1 rounded">{"Seller's profile"}</button>
                            </div>
                        </div>
                        <p className='hidden md:flex gap-2 justify-center mt-10 text-[#0D6EFD] items-center font-medium'><FaRegHeart />Save for later</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductComponent;
