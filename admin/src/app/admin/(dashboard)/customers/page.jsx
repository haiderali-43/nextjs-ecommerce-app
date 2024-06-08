
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

const Page = () => {
  
  return (
    <div className='p-4'>
      <h2 className='text-lg font-semibold'>Customers</h2>
      <div className='flex flex-col md:flex-row justify-between mt-3 space-y-4 md:space-y-0'>
        <input type='text' placeholder='Search Customers' className='border border-gray-500 rounded-md p-2 focus:outline-none w-full md:w-[25rem]' />
        
      </div>
      <div className='mt-10'>
        <div className="shadow-lg bg-white border border-gray-400 rounded-md p-6 overflow-x-auto">
          <Table className="min-w-full divide-y divide-gray-200">
            <TableHeader>
              <TableRow>
                <TableHead className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</TableHead>
                <TableHead className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Phone</TableHead>
                <TableHead className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</TableHead>

                <TableHead className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">No oF Orders</TableHead>
                <TableHead className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className="bg-white divide-y divide-gray-200">
              <TableRow>
                <TableCell className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Haider Ali</TableCell>
                <TableCell className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">123456778</TableCell>
                <TableCell className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">hafizhaiderali@gmail.com</TableCell>

                <TableCell className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  10
                </TableCell>
                <TableCell className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <div className="flex items-center space-x-2 text-xl">
                    <IoPencil className="text-blue-500 cursor-pointer" />
                    <MdDelete className="text-red-500 cursor-pointer" />
                  </div>
                </TableCell>
              </TableRow>
              {/* Add more rows as needed */}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  )
}

export default Page

