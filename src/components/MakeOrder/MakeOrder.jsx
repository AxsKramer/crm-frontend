import React from "react";
import { useHistory, useParams } from "react-router-dom";
import { swalFail, swalSuccess } from "../../utils/swalResponse";
import httpRequest from "../../network/http";

const MakeOrder = ({total,products, auth, user}) => {

  const history = useHistory();
  const params = useParams();
  
  const makeOrder = (e) => {
    e.preventDefault();
    const order = {
      client: params.clientId,
      order: products,
      total: total,
      user
    };

    httpRequest.createData(`orders/new/${params.clientId}`, order, auth, null)
      .then((response) => {
        swalSuccess(response.message);
        history.push("/orders");
      })
      .catch((error) => swalFail(error.message));
  };
  return (
    <>
      {total > 0 ? (
        <form onSubmit={makeOrder}>
          <input
            type="submit"
            className="btn bg-green btn-block"
            value="Make order"
          />
        </form>
      ) : null}
    </>
  );
};

export default MakeOrder;
