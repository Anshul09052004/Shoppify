import hero_image from "../assets/Assets/Frontend_Assets/hero_image.png";

function Hero() {
  return (
    <main className=" bg-gray-300 rounded-3xl flex flex-col md:flex-row items-center text-center md:text-left justify-between mt-12 md:mt-16 py-10 px-5 sm:px-8 md:px-20 max-w-7xl mx-auto w-full">
      {/* Left Content */}
      <div className="flex flex-col items-center md:items-start">
        <h1 className="text-gray-900 font-bold text-2xl sm:text-3xl md:text-5xl max-w-lg leading-relaxed sm:leading-snug">
          Discover Your Style <br className="block sm:hidden" />
          <span className="block sm:inline text-indigo-600 mt-1 sm:mt-0">
            Premium delivered to your Door
          </span>
        </h1>

        <p className="text-gray-600 mt-4 text-sm sm:text-base md:text-lg max-w-md">
          Shop the latest trends with premium quality, delivered straight to your home.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start mt-6 gap-3">
          <button
            className="bg-indigo-600 text-white px-6 py-3 rounded-full text-sm sm:text-base font-medium flex items-center space-x-2 hover:bg-indigo-700 transition"
            type="button"
          >
            <span>Latest Collection</span>
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.821 11.999h13.43m0 0-6.714-6.715m6.715 6.715-6.715 6.715"
                stroke="#fff"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Right Image */}
      <div className="mt-10 md:mt-0 md:ml-12 flex justify-center w-full md:w-auto">
        <img
          alt="Hero"
          className="w-full max-w-xs sm:max-w-sm md:max-w-md h-auto rounded-xl hover:scale-105 transition duration-300 object-cover shadow-lg"
          src={hero_image}
        />
      </div>
    </main>
  );
}

export default Hero;
