import logo from "../assets/Assets/Frontend_Assets/logo.png"
import { IoLogoInstagram } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
function Footer() {
    return (
        <>


            <footer className="flex flex-col items-center justify-center w-full py-20 bg-black text-white/70 rounded-xl">

                <div className="flex items-center gap-3">
                    <img src={logo} alt="LOGO" />
                    <h1 className="font-bold text-2xl">SHOPPER</h1>
                </div>
                <p className="mt-4 text-center">Copyright © 2025 SHOPPER. All rights reservered.</p>
                <div className="flex items-center gap-4 mt-5">
                    <a href="#" className="hover:-translate-y-0.5 transition-all duration-300">
                        <IoLogoInstagram className="text-2xl" />
                    </a>
                    <a href="#" className="hover:-translate-y-0.5 transition-all duration-300">
                        <FaWhatsapp className="text-2xl" />
                    </a>
                    <a href="#" className="hover:-translate-y-0.5 transition-all duration-300">
                        <FaYoutube className="text-2xl" />
                    </a>
                </div>
            </footer>
        </>
    );
};
export default Footer;