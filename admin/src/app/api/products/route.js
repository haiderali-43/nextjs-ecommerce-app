import { dbConnect } from "@/lib/dbConnect";
import { NextResponse } from "next/server";
import ProductModel from "@/models/ProductModel";

// Create a new product

export async function POST(req) {
  try {
    await dbConnect();
    const {
      name,
      regularPrice,
      salePrice,
      description,
      images,
      categories,
      tags,
      countInStock,
    } = await req.json();

    const product = new ProductModel({
      name,
      regularPrice,
      salePrice,
      description,
      images,
      categories,
      tags,
      countInStock,
    });

    await product.save();
    return NextResponse.json({ message: "Product created successfully" });
  } catch (error) {
    console.log(error);
    return NextResponse.error({
      message: "Something went wrong. Please try again later.",
    });
  }
}

// Get all products
export async function GET() {
  try {
    await dbConnect();
    const products = await ProductModel.find({});
    return NextResponse.json(products);
  } catch (error) {
    console.log(error);
    return NextResponse.error({
      message: "Something went wrong. Please try again later.",
    });
  }
}

// Get a single product
export async function GET_id(req) {
  try {
    await dbConnect();
    const { id } = req.params;
    const product = await ProductModel.findById(id);
    if (!product) {
      return NextResponse.error({ message: "Product not found" });
    }
    return NextResponse.json(product);
  } catch (error) {
    console.log(error);
    return NextResponse.error({
      message: "Something went wrong. Please try again later.",
    });
  }
}
