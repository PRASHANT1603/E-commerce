import {v2 as cloudinary} from "cloudinary";
import fs from "fs";
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

const uploadToCloudinary = async (filePath) => {
  try {
    if (!filePath) throw new Error("No file path provided");

    const result = await cloudinary.uploader.upload(filePath, {
      folder: "ecommerce",
      resource_type: "auto",
    });

    return {
      url: result.secure_url,
      public_id: result.public_id
    };

  } catch (error) {
    console.error("Cloudinary upload error:", error);
    throw error;

  } finally {
    fs.unlink(filePath, (err) => {
      if (err) console.error("Error deleting temp file:", err);
    });
  }
};

export default uploadToCloudinary;