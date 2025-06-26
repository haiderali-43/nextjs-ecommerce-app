
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import React from 'react'

import { IoPencil } from 'react-icons/io5'
import { MdDelete } from 'react-icons/md'
import TableForAll from "@/components/TableForAll"

const Page = () => {
  
  return (
    <div className='p-4'>
      <h2 className='text-lg font-semibold'>Customers</h2>
      <div className='flex flex-col md:flex-row justify-between mt-3 space-y-4 md:space-y-0'>
        <input type='text' placeholder='Search Customers' className='border border-gray-500 rounded-md p-2 focus:outline-none w-full md:w-[25rem]' />
        
      </div>
      <div className='mt-10'>
      <TableForAll HeadOne={"Name"} HeadTwo={"Phone"} HeadThree={"Email"} HeadFour={"Wallet Balance"} HeadFive={"No oF Orders"} HeadSix={"Action"} BodyOne={"Dominic Moss"} BodyTwo={"+12345678910"} BodyThree={"dominic@gmail.com"} BodyFour={"$11,345.25"} BodyFive={"3"} BodySix={<div className="flex space-x-2 text-1xl">
          <IoPencil/>
          <MdDelete/>
        </div>} />
      </div>
    </div>
  )
}

export default Page

