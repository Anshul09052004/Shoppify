import React from "react";
import data_product from "../assets/Assets/Frontend_Assets/data.js";
import Item from "./item.jsx";

function RelatedProduct() {
  return (
    <section className="max-w-7xl mx-auto px-6 sm:px-10 md:px-16 lg:px-24 py-12">
      {/* Heading */}
      <h1 className="text-2xl sm:text-3xl font-semibold text-gray-800 text-center">
        Related Products
      </h1>
      <hr className="w-24 h-1 bg-indigo-600 mx-auto my-4 rounded-full" />

      {/* Products Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mt-8">
        {data_product.map((item) => (
          <div
            key={item.id}
            className="group bg-white shadow-md rounded-2xl overflow-hidden transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg"
          >
            <Item
              id={item.id}
              name={item.name}
              image={item.image}
              newprice={item.new_price}
              oldPrice={item.old_price}
              className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default RelatedProduct;
