import React, {useState, useEffect, useContext} from 'react';
import httpRequest from '../network/http';
import { swalFail } from '../utils/swalResponse';
import Order from '../components/Order/Order';
import Spinner from '../components/Spinner/Spinner';
import {CRMContext} from '../context/authContext'
import {useHistory} from 'react-router-dom';

const Orders = () => {

  const [orders, setOrders] = useState([]);
  const [auth, setAuth] = useContext(CRMContext);
  const history = useHistory();

  useEffect(() => {
    if (auth.token !== "" && auth.auth) {
      httpRequest.getAll('orders', auth)
        .then(response => setOrders(response.orders))
        .catch(error => swalFail(error.message));
    }else{
      history.push('/');
    }
  },[]);

  return (  
    <div className='container'>
      <h2>Orders</h2>
      <ul>
        {
          orders.length > 0
            ? orders.map(order => <Order key={order._id} order={order} orders={orders} setOrders={setOrders} />)
            : <Spinner />
        }
      </ul>
    </div>
  );
}
 
export default Orders;