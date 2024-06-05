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
        <div className="shadow-lg bg-white border border-gray-500 rounded-md p-4">
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead >Name</TableHead>
                        <TableHead>Category</TableHead>
                        <TableHead>Brand</TableHead>
                        <TableHead >Price</TableHead>
                        <TableHead >Published</TableHead>
                        <TableHead >Action</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow>
                        <TableCell className="font-medium">INV001</TableCell>
                        <TableCell>Paid</TableCell>
                        <TableCell>Credit Card</TableCell>
                        <TableCell >$250.00</TableCell>
                        <TableCell>
                            <Switch />
                        </TableCell>
                        <TableCell>
                            <div className="flex text-xl font-bold">
                                <IoPencil className="text-blue-500 mr-2 cursor-pointer" />
                                <MdDelete className="text-red-500 cursor-pointer" />
                            </div>
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>

        </div>
    )
}

export default ProductList