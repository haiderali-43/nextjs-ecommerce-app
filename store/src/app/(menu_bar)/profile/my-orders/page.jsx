import { Table, TableBody, TableRow, TableCell, TableHeader } from '@/components/ui/table'
import React from 'react'
import { FaShoppingBag } from 'react-icons/fa'

const page = () => {
  return (
    <div className='w-[65rem]'>
      <div className='flex space-x-4'>
        <FaShoppingBag size={25} color='red' />
        <h1 className='text-xl'>My Orders</h1>
      </div>

      <div>
        <Table className="w-[55rem] border border-gray-300 bg-white rounded-2xl shadow-md mt-4 overflow-x-hidden">
          <TableHeader className="bg-gray-100">
            <TableRow>
              <TableCell className="px-4 py-3 text-gray-700 font-semibold text-left border-b">Order ID</TableCell>
              <TableCell className="px-6 py-3 text-gray-700 font-semibold text-left border-b">Order Date</TableCell>
              <TableCell className="px-6 py-3 text-gray-700 font-semibold text-left border-b">Order Status</TableCell>
              <TableCell className="px-6 py-3 text-gray-700 font-semibold text-left border-b">Order Total</TableCell>
              <TableCell className="px-6 py-3 text-gray-700 font-semibold text-left border-b">Actions</TableCell>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 text-gray-900 border-b">1</TableCell>
              <TableCell className="px-6 py-4 text-gray-900 border-b">12/12/2021</TableCell>
              <TableCell className="px-6 py-4 text-gray-900 border-b">Delivered</TableCell>
              <TableCell className="px-6 py-4 text-gray-900 border-b">₹ 5000</TableCell>
              <TableCell className="px-6 py-4 text-blue-500 border-b">
                <button className="text-blue-500 hover:underline">View</button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>

      </div>


    </div>
  )
}

export default page
