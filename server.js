import express from 'express';
import  Color  from 'colors';
import dotenv from 'dotenv';
import morgan from 'morgan';
import connectDb from './config/Db.js'
import authRoutes from './routes/authRoute.js';

//config
dotenv.config();

//db config
connectDb();


//rest object
const app = express();

//middlewares
app.use(express.json());
app.use(morgan('dev'))

//routes
app.use('/api/v1/auth', authRoutes);


//rest api
app.get('/', (req, res) => {
    res.send({
        message : 'Welcome',
    })
})

//PORT
const PORT = process.env.PORT || 8080;

//run listen
app.listen(PORT, () => {
    console.log(`server running on ${process.env.DEV_MODE} ${PORT}`.bgCyan.white);
})