import React from "react";

const FormProduct = ({handleChange, handleSubmit, readFile, product, isEditMode}) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className="field">
        <label htmlFor="product">Product: </label>
        <input
          type="text"
          id="product"
          name="name"
          placeholder="Name´s product "
          onChange={handleChange}
          value={product.name}
          required
        />
      </div>

      <div className="field">
        <label htmlFor="price">Price:</label>
        <input
          type="number"
          name="price"
          min="0"
          step="0.1"
          placeholder="price"
          id="price"
          onChange={handleChange}
          value={product.price}
          required
        />
      </div>

      <div className="field">
        <label htmlFor="image">Image:</label>
        <input
          type="file"
          name="image"
          id="image"
          onChange={readFile}
          required
          accept='image/jpg, image/jpeg, image/png'
        />
      </div>

      <div className="field">
        <label htmlFor="stock">Stock: </label>
        <input
          type="number"
          id="stock"
          min="0"
          step="1"
          name="stock"
          placeholder="quantity of products "
          onChange={handleChange}
          value={product.stock}
          required
        />
      </div>
      <input
        type="submit"
        className="btn btn-block bg-blue"
        value={isEditMode ? "SAVE" : "ADD PRODUCT"}
      />
    </form>
  );
};

export default FormProduct;
