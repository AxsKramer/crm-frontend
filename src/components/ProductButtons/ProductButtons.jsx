import React, {useContext} from "react";
import {Link} from 'react-router-dom';
import httpRequest from "../../network/http";
import { swalFail, swalSuccess } from "../../utils/swalResponse";
import Swal from "sweetalert2";
import {CRMContext} from '../../context/authContext';

const ProductButtons = ({product, setProducts}) => {
  const [auth, setAuth] = useContext(CRMContext);

  const deleteProduct = (id) => {
    Swal.fire({
      text: "Do you want to delete this product ?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Delete it",
      cancelButtonText: "No, Cancel",
    }).then((result) => {
      if (result.value) {
        httpRequest.deleteById(`products/${id}`, auth)
        .then(response => {
          swalSuccess(response.message)
          httpRequest.getAll('products', auth)
            .then(response => setProducts(response.products))
        })
        .catch(error => swalFail(error.message));
      }
    });
  };

  return (
    <div className="action-btns">
      <Link
        to={`/products/product/edit/${product._id}`}
        className="btn bg-blue"
      >
        <i className="fas fa-pen-alt"></i>
      </Link>
      <button
        type="button"
        className="btn bg-red"
        onClick={() => deleteProduct(product._id)}
      >
        <i className="far fa-trash-alt"></i>
      </button>
    </div>
  );
};

export default ProductButtons;
