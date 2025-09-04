import React, { useState, useEffect } from "react";
import crossicon from "../assets/Admin_Assets/cross_icon.png";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ListProduct() {
    const [allproducts, setAllproducts] = useState([]);
    const remove_product = async (id) => {
        try {
            const response = await fetch(`http://localhost:5000/api/v1/product/removeproduct/${id}`, {
                method: "DELETE",
            });
            toast.info("🛒 Item removed from cart", {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                theme: "dark",
            });
              <ToastContainer position="top-center" autoClose={1500} />
            const data = await response.json();
            console.log(data);


            await fetchInfo(); // refresh list
        } catch (error) {
            console.error("Error deleting product:", error);
        }
    };





    const fetchInfo = async () => {
        try {
            const res = await fetch("http://localhost:5000/api/v1/product/allproducts");
            const data = await res.json();
            console.log("Fetched Data:", data);

            if (data.success) {
                setAllproducts(data.products);
            } else {
                console.error("Backend error:", data.message);
                alert("Something went wrong while fetching products!");
            }
        } catch (error) {
            console.error("Error fetching products:", error);

        }
    };


    useEffect(() => {
        fetchInfo();
    }, []);

    return (
        <div className="w-full max-w-5xl mx-auto mt-6 p-4 bg-white rounded-2xl shadow-lg overflow-x-auto">
            {/* Header */}
            <div className="grid grid-cols-6 font-semibold text-gray-700 py-3 border-b">
                <p className="text-left">Image</p>
                <p className="text-left">Title</p>
                <p className="text-left">Old Price</p>
                <p className="text-left">New Price</p>
                <p className="text-left">Category</p>
                <p className="text-left">Remove</p>
            </div>

            {/* Products */}
            {allproducts.map((item, index) => (
                <div
                    key={index}
                    className="grid grid-cols-6 items-center gap-4 py-3 border-b hover:bg-gray-50 transition"
                >
                    <img
                        src={item.image?.secure_url}
                        alt={item.name}
                        className="w-16 h-16 object-cover rounded-lg shadow-sm"
                    />

                    <p className="text-sm font-medium text-gray-800">{item.name}</p>
                    <p className="text-sm text-gray-600">₹{item.old_price}</p>
                    <p className="text-sm text-green-600 font-semibold">₹{item.new_price}</p>
                    <p className="text-sm font-medium text-gray-800">{item.category}</p>
                    <img
                        onClick={() => remove_product(item._id)}
                        
                        src={crossicon}
                        alt="Remove"
                        className="w-5 h-5 cursor-pointer hover:scale-110 transition"
                    />
                </div>
            ))}
                   <ToastContainer position="top-center" autoClose={1500} />
        </div>
    );
}

export default ListProduct;
