"use client"
import ProductList from '@/components/product/Productlist'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
import React from 'react'

const page = () => {
  const router = useRouter()
  return (
    <div className='p-4'>
      <h2 className='text-lg font-semibold'>Products List</h2>
      <div className='flex justify-between mt-3'>
        <input type='text' placeholder='Search Product' className='border border-gray-500 rounded-md p-2  focus:outline-none w-[18rem] md:w-[25rem]' />
        <Button className=' text-white px-4 py-3 rounded-md' onClick={()=>router.push('/products/create-product')}>
          
          Add Product</Button>
      </div>
      <div className='mt-10'><ProductList /></div>

    </div>
  )
}

export default page
