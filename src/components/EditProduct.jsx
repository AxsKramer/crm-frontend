import React, { useEffect, useState } from 'react';
import {useParams, useHistory} from 'react-router-dom';
import {swalFail,swalSuccess} from '../utils/swalResponse';
import httpRequest from '../network/http';
import FormProduct from './FormProduct';

const EditProduct = () => {

  const history = useHistory();
  const params = useParams();
  const [product, setProduct] = useState({name: '', price: 0, stock: 0, image: ''});
  const [file, setFile] = useState('');

  useEffect(() => {
    httpRequest.getById(`products/${params.productId}`)
      .then(response => setProduct(response.product))
      .catch(error => swalFail(error.message));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", product.name);
    formData.append("price", product.price);
    formData.append("stock", product.stock);
    formData.append("image", file);

    httpRequest.updateData(`products/${params.productId}`, formData, null, true)
      .then((response) => {
        swalSuccess(response.message);
        history.push("/products");
      })
      .catch((error) => swalFail(error.message));
  };

  const handleChange = (e) => setProduct({ ...product, [e.target.name]: e.target.value });

  const readFile = (e) => setFile(e.target.files[0]);

  return (
    <div className="form-container">
      <h2>Edit Product</h2>
      <FormProduct 
        product={product}
        file={file}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        readFile={readFile}
        isEditMode
      />
    </div>
  )
}

export default EditProduct
