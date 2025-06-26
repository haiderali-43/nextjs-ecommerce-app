import Product from "../models/productModel.js";

export const createProduct = async (req, res) => {
  try {
    const {
      productName,
      productDescription,
      productRegularPrice,
      productSalePrice,
      productCategory,
      productBrand,
      productVendor,
      productStock,
      productTags,
      isFeatured,
    } = req.body;

    if (
      !productName ||
      !productDescription ||
      !productRegularPrice ||
      !productCategory ||
      !productVendor ||
      !productStock ||
      !productTags
    ) {
      return res.status(400).json({ message: "All fields are required." });
    }

    const product = new Product({
      productName,
      productDescription,
      productRegularPrice,
      productSalePrice,
      productCategory,
      productBrand,
      productVendor,
      productStock,
      productImages,
      productTags,
      isFeatured,
    });



    await product.save();
    return res.status(201).json({ message: "Product created successfully." });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getProducts = async (req, res) => { }
export const getProductById = async (req, res) => { }
export const updateProduct = async (req, res) => { }
export const deleteProduct = async (req, res) => { }