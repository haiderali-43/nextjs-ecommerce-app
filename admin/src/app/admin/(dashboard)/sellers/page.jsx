import React from 'react';
import { Table, TableBody, TableCell, TableRow, TableHeader, TableHead } from '@/components/ui/table';
import { Switch } from '@/components/ui/switch';

import { IoPencil } from 'react-icons/io5'
import { MdDelete } from 'react-icons/md'


const page = () => {
  return (
    <div className='p-4'>
      <h2 className='text-lg font-semibold'>Sellers</h2>
      <div className=' mt-[2rem] shadow-lg bg-white border border-gray-400 rounded p-6 overflow-x-auto'>
        <Table className="min-w-full divide-y divide-gray-200">
          <TableHeader>
            <TableRow>
              <TableHead className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Seller Name</TableHead>
              <TableHead className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Shop Name</TableHead>
              <TableHead className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Current Package</TableHead>
              <TableHead className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Current Balance</TableHead>
              <TableHead className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Shop Published</TableHead>
              <TableHead className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="bg-white divide-y divide-gray-200">
            <TableRow>
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Haider Ali</TableCell>
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Haider Shop</TableCell>
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Basic</TableCell>
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">5000</TableCell>
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                <Switch />
              </TableCell>
              <TableCell>
                <div className="flex items-center space-x-2 text-xl">
                  <IoPencil className="text-blue-500 cursor-pointer" />
                  <MdDelete className="text-red-500 cursor-pointer" />
                </div>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

    </div >
  )
}

export default page
