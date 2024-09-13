import React from 'react';
import ProductCard from './ProductCard';

const products = [
  {
    image: 'https://cdn.pixabay.com/photo/2024/04/29/04/21/tshirt-8726721_640.jpg',
    title: 'Nautica Demo Product 1',
    price: 599,
    oldPrice: 999,
    discount: '-40%',
  },
  {
    image: 'https://cdn.pixabay.com/photo/2024/05/09/13/35/ai-generated-8751040_1280.png',
    title: 'HRX by Hrithik Roshan Demo Product 10',
    price: 599,
    oldPrice: 999,
    discount: '-40%',
  },
  {
    image: 'https://media.istockphoto.com/id/482279497/vector/male-t-shirt-with-lion-print.jpg?s=612x612&w=0&k=20&c=7gQqxGfoR5Q4mIT59xuIOwn6AsMwHE-1WG6UDJ2ho9E=',
    title: 'Zola Demo Product 11',
    price: 599,
    oldPrice: 999,
    discount: '-40%',
  },
  {
    image: 'https://media.istockphoto.com/id/459062069/vector/male-t-shirt-with-print.jpg?s=612x612&w=0&k=20&c=WOvi2kKKlJMNRallDdwPhJi-i0m_bgIe3D91ocO-5AE=',
    title: 'Levis Demo Product 12',
    price: 599,
    oldPrice: 999,
    discount: '-40%',
  },
  {
    image: 'https://cdn.pixabay.com/photo/2024/04/17/18/40/ai-generated-8702729_640.jpg',
    title: 'Zola Demo Product 2',
    price: 599,
    oldPrice: 999,
    discount: '-40%',
  },
  {
    image: 'https://cdn.pixabay.com/photo/2024/04/17/18/40/ai-generated-8702726_640.jpg',
    title: 'Roadster Demo Product 3',
    price: 599,
    oldPrice: 999,
    discount: '-40%',
  },
];

const ProductList = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-6 gap-6 p-6">
      {products.map((product, index) => (
        <ProductCard
          key={index}
          image={product.image}
          title={product.title}
          price={product.price}
          oldPrice={product.oldPrice}
          discount={product.discount}
        />
      ))}
    </div>
  );
};

export default ProductList;
