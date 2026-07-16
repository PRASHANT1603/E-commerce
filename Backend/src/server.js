import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import productRoute from "./Routes/productRoutes.js";
import landingRouter from "./Routes/landing.Routes.js";
import authRoute from "./Routes/auth.routes.js";
import Cart from "./Routes/addToCart.Route.js"

// import userRoute from "./routes/userRoute.js";
// import productRoute from "./routes/productRoute.js";
// import orderRoute from "./routes/orderRoute.js";


dotenv.config();
 

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/products", productRoute);
app.use("/api/landing", landingRouter);
app.use("/api/auth", authRoute);
app.use("/api/cart", Cart);

export default app;


