import mongoose from "mongoose";

const ReviewSchema = new mongoose.Schema({
  product: { type: mongoose.Schema.Types.ObjectId, ref: "Product", required: true }, // Reference to the reviewed product
  user: { type: mongoose.Schema.Types.ObjectId, ref: "Auth", required: true }, // Reference to the user who wrote the review
  rating: { type: Number, required: true, min: 1, max: 5 }, // Rating from 1 to 5
  comment: { type: String },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const Review = mongoose.model("Review", ReviewSchema);
export default Review;
