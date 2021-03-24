import React from "react";
import ProductDetails from '../ProductDetails/ProductDetails';
import ProductButtons from '../ProductButtons/ProductButtons';
import './Product.css';

const Product = ({ product, setProducts }) => {
  return (
    <li className="li-product">
      <ProductDetails product={product} />
      <ProductButtons product={product} setProducts={setProducts} />
    </li>
  );
};

export default Product;
