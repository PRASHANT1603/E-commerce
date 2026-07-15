import { register, Login, getUser } from "../Controller/auth.controller.js";
import protect from "../Middleware/auth.middleware.js"

import express from 'express';
const router = express.Router();

router.post("/register", register);
router.post("/login", Login);
router.get("/profile", protect, getUser);

export default router;  