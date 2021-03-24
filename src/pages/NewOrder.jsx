import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import httpRequest from "../network/http";
import { swalFail } from "../utils/swalResponse";
import { CRMContext } from "../context/authContext";

import FormSearchProduct from "../components/FormSearchProduct/FormSearchProduct";
import ProductsFound from "../components/ProductFound/ProductsFound";
import ClientDetails from "../components/ClientDetails/ClientDetails";
import MakeOrder from "../components/MakeOrder/MakeOrder";

const NewOrder = () => {
  const params = useParams();
  const [client, setClient] = useState({});
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [auth, setAuth] = useContext(CRMContext);

  useEffect(() => {
    httpRequest.getById(`clients/${params.clientId}`, auth)
      .then((response) => setClient(response.client))
      .catch((error) => swalFail(error.message));
    updateTotal();
  }, [products]);

  const readSearchData = (e) => setSearch(e.target.value);

  const updateTotal = () => {
    if (products.length === 0) {
      setTotal(0);
      return;
    }
    let newTotal = products.reduce(
      (accum, product) => accum + product.quantity * product.price,
      0);
    setTotal(newTotal);
  };

  return (
    <div className="container">
      <h2>New Order</h2>
      <div className="grid-container-new-order">
        <ClientDetails client={client}>
          <hr />
          <p>
            <strong>Total:</strong> $ {total}{" "}
          </p>
          <MakeOrder total={total} products={products} auth={auth} />
        </ClientDetails>
        <FormSearchProduct
          search={search}
          auth={auth}
          products={products}
          setProducts={setProducts}
          readSearchData={readSearchData}
        />
        <ul>
          {products.map((product, index) => (
            <ProductsFound
              key={product.product}
              product={product}
              products={products}
              index={index}
              setProducts={setProducts}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NewOrder;
