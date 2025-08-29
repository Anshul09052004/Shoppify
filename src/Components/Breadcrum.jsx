import React from 'react';
import arrow_icon from "../assets/Assets/Admin_Assets/arrow_icon.svg";

function Breadcrum({ product }) {
  if (!product) return null; // null return karega agar product undefined hai

  return (
    <div className="flex items-center space-x-2 text-gray-600">
      <span>HOME</span>
      <img src={arrow_icon} alt="" />
      <span>SHOP</span>
      <img src={arrow_icon} alt="" />
      <span>{product.category}</span>
      <img src={arrow_icon} alt="" />
      <span>{product.name}</span>
    </div>
  );
}

export default Breadcrum;
