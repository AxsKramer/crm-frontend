import React from "react";
import SubmitButton from "../SubmitButton/SubmitButton";
import httpRequest from "../../network/http";
import { swalFail } from "../../utils/swalResponse";
import FormInput from "../FormInput/FormInput";
import './FormSearchProduct.css';

const FormSearchProduct = ({ readSearchData, search, products, auth, setProducts, filterProducts, setfilterProducts, setSearch}) => {
  const searchProduct = (e) => {
    e.preventDefault();
    if (!search) return;
    httpRequest.createData(`products/search/${search}`, null, auth, null)
      .then((response) => setfilterProducts(response.product))
      .catch(error => swalFail("No results"));
  };

  const addItem = (id, price, name, image) => {
    const product = {
      product: id,
      price,
      name,
      image,
      quantity: 0,
    };
    setProducts([product, ...products]);
    setfilterProducts([]);
    setSearch('');
  }

  return (
    <form onSubmit={searchProduct}>
      <FormInput
        label="Search"
        type="text"
        placeholder="example: women, model, shoes, tennis"
        name="products"
        handleChange={readSearchData}
        id="product"
        value={search}
        required
      />
      <SubmitButton value="Search" />
      <table className='filtered-products'>
        <thead>
          <tr>
            <th>Product</th>
            <th>Name</th>
            <th>Price $(USD)</th>
            <th>To Order</th>
          </tr>
        </thead>
        <tbody>
          {filterProducts.map((product) => (
            <tr key={product._id}>
              <td>
                <img className='filtered-product-img' src={`https://crm-api-backend.herokuapp.com/static/${product.image}`} alt={product.name} />
              </td>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>
                <button className='btn bg-blue btn-block' onClick={() => addItem(product._id, product.price, product.name, product.image)}>Add</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </form>
  );
};

export default FormSearchProduct;
