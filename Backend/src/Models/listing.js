import mongoose from "mongoose";

const listingSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },

  description: {
    type: String,
    required: true
  },

  price: {   
    type: Number,
    required: true
  },

  images: [   
    {
      type: String
    }
  ],

  category: {
    type: String,
    required: true
  },

  sizes: [
  {
    size: {
      type: String,
      required: true
    },
    stock: {
      type: Number,
      required: true,
      min: 0
    }
  }
] ,

  stock: {
    type: Number,
    default: 0
  },

  createdAt: {
    type: Date,
    default: Date.now
  }

});

const Listing = mongoose.model("Listing", listingSchema);

export default Listing;