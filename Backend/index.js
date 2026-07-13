
import connectDB from "./src/DBConnect/DB.js";
import app from "./src/server.js";


const Port = process.env.PORT || 5000;
connectDB();


app.listen(Port,()=>{
    console.log(`Server is running on port ${Port}`);
});