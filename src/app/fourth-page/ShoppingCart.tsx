"use client"
import Image from 'next/image';
import { useState } from 'react';
import { FaApplePay, FaArrowLeft } from 'react-icons/fa';

interface CartItem {
    id: number;
    name: string;
    price: number;
    quantity: number;
    image: string;
    size: string;
    color: string;
    material: string;
    seller: string;
}

const ShoppingCart = () => {
    // Static data for now
    const [cartItems, setCartItems] = useState<CartItem[]>([
        {
            id: 1,
            name: 'T-shirts with multiple colors',
            price: 78.99,
            quantity: 9,
            image: '/images/T-Shirt.png', // Placeholder image path
            size: 'medium',
            color: 'blue',
            material: 'Plastic',
            seller: 'Artel Market',
        },
        {
            id: 2,
            name: 'T-shirts with multiple colors',
            price: 39.0,
            quantity: 3,
            image: '/images/SchoolBag.png', // Placeholder image path
            size: 'medium',
            color: 'blue',
            material: 'Plastic',
            seller: 'Best factory LLC',
        },
        {
            id: 3,
            name: 'Lamp with modern design',
            price: 170.5,
            quantity: 1,
            image: '/images/Lamp.png', // Placeholder image path
            size: 'medium',
            color: 'blue',
            material: 'Plastic',
            seller: 'Artel Market',
        },
    ]);

    const discount = 60.0; // Static discount
    const tax = 14.0; // Static tax

    // Calculate subtotal
    const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const total = subtotal - discount + tax;

    return (
        <div className="container mx-auto mt-10">
            {/* Cart Items */}
            <div className="flex flex-col lg:flex-row">
                <div className="w-full bg-white border-none md:border-2 p-4 rounded-lg shadow-none md:shadow-md">
                    <h2 className="hidden md:block text-2xl font-semibold mb-4">My cart ({cartItems.length})</h2>
                    {cartItems.map((item) => (
                        <div key={item.id} className="flex flex-col md:flex-row items-start md:items-center border-b py-4">
                            {/* Mobile Layout Changes Start Here */}
                            <div className="flex w-full">
                                <Image
                                    src={item.image}
                                    alt={item.name}
                                    className="h-20 w-20 md:w-24 md:h-24 border p-2 bg-gray-200 object-cover rounded-md mr-4"
                                    width={1000}
                                    height={1000}
                                />
                                <div className="flex-grow">
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <h3 className="font-medium">{item.name}</h3>
                                            <p className="text-gray-400 text-sm md:text-md md:text-gray-500">
                                                Size: {item.size}, Color: {item.color}, Material: {item.material}
                                            </p>
                                            <p className="text-sm md:text-md md:text-gray-500 text-gray-400">Seller: {item.seller}</p>
                                        </div>
                                        {/* Three Dots Icon For Mobile Screen */}
                                        <div className="block md:hidden">
                                            <svg className="cursor-pointer" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <rect width="40" height="40" rx="6" fill="white"/>
                                                <path d="M20 16C21.1 16 22 15.1 22 14C22 12.9 21.1 12 20 12C18.9 12 18 12.9 18 14C18 15.1 18.9 16 20 16ZM20 18C18.9 18 18 18.9 18 20C18 21.1 18.9 22 20 22C21.1 22 22 21.1 22 20C22 18.9 21.1 18 20 18ZM20 24C18.9 24 18 24.9 18 26C18 27.1 18.9 28 20 28C21.1 28 22 27.1 22 26C22 24.9 21.1 24 20 24Z" fill="#8B96A5"/>
                                            </svg>
                                        </div>
                                    </div>

                                    {/* Quantity and Price Section for Mobile Screen */}
                                    <div className="mt-4 flex justify-between items-center md:hidden">
                                        {/* Quantity Section */}
                                        <div className="flex w-32 h-10 border border-gray-200 rounded-md">
                                            {/* Minus Icon */}
                                            <div className="rotate-90 flex-1 flex items-center justify-center text-lg font-semibold cursor-pointer text-gray-400 border-t border-gray-200">
                                                |
                                            </div>
                                            <div className="flex-1 flex items-center justify-center text-gray-500 font-medium">
                                                {item.quantity}
                                            </div>
                                            {/* Plus Icon */}
                                            <div className="flex-1 -mt-1 flex items-center justify-center text-2xl cursor-pointer text-gray-400 font-semibold border-l border-gray-200">
                                                +
                                            </div>
                                        </div>
                                        <p className="font-bold">${item.price.toFixed(2)}</p>
                                    </div>

      
                                </div>
                            </div>

                            {/* Desktop Quantity and Price Section */}
                            <div className="hidden md:flex md:flex-col items-center space-y-2">
                                <p className="font-semibold">${item.price.toFixed(2)}</p>
                                <div className="flex items-center space-x-2">
                                    <label htmlFor={`quantity-${item.id}`} className="text-sm">Qty:</label>
                                    <select
                                        id={`quantity-${item.id}`}
                                        className="border rounded-md p-1"
                                        value={item.quantity}
                                        onChange={(e) => {
                                            const newQuantity = parseInt(e.target.value);
                                            setCartItems((prev) =>
                                                prev.map((cartItem) =>
                                                    cartItem.id === item.id
                                                        ? { ...cartItem, quantity: newQuantity }
                                                        : cartItem
                                                )
                                            );
                                        }}
                                    >
                                        {[...Array(20)].map((_, i) => (
                                            <option key={i} value={i + 1}>
                                                {i + 1}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                        </div>
                    ))}
                    <div className='hidden md:flex justify-between'>
                        <button className="mt-4 flex items-center font-medium gap-2 bg-[#127FFF] text-white px-4 py-2 rounded-md">
                            <FaArrowLeft /> Back to shop
                        </button>
                        <button className="mt-4 ml-4 border-2 font-medium rounded-lg py-1 px-2 text-[#0D6EFD]">Remove all</button>
                    </div>
                </div>

                {/* Summary Section Remains Unchanged */}
                <div className="w-full lg:w-1/3 bg-white p-4 border-none md:border-2 rounded-lg shadow-md mt-4 lg:mt-0 lg:ml-4">
                    <div className="mb-4">
                        <label htmlFor="coupon" className="text-gray-600 font-medium">
                            Have a coupon?
                        </label>
                        <div className="flex items-center space-x-2 mt-2">
                            <input
                                type="text"
                                id="coupon"
                                placeholder="Add coupon"
                                className="border rounded-md p-2 w-full"
                            />
                            <button className="text-[#0D6EFD] font-medium border-2 bg-white px-4 py-1 rounded-md">Apply</button>
                        </div>
                    </div>
                    <div className="flex justify-between py-2 border-b">
                        <span className="font-medium text-gray-400 md:text-gray-600">Subtotal:</span>
                        <span className="font-medium">${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b">
                        <span className='font-medium text-gray-400 md:text-gray-600'>Discount:</span>
                        <span className="text-[#FA3434] font-medium">-${discount.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b">
                        <span className='font-medium text-gray-400 md:text-gray-600'>Tax:</span>
                        <span className="text-[#00B517] font-medium">+${tax.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between py-4 font-bold text-lg">
                        <span>Total:</span>
                        <span>${total.toFixed(2)}</span>
                    </div>
                    <button className="bg-[#00B517] text-white w-full py-2 md:py-5 text-[18px] font-medium rounded-md">Checkout</button>
                    <div className="flex items-center justify-center gap-4 mt-4">
                        <Image src="/images/AmericanExpress.jpg" alt='American Express' width={34} height={22}></Image>
                        <Image src="/images/Mastercard.jpg" alt='Mastercard' width={34} height={22}></Image>
                        <Image src="/images/Paypal.jpg" alt='Paypal' width={34} height={22}></Image>
                        <Image src="/images/Visa.jpg" alt='Visa' width={34} height={22}></Image>
                        <FaApplePay className='text-3xl' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShoppingCart;

// "use client"
// import Image from 'next/image';
// import { useState } from 'react';
// import { FaApplePay, FaArrowLeft } from 'react-icons/fa';

// interface CartItem {
//     id: number;
//     name: string;
//     price: number;
//     quantity: number;
//     image: string;
//     size: string;
//     color: string;
//     material: string;
//     seller: string;
// }

// const ShoppingCart = () => {
//     // Static data for now
//     const [cartItems, setCartItems] = useState<CartItem[]>([
//         {
//             id: 1,
//             name: 'T-shirts with multiple colors',
//             price: 78.99,
//             quantity: 9,
//             image: '/images/T-Shirt.png', // Placeholder image path
//             size: 'medium',
//             color: 'blue',
//             material: 'Plastic',
//             seller: 'Artel Market',
//         },
//         {
//             id: 2,
//             name: 'T-shirts with multiple colors',
//             price: 39.0,
//             quantity: 3,
//             image: '/images/SchoolBag.png', // Placeholder image path
//             size: 'medium',
//             color: 'blue',
//             material: 'Plastic',
//             seller: 'Best factory LLC',
//         },
//         {
//             id: 3,
//             name: 'Lamp with modern design',
//             price: 170.5,
//             quantity: 1,
//             image: '/images/Lamp.png', // Placeholder image path
//             size: 'medium',
//             color: 'blue',
//             material: 'Plastic',
//             seller: 'Artel Market',
//         },
//     ]);

//     const discount = 60.0; // Static discount
//     const tax = 14.0; // Static tax

//     // Calculate subtotal
//     const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
//     const total = subtotal - discount + tax;

//     return (
//         <div className="container mx-auto mt-10">
//             {/* Cart Items */}
//             <div className="flex flex-col lg:flex-row">
//                 <div className="w-full bg-white border-none md:border-2 p-4 rounded-lg shadow-md">
//                     <h2 className="hidden md:block text-2xl font-semibold mb-4">My cart ({cartItems.length})</h2>
//                     {cartItems.map((item) => (
//                         <div key={item.id} className="flex items-start md:items-center border-b py-4">
//                             <Image
//                                 src={item.image}
//                                 alt={item.name}
//                                 className="h-20 w-20 md:w-24 md:h-24 border p-2 bg-gray-200 object-cover rounded-md mr-4"
//                                 width={1000}
//                                 height={1000}
//                             />
//                             <div className="flex-grow">
//                                 <h3 className="font-medium">{item.name}</h3>
//                                 <p className="text-gray-400 text-sm md:text-md md:text-gray-500">
//                                     Size: {item.size}, Color: {item.color}, Material: {item.material}
//                                 </p>
//                                 <p className=" text-sm md:text-md md:text-gray-500 text-gray-400">Seller: {item.seller}</p>
//                                 <div className="hidden md:flex mt-2 space-x-2">
//                                     <button className="text-red-500 border-2 text-[13px] font-medium rounded-lg p-1">Remove</button>
//                                     <button className="text-blue-500 border-2 text-[13px] font-medium rounded-lg p-1 w-max">Save for later</button>
//                                 </div>
//                             </div>
//                             {/* Three Dots Icon For Mobile Screen*/}
//                             <div className="block md:hidden">

//                             <svg  className="cursor-pointer" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
// <rect width="40" height="40" rx="6" fill="white"/>
// <path d="M20 16C21.1 16 22 15.1 22 14C22 12.9 21.1 12 20 12C18.9 12 18 12.9 18 14C18 15.1 18.9 16 20 16ZM20 18C18.9 18 18 18.9 18 20C18 21.1 18.9 22 20 22C21.1 22 22 21.1 22 20C22 18.9 21.1 18 20 18ZM20 24C18.9 24 18 24.9 18 26C18 27.1 18.9 28 20 28C21.1 28 22 27.1 22 26C22 24.9 21.1 24 20 24Z" fill="#8B96A5"/>
// </svg>
//                             </div>

//                             <div className="hidden md:flex md:flex-col items-center space-y-2">
//                                 <p className="font-semibold">${item.price.toFixed(2)}</p>
//                                 <div className="flex items-center space-x-2">
//                                     <label htmlFor={`quantity-${item.id}`} className="text-sm">Qty:</label>
//                                     <select
//                                         id={`quantity-${item.id}`}
//                                         className="border rounded-md p-1"
//                                         value={item.quantity}
//                                         onChange={(e) => {
//                                             const newQuantity = parseInt(e.target.value);
//                                             setCartItems((prev) =>
//                                                 prev.map((cartItem) =>
//                                                     cartItem.id === item.id
//                                                         ? { ...cartItem, quantity: newQuantity }
//                                                         : cartItem
//                                                 )
//                                             );
//                                         }}
//                                     >
//                                         {[...Array(20)].map((_, i) => (
//                                             <option key={i} value={i + 1}>
//                                                 {i + 1}
//                                             </option>
//                                         ))}
//                                     </select>
//                                 </div>
//                             </div>

//                             {/*Quantity and Price Section for Mobile Screen*/}
//                             <div className="mt-2 flex justify-between md:hidden">
//  {/* Quantity Section*/}
//        <div className="flex container w-32 h-10 border border-gray-200 rounded-md">
//         {/* Minus Icon*/}
//         <div className="rotate-90 flex cursor-pointer items-center justify-center text-gray-400 font-medium text-md border-r border-gray-200">|</div>
//         <div className="w-12 items-center justify-center text-gray-500 font-medium">2</div>
//           {/* Plus Icon*/}
//         <div className="flex items-center cursor-pointer justify-center text-gray-400 font-medium text-md border-r border-gray-200">+</div>
//        </div>
//        <p className="font-semibold">${item.price.toFixed(2)}</p>
//                             </div>
//                         </div>
                        
//                     ))}
//                     <div className='flex justify-between'>
//                         <button className="mt-4 flex items-center font-medium gap-2 bg-[#127FFF] text-white px-4 py-2 rounded-md">
//                             <FaArrowLeft /> Back to shop
//                         </button>
//                         <button className="mt-4 ml-4 border-2 font-medium rounded-lg py-1 px-2 text-[#0D6EFD]">Remove all</button>
//                     </div>
//                 </div>

//                 {/* Summary Section */}
//                 <div className="w-full lg:w-1/3 bg-white p-4 border-2 rounded-lg shadow-md mt-4 lg:mt-0 lg:ml-4">
//                     <div className="mb-4">
//                         <label htmlFor="coupon" className="text-gray-600">
//                             Have a coupon?
//                         </label>
//                         <div className="flex items-center space-x-2 mt-2">
//                             <input
//                                 type="text"
//                                 id="coupon"
//                                 placeholder="Add coupon"
//                                 className="border rounded-md p-2 w-full"
//                             />
//                             <button className="text-[#0D6EFD] font-medium border-2 bg-white px-4 py-1 rounded-md">Apply</button>
//                         </div>
//                     </div>
//                     <div className="flex justify-between text-gray-600 py-2 border-b">
//                         <span>Subtotal:</span>
//                         <span>${subtotal.toFixed(2)}</span>
//                     </div>
//                     <div className="flex justify-between py-2 border-b">
//                         <span className='text-gray-600'>Discount:</span>
//                         <span className="text-[#FA3434]">-${discount.toFixed(2)}</span>
//                     </div>
//                     <div className="flex justify-between py-2 border-b">
//                         <span className='text-gray-600'>Tax:</span>
//                         <span className="text-[#00B517]">+${tax.toFixed(2)}</span>
//                     </div>
//                     <div className="flex justify-between py-4 font-semibold text-lg">
//                         <span>Total:</span>
//                         <span>${total.toFixed(2)}</span>
//                     </div>
//                     <button className="bg-[#00B517] text-white w-full py-5 text-[18px] font-medium rounded-md">Checkout</button>
//                     <div className="flex items-center justify-center gap-4 mt-4">
//                         <Image src="/images/AmericanExpress.jpg" alt='American Express' width={34} height={22}></Image>
//                         <Image src="/images/Mastercard.jpg" alt='American Express' width={34} height={22}></Image>
//                         <Image src="/images/Paypal.jpg" alt='American Express' width={34} height={22}></Image>
//                         <Image src="/images/Visa.jpg" alt='American Express' width={34} height={22}></Image>
//                         <FaApplePay className='text-3xl' />
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default ShoppingCart;