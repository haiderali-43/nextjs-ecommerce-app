
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

import React from 'react'


const TableForAll = ({ HeadOne, HeadTwo, HeadThree, HeadFour, HeadFive, HeadSix, HeadSeven, HeadEight, BodyOne, BodyTwo, BodyThree, BodyFour, BodyFive, BodySix, BodySeven, BodyEight }) => {

    return (

        <div className="shadow-lg bg-white border border-gray-400 rounded-md p-6 overflow-x-auto">
            <Table className="min-w-full divide-y divide-gray-200">
                <TableHeader>
                    <TableRow>
                        <TableHead className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">{HeadOne}</TableHead>
                        <TableHead className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">{HeadTwo}</TableHead>
                        <TableHead className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">{HeadThree}</TableHead>

                        <TableHead className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">{HeadFour}</TableHead>
                        <TableHead className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">{HeadFive}</TableHead>
                        <TableHead className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">{HeadSix}</TableHead>
                        <TableHead className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">{HeadSeven}</TableHead>
                        <TableHead className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">{HeadEight}</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody className="bg-white divide-y divide-gray-200">
                    <TableRow>
                        <TableCell className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{BodyOne}</TableCell>
                        <TableCell className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{BodyTwo}</TableCell>
                        <TableCell className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{BodyThree}</TableCell>

                        <TableCell className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {BodyFour}
                        </TableCell>
                        <TableCell className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                            {BodyFive}
                        </TableCell>
                        <TableCell className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                            {BodySix}
                        </TableCell>
                        <TableCell className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                            {BodySeven}
                        </TableCell>
                        <TableCell className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                            {BodyEight}
                        </TableCell>
                    </TableRow>
                    {/* Add more rows as needed */}
                </TableBody>
            </Table>
        </div>

    )
}

export default TableForAll

