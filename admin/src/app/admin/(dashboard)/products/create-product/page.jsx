import AddProductForm from '@/components/product/AddProductForm'
import React from 'react'

const page = () => {
  return (
    <div className='p-4'>
      <h1 className='text-2xl font-semibold'>Add New Product</h1>
      <div className='mt-4'>
        <AddProductForm />
      </div>

    </div>
  )
}

export default page
