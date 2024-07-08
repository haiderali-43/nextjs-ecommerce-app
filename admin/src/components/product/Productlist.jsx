
import { Switch } from "../ui/switch"
import { IoPencil } from 'react-icons/io5'
import { MdDelete } from 'react-icons/md'
import TableForAll from "../TableForAll"

const ProductList = () => {
    return (
        <div>
            <TableForAll HeadOne={"Name"} HeadTwo={"Category"} HeadThree={"Brand"} HeadFour={"Price"} HeadFive={"Published"} HeadSix={"Action"} BodyOne={"Blue Premium T-shirt"} BodyTwo={"Fashion"} BodyThree={"addidas"} BodyFour={"	$21.00"} BodyFive={<Switch/>} BodySix={<div className="flex space-x-2">
               <IoPencil/>
               <MdDelete/>
            </div>} />
           
        </div>
    )
}

export default ProductList
