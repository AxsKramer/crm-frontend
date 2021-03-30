import React, { useState, useEffect, useContext } from "react";
import {useHistory} from 'react-router-dom';
import httpRequest from "../../network/http";
import { swalFail, swalSuccess } from "../../utils/swalResponse";
import { CRMContext } from "../../context/authContext";
import ClientDetails from '../../components/ClientDetails/ClientDetails';
import ProductDetails from '../../components/ProductDetails/ProductDetails';
import UserDetails from '../../components/UserDetails/UserDetails';
import OrderDetails from '../../components/OrderDetails/OrderDetails';
import Spinner from "../../components/Spinner/Spinner";
import "./Restore.css";

const Restore = () => {
  const [items, setItems] = useState({});
  const [auth, setAuth] = useContext(CRMContext);
  const [clients, setClients] = useState([]);
  const history = useHistory();

  useEffect(() => {
    if(auth.token !== "" && auth.auth){
      httpRequest.getAll("trash", auth)
        .then((data) => setItems(data.deletedItems))
        .catch((error) => swalFail(error.response.data.message));
      httpRequest.getAll('clients', auth)
      .then((data) => setClients(data.clients))
      .catch((error) => swalFail(error.response.data.message))
    }else{
      history.push('/');
    }
  }, []);

  const getClient = (clientInOrder) => {
    let client = items.clients.find(client => client._id === clientInOrder.client);
    if(!client){
      client = clients.find(client => client._id === clientInOrder.client);
    }
    return client;
  }

  const restore = (endpoint, body ) => {
    httpRequest.updateData(endpoint, body, auth)
      .then(data => swalSuccess(data.message))
      .catch(error => swalFail(error.response.data.message))
      .finally(() =>  history.push('/clients'));
  }

  return (
    <div className="container">
      <div className='sub-container'>
        <h2>Clients</h2>
        <hr />
        <div className='container-clients'>
          {
            Object.values(items).length > 0
              ? items.clients.map(client => (
                <div key={client._id} className='details '>
                  <ClientDetails  client={client} />
                  <button onClick={() => restore(`clients/${client._id}`,{...client, state: true} )} className='btn bg-blue text-center'>
                    <i className="fas fa-trash-restore "></i>
                  </button>
                </div>
              ))
              : <Spinner />
          }
        </div>        
      </div>
      <div className='sub-container'>
      <h2>Products</h2>
        <hr />
        <div className='container-clients'>
          {
            Object.values(items).length > 0
              ? items.products.map(product => (
                <div key={product._id} className='details'>
                  <ProductDetails  product={product} />
                  <button onClick={() => restore(`products/${product._id}`,{...product, state: true} )} className='btn bg-blue text-center'>
                    <i className="fas fa-trash-restore "></i>
                  </button>
                </div>
              ))
              : <Spinner />
          }
        </div> 
      </div>
      <div className='sub-container'>
      <h2>Orders</h2>
        <hr />
        <div className='container-clients'>
          {
            Object.values(items).length > 0
              ? items.orders.map(order => (
                <div key={order._id} className='details'>
                  <OrderDetails  order={order} client={getClient(order)} />
                  <button onClick={() => restore(`orders/${order._id}`,{...order, state: true} )} className='btn bg-blue text-center'>
                    <i className="fas fa-trash-restore "></i>
                  </button>
                </div>
              ))
              : <Spinner />
          }
        </div> 
      </div>
      <div className='sub-container'>
      <h2>Users</h2>
        <hr />
        <div className='container-clients'>
          {
            Object.values(items).length > 0
              ? items.users.map(user => (
                <div key={user._id} className='details'>
                  <UserDetails  user={user} width='100'/>
                  <button  className='btn bg-blue text-center'>
                    <i className="fas fa-trash-restore "></i>
                  </button>
                </div>
              ))
              : <Spinner />
          }
        </div> 
      </div>

    </div>
  );
};

export default Restore;
