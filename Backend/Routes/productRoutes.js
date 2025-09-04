import { Router } from "express";
import upload from "../Middlewares/multer.middleware.js";
import { addProduct, removeProduct, getAllProducts } from "../Controllers/ProductController.js";

const router = Router();
router.post('/addproduct', upload.single("image"), addProduct);
router.delete('/removeproduct/:id', removeProduct);
router.get('/allproducts', getAllProducts);
export default router;