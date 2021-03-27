import React, { useContext, useState } from 'react';
import {useHistory} from 'react-router-dom';
import { CRMContext } from '../context/authContext';
import FormClient from '../components/FormClient';

const NewClient = () => {
  const initialState = { name: '', lastName: '', company: '', email: '', phone: ''};
  const history = useHistory();
  const [auth, setAuth] = useContext(CRMContext);
  const [client, setClient] = useState(initialState);

  if(!auth.auth && (localStorage.getItem('token') === auth.token) || auth.auth && (localStorage.getItem('token') !== auth.token) ){
    history.push('/');
  }

  return (
    <div className='new-item'>
      <h2>New Client</h2> 
      <FormClient 
        auth={auth}
        client={client}
        setClient={setClient}
      />
    </div>
  )
}

export default NewClient
