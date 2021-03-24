import React from "react";
import SubmitButton from "../SubmitButton/SubmitButton";
import httpRequest from "../../network/http";
import { swalFail } from "../../utils/swalResponse";
import FormInput from "../FormInput/FormInput";

const FormSearchProduct = ({ readSearchData, search, products, auth, setProducts}) => {
  const searchProduct = (e) => {
    e.preventDefault();
    if (!search) return;
    httpRequest.createData(`products/search/${search}`, null, auth, null)
      .then((response) => {
        if (response.product[0]) {
          const product = {
            product: response.product[0]._id,
            quantity: 0,
          };
          product.price = Number(response.product[0].price);
          product.name = response.product[0].name;
          setProducts([product, ...products]);
        } else {
          swalFail("No results");
        }
      });
  };

  return (
    <form onSubmit={searchProduct}>
      <FormInput
        label="Search"
        type="text"
        placeholder="Search product"
        name="products"
        handleChange={readSearchData}
        id="product"
        value={search}
        required
      />
      <SubmitButton value="Search" />
    </form>
  );
};

export default FormSearchProduct;
