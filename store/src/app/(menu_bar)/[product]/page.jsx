'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';

const ProductPage = ({ params }) => {
  const router = useRouter();
  const { id } = params;

  // Simulated product data for now (replace with API call)
  const product = {
    id,
    name: 'Sample Product',
    price: 99.99,
    image: '/sample-product.jpg', // Ensure this is a valid public path or remote image URL
    description: 'This is a sample product description.',
  };

  const addToCart = () => {
    // Implement your cart logic here
    console.log(`Added product ${product.name} to the cart.`);
    alert('Product added to cart!');
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">View Product</h1>
      <p className="text-gray-600">Product ID: {product.id}</p>
      <p className="text-lg">Name: {product.name}</p>
      <p className="text-lg">Price: ${product.price}</p>
      <Image
        src={product.image}
        alt={product.name}
        width={300}
        height={300}
        className="rounded-md"
      />
      <p className="mt-4">{product.description}</p>
      <button
        onClick={addToCart}
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductPage;
