import express from 'express';
import { connectDb } from './utils/features.js';
// import { errorMiddleware } from "./middlewares/error.js";
// // import morgan from 'morgan';
//importing Routes
import userRoute from './routes/users.js';
const port = 4000;
connectDb();
const app = express();
app.use(express.json()); //middleware
//using Routes
app.use("/api/v1/user", userRoute);
app.listen(port, () => {
    console.log(`server is running on http://localhost:${port}`);
});
