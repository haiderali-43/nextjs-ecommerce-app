import React from 'react';
import { Table, TableBody, TableCell, TableRow, TableHeader, TableHead } from '@/components/ui/table';
import { Switch } from '@/components/ui/switch';

import { IoPencil } from 'react-icons/io5'
import { MdDelete } from 'react-icons/md'


const page = () => {
  return (
    <div className='p-4'>
      <h2 className='text-lg font-semibold'>Earning History</h2>
      <div className=' mt-[2rem] shadow-lg bg-white border border-gray-400 rounded p-6 overflow-x-auto'>
        <Table className="min-w-full divide-y divide-gray-200">
          <TableHeader>
            <TableRow>
              <TableHead className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">No</TableHead>
              <TableHead className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Order No</TableHead>
              <TableHead className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Shop Name</TableHead>
              <TableHead className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Admission Commission</TableHead>
              <TableHead className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Seller Earning</TableHead>
              <TableHead className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</TableHead>

              <TableHead className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="bg-white divide-y divide-gray-200">
            <TableRow>
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">1</TableCell>
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">5256SD6465D32 </TableCell>
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Ali shop</TableCell>
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">5.15</TableCell>
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                200
              </TableCell>
              <TableCell>
                10-10-2024
              </TableCell>
              <TableCell>
                <MdDelete className="text-red-500 cursor-pointer" />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

    </div >
  )
}

export default page

