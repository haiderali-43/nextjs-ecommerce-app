import TableForAll from '@/components/TableForAll'
import React from 'react'
import { MdDelete } from 'react-icons/md'

const page = () => {
  return (
    <div className='p-4'>
      <h2>Refund Requests</h2>
      <div className='mt-10'>
        <TableForAll HeadOne={"Order No"} HeadTwo={"Shop Name"} HeadThree={"Product Details"} HeadFour={"Amount"} HeadFive={"Status"} HeadSix={"Action"} BodyOne={"#6ed34Edf65d"} BodyTwo={"The Shopify Store"} BodyThree={"Boston Round Cream Pack"} BodyFour={"$24.00"} BodyFive={"Pending"} BodySix={<MdDelete />} />
      </div>

    </div>
  )
}

export default page
