import React, { useContext } from "react";
import Item from "../Components/item.jsx";
import { ShopContext } from "../Context/ShopContext";
import dropdown_icon from "../assets/Assets/Frontend_Assets/dropdown_icon.png";




function ShopCategory(props) {
  const { all_product } = useContext(ShopContext);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Banner */}
      <div className="mb-10">
        <img
          src={props.banner}
          alt="Category Banner"
          className="w-full h-64 md:h-80 object-cover rounded-2xl shadow-lg"
        />
      </div>

      {/* Top bar */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
        <p className="text-gray-600 text-sm md:text-base">
          <span className="font-medium text-gray-900">Showing 1–12</span> out of 36 Products
        </p>
        <div className="flex items-center gap-2 text-gray-700 cursor-pointer border rounded-lg px-3 py-2 hover:bg-gray-100">
          <span>Sort by</span>
          <img src={dropdown_icon} alt="Dropdown" className="w-3 h-3" />
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {
          all_product.map((item, i) => {
            if (props.category===item.category) {
              return  <Item
              id={item.id}
               key={item.id}  
              name={item.name}
              image={item.image}
              newprice={item.new_price}
              oldPrice={item.old_price}
              className="w-full h-full object-cover"
            />

            }
            else {
              return null;
            }
          })
        }
      </div>
    </div>
  );
}

export default ShopCategory;





