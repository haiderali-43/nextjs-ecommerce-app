import ProductReviews from '@/components/product/ProductReviews'
import React from 'react'

const page = () => {
  return (
    <div className='p-4'>
      <h2 className='text-lg font-semibold'>Products Reviews</h2>
      <div className='mt-4'>
        <ProductReviews />
      </div>
    </div>
  )
}

export default page
