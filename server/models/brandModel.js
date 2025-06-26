import mongoose from "mongoose";

const BrandSchema = new mongoose.Schema({
  brandName: { type: String, required: true}, // Brand name
  brandLogo: { type: String }, // URL to the brand's logo image
  products: [{ type: mongoose.Schema.Types.ObjectId, ref: "Product" }],// Reference to products
  isFeautured: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const Brand = mongoose.model("Brand", BrandSchema);
export default Brand;
