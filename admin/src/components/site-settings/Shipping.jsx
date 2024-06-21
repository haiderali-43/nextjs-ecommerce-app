import React from 'react'
import { Button } from '../ui/button'

const Shipping = () => {
  return (
    <div>
      <h2>Shipping and Vat</h2>

      <div className='flex flex-col justify-between space-y-4  mt-4'>
        <div className='flex-1'>
          <input
            type="text"
            placeholder='Shipping'
            className='focus:outline-none px-4 py-2 rounded-md w-full border border-gray-500 transition-transform duration-150'
          />
        </div>
        <div className='flex-1'>
          <input
            type="text"
            placeholder='Vat'
            className='focus:outline-none px-4 py-2 rounded-md w-full border border-gray-500 transition-transform duration-150'
          />
        </div>
      </div>

      <Button className='mt-4 w-full md:w-auto'>Save Changes</Button>

    </div>
  )
}

export default Shipping
