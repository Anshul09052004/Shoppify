import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext';
import { useParams } from 'react-router-dom';
import Breadcrum from '../Components/Breadcrum';
import { ProductDisplay } from '../Components/ProductDisplay';

function Product() {
  const { all_product } = useContext(ShopContext);
  const { id } = useParams();   // 👈 yaha productId nahi, sirf id
  const product = all_product.find((e) => e.id === Number(id));

  if (!product) {
    return <h2 className="text-center text-red-500 mt-10">⚠️ Product not found</h2>;
  }

  return (
    <>
      <div>
        <Breadcrum product={product} />
        <ProductDisplay product={product} />
      </div>
    </>
  )
}
export default Product;
