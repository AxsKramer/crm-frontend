import React, { useEffect, useState,useContext } from 'react';
import {useParams, useHistory} from 'react-router-dom';
import {swalFail} from '../utils/swalResponse';
import httpRequest from '../network/http';
import {CRMContext} from '../context/authContext';
import FormProduct from '../components/FormProduct';

const EditProduct = () => {
  const history = useHistory();
  const params = useParams();
  const [product, setProduct] = useState({name: '', price: 0, stock: 0, image: ''});
  const [file, setFile] = useState('');
  const [auth, setAuth] = useContext(CRMContext);

  useEffect(() => {
    if(!auth.auth || (auth.auth && auth.token === '')){
      history.push('/');
    }
    httpRequest.getById(`products/${params.productId}`, auth)
      .then(response => setProduct(response.product))
      .catch(error => swalFail(error.message));
  }, []);

  const readFile = (e) => setFile(e.target.files[0]);

  return (
    <div className="new-item">
      <h2>Edit Product</h2>
      <FormProduct 
        product={product}
        setProduct={setProduct}
        file={file}
        readFile={readFile}
        isEditMode
      />
    </div>
  )
}

export default EditProduct
