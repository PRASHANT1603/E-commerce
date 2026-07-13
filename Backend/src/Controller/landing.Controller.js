import Listing from "../Models/listing.js";
const landing = async (req, res) => {
  try {
    const listings = await Listing.find().sort({
      createdAt: -1,
    });
    res.status(200).json(listings);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};
export default landing;
