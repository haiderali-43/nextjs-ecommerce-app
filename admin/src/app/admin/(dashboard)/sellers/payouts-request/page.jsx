import React from 'react';


import { MdDelete } from 'react-icons/md'
import TableForAll from '@/components/TableForAll';


const page = () => {
  return (
    <div className='p-4'>
      <h2 className='text-lg font-semibold'>Payouts Request</h2>
      <div className=' mt-[2rem] '>
        <TableForAll HeadOne={"No"} HeadTwo={"Seller Info"} HeadThree={"Shop Name"} HeadFour={"Total Amount"} HeadFive={"Req Amount"} HeadSix={"Date"} HeadSeven={"Status"} HeadEight={"Action"} BodyOne={1} BodyTwo={"Ethan Booth"} BodyThree={"	The Beauty Shop"} BodyFour={"$1,200.00"} BodyFive={"$200.00"} BodySix={"	20-04-2022"} BodySeven={"Pending"} BodyEight={<MdDelete/>} />
      </div>

    </div >
  )
}

export default page

