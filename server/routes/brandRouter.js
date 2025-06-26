import express from "express";
import {
  createBrand,
  deleteBrand,
 
  getBrands,
  updateBrand,
} from "../controllers/brandController.js";
import imageUpload from "../utils/imageUpload.js";

const brandRouter = express.Router();

//create a new brand
brandRouter.post("/createbrand", imageUpload.single('brandLogo'), createBrand);

// get brand
brandRouter.get("/getbrands", getBrands);

//update brand
brandRouter.put("/updatebrand/:id", imageUpload.single('brandLogo'), updateBrand);

//delete brand

brandRouter.delete("/deletebrand/:id", deleteBrand);

export default brandRouter;
