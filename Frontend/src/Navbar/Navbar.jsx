import React, { useContext, useState } from "react";
import logo from "../assets/Assets/Frontend_Assets/logo.png";
import { Link } from "react-router-dom";
import carticon from "../assets/Assets/Frontend_Assets/cart_icon.png";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { ShopContext } from "../Context/ShopContext";

function Navbar() {
  const [open, setOpen] = useState(false);
  const { getTotalCartItems } = useContext(ShopContext);

  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-3 border-b border-gray-300 bg-white transition-all">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <img src={logo} alt="logo" className="w-8 h-8 object-contain" />
        <p className="font-bold text-xl">SHOPPER</p>
      </div>

      {/* Desktop Menu */}
      <div className="hidden sm:flex items-center gap-8">
        <Link to="/">Shop</Link>
        <Link to="/mens">Men</Link>
        <Link to="/women">Women</Link>
        <Link to="/kids">Kids</Link>

        <Link to="/login">
          <button className="cursor-pointer px-6 py-2 bg-indigo-500 hover:bg-indigo-600 transition text-white rounded-full">
            Login
          </button>
        </Link>

        {/* Desktop Cart Icon */}
        <Link to="/cart">
          <div className="relative cursor-pointer">
            <img src={carticon} alt="carticon" className="w-7 h-7" />
            <span className="absolute -top-2 -right-2 text-xs text-white bg-indigo-500 w-[18px] h-[18px] flex items-center justify-center rounded-full">
              {getTotalCartItems()}
            </span>
          </div>
        </Link>
      </div>

      {/* Mobile Cart + Menu Toggle */}
      <div className="flex items-center gap-4 sm:hidden">
        {/* Mobile Cart Icon */}
        <Link to="/cart">
          <div className="relative cursor-pointer">
            <img src={carticon} alt="carticon" className="w-6 h-6" />
            <span className="absolute -top-1.5 -right-2 text-[10px] text-white bg-indigo-500 w-[16px] h-[16px] flex items-center justify-center rounded-full">
              {getTotalCartItems()}
            </span>
          </div>
        </Link>

        {/* Menu Toggle */}
        <button
          onClick={() => setOpen(!open)}
          aria-label="Menu"
          className="text-2xl"
        >
          {open ? <IoMdClose /> : <IoMdMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`absolute top-[60px] left-0 w-full bg-white shadow-md flex-col items-start gap-3 px-5 py-5 text-sm font-medium transition-all duration-300 ${
          open ? "flex opacity-100 translate-y-0" : "opacity-0 -translate-y-3 hidden"
        }`}
      >
        <Link to="/" className="block" onClick={() => setOpen(false)}>
          Shop
        </Link>
        <Link to="/mens" className="block" onClick={() => setOpen(false)}>
          Men
        </Link>
        <Link to="/women" className="block" onClick={() => setOpen(false)}>
          Women
        </Link>
        <Link to="/kids" className="block" onClick={() => setOpen(false)}>
          Kids
        </Link>
        <Link to="/login" onClick={() => setOpen(false)}>
          <button className="cursor-pointer px-5 py-2 mt-2 bg-indigo-500 hover:bg-indigo-600 transition text-white rounded-full text-sm">
            Login
          </button>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
