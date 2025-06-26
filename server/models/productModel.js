import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
  productName: { type: String, required: true },
  productCategory: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
    required: true,
  }, // Reference to Category model
  productImages: [
    {
      url: { type: String, required: true }, // URL of the image
      public_id: { type: String }, // Public ID if using a cloud storage service (e.g., Cloudinary)
    },
  ],
  productDescription: { type: String, required: true },
  productStock: { type: Number, required: true, default: 0 },
  productTags: [{ type: String }], // Tags for search and filtering
  productRegularPrice: { type: Number, required: true },
  productSalePrice: { type: Number },

  brand: { type: mongoose.Schema.Types.ObjectId, ref: "Brand" }, // Reference to Brand model
  vendor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Vendor",
    required: true,
  }, // Reference to Vendor model
  ratings: { type: Number, default: 0 },
  reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: "Review" }], // Reference to Review model
 
  isFeatured: { type: Boolean, default: false }, // Featured product for special promotions
   // Percentage discount (e.g., 10 for 10% off)
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const Product = mongoose.model("Product", ProductSchema);
export default Product;
