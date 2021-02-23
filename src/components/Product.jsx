import React from "react";
import {Link} from 'react-router-dom';
import httpRequest from "../network/http";
import { swalFail, swalSuccess } from "../utils/swalResponse";
import Swal from "sweetalert2";

const Product = ({ product, setProducts }) => {
  const deleteProduct = (id) => {
    Swal.fire({
      text: "Do you want to delete this product ?",
      type: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Delete it",
      cancelButtonText: "No, Cancel",
    }).then((result) => {
      if (result.value) {
        httpRequest.deleteById(`products/${id}`, null)
        .then(response => {
          swalSuccess(response.message)
          httpRequest.getAll('products', null)
            .then(response => setProducts(response.products))
        })
        .catch(error => swalFail(error.message));
      }
    });
  };

  const { _id, name, price, image, stock } = product;

  return (
    <li className="li-product">
      <div >
        { 
          image 
            ? <img className='img-product' src={`http://localhost:3000/static/${image}`} alt="image" />
            : null
        }
        <p className='text-product'>{name}</p>
        <p className='text-product'>$ {price} USD</p>
        <p className='text-product'>Stock: {stock}</p>
      </div>
      <div className='action-btns'>
        <Link to={`/products/product/edit/${_id}`} className="btn bg-blue edit">
          <i className="fas fa-pen-alt"></i>
        </Link>

        <button
          type="button"
          className="btn bg-red"
          onClick={() => deleteProduct(_id)}
        >
          <i class="far fa-trash-alt"></i>
        </button>
      </div>
    </li>
  );
};

export default Product;
