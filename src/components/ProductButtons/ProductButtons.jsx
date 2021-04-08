import React, {useContext} from "react";
import {Link} from 'react-router-dom';
import {CRMContext} from '../../context/authContext';
import {deleteProduct} from '../../utils/deleteItems';

const ProductButtons = ({product, setProducts}) => {
  const [auth, setAuth] = useContext(CRMContext);

  return (
    <div className="action-btns">
      <Link to={`/products/product/edit/${product._id}`} className="btn bg-blue">
        <i className="fas fa-pen-alt"></i>
      </Link>
      <button
        type="button"
        className="btn bg-red"
        onClick={() => deleteProduct(product._id, auth, setProducts)}
      >
        <i className="far fa-trash-alt"></i>
      </button>
    </div>
  );
};

export default ProductButtons;
