import React from 'react';

type Supplier = {
  id: number;
  country: string;
  site: string;
  flag: string;
};

const suppliers: Supplier[] = [
  { id: 1, country: 'Arabic Emirates', site: 'shopname.ae', flag: '🇦🇪' },
  { id: 2, country: 'Australia', site: 'shopname.au', flag: '🇦🇺' },
  { id: 3, country: 'United States', site: 'shopname.us', flag: '🇺🇸' },
  { id: 4, country: 'Russia', site: 'shopname.ru', flag: '🇷🇺' },
  { id: 5, country: 'Italy', site: 'shopname.it', flag: '🇮🇹' },
  { id: 6, country: 'Denmark', site: 'denmark.com.dk', flag: '🇩🇰' },
  { id: 7, country: 'France', site: 'shopname.fr', flag: '🇫🇷' },
  { id: 8, country: 'China', site: 'shopname.cn', flag: '🇨🇳' },
  { id: 9, country: 'Great Britain', site: 'shopname.co.uk', flag: '🇬🇧' },
];

const SuppliersByRegion: React.FC = () => {
  return (
    <section className="container mx-auto p-4">
      <h2 className="text-2xl py-2 font-semibold mb-4">Suppliers by region</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {suppliers.map((supplier) => (
          <div key={supplier.id} className="flex items-center space-x-4">
            <span className="text-2xl">{supplier.flag}</span>
            <div>
              <p className="font-medium">{supplier.country}</p>
              <a href={`https://${supplier.site}`} className="text-sm text-gray-600">{supplier.site}</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SuppliersByRegion;
