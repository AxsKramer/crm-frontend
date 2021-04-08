import React, {useContext} from "react";
import { CRMContext } from '../../context/authContext';
import OrderDetails from '../OrderDetails/OrderDetails';
import OrderTable from '../OrderTable/OrderTable';
import {deleteOrder} from '../../utils/deleteItems';
import './Order.css';

const Order = ({ order, orders, setOrders }) => {
  const [auth, setAuth] = useContext(CRMContext);
  const client = order.client;

  return (
    <li className='li-orders-details'>
      <div className='grid-order-details'>
        <OrderDetails order={order} client={client} />
        <div>
          <OrderTable order={order} />
          <button 
            type="button" 
            className="btn bg-red btn-block " 
            onClick={() => deleteOrder(order._id, auth, orders, setOrders )} 
            title='Delete order'
          >
            <i className="far fa-trash-alt"></i>
          </button>
        </div>
      </div>
    </li>
  );
};

export default Order;
