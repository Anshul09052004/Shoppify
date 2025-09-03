import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import { RxCross1 } from "react-icons/rx";
import { FiMinus } from "react-icons/fi";
import { FiPlus } from "react-icons/fi";

function CartItem() {
    const {
        all_product,
        addToCartPlus,
        cartItems,
        RemoveFromCartMinus,
        removeFromCart,
        getTotalCartAmount,
    } = useContext(ShopContext);

    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-16 lg:px-24 py-8">
            {/* Table Header (desktop only) */}
            <div className="hidden md:grid grid-cols-6 gap-4 font-semibold text-gray-700 border-b pb-3">
                <p>Product</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>

            {/* Cart Items */}
            <div className="divide-y">
                {all_product.map((e) => {
                    if (cartItems[e.id] && cartItems[e.id] > 0) {
                        return (
                            <div
                                key={e.id}
                                className="grid grid-cols-1 md:grid-cols-6 gap-4 items-center py-4"
                            >
                                {/* Mobile Layout */}
                                <div className="flex flex-col md:hidden bg-gray-50 rounded-xl p-4 shadow-sm">
                                    {/* Top Row: Image + Title + Remove Btn */}
                                    <div className="flex justify-between items-start gap-3">
                                        <div className="flex gap-3">
                                            <img
                                                src={e.image}
                                                alt={e.name}
                                                className="w-20 h-20 object-cover rounded-lg border"
                                            />
                                            <div>
                                                <p className="font-medium text-gray-800">
                                                    {e.name}
                                                </p>
                                                <p className="font-bold text-black text-sm">
                                                    ${e.new_price}
                                                </p>
                                            </div>
                                        </div>
                                        <button onClick={() => removeFromCart(e.id)}>
                                            <RxCross1 className="text-lg text-gray-600 hover:text-black" />
                                        </button>
                                    </div>

                                    {/* Quantity + Total */}
                                    <div className="flex justify-between items-center mt-4">
                                        <div className="flex items-center border rounded-full bg-gray-100 px-2">
                                            <button
                                                onClick={() => RemoveFromCartMinus(e.id)}
                                                className="p-1"
                                            >
                                                <FiMinus className="text-lg text-gray-700 hover:text-black" />
                                            </button>

                                            <span className="px-3 text-gray-800 font-medium">
                                                {cartItems[e.id]}
                                            </span>

                                            <button
                                                onClick={() => addToCartPlus(e.id)}
                                                className="p-1"
                                            >
                                                <FiPlus className="text-lg text-gray-700 hover:text-black" />
                                            </button>
                                        </div>

                                        <p className="font-semibold text-black">
                                            ${e.new_price * cartItems[e.id]}
                                        </p>
                                    </div>
                                </div>

                                {/* Desktop Layout */}
                                <img
                                    src={e.image}
                                    alt={e.name}
                                    className="hidden md:block w-40 h-40 object-cover rounded-lg border"
                                />
                                <p className="hidden md:block font-medium text-gray-800">
                                    {e.name}
                                </p>
                                <p className="hidden md:block font-bold text-black">
                                    ${e.new_price}
                                </p>
                                <div className="hidden md:flex items-center border rounded-full bg-gray-100 px-2 w-fit">
                                    <button
                                        onClick={() => RemoveFromCartMinus(e.id)}
                                        className="p-1"
                                    >
                                        <FiMinus className=" cursor-pointer text-lg text-gray-700 hover:text-black" />
                                    </button>
                                    <span className="px-3 text-gray-800 font-medium">
                                        {cartItems[e.id]}
                                    </span>
                                    <button
                                        onClick={() => addToCartPlus(e.id)}
                                        className="p-1"
                                    >
                                        <FiPlus className="cursor-pointer text-lg text-gray-700 hover:text-black" />
                                    </button>
                                </div>
                                <p className="hidden md:block font-semibold text-black">
                                    ${e.new_price * cartItems[e.id]}
                                </p>
                                <button
                                    onClick={() => removeFromCart(e.id)}
                                    className="hidden md:flex justify-center"
                                >
                                    <RxCross1 className="text-xl mr-27 text-gray-700 hover:text-black" />
                                </button>
                            </div>
                        );
                    }
                    return null;
                })}
            </div>

            {/* Cart Totals */}
            <div className="mt-10 flex flex-col md:flex-row justify-between gap-10">
                <div className="w-full md:w-1/2 bg-gray-50 rounded-2xl p-6 shadow">
                    <h1 className="text-xl font-semibold text-gray-800 mb-4">
                        Cart Totals
                    </h1>

                    <div className="space-y-4">
                        <div className="flex justify-between text-gray-700">
                            <p>Subtotal</p>
                            <p>${getTotalCartAmount()}</p>
                        </div>
                        <hr />
                        <div className="flex justify-between text-gray-700">
                            <p>Shipping Fee</p>
                            <p className="text-green-600">Free</p>
                        </div>
                        <hr />
                        <div className="flex justify-between font-semibold text-gray-900">
                            <h3>Total</h3>
                            <h3>${getTotalCartAmount()}</h3>
                        </div>
                    </div>

                    <button className="mt-6 w-full py-3 bg-indigo-600 text-white rounded-xl font-medium shadow hover:bg-indigo-700 transition-colors">
                        Proceed to Checkout
                    </button>
                </div>
            </div>
        </section>
    );
}

export default CartItem;
