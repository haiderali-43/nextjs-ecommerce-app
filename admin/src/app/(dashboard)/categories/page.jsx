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

const Page = () => {
  const router = useRouter()
  return (
    <div className='p-4'>
      <h2 className='text-lg font-semibold'>Products Categories</h2>
      <div className='flex flex-col md:flex-row justify-between mt-3 space-y-4 md:space-y-0'>
        <input type='text' placeholder='Search Category' className='border border-gray-500 rounded-md p-2 focus:outline-none w-full md:w-[25rem]' />
        <Button className='text-white px-4 py-3 rounded-md w-full md:w-auto' onClick={() => router.push('/categories/create-category')}>
          Add Category
        </Button>
      </div>
      <div className='mt-10'>
        <div className="shadow-lg bg-white border border-gray-400 rounded-md p-6 overflow-x-auto">
          <Table className="min-w-full divide-y divide-gray-200">
            <TableHeader>
              <TableRow>
                <TableHead className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</TableHead>
                <TableHead className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</TableHead>
                <TableHead className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Image</TableHead>
                <TableHead className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Level</TableHead>
                <TableHead className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Featured</TableHead>
                <TableHead className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className="bg-white divide-y divide-gray-200">
              <TableRow>
                <TableCell className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">#ce8d812a</TableCell>
                <TableCell className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Baby Doll</TableCell>
                <TableCell className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Credit Card</TableCell>
                <TableCell className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">1</TableCell>
                <TableCell className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <Switch />
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
