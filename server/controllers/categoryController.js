import Category from "../models/categoryModel.js";

export const createCategory = async (req, res) => {
  try {
    const { name} = req.body;

    // Check if the image was uploaded
    if (!req.file) {
      return res.status(400).json({ message: "Image upload is required." });
    }

    

    // Image URL is already saved in req.file.path by multer
    const imageUrl = req.file.path;

    // Create a new category with the uploaded image URL
    const category = new Category({
      name,
      categoryImage: imageUrl, // Assuming the uploaded image URL is stored here
    });

    await category.save();

    // Respond with the created category
    res
      .status(201)
      .json({ message: "Category created successfully", category });
  } catch (error) {
    console.error(error); // Log the error for debugging
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

export const getCatgories = async (req, res) => {
  try {
    // Fetch all categories from the database
    const categories = await Category.find();

    // Respond with the fetched categories
    res.status(200).json({ categories });
  } catch (error) {
    console.error(error); // Log the error for debugging
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

export const updateCategory = async (req, res) => {
  try {
    // Get the category ID from the URL parameter
    const { id } = req.params;

    // Find the category by ID
    const category = await Category.findById(id);

    // Check if the category exists
    if (!category) {
      return res.status(404).json({ message: "Category not found" });
    }

    // Update the category with the new data

    // Check if the image was uploaded
    if (req.file) {
      // Image URL is already saved in req.file.path by multer
      category.image = req.file.path;
    }

    // Update the category name

    const { name } = req.body;
    category.name = name;

    await category.save();

    // Respond with the updated category

    res
      .status(200)
      .json({ message: "Category updated successfully", category });
  } catch (error) {
    console.error(error); // Log the error for debugging
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

export const deleteCategory = async (req, res) => {
  try {
    const { id } = req.params;

    const category = await Category.findById(id);

    if (!category) {
      return res.status(404).json({ message: "Category not found" });
    }

    if (category.image) {
      // Delete the image from Cloudinary
      cloudinary.uploader.destroy(category.image);
    }

    await category.remove();

    res.status(200).json({ message: "Category deleted successfully" });
  } catch (error) {
    console.error(error); // Log the error for debugging
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
