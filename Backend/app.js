import express from 'express';
import connectDb from './Db/index.js';
import cookieParser from 'cookie-parser';
import ProductRoutes from './Routes/productRoutes.js';
import cors from 'cors'
const app=express();
connectDb();

app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
}))
app.use(express.urlencoded({ extended: true }));
app.get('/home',(req,res)=>{
res.send("server running")
})

// app.use('/api/v1/user', userRoutes);
app.use('/api/v1/product', ProductRoutes);
export default app;