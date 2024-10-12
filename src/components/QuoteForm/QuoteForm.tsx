"use client"
import Image from 'next/image';
import React, { useState } from 'react';

interface QuoteFormData {
    item: string;
    details: string;
    quantity: number;
    unit: string;
}

const QuoteForm: React.FC = () => {
    const [formData, setFormData] = useState<QuoteFormData>({
        item: '',
        details: '',
        quantity: 0,
        unit: 'pcs',
    });

    const handleTextareaChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]:
                value,
        });
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,

        });
    };

    const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // Handle form submission here (e.g., send data to server)
        console.log(formData);
    };

    return (
        <div className="container mx-auto mt-[2rem]">
            <Image src="/images/Stock.png" alt='Stock Image' className='relative' height={600} width={600}></Image>
            <div className="bg-gradient-to-r absolute bottom-0 from-[#2C7CF1] to-[#00D1FF80] flex md:flex-row flex-col justify-center lg:gap-0 gap-8 md:gap-4 text-white rounded-lg py-8 px-8">
                <div>
                    <h1 className="text-3xl lg:w-1/2 font-semibold">An easy way to send requests to all suppliers</h1>
                    <p className="mt-4 lg:w-1/2">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
                </div>
                <form onSubmit={handleSubmit} className="w-full lg:w-1/3 p-4 bg-white rounded-lg">
                    <div className="flex flex-col gap-4">
                        <div>
                            <h3 className='text-black font-semibold text-xl mb-4'>Send quote to suppliers</h3>
                            <input type="text" id="item" name="item" value={formData.item} onChange={handleInputChange} className="w-full placeholder-black text-black border border-gray-300 rounded px-4 py-1" placeholder='What item you need?' required />
                        </div>
                        <div className="flex-1">
                            <label htmlFor="details" className="block text-gray-700"></label>
                            <textarea id="details" name="details" value={formData.details} placeholder='Type more details' onChange={handleTextareaChange} className="w-full border border-gray-300  rounded px-4 py-2 h-24" required />
                        </div>
                    </div>
                    <div className="flex gap-2 md:flex-row flex-col items-center mt-4">
                        <input type="text" id="quantity" placeholder='Quantity' name="quantity" className="border placeholder-black text-black border-gray-300 rounded px-4 py-2" disabled />
                        <select id="unit" name="unit" value={formData.unit} onChange={handleSelectChange} className="border text-black border-gray-300 rounded px-4 py-2">
                            <option value="pcs">Pcs</option>
                            {/* Add more options if needed */}
                        </select>
                    </div>
                    <button type="submit" className="text-white bg-blue-500 py-2 px-4 rounded mt-4">Send Inquiry</button>
                </form>
            </div>
        </div>
    );
};

export default QuoteForm;