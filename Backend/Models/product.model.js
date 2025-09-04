import mongoose from "mongoose";
const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Product name is required"],
        trim: true,
        maxLength: [120, "Product name should not be more than 120 characters"]
    },
    id: {
        type: Number,
        required: [true, "Product id is required"],
        unique: true,
        trim: true,
    },
    old_price: {
        type: Number,
        required: [true, "Product old price is required"]
    },
    new_price: {
        type: Number,
        required: [true, "Product new price is required"]
    },
    category: {
        type: String,
        required: [true, "Product category is required"]
    },
    image: {
        public_id: {
            type: String,
            required: false,
        },
        secure_url: {
            type: String,
        }
    },
    date: {
        type: Date,
        default: Date.now
    },
    availableQuantity: {
        type: Boolean,
       default: true
    
    }

}, {
    timestamps: true
})
const Product = mongoose.model('Product', productSchema);
export default Product;