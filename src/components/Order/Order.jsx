import React, {useContext} from "react";
import {useHistory} from 'react-router-dom';
import httpRequest from "../../network/http";
import { swalFail, swalSuccess } from "../../utils/swalResponse";
import Swal from "sweetalert2";
import { CRMContext } from '../../context/authContext';
import OrderDetails from '../OrderDetails/OrderDetails';
import OrderTable from '../OrderTable/OrderTable';
import './Order.css';

const Order = ({ order, orders, setOrders }) => {
  const history = useHistory();
  const [auth, setAuth] = useContext(CRMContext);
  const client = order.client;

  const deleteOrder = (id) => {
    Swal.fire({
      text: "Do you want to delete this order ?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Delete it",
      cancelButtonText: "No, Cancel",
    }).then((result) => {
      if (result.value) {
        httpRequest.deleteById(`orders/${id}`, auth)
          .then(response => {
            swalSuccess(response.message);
            history.push('/orders');
          }).catch(error => swalFail(error.message))
        const newOrders = orders.filter(ord => ord._id !== id );
        setOrders(newOrders);
      }
    });
  }

  return (
    <li className='li-orders-details'>
      <div className='grid-order-details'>
        <OrderDetails order={order} client={client} />
        <div>
          <OrderTable order={order} />
          <button type="button" className="btn bg-red btn-block " onClick={() => deleteOrder(order._id)} title='Delete order'>
            <i className="far fa-trash-alt"></i>
          </button>
        </div>
      </div>
    </li>
  );
};

export default Order;
