import upload_area from "../assets/Admin_Assets/upload_area.svg";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function AddProduct() {
    const [Image, setImage] = useState(null);

    const [Product, setProduct] = useState({
        name: "",
        old_price: "",
        new_price: "",
        category: "Men",
        image: ""
    });

    // Image handler
    const imageHandler = (e) => {
        setImage(e.target.files[0]);
    };

    // Input change handler
    const changeHandler = (e) => {
        setProduct({ ...Product, [e.target.name]: e.target.value });
    };

    // Submit handler
    const Add_product = async (e) => {
        e.preventDefault();

        if (!Image) {
            alert("❌ Please upload an image!");
            return;
        }

        let formData = new FormData();
        formData.append("image", Image);
        formData.append("name", Product.name);
        formData.append("old_price", Product.old_price);
        formData.append("new_price", Product.new_price);
        formData.append("category", Product.category);

        try {
            const resp = await fetch("http://localhost:5000/api/v1/product/addproduct", {
                method: "POST",
                body: formData,
            });

            const data = await resp.json();

            if (resp.ok && data.success) {

                // Reset form after success
                setProduct({
                    name: "",
                    old_price: "",
                    new_price: "",
                    category: "Men",
                    image: ""
                });
                setImage(null);
                toast.info(" Product Added Succesfully", {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    theme: "dark",
                });
            } else {
                alert(`❌ Failed to add product! ${data.message || ""}`);
            }
        } catch (err) {
            console.error("Error while adding product:", err);

        }
    };

    return (
        <div className="w-full flex justify-center p-6">
            <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-lg">
                <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
                    Add New Product
                </h2>

                <form className="space-y-5" onSubmit={Add_product}>
                    {/* Product Title */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Product Title
                        </label>
                        <input
                            value={Product.name}
                            onChange={changeHandler}
                            type="text"
                            name="name"
                            placeholder="Enter Product Title"
                            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none text-gray-700"
                            required
                        />
                    </div>

                    {/* Price */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Price
                        </label>
                        <input
                            value={Product.old_price}
                            onChange={changeHandler}
                            type="number"
                            name="old_price"
                            placeholder="Enter Product Price"
                            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none text-gray-700"
                            required
                        />
                    </div>

                    {/* Offer Price */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Offer Price
                        </label>
                        <input
                            value={Product.new_price}
                            onChange={changeHandler}
                            type="number"
                            name="new_price"
                            placeholder="Enter Product Offer Price"
                            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none text-gray-700"
                            required
                        />
                    </div>

                    {/* Category */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Product Category
                        </label>
                        <select
                            value={Product.category}
                            onChange={changeHandler}
                            name="category"
                            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none text-gray-700"
                        >
                            <option value="Men">Men</option>
                            <option value="Women">Women</option>
                            <option value="Kid">Kid</option>
                        </select>
                    </div>

                    {/* Upload Image */}
                    <div>
                        <label
                            htmlFor="image"
                            className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-lg p-6 cursor-pointer hover:border-blue-400 transition"
                        >
                            <img
                                src={Image ? URL.createObjectURL(Image) : upload_area}
                                alt="Upload Area"
                                className="h-16 w-16 mb-3"
                            />
                            <p className="text-gray-600 text-sm">Click to Upload Product Image</p>
                            <input type="file" onChange={imageHandler} name="image" id="image" hidden required />
                        </label>
                    </div>

                    {/* Button */}
                    <div className="flex justify-center">
                        <button
                            type="submit"
                            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition cursor-pointer"
                        >
                            Add Product
                        </button>
                        <ToastContainer position="top-center" autoClose={1500} />
                    </div>
                </form>
            </div>
        </div>


    );
}

export default AddProduct;
