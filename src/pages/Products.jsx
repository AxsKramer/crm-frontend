import React, { useEffect, useState, useContext } from "react";
import httpRequest from "../network/http";
import { Link, useHistory } from "react-router-dom";
import { CRMContext } from "../context/authContext";
import { swalFail } from "../utils/swalResponse";
import Product from '../components/Product';

const Products = () => {
  const [auth, setAuth] = useContext(CRMContext);
  const [products, setProducts] = useState([]);
  const history = useHistory();

  useEffect(() => {
    if (auth.token !== "") {
      httpRequest
        .getAll("products", null)
        .then((data) => setProducts(data.products))
        .catch((error) => {
          swalFail(error.message);
          if (error.response.status === 500) {
            history.push("/");
          }
        });
    }else{
      history.push("/");
    }
  }, []);


  return (
    <>
      <Link to={"/products/product/new"} className="btn-circular bg-blue pos-absolute" title='New product'>
        <i className="fas fa-plus-circle new-user-icon"></i>
      </Link>
      {
        (products.length > 0)
          ? (
            <>
              <h2>Products</h2>
              <ul className='products'>
                {
                  products.map(product => <Product key={product._id} product={product} setProducts={setProducts} />)
                }
              </ul>
            </>
          ) : <h2>No products</h2>
      }
    </>
  );
};

export default Products;
