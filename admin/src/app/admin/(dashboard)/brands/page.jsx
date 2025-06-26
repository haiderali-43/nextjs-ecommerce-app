"use client"
import { Button } from '@/components/ui/button'

import { useRouter } from 'next/navigation'
import React from 'react'
import { Switch } from '@/components/ui/switch'
import { IoPencil } from 'react-icons/io5'
import { MdDelete } from 'react-icons/md'
import TableForAll from '@/components/TableForAll'

const Page = () => {
  const router = useRouter()
  return (
    <div className='p-4'>
      <h2 className='text-lg font-semibold'>Products Brands</h2>
      <div className='flex flex-col md:flex-row justify-between mt-3 space-y-4 md:space-y-0'>
        <input type='text' placeholder='Search Category' className='border border-gray-500 rounded-md p-2 focus:outline-none w-full md:w-[25rem]' />
        <Button className='text-white px-4 py-3 rounded-md w-full md:w-auto' onClick={() => router.push('/categories/create-category')}>
          Add Brand
        </Button>
      </div>
      <div className='mt-10'>
        <TableForAll HeadOne={"ID"} HeadTwo={"Name"} HeadThree={"Logo"} HeadFour={"Featured"} HeadFive={"Action"} BodyOne={"#46fd2b1b"} BodyTwo={"Alibaba"} BodyThree={"Alibaba"} BodyFour={<Switch />} BodyFive={<div className="flex space-x-2 text-1xl">
          <IoPencil/>
          <MdDelete/>
        </div>} />
      </div>
    </div>
  )
}

export default Page

