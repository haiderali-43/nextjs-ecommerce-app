import React from 'react'
import { Card, CardHeader,  CardTitle, CardContent, CardDescription } from '@/components/ui/card'
import Image from 'next/image'

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import Link from 'next/link'

const page = () => {
  return (
    <div>
      This is the dashboard page
    </div>
    // <div className='p-4'>
    //   <div>
    //     <div className='flex justify-evenly  '>
    //       {/* first two cards of dashboard */}
    //       <div className='mt-4'>
    //         <Card className="px-10 py-9 text-left">
    //           <CardHeader>
    //             <p className='text-blue-500'>Good Morining User name</p>
    //             <p className='text-gray-500'>Here what is happening with your store today!</p>
    //           </CardHeader>
    //           <CardContent>
    //             <div className='flex justify-between'>
    //               <div className='flex flex-col'>
    //                 <div className='leading-7'>
    //                   <p className='font-bold font-sans'>$1000</p>
    //                   <p className='text-gray-500'>Today's Revenue</p>
    //                 </div>
    //                 <div className='mt-4 leading-7'>


    //                   <p className='font-bold font-sans'>1000</p>
    //                   <p className='text-gray-500'>Today's Orders</p>
    //                 </div>
    //               </div>
    //               <div>
    //                 <Image src={'/welcome.svg'} alt='Sales' width={150} height={150} />
    //               </div>
    //             </div>
    //           </CardContent>

    //         </Card>
    //       </div>
    //       {/* orders tab */}
    //       <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[6rem] gap-y-4 p-4">
    //         <Card className="shadow-lg rounded-lg overflow-hidden w-[20rem]">
    //           <CardHeader className="px-4 py-2">
    //             <CardTitle className="text-xl font-semibold mt-3">Orders</CardTitle>
    //           </CardHeader>
    //           <CardContent className="p-6">
    //             <div className="flex justify-between items-center">
    //               <div>
    //                 <CardDescription className="text-2xl font-bold">32,350</CardDescription>
    //                 <CardDescription className="text-gray-500">9,350</CardDescription>
    //               </div>
    //               <div className="text-right mt-8 ml-2">
    //                 <CardDescription className="text-blue-600 text-sm font-semibold">25.50%</CardDescription>
    //               </div>
    //             </div>
    //           </CardContent>
    //         </Card>

    //         <Card className="shadow-lg rounded-lg overflow-hidden w-[20rem]">
    //           <CardHeader className="px-4 py-2">
    //             <CardTitle className="text-xl font-semibold mt-3">Sold Items</CardTitle>
    //           </CardHeader>
    //           <CardContent className="p-6">
    //             <div className="flex justify-between items-center">
    //               <div>
    //                 <CardDescription className="text-2xl font-bold">2360</CardDescription>
    //                 <CardDescription className="text-gray-500">1350</CardDescription>
    //               </div>
    //               <div className="text-right mt-8 ml-2">
    //                 <CardDescription className="text-red-600 text-sm font-semibold">2.65%</CardDescription>
    //               </div>
    //             </div>
    //           </CardContent>
    //         </Card>

    //         <Card className="shadow-lg rounded-lg overflow-hidden w-[20rem]">
    //           <CardHeader className="px-4 py-2">
    //             <CardTitle className="text-xl font-semibold mt-3">Gross Sales</CardTitle>
    //           </CardHeader>
    //           <CardContent className="p-6">
    //             <div className="flex justify-between items-center">
    //               <div>
    //                 <CardDescription className="text-2xl font-bold">$ 12,460.25</CardDescription>
    //                 <CardDescription className="text-gray-500">9,11350</CardDescription>
    //               </div>
    //               <div className="text-right mt-8 ml-2">
    //                 <CardDescription className="text-green-600 text-sm font-semibold">10.25%</CardDescription>
    //               </div>
    //             </div>
    //           </CardContent>
    //         </Card>

    //         <Card className="shadow-lg rounded-lg overflow-hidden w-[20rem]">
    //           <CardHeader className="px-4 py-2">
    //             <CardTitle className="text-xl font-semibold mt-3">Total Shipping Cost</CardTitle>
    //           </CardHeader>
    //           <CardContent className="p-6">
    //             <div className="flex justify-between items-center">
    //               <div>
    //                 <CardDescription className="text-2xl font-bold">$6240</CardDescription>
    //                 <CardDescription className="text-gray-500">4350</CardDescription>
    //               </div>
    //               <div className="text-right mt-8 ml-2">
    //                 <CardDescription className="text-red-600 text-sm font-semibold">13.15%</CardDescription>
    //               </div>
    //             </div>
    //           </CardContent>
    //         </Card>
    //       </div>
    //     </div>


    //     {/* small cards */}
    //     <div className='flex space-x-8 px-7'>
    //       <div>
    //         <Card className="shadow-lg rounded-lg overflow-hidden w-[18rem]">
    //           <CardHeader className="px-4 py-2">
    //             <CardTitle className="text-xl font-semibold mt-3">Weekly Sales</CardTitle>
    //           </CardHeader>
    //           <CardContent className="p-6">
    //             <div className="flex justify-between items-center">
    //               <div>
    //                 <CardDescription className="text-2xl font-bold">$10240</CardDescription>
    //                 <CardDescription className="text-blue-500">25.50%</CardDescription>
    //               </div>
    //               <div className="text-right mt-8 ml-2">
    //                 <CardDescription className="text-blue-600 text-sm font-semibold">25.50%</CardDescription>
    //               </div>
    //             </div>
    //           </CardContent>
    //         </Card>

    //       </div>
    //       <div>
    //         <Card className="shadow-lg rounded-lg overflow-hidden w-[18rem]">
    //           <CardHeader className="px-4 py-2">
    //             <CardTitle className="text-xl font-semibold mt-3">Product share</CardTitle>
    //           </CardHeader>
    //           <CardContent className="p-6">
    //             <div className="flex justify-between items-center">
    //               <div>
    //                 <CardDescription className="text-2xl font-bold">39.50%</CardDescription>
    //                 <CardDescription className="text-blue-500">10.25%</CardDescription>
    //               </div>
    //               <div className="text-right mt-8 ml-2">
    //                 <CardDescription className="text-red-600 text-sm font-semibold">2.65%</CardDescription>
    //               </div>
    //             </div>
    //           </CardContent>
    //         </Card>
    //       </div>
    //       <div>
    //         <Card className="shadow-lg rounded-lg overflow-hidden w-[18rem]">
    //           <CardHeader className="px-4 py-2">
    //             <CardTitle className="text-xl font-semibold mt-3">Total Orders</CardTitle>
    //           </CardHeader>
    //           <CardContent className="p-6">
    //             <div className="flex justify-between items-center">
    //               <div>
    //                 <CardDescription className="text-2xl font-bold">$ 12,260</CardDescription>
    //                 <CardDescription className="text-blue-500">2.65</CardDescription>
    //               </div>
    //               <div className="text-right mt-8 ml-2">
    //                 <CardDescription className="text-green-600 text-sm font-semibold">10.25%</CardDescription>
    //               </div>
    //             </div>
    //           </CardContent>
    //         </Card>
    //       </div>
    //       <div>
    //         <Card className="shadow-lg rounded-lg overflow-hidden w-[18rem]">
    //           <CardHeader className="px-4 py-2">
    //             <CardTitle className="text-xl font-semibold mt-3">Market Share</CardTitle>
    //           </CardHeader>
    //           <CardContent className="p-6">
    //             <div className="flex justify-between items-center">
    //               <div>
    //                 <CardDescription className="text-2xl font-bold">$ 14,260</CardDescription>
    //                 <CardDescription className="text-blue-500">2.65%</CardDescription>
    //               </div>
    //               <div className="text-right mt-8 ml-2">
    //                 <CardDescription className="text-red-600 text-sm font-semibold">13.15%</CardDescription>
    //               </div>
    //             </div>
    //           </CardContent>
    //         </Card>
    //       </div>
    //     </div>
    //     {/* big chart */}
    //     <div className=''>
          
    //     </div>
    //     {/* two tables */}
    //     <div className='flex justify-between p-2 shadow-md ml-6 mt-4 bg-none'>
    //       <div className='p-4 w-[600px] border border-gray-400 rounded-md'>
    //         <div className='flex justify-between px-2'>
    //           <h1>Recent Orders</h1>
    //           <Link href='/admin/orders' className='bg-blue-500 rounded-md p-2 text-white mr-2'>All Orders</Link>
    //         </div>
    //         <Table className="mt-4">
    //           <TableHeader>
    //             <TableRow >
    //               <TableHead>Order Id</TableHead>
    //               <TableHead>Product</TableHead>
    //               <TableHead>Payment</TableHead>
    //               <TableHead>Amount</TableHead>
    //             </TableRow>
    //           </TableHeader>
    //           <TableBody>
    //             <TableRow>
    //               <TableCell>INV001</TableCell>
    //               <TableCell>Aavic Headphone</TableCell>
    //               <TableCell>Success</TableCell>
    //               <TableCell>$125.25</TableCell>
    //             </TableRow>
    //           </TableBody>
    //         </Table>
    //       </div>
    //       <div className='border border-gray-500 w-[600px] p-4 rounded-md mr-7'>
    //         <div className='flex justify-between px-5'>
    //           <h1>Stock of Out Products</h1>
    //           <Link href='/admin/products' className='bg-blue-500 rounded-md p-2 text-white'>All Prodcuts</Link>
    //         </div>
    //         <Table className="mt-4">
    //           <TableHeader>
    //             <TableRow>

    //               <TableHead>Product</TableHead>
    //               <TableHead>Stock</TableHead>
    //               <TableHead>Amount</TableHead>
    //             </TableRow>
    //           </TableHeader>
    //           <TableBody>
    //             <TableRow>

    //               <TableCell>Aavic Headphone</TableCell>
    //               <TableCell>00</TableCell>
    //               <TableCell>$125.25</TableCell>
    //             </TableRow>
    //           </TableBody>
    //         </Table>
    //       </div>
    //     </div>

    //   </div>

    // </div>
  )
}

export default page

