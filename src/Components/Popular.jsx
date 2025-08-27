import React from "react";
import Item from "./item";
import data_products from "../assets/Assets/Frontend_Assets/data.js";

function Popular() {
  return (
    <div className="flex flex-col items-center py-10 px-6 sm:px-12">
      {/* Heading */}
      <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
        Popular In Womens
      </h1>
      <hr className="w-32 border-b-2 border-pink-500 mb-8" />

      {/* Products Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full max-w-6xl">
        {data_products.map((item, i) => (
          <div key={item.id || i} className="flex justify-center">
            <Item
              id={item.id}
              name={item.name}
              image={item.image}
              newprice={item.new_price}
              oldPrice={item.old_price}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Popular;
