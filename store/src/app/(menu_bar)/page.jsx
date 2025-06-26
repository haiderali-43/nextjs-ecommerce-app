'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const Page = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json()) // Parse the response
      .then(data => {
        setProducts(data) // Set products data to state
        console.log(data) // Log the fetched products
      })
      .catch(error => console.error('Error fetching products:', error)) // Error handling
  }, []) // Dependency array to run effect only once

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map(product => (
          <div key={product.id} className="bg-white shadow-md rounded-lg overflow-hidden border border-black">
            <div className="p-4">
              {/* Image */}
              <div className="h-48 w-full relative mb-4">
                <Image src={product.image} alt={product.title} width={150} height={150} objectFit="contain" />
              </div>
              {/* Product Title */}
              <h2 className="text-lg font-semibold mb-2">{product.title}</h2>
              {/* Product Price */}
              <p className="text-gray-700 font-bold mb-2">${product.price}</p>
              {/* Product Description */}
              <p className="text-sm text-gray-600 mb-4">{product.description.substring(0, 100)}...</p>
              {/* Button */}
              <Link className="w-full bg-blue-500 text-white py-3 px-2 rounded hover:bg-blue-600 transition duration-300" href={"/product/" + product.id}>
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Page


