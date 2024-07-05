"use client"
import { Button } from '@/components/ui/button'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
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
      <h2 className='text-lg font-semibold'>Products Categories</h2>
      <div className='flex flex-col md:flex-row justify-between mt-3 space-y-4 md:space-y-0'>
        <input type='text' placeholder='Search Category' className='border border-gray-500 rounded-md p-2 focus:outline-none w-full md:w-[25rem]' />
        <Button className='text-white px-4 py-3 rounded-md w-full md:w-auto' onClick={() => router.push('/admin/categories/create-category')}>
          Add Category
        </Button>
      </div>
      <div className='mt-10'>
      <TableForAll HeadOne={"ID"} HeadTwo={"Name"} HeadThree={"Image"} HeadFour={"Level"} HeadFive={"Featured"} HeadSix={"Action"} BodyOne={"#ce8d812a"} BodyTwo={"Baby Doll"} BodyThree={"Baby"} BodyFour={1} BodyFive={<Switch/>} BodySix={
        <div className="flex space-x-2">
          <IoPencil/>
          <MdDelete/>
          </div>
      } />
      </div>
    </div>
  )
}

export default Page
