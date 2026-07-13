import uploadToCloudinary from "../service/cloudinary.js";
import Listing from "../Models/listing.js";

const addListing = async (req, res) => {
  try {
    let { title, description, price, sizes, category } = req.body;

    // 🔹 basic validation
    if (!title || !description || !price) {
      return res.status(400).json({ message: "Required fields missing" });
    }

    // 🔹 parse sizes (important)
    if (sizes) {
      if (typeof sizes === "string") {
        sizes = JSON.parse(sizes);
      }
    } else {
      sizes = [];
    }

    // 🔹 upload images safely
    const imageUrls = [];

    if (req.files && req.files.length > 0) {
      for (let file of req.files) {
        const uploaded = await uploadToCloudinary(file.path);
        imageUrls.push(uploaded.url);
      }
    }
    console.log("FILES:", req.files);
    // 🔹 create listing
    const newListing = new Listing({
      title,
      description,
      price: Number(price),
      images: imageUrls,
      sizes,
      category: category || "Uncategorized",
    });

    const saved = await newListing.save();

    res.status(201).json(saved);
  } catch (error) {
    console.error("Add listing error:", error);
    res.status(500).json({ message: "Upload failed" });
  }
};

export default addListing;
