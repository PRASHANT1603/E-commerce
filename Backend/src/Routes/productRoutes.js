import { Router } from "express";
import addListing from "../Controller/addListing.js";
import upload from "../Middleware/multer.Middleware.js";

const router = Router();

router.post(
  "/add",
  upload.array("images", 5),
  (req, res, next) => {
    console.log("[productRoutes] req.files:", req.files?.length);
    next();
  },
  addListing,
);

export default router;
