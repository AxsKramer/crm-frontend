import React, { useState } from "react";
import FormProduct from "../components/FormProduct";

const NewProduct = () => {
  const [product, setProduct] = useState({ name: "", price: 0, stock: 0 });
  const [file, setFile] = useState("");

  const readFile = (e) => setFile(e.target.files[0]);

  if (!product) return <h2>No products</h2>;

  return (
    <div className="new-item">
      <h2>New Product</h2>
      <FormProduct
        product={product}
        setProduct={setProduct}
        file={file}
        readFile={readFile}
      />
    </div>
  );
};
export default NewProduct;
