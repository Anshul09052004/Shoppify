import React from "react"
import logo from "../assets/Assets/Frontend_Assets/logo.png"
import { Link } from "react-router-dom"
import carticon from "../assets/Assets/Frontend_Assets/cart_icon.png"
import { IoMdMenu, IoMdClose } from "react-icons/io";

function Navbar() {
    const [open, setOpen] = React.useState(false);

    return (
        <nav className="flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 border-b border-gray-300 bg-white relative transition-all">

            {/* Logo */}
            <div className="flex items-center gap-2">
                <img src={logo} alt="logo" />
                <p className="font-bold text-2xl">SHOPPER</p>
            </div>

            {/* Desktop Menu */}
            <div className="hidden sm:flex items-center gap-8">
                <Link to="/">Shop</Link>
                <Link to="/mens">Men</Link>
                <Link to="/women">Women</Link>
                <Link to="/kids">Kids</Link>

                <Link to="/login">
                    <button className="cursor-pointer px-8 py-2 bg-indigo-500 hover:bg-indigo-600 transition text-white rounded-full">
                        Login
                    </button>
                </Link>

                {/* Desktop Cart Icon */}
                <Link to="/cart">
                    <div className="relative cursor-pointer text-xl">
                        <img src={carticon} alt="carticon" />
                        <button className="absolute -top-2 -right-3 text-xs text-white bg-indigo-500 w-[18px] h-[18px] rounded-full">
                            0
                        </button>
                    </div>
                </Link>
            </div>

            {/* Mobile Cart + Menu Toggle */}
            <div className="flex items-center gap-4 sm:hidden">
                {/* Mobile Cart Icon */}
                <Link to="/cart">
                    <div className="relative cursor-pointer">
                        <img src={carticon} alt="carticon" className="w-6 h-6" />
                        <button className="absolute -top-2 -right-3 text-xs text-white bg-indigo-500 w-[18px] h-[18px] rounded-full">
                            0
                        </button>
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
            {/* Mobile Menu */}
            <div
                className={`${open ? "flex" : "hidden"} absolute top-[60px] left-0 w-full bg-white shadow-md py-4 flex-col items-start gap-2 px-5 text-sm md:hidden`}
            >
                <Link to="/" className="block" onClick={() => setOpen(false)}>Shop</Link>
                <Link to="/mens" className="block" onClick={() => setOpen(false)}>Men</Link>
                <Link to="/women" className="block" onClick={() => setOpen(false)}>Women</Link>
                <Link to="/kids" className="block" onClick={() => setOpen(false)}>Kids</Link>
                <Link to="/login" onClick={() => setOpen(false)}>
                    <button className="cursor-pointer px-6 py-2 mt-2 bg-indigo-500 hover:bg-indigo-600 transition text-white rounded-full text-sm">
                        Login
                    </button>
                </Link>
            </div>

        </nav>
    );
}

export default Navbar;
