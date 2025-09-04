import mongoose from "mongoose";
import AppError from "../Utils/error.utils.js";
import Product from "../Models/product.model.js";
import cloudinary from "cloudinary";
import fs from "fs";

const addProduct = async (req, res, next) => {
    try {
        const { name,
            old_price,
            new_price,
            category,
            availableQuantity
        } = req.body;

        if (!name || !old_price || !new_price || !category) {
            return res.status(400).json({ message: "All fields are required" });
        }

        // Get last product ID
        const lastProduct = await Product.findOne().sort({ _id: -1 });
        const id = lastProduct ? lastProduct.id + 1 : 1;

        let imageData = {};
        if (req.file) {
            try {
                const result = await new Promise((resolve, reject) => {
                    const stream = cloudinary.v2.uploader.upload_stream(
                        {
                            folder: "uploads",
                            width: 250,
                            height: 250,
                            crop: "fill",
                            gravity: "face",
                            use_filename: true,
                            unique_filename: false,
                        },
                        (error, result) => {
                            if (error) return reject(error);
                            resolve(result);
                        }
                    );
                    stream.end(req.file.buffer); // memory buffer se upload
                });

                imageData = {
                    public_id: result.public_id,
                    secure_url: result.secure_url,
                };
            } catch (error) {
                return next(new AppError("File upload failed", 500));
            }
        }


        const newProduct = await Product.create({
            name,
            id,
            old_price,
            new_price,
            category,
            availableQuantity,
            image: imageData,
        });

        return res.status(201).json({
            success: true,
            message: "Product added successfully",
            product: newProduct,
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal server error" });
    }
};
const removeProduct = async (req, res, next) => {
    try {
        const { id } = req.params; // _id from frontend
        const product = await Product.findByIdAndDelete(id);
        if (!product) {
            return next(new AppError("Product not found", 404));
        }
        return res.status(200).json({
            success: true,
            message: "Product removed successfully",
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal server error" });
    }
}

const getAllProducts = async (req, res, next) => {
    try {
        const products = await Product.find();
        return res.status(200).json({
            success: true,
            products,
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal server error" });
    }
};


export { addProduct, removeProduct, getAllProducts };
