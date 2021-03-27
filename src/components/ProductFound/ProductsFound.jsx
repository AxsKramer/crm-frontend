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
      <table className='li-table-product' border="1">
        <thead>
          <tr>
            <th>Image </th>
            <th>Product </th>
            <th>Price $(USD)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <img className='filtered-product-img' src={`https://crm-api-backend.herokuapp.com/static/${product.image}`} alt={product.name} />
            </td>
            <td>{product.name} </td>
            <td>{product.price} </td>
          </tr>

        </tbody>
      </table>
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
