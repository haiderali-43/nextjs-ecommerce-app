import express from "express";
import {
  createProduct,
  deleteProduct,
  getProductById,
  getProducts,
  updateProduct,
} from "../controllers/productController.js";

const productRouter = express.Router();
// create product route
productRouter.post("/createProduct", createProduct);
// get all products route
productRouter.get("/getProducts", getProducts);
// get product by id route
productRouter.get("/getProductById/:id", getProductById);
// update product route
productRouter.put("/updateProduct/:id", updateProduct);
// delete product route
productRouter.delete("/deleteProduct/:id", deleteProduct);

export default productRouter;
