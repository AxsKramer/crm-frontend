import React, { useState, useRef } from "react";
import { useHistory } from "react-router-dom";
import httpRequest from "../network/http";
import { swalFail, swalSuccess } from "../utils/swalResponse";
import FormProduct from './FormProduct';

const NewProduct = (props) => {
  const [product, setProduct] = useState({ name: "", price: 0, stock: 0 });

  const [file, setFile] = useState("");

  const history = useHistory();

  const handleChange = (e) => setProduct({ ...product, [e.target.name]: e.target.value });
  
  const readFile = (e) => setFile(e.target.files[0]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", product.name);
    formData.append("price", product.price);
    formData.append("stock", product.stock);
    formData.append("image", file);

    httpRequest.createData("products", formData, null, true)
      .then((response) => {
        swalSuccess(response.message);
        history.push("/products");
      })
      .catch((error) => swalFail(error.message));
  };

  if (!product) return <h2>No products</h2>;

  return (
    <div className="form-container">
      <h2>New Product</h2>
      <FormProduct 
        product={product}
        file={file}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        readFile={readFile}
      />
    </div>
  );
}
export default NewProduct;
