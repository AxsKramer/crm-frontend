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
    if(!auth.auth){
      history.push('/');
    }
    if(auth.token !== ''){
      const getClientsFromAPI = async () => {
        try {
          const data = await httpRequest.getAll('clients', auth);
          setClients(data.clients);
        } catch (error) {
          swalFail(error.message);
          if (error.response.status === 500) {
            history.push("/");
          }
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
        {
          clients.length > 0
           ?(<ul>
            {
            clients.map(client => <Client key={client._id} client={client} setClients={setClients} />)
            
            }
          </ul>
          )  : <Spinner />
        }
    </div>
  );
}
 
export default Clients;