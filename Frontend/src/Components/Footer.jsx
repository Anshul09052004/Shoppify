import logo from "../assets/Assets/Frontend_Assets/logo.png";
import { IoLogoInstagram } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";

function Footer() {
    return (
        <footer className=" mt-10 w-full bg-gradient-to-b from-gray-900 via-black to-black text-gray-400 py-12 px-6">
            {/* Top Section */}
            <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
                {/* Logo */}
                <div className="flex items-center gap-3 mb-6">
                    <img src={logo} alt="LOGO" className="w-12 h-12 object-contain" />
                    <h1 className="font-bold text-3xl tracking-wider text-white">
                        SHOPPER
                    </h1>
                </div>

                {/* Links (Optional - About, Contact, etc.) */}
                <ul className="flex flex-wrap justify-center gap-6 text-sm font-medium mb-6">
                    <li>
                        <a href="#" className="hover:text-white transition-colors">
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="#" className="hover:text-white transition-colors">
                            About
                        </a>
                    </li>
                    <li>
                        <a href="#" className="hover:text-white transition-colors">
                            Contact
                        </a>
                    </li>
                    <li>
                        <a href="#" className="hover:text-white transition-colors">
                            Privacy Policy
                        </a>
                    </li>
                </ul>

                {/* Social Icons */}
                <div className="flex items-center gap-6 mb-8">
                    <a
                        href="#"
                        className="p-3 bg-gray-800 rounded-full hover:bg-pink-600 hover:text-white transition-all duration-300 shadow-md"
                    >
                        <IoLogoInstagram className="text-2xl" />
                    </a>
                    <a
                        href="#"
                        className="p-3 bg-gray-800 rounded-full hover:bg-green-600 hover:text-white transition-all duration-300 shadow-md"
                    >
                        <FaWhatsapp className="text-2xl" />
                    </a>
                    <a
                        href="#"
                        className="p-3 bg-gray-800 rounded-full hover:bg-red-600 hover:text-white transition-all duration-300 shadow-md"
                    >
                        <FaYoutube className="text-2xl" />
                    </a>
                </div>

                {/* Copyright */}
                <p className="text-sm border-t border-gray-700 pt-6">
                    © {new Date().getFullYear()} <span className="text-white">SHOPPER</span>. All
                    rights reserved.
                </p>
            </div>
        </footer>
    );
}

export default Footer;
