import React, { useContext, useEffect, useState } from 'react';
import {useHistory, useParams} from 'react-router-dom';
import FormClient from '../components/FormClient';
import httpRequest from '../network/http';
import {CRMContext} from '../context/authContext';


const EditClient = () => {
  const initialState = { name: '', lastName: '', company: '', email: '', phone: '',}
  const {clientId} = useParams();
  const history = useHistory();
  const [client, setClient] = useState(initialState);
  const [auth, setAuth] = useContext(CRMContext);

  const getClientFromAPI = async () => {
    const clientById = await httpRequest.getById(`clients/${clientId}`, auth);
    setClient(clientById.client);
  };

  useEffect(() => {
    if(!auth.auth || (auth.auth && auth.token === '')){
      history.push('/');
    }
    getClientFromAPI();
  },[]);

  return ( 
    <div className='new-item'>
      <h2>Edit Client</h2>
      <FormClient 
        client={client}
        clientId={clientId}
        auth={auth}
        setClient={setClient}
        isEditMode
      />
    </div>
  );
}
 
export default EditClient;