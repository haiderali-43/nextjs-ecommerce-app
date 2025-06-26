// utils/imageUpload.js
import { CloudinaryStorage } from "multer-storage-cloudinary";
import multer from "multer";
import cloudinary from "../config/cloudinaryConfig.js";

// Configure Cloudinary storage
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "categories", // Folder name in Cloudinary where images will be stored
    allowed_formats: ["jpg", "jpeg", "png"], // Allowed file formats
  },
});

// Initialize multer with the Cloudinary storage
const imageUpload = multer({ storage });

export default imageUpload;
