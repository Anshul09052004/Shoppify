import React, { useContext } from "react";
import Item from "../Components/item.jsx";
import { ShopContext } from "../Context/ShopContext";
import dropdown_icon from "../assets/Assets/Frontend_Assets/dropdown_icon.png";




function ShopCategory(props) {
  const { all_product } = useContext(ShopContext);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Banner */}
      <div className=" bg-amber-100 mb-10 rounded-2xl shadow-lg overflow-hidden bg-skin-500">
        <img
          src={props.banner}
          alt="Category Banner"
          className="w-full h-64 md:h-80 lg:h-96 object-contain"
        />
      </div>






      {/* Top bar */}
      <div className=" flex flex-col sm:flex-row justify-between sm:items-center mb-6 gap-3">
        {/* Left: Text */}
        <p className="text-xl md:text-2xl text-gray-600  sm:text-base text-center sm:text-left">
          <span className="font-medium text-gray-900">Showing 1–12</span> out of 36 Products
        </p>
      </div>


      {/* Products Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {
          all_product.map((item, i) => {
            if (props.category === item.category) {
              return <Item
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





