import express from 'express';
import { connectDb } from './utils/features.js';
import { errorMiddleware } from "./middleware/error.js";

// // import morgan from 'morgan';



//importing Routes
import userRoute from './routes/users.js';
import productRoute from './routes/products.js';



connectDb();
const port =  4000;

const app = express();
app.use(express.json());  //middleware


//using Routes
app.use("/api/v1/user", userRoute);
app.use("/api/v1/product", productRoute);

app.use("/uploads", express.static("uploads"));

app.use(errorMiddleware);





app.listen(port,()=>{
    console.log(`server is running on http://localhost:${port}`);

})