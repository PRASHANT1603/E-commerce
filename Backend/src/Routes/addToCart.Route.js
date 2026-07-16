import express from "express";
import protect from "../Middleware/auth.middleware.js"
import{
  addToCart,
  getCart,
  removeFromCart,
}from "../Controller/cart.controller.js";

const router = express.Router();
router.post("/add", protect, addToCart);
router.get("/", protect, getCart);
router.delete("/:productId", protect, removeFromCart);

export default router;