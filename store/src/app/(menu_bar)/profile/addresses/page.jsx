import { Table, TableBody, TableRow, TableCell, TableHeader } from '@/components/ui/table';
import React from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { IoPencil } from "react-icons/io5";

const page = () => {
  return (
    <div className='w-[65rem]'>
      <div className='flex space-x-2 '>
        <FaLocationDot className='text-xl text-red-500 mt-2' />
        <h1 className='text-xl mt-1 font-bold'>My Addresses</h1>
      </div>
      <div className='mt-4 overflow-x-hidden'>
        <Table>
          <TableHeader className="bg-blue-600 rounded-[30px] min-w-full">
            <TableRow>
              <TableCell>Address Type</TableCell>
              <TableCell>Address</TableCell>
              <TableCell>Phone Number</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHeader>
          <TableBody className="">
            <TableRow>
              <TableCell>office</TableCell>
              <TableCell>497 Erdman Passage</TableCell>
              <TableCell>123456789</TableCell>
              <TableCell className="flex space-x-2">
                <div className=''>
                  <IoPencil className='text-xl text-blue-500' />
                </div>
                <div>
                  <button className='text-red-500'>Delete</button>
                </div>
              </TableCell>

            </TableRow>
          </TableBody>
        </Table>
      </div>

    </div>

  )
}

export default page
