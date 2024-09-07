import ProductCard from "./ProductCard";

const products = [
    {
        name: 'Canon Cmera EOS 2000, Black 10x zoom',
        image: 'https://picsum.photos/300/300',
        price: 998,
        rating: 7.5,
        orders: 154,
        description: 'Lorem ipsum dolor sit amet...',
    },
    {
        name: 'Canon Cmera EOS 2000, Black 10x zoom',
        image: 'https://picsum.photos/300/300',
        price: 998,
        rating: 7.5,
        orders: 154,
        description: 'Lorem ipsum dolor sit amet...',
    },
    {
        name: 'Canon Cmera EOS 2000, Black 10x zoom',
        image: 'https://picsum.photos/300/300',
        price: 998,
        rating: 7.5,
        orders: 154,
        description: 'Lorem ipsum dolor sit amet...',
    },
    // ... more products
];

function Products() {
    return (
        <div className="container mx-auto mt-10">
            <div className="grid gap-8 grid-cols-1">
                {products.map((product) => (
                    <ProductCard key={product.name} {...product} />
                ))}
            </div>
        </div>
    )
}

export default Products;