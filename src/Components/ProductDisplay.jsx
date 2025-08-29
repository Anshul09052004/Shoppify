import star_icon from "../assets/Assets/Frontend_Assets/star_icon.png";
import star_dull_icon from "../assets/Assets/Frontend_Assets/star_dull_icon.png";

export function ProductDisplay({ product }) {
  return (
    <section className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-12">
      {/* Left Section - Product Images */}
      <div className="flex flex-col md:flex-row gap-6">
        {/* Small Images */}
        <div className="flex md:flex-col gap-4 md:w-1/5">
          {[1, 2, 3, 4].map((i) => (
            <img
              key={i}
              src={product.image}
              alt={product.name}
              className="w-20 h-20 object-cover rounded-xl cursor-pointer border hover:border-indigo-500 transition"
            />
          ))}
        </div>

        {/* Main Image */}
        <div className="flex-1 flex items-center justify-center">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-[450px] object-contain rounded-2xl shadow-md"
          />
        </div>
      </div>

      {/* Right Section - Product Details */}
      <div className="space-y-6">
        {/* Product Name */}
        <h1 className="text-3xl font-semibold text-gray-800">{product.name}</h1>

        {/* Rating */}
        <div className="flex items-center gap-2">
          {[...Array(4)].map((_, i) => (
            <img key={i} src={star_icon} alt="star" className="w-5 h-5" />
          ))}
          <img src={star_dull_icon} alt="star" className="w-5 h-5" />
          <p className="text-gray-500 text-sm">(122 reviews)</p>
        </div>

        {/* Price */}
        <div className="flex items-center gap-4">
          <span className="text-lg line-through text-gray-400">
            ${product.old_price}
          </span>
          <span className="text-2xl font-bold text-indigo-600">
            ${product.new_price}
          </span>
        </div>

        {/* Description */}
        <p className="text-gray-600 leading-relaxed">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae impedit
          ullam iure itaque natus fuga, pariatur.
        </p>

        {/* Select Size */}
        <div>
          <h2 className="text-lg font-medium mb-3">Select Size</h2>
          <div className="flex gap-3">
            {["S", "M", "L", "XL", "XXL"].map((size) => (
              <button
                key={size}
                className="px-4 py-2 border rounded-lg hover:bg-indigo-600 hover:text-white transition"
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* Add to Cart */}
        <div className="space-y-3">
          <button className="px-6 py-3 bg-indigo-600 text-white font-medium rounded-xl shadow hover:bg-indigo-700 transition">
            ADD TO CART
          </button>
          <p className="text-gray-600">
            <span className="font-semibold">Category:</span> Women, T-shirts, Casual Tops
          </p>
          <p className="text-gray-600">
            <span className="font-semibold">Tags:</span> Modern, Trendy, Latest
          </p>
        </div>
      </div>
    </section>
  );
}
