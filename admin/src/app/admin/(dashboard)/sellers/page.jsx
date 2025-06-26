import React from 'react';

import { Switch } from '@/components/ui/switch';


import { MdDelete } from 'react-icons/md'
import TableForAll from '@/components/TableForAll';


const page = () => {
  return (
    <div className='p-4'>
      <h2 className='text-lg font-semibold'>Sellers</h2>
      <div className=' mt-[2rem]  rounded p-6 overflow-x-auto'>
        <TableForAll HeadOne={"Seller Name"} HeadTwo={"Shop Name"} HeadThree={"Current Package"} HeadFour={"Current Blance"} HeadFive={"Published"} HeadSix={"Action"} BodyOne={"Dominic Moss"} BodyTwo={"Tech Tube"}  BodyThree={"Premium"} BodyFour={"$11,345.25"} BodyFive={<Switch/>} BodySix={<MdDelete/>}/>
      </div>

    </div >
  )
}

export default page
