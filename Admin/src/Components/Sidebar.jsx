import React from 'react'
import { Link } from 'react-router-dom'
import { MdAddShoppingCart } from "react-icons/md"
import { LuListCheck } from "react-icons/lu"

function Sidebar() {
  return (
    <>
      {/* Desktop Sidebar */}
      <div className=" mt-15 border border-amber-100 rounded-4xl hidden md:flex bg-white shadow-md h-[calc(100vh-4rem)] w-56 fixed left-0 top-16 flex-col p-4 space-y-3">
        {/* Add Product */}
        <Link
          to={'/addproduct'}
          className="flex items-center gap-3 p-2 rounded-lg hover:bg-blue-100 text-gray-700 hover:text-blue-600 transition"
        >
          <MdAddShoppingCart className="text-2xl text-green-600" />
          <p className="text-base font-medium">Add Product</p>
        </Link>

        {/* All Products */}
        <Link
          to={'/allproducts'}
          className="flex items-center gap-3 p-2 rounded-lg hover:bg-blue-100 text-gray-700 hover:text-blue-600 transition"
        >
          <LuListCheck className="text-2xl text-purple-600" />
          <p className="text-base font-medium">All Products</p>
        </Link>
      </div>

      {/* Mobile Bottom Navbar */}
      <div className="md:hidden fixed bottom-0 left-0 w-full bg-white shadow-inner flex justify-around items-center h-14 border-t">
        <Link
          to={'/addproduct'}
          className="flex flex-col items-center  text-green-600 transition"
        >
          <MdAddShoppingCart className="text-2xl" />
          <span className="text-xs">Add</span>
        </Link>
        <Link
          to={'/allproducts'}
          className="flex flex-col items-center text-purple-600 transition"
        >
          <LuListCheck className="text-2xl" />
          <span className="text-xs">All</span>
        </Link>
      </div>
    </>
  )
}

export default Sidebar
