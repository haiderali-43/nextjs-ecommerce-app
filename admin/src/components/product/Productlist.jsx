import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Switch } from "../ui/switch"
import { IoPencil } from 'react-icons/io5'
import { MdDelete } from 'react-icons/md'

const ProductList = () => {
    return (
        <div className="shadow-lg bg-white border border-gray-400 rounded-md p-6 overflow-x-auto">
            <Table className="min-w-full divide-y divide-gray-200">
                <TableHeader>
                    <TableRow>
                        <TableHead className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</TableHead>
                        <TableHead className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</TableHead>
                        <TableHead className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Brand</TableHead>
                        <TableHead className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</TableHead>
                        <TableHead className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Published</TableHead>
                        <TableHead className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody className="bg-white divide-y divide-gray-200">
                    <TableRow>
                        <TableCell className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">INV001</TableCell>
                        <TableCell className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Paid</TableCell>
                        <TableCell className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Credit Card</TableCell>
                        <TableCell className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">$250.00</TableCell>
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
    )
}

export default ProductList
