import exclusive_image from "../assets/Assets/Frontend_Assets/exclusive_image.png";

function Offer() {
  return (
    <main className=" mb-10 rounded-3xl bg-amber-100 flex flex-col md:flex-row items-center text-center md:text-left justify-between mt-16 py-12 px-6 sm:px-10 md:px-24 max-w-7xl mx-auto w-full">
      {/* Left Content */}
      <div className="flex flex-col items-center md:items-start">
        <h1 className="text-gray-900 font-semibold text-3xl sm:text-4xl md:text-5xl max-w-2xl leading-tight">
          Exclusive <br />
          <span className="text-indigo-700">Offers For You</span>
        </h1>

        <p className="text-gray-600 mt-4 font-medium">
          ONLY ON BEST SELLERS PRODUCTS
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start mt-8 gap-3">
          <button className="bg-indigo-600 px-6 py-3 rounded-full text-white text-sm font-medium cursor-pointer hover:bg-indigo-700 transition">
            Check Now
          </button>
        </div>
      </div>

      {/* Right Image */}
      <div className="mt-10 md:mt-0 md:ml-12 flex justify-center w-full md:w-auto">
        <img
          alt="Offer"
          className="w-full max-w-xs sm:max-w-sm md:max-w-md h-auto rounded-lg hover:scale-105 transition duration-300 object-cover shadow-lg"
          src={exclusive_image}
        />
      </div>
    </main>
  );
}

export default Offer;
