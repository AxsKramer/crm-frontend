import React, { useContext, useEffect, useState } from 'react';
import {CRMContext} from '../context/authContext.js';
import {Link, useHistory} from 'react-router-dom';
import Client from '../components/Client';
import httpRequest from '../network/http.js';

const Clients = (props) => {

  const [clients, setClients] = useState([]);
  const [auth, setAuth] = useContext(CRMContext);
  const history = useHistory();

  useEffect(() => {
    if(!auth.auth){
      history.push('/');
    }
    if(auth.token !== ''){
      const getClientsFromAPI = async () => {
        try {
          const data = await httpRequest.getAll('clients', null);
          setClients(data.clients);
        } catch (error) {
          if(error.ok === false){
            history.push('/');
          }
        }
      }
      getClientsFromAPI();
    }

  },[])

  return (  
    <>
      <h2>Clients</h2>
      <Link to='/clients/client/new' className='btn-circular bg-blue pos-absolute'>
        <i className="fas fa-user-plus new-user-icon "></i>
      </Link>
      <ul>
        {
          clients.length
            ? clients.map(client => <Client key={client._id} client={client} setClients={setClients} />)
            : <h2>No clients</h2>
        }
      </ul>
    </>
  );
}
 
export default Clients;