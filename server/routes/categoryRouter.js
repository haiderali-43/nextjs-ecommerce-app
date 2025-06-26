import express from "express";
import {
  createCategory,
  deleteCategory,
  getCatgories,
  updateCategory,
} from "../controllers/categoryController.js";
import imageUpload from "../utils/imageUpload.js";

const categoryRouter = express.Router();

// Create a new category
categoryRouter.post(
  "/createCategory",
  imageUpload.single("categoryImage"),
  createCategory
);

// Get all categories
categoryRouter.get("/getCategories", getCatgories);

// Update a category
categoryRouter.put("/updateCategory/:id",imageUpload.single('categoryImage'), updateCategory);

// Delete a category
categoryRouter.delete("/deleteCategory/:id", deleteCategory);

export default categoryRouter;
