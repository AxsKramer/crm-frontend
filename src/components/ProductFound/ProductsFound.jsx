import React from "react";
import ProductsFoundActionButtons from '../ProductsFoundActionButtons/ProductsFoundActionButtons';
import './ProductsFound.css';

const FormProducts = ({product,products, index, setProducts}) => {

  const subtractProducts = (index) => {
    const allProducts = [...products];
    if (allProducts[index].quantity === 0) return;
    allProducts[index].quantity--;
    setProducts(allProducts);
  };

  const increaseProducts = (index) => {
    const allProducts = [...products];
    allProducts[index].quantity++;
    setProducts(allProducts);
  };

  const deleteProductOrder = (id) => {
    const allProducts = products.filter((product) => product.product !== id);
    setProducts(allProducts);
  };

  return (
    <li className='li-form-product'>
      <div className='li-form-product-div'>
        <p><strong>Product:</strong> {product.name}</p>
        <p><strong>Price:</strong> $ {product.price} USD</p>
      </div>
      <ProductsFoundActionButtons 
        subtractProducts={subtractProducts}
        increaseProducts={increaseProducts}
        deleteProductOrder={deleteProductOrder}
        index={index}
        product={product}
      />
    </li>
  );
};

export default FormProducts;
