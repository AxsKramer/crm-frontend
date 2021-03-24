import React from "react";

const ProductDetails = ({product}) => {
  const {image, name, price, stock} = product;
  return (
    <div>
      {image ? (
        <img
          className="img-product"
          src={`https://crm-api-backend.herokuapp.com/static/${image}`}
          alt="image"
        />
      ) : null}
      <p className="text-product">{name}</p>
      <p className="text-product">$ {price} USD</p>
      <p className="text-product">Stock: {stock}</p>
    </div>
  );
};

export default ProductDetails;
