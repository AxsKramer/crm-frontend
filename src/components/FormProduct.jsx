import React, {useContext} from "react";
import { useHistory, useParams } from "react-router-dom";
import httpRequest from "../network/http";
import { swalFail, swalSuccess } from "../utils/swalResponse";
import {CRMContext} from '../context/authContext';
import FormInput from '../components/FormInput/FormInput';
import SubmitButton from './SubmitButton/SubmitButton';

const FormProduct = ({product, readFile, isEditMode, setProduct, file}) => {
  const history = useHistory();
  const [auth, setAuth] = useContext(CRMContext);
  const params = useParams();
  const handleChange = (e) => setProduct({ ...product, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", product.name);
    formData.append("price", product.price);
    formData.append("stock", product.stock);
    formData.append("image", file);

    if(isEditMode){
      httpRequest.updateData(`products/${params.productId}`, formData, auth, true)
      .then((response) => {
        swalSuccess(response.message);
        history.push("/products");
      })
      .catch((error) => swalFail(error.message));
    }else{
      httpRequest.createData("products", formData, auth, true)
        .then((response) => {
          swalSuccess(response.message);
          history.push("/products");
        })
        .catch((error) => swalFail(error.message));
    }

  };
  return (
    <form onSubmit={handleSubmit}>
      <FormInput
        label='Product: '
        type="text"
        id="product"
        name="name"
        placeholder="Product "
        handleChange={handleChange}
        value={product.name}
        required
      />
      <FormInput
        label='Price: '
        type="number"
        name="price"
        min="0"
        step="0.1"
        placeholder="Price"
        id="price"
        handleChange={handleChange}
        value={product.price}
        required
      />
      <FormInput
        label='Image: '
        type="file"
        name="image"
        id="image"
        handleChange={readFile}
        required
        accept='image/jpg, image/jpeg, image/png'
      />
      <FormInput
        label='Stock: '
        type="number"
        id="stock"
        min="0"
        step="1"
        name="stock"
        placeholder="quantity of products "
        handleChange={handleChange}
        value={product.stock}
        required
      />
      <SubmitButton value={isEditMode ? "SAVE" : "ADD PRODUCT"}/>
    </form>
  );
};

export default FormProduct;
