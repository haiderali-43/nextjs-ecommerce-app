import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "Auth", required: true }, // Reference to the user who placed the order
  vendor: { type: mongoose.Schema.Types.ObjectId, ref: "Vendor", required: true }, // Reference to the vendor
  orderItems: [
    {
      product: { type: mongoose.Schema.Types.ObjectId, ref: "Product", required: true }, // Reference to the ordered product
      quantity: { type: Number, required: true },
      price: { type: Number, required: true }, // Price at the time of purchase
    },
  ],
  shippingAddress: {
    address: { type: String, required: true },
    city: { type: String, required: true },
    postalCode: { type: String, required: true },
    country: { type: String, required: true },
  },
  paymentMethod: { type: String, required: true }, // e.g., 'Credit Card', 'PayPal'
  paymentResult: {
    id: { type: String }, // Payment processor ID
    status: { type: String },
    update_time: { type: String },
    email_address: { type: String },
  },
  itemsPrice: { type: Number, required: true }, // Total price of the items before tax and shipping
  taxPrice: { type: Number, required: true }, // Tax applied to the order
  shippingPrice: { type: Number, required: true }, // Shipping cost
  totalPrice: { type: Number, required: true }, // Total price including items, tax, and shipping
  isPaid: { type: Boolean, default: false },
  paidAt: { type: Date },
  isDelivered: { type: Boolean, default: false },
  deliveredAt: { type: Date },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const Order = mongoose.model("Order", OrderSchema);
export default Order;
