import React, { useEffect, useState, useContext } from "react";
import httpRequest from "../../network/http";
import { useHistory } from "react-router-dom";
import { CRMContext } from "../../context/authContext";
import { swalFail } from "../../utils/swalResponse";
import Product from '../../components/Product/Product';
import Spinner from '../../components/Spinner/Spinner';
import RoundButton from "../../components/RoundButton/RoundButton";
import './Products.css';

const Products = () => {
  const [auth, setAuth] = useContext(CRMContext);
  const [products, setProducts] = useState([]);
  const history = useHistory();

  useEffect(() => {
    if (auth.token !== "" && auth.auth) {
      httpRequest.getAll("products", auth)
        .then((data) => setProducts(data.products))
        .catch((error) => swalFail(error.message));
    }else{
      history.push("/");
    }
  }, []);

  return (
    <div className='container'>
      <RoundButton fontawesome='fas fa-plus-circle' url='/products/product/new' title='New product'/>
      <h2>Products</h2>
      {!products && <h2>No products</h2>}
      {
        (products.length > 0)
          ? (
            <ul className='products'>
              {
                products.map(product => <Product key={product._id} product={product} setProducts={setProducts} />)
              }
            </ul>
          ) : <Spinner />
      }
    </div>
  );
};

export default Products;
