
import React from 'react';
import TableForAll from '@/components/TableForAll';



import { MdDelete } from 'react-icons/md'


const page = () => {
  return (
    <div className='p-6'>
      <h2 className='text-lg font-semibold'>New Sellers Package Payments</h2>
      <div className=' mt-[2rem] '>
        <TableForAll HeadOne={"No"} HeadTwo={"Seller "} HeadThree={"Package"} HeadFour={"Amount"} HeadFive={"Payment Method"} HeadSix={"Date"} HeadSeven={"Action"} BodyOne={1} BodyTwo={"Ethan Booth"} BodyThree={"	Premium"} BodyFour={"200.00"} BodyFive={"Stripe"} BodySix={"	20-04-2022"} BodySeven={<MdDelete/>} />
      </div>

    </div >
  )
}

export default page
