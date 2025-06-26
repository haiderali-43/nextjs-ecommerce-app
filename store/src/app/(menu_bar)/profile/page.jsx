
import Image from 'next/image'
import React from 'react'


const page = () => {
  return (
    <div>
      {/* my profile heading */}

      {/* content related to profile */}
      <div className=''>
        {/* profile first line */}
        <div className='w-[100%] p-5 bg-gray-300 rounded-lg shadow-md'>
          <div className='flex items-center space-x-6'>
            {/* User Info Section */}
            <div className='flex items-center space-x-4'>
              <Image src='/ralph.webp' width={60} height={60} className='rounded-full' />
              <div>
                <p className='font-semibold text-lg'>Nick DuBuque</p>
                <p className='text-sm -mt-1'>Balance: <span className='text-red-500'>$5000</span></p>
              </div>
            </div>

            {/* Status Section */}
            <div className='flex space-x-[4rem]'>
              <div className='text-center'>
                <p className='font-bold text-lg'>16</p>
                <span className='text-sm text-gray-600'>All Orders</span>
              </div>
              <div className='text-center'>
                <p className='font-bold text-lg'>02</p>
                <span className='text-sm text-gray-600'>Pending Payment</span>
              </div>
              <div className='text-center'>
                <p className='font-bold text-lg'>02</p>
                <span className='text-sm text-gray-600'>Awaiting Shipments</span>
              </div>
              <div className='text-center'>
                <p className='font-bold text-lg'>02</p>
                <span className='text-sm text-gray-600'>Awaiting Delivery</span>
              </div>
            </div>

            {/* User Tier */}
            <div>
              <p className='text-sm font-medium bg-gray-200 px-3 py-1 rounded-lg'>Silver User</p>
            </div>
          </div>
        </div>

      </div>
      <div className='flex items-center justify-between p-5 mt-5 bg-white rounded-lg shadow-md'>
        <div className='flex items-center space-x-[4rem]'>
          <div className=''>
            <p className='font-semibold'>First Name: <br /><span className='font-normal'>Nick</span></p>
          </div>
          <div>
            <p className='font-semibold'>Last Name: <br /><span className='font-normal'>DuBuque</span></p>
          </div>
          <div>
            <p className='font-semibold'>Email: <br /><span className='font-normal'>Jayden.Gislason78@gmail.com</span></p>
          </div>
          <div className=''>
            <p className='font-semibold'>Phone: <br /> <span className='font-normal'>(445) 366000 </span></p>
          </div>
          <div>
            <p className='font-semibold'>Birth Date: <br /> <span className='font-normal'>25 Apr, 1996</span></p>
          </div>
        </div>
      </div>


    </div>
  )
}

export default page
