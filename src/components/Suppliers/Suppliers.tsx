import Image from 'next/image';
import React from 'react';

type Supplier = {
  id: number;
  country: string;
  site: string;
  flag: string;
};

const suppliers: Supplier[] = [
  { id: 1, country: 'Arabic Emirates', site: 'shopname.ae', flag: '/images/UAE.jpg' },
  { id: 2, country: 'Australia', site: 'shopname.au', flag: '/images/Australia.png' },
  { id: 3, country: 'United States', site: 'shopname.us', flag: '/images/USA.png' },
  { id: 4, country: 'Russia', site: 'shopname.ru', flag: '/images/Russia.png' },
  { id: 5, country: 'Italy', site: 'shopname.it', flag: '/images/Italy.png' },
  { id: 6, country: 'Denmark', site: 'denmark.com.dk', flag: '/images/Denmark.png' },
  { id: 7, country: 'France', site: 'shopname.fr', flag: '/images/France.png' },
  { id: 8, country: 'China', site: 'shopname.cn', flag: '/images/China.png' },
  { id: 9, country: 'Great Britain', site: 'shopname.co.uk', flag: '/images/GB.png' },
];

const SuppliersByRegion: React.FC = () => {
  return (
    <section className="container mx-auto p-4">
      <h2 className="text-2xl py-2 font-semibold mb-4">Suppliers by region</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {suppliers.map((supplier) => (
          <div key={supplier.id} className="flex items-center space-x-4">
            <Image src={supplier.flag} width={28} height={20} alt='Flag'></Image>
            <div>
              <p className="font-medium">{supplier.country}</p>
              <span className="text-sm text-gray-600">{supplier.site}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SuppliersByRegion;
