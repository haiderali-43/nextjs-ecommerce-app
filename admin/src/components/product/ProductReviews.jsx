import React from 'react'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Switch } from '../ui/switch'
import { MdDelete } from 'react-icons/md'

const ProductReviews = () => {
    return (
        <div className="shadow-lg bg-white border border-gray-400 rounded-md p-6 overflow-x-auto">
            <Table className="min-w-full divide-y divide-gray-200">
                <TableHeader>
                    <TableRow>
                        <TableHead className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product</TableHead>
                        <TableHead className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer</TableHead>
                        <TableHead className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Comment</TableHead>
                        <TableHead className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Published</TableHead>
                        <TableHead className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody className="bg-white divide-y divide-gray-200">
                    <TableRow>
                        <TableCell className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">ASUS ROG Strix G15</TableCell>
                        <TableCell className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Bruce Runolfsson</TableCell>
                        <TableCell className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">But I must explain to you how all this of denouncing pleasure</TableCell>

                        <TableCell className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            <Switch />
                        </TableCell>
                        <TableCell className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                            <div className="flex items-center space-x-2 text-xl">

                                <MdDelete className="text-gray-500 hover:text-blue-400 cursor-pointer" />
                            </div>
                        </TableCell>
                    </TableRow>
                    {/* Add more rows as needed */}
                </TableBody>
            </Table>
        </div>
    )
}

export default ProductReviews
