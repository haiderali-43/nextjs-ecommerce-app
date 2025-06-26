import React from 'react'

import { Switch } from '../ui/switch'
import { MdDelete } from 'react-icons/md'
import TableForAll from '../TableForAll'

const ProductReviews = () => {
    return (
        <div>
            <TableForAll HeadOne={"Product"} HeadTwo={
                "Customer"
            } HeadThree={"Comment"} HeadFour={"Published"} HeadFive={"Action"} BodyOne={"ASUS ROG Strix G15"} BodyTwo={"Bruce Runolfsson"} BodyThree={"“But I must explain to you how all this of denouncing pleasure.”"} BodyFour={<Switch />} BodyFive={<MdDelete className='text-xl' />} />
            <TableForAll HeadOne={"Product"} HeadTwo={
                "Customer"
            } HeadThree={"Comment"} HeadFour={"Published"} HeadFive={"Action"} BodyOne={"ASUS ROG Strix G15"} BodyTwo={"Bruce Runolfsson"} BodyThree={"“But I must explain to you how all this of denouncing pleasure.”"} BodyFour={<Switch />} BodyFive={<MdDelete className='text-xl' />} />
        </div>
    )
}

export default ProductReviews
