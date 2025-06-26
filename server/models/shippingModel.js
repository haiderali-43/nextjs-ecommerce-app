import mongoose from "mongoose";

const ShippingSchema = new mongoose.Schema({
  orderId: { type: mongoose.Schema.Types.ObjectId, ref: "Order", required: true },
  address: { type: String, required: true },
  status: { type: String, enum: ["pending", "shipped", "delivered"], default: "pending" },
  trackingNumber: { type: String },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const Shipping = mongoose.model("Shipping", ShippingSchema);
export default Shipping;
