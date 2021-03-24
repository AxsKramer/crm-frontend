import React from "react";

const ProductsFoundActionButtons = ({product, index, subtractProducts, increaseProducts, deleteProductOrder }) => {
  return (
    <>
      <div className="li-form-product-div">
        <i className="fas fa-minus" onClick={() => subtractProducts(index)}></i>
        <p>{product.quantity}</p>
        <i className="fas fa-plus" onClick={() => increaseProducts(index)}></i>
      </div>
      <button
        type="button"
        className="btn bg-red btn-block"
        onClick={() => deleteProductOrder(product.product)}
      >
        <i className="far fa-trash-alt"></i>
      </button>
    </>
  );
};

export default ProductsFoundActionButtons;
