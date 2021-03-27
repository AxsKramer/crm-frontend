import React, { useContext, useEffect, useState } from 'react';
import {CRMContext} from '../context/authContext.js';
import {useHistory} from 'react-router-dom';
import Client from '../components/Client/Client';
import httpRequest from '../network/http.js';
import { swalFail, } from '../utils/swalResponse.js';
import Spinner from '../components/Spinner/Spinner';
import RoundButton from '../components/RoundButton/RoundButton';
const Clients = () => {

  const [clients, setClients] = useState([]);
  const [auth, setAuth] = useContext(CRMContext);
  const history = useHistory();

  useEffect(() => {
    if(auth.token !== '' && auth.auth){
      const getClientsFromAPI = async () => {
        try {
          const data = await httpRequest.getAll('clients', auth);
          setClients(data.clients);
        } catch (error) {
          swalFail(error.message);
        }
      }
      getClientsFromAPI();
    }else{
      history.push('/');
    }
    
  },[])

  return (  
    <div className='container'>
      <h2>Clients</h2>
      <RoundButton fontawesome='fas fa-user-plus' url='/clients/client/new' title='New client'/>
        {!clients && <h2>No clients</h2>}
        <ul>
        {
          clients.length > 0
            ? clients.map((client, index) => <Client key={index} client={client} clients={clients} setClients={setClients} />)
            : <Spinner />
        }
        </ul>
    </div>
  );
}
 
export default Clients;