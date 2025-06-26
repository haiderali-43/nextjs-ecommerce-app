import express from 'express';
import { createVendor, deleteVendor, getVendorbyid, getVendors, updateVendor } from '../controllers/vendorController.js';
import imageUpload from '../utils/imageUpload.js';



const vendorRouter = express.Router();

vendorRouter.post('/createvendor', imageUpload.single('profileImage'), createVendor)
vendorRouter.get('/getvendors', getVendors)
vendorRouter.get('/getvendorbyid/:id', getVendorbyid)
vendorRouter.put('/updatevendor/:id', imageUpload.single('profileImage'), updateVendor)
vendorRouter.delete('/deletevendor/:id', deleteVendor)



export default vendorRouter;