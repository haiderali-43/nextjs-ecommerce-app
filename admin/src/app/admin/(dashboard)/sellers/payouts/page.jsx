import React from 'react';


import { MdDelete } from 'react-icons/md'
import TableForAll from '@/components/TableForAll';


const page = () => {
  return (
    <div className='p-4'>
      <h2 className='text-lg font-semibold'>Payouts</h2>
      <div className=' mt-[2rem] '>
       <TableForAll HeadOne={"No"} HeadTwo={"Seller Info"} HeadThree={"Amount"} HeadFour={"Date"} HeadFive={"Payment Method"} HeadSix={"Action"} BodyOne={1} BodyTwo={"The Beauty Shop"} BodyThree={"$1,200.00"} BodyFour={"20-04-2022"} BodyFive={"Cash"} BodySix={<MdDelete/>} />
      </div>

    </div >
  )
}

export default page
