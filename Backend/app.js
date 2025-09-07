import express from 'express';
import connectDb from './Db/index.js';
import cookieParser from 'cookie-parser';
import ProductRoutes from './Routes/productRoutes.js';
import userRoutes from './Routes/userRoutes.js';
import cors from 'cors';

const app = express();
connectDb();

app.use(express.json());
app.use(cookieParser());

// ✅ CORS fix
app.use(cors({
  origin: ["https://shoppify-app.vercel.app"], 
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send("server running successfully");
});

app.use('/api/v1/user', userRoutes);
app.use('/api/v1/product', ProductRoutes);

export default app;
