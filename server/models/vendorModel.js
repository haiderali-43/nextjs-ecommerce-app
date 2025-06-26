import mongoose from "mongoose";

const VendorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  profileImage: { type: String },
  products: [{ type: mongoose.Schema.Types.ObjectId, ref: "Product" }],
  address: { type: String },
  status: { type: String, enum: ["approved", "unapproved"], default: "unapproved" },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const Vendor = mongoose.model("Vendor", VendorSchema);
export default Vendor;
