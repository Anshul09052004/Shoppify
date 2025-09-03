
import { Navigate } from "react-router-dom";
import hero_image from "../assets/Assets/Frontend_Assets/hero_image.png";
import React from "react";
import { useNavigate } from "react-router-dom";




function Hero() {
  const Navigate = useNavigate();
 const goToShopCategory = () => {
    Navigate ('/women', { state: { category: 'all', banner: hero_image } })
  }
  return (
    <main className="relative overflow-hidden bg-gradient-to-r from-gray-100 via-white to-gray-100 rounded-3xl flex flex-col md:flex-row items-center text-center md:text-left justify-between mt-12 md:mt-16 py-14 px-6 sm:px-10 md:px-20 max-w-7xl mx-auto w-full shadow-xl">
      {/* Decorative Blur Circles */}
      <div className="absolute top-0 -left-20 w-72 h-72 bg-indigo-300/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 -right-20 w-72 h-72 bg-pink-300/30 rounded-full blur-3xl"></div>

      {/* Left Content */}
      <div className="relative z-10 flex flex-col items-center md:items-start">
        <h1 className="text-gray-900 font-extrabold text-3xl sm:text-4xl md:text-6xl max-w-lg leading-snug">
          Discover Your{" "}
          <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Style
          </span>
          <br className="hidden sm:block" />
          <span className="block text-indigo-700 mt-2">
            Premium Delivered to Your Door
          </span>
        </h1>

        <p className="text-gray-600 mt-5 text-base sm:text-lg md:text-xl max-w-md">
          Shop the latest trends with premium quality, delivered straight to
          your home. Fashion that matches your vibe ✨
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start mt-8 gap-4">
          <button
            className="px-7 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full text-base font-medium flex items-center space-x-2 hover:shadow-lg hover:scale-105 transition duration-300"
            type="button"
          >
            <span className="cursor-pointer" onClick={goToShopCategory}>Latest Collection</span>
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.821 11.999h13.43m0 0-6.714-6.715m6.715 6.715-6.715 6.715"
                stroke="#fff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Right Image */}
      <div className="relative z-10 mt-10 md:mt-0 md:ml-16 flex justify-center w-full md:w-auto">
        <img
          alt="Hero"
          className="w-full max-w-xs sm:max-w-sm md:max-w-md h-auto rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-500 object-cover"
          src={hero_image}
        />
      </div>
    </main>
  );
}

export default Hero;
