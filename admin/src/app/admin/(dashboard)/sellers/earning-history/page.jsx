import React from 'react';




import { MdDelete } from 'react-icons/md'
import TableForAll from '@/components/TableForAll';


const page = () => {
  return (
    <div className='p-4'>
      <h2 className='text-lg font-semibold'>Earning History</h2>
      <div className=' mt-[2rem]'>
        <TableForAll HeadOne={"No"} HeadTwo={"Order No"} HeadThree={"Shop Name"} HeadFour={"Admin Commission"} HeadFive={"Seller Earning"} HeadSix={"Date"} HeadSeven={"Action"} BodyOne={1} BodyTwo={"	5256SD6465D32"} BodyThree={"The Beauty Shop"} BodyFour={"$5.15"} BodyFive={"$200.00"} BodySix={"	20-04-2022"} BodySeven={<MdDelete/>}  />

      </div>

    </div >
  )
}

export default page

