
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
      <h2 className='text-lg font-semibold'>Orders</h2>
      <div className='flex flex-col md:flex-row justify-between mt-3 space-y-4 md:space-y-0'>
        <input type='text' placeholder='Search Order' className='border border-gray-500 rounded-md p-2 focus:outline-none w-full md:w-[25rem]' />
      </div>
      <div className='mt-10'>
        <TableForAll HeadOne={"Order id"} HeadTwo={"QTY"} HeadThree={"Purchase Date"} HeadFour={"Billing Address"} HeadFive={"Amount"} HeadSix={"Status"} HeadSeven={"Action"} BodyOne={"#46fd2b1b"} BodyTwo={"3"} BodyThree={"10 Nov 2022"} BodyFour={"Kelly Williams 777 Brockton Avenue, Abington MA 2351"} BodyFive={"$350"} BodySix={"Pending"} BodySeven={<div className="flex space-x-2 text-xl">
          <IoPencil/>
          <MdDelete/>
        </div>} />

      </div>
    </div>
  )
}

export default Page

