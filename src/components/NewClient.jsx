import React, { useContext, useState } from 'react';
import {useHistory} from 'react-router-dom';
import { CRMContext } from '../context/authContext';
import FormClient from './FormClient';
import httpRequest from '../network/http';
import {swalFail, swalSuccess} from '../utils/swalResponse';

const NewClient = () => {

  const initialState = {
    name: '',
    lastName: '',
    company: '',
    email: '',
    phone: '',
  }

  const history = useHistory();
  const [auth, setAuth] = useContext(CRMContext);
  const [disabled, setDisabled] = useState(true);
  const [client, setClient] = useState(initialState);

  const formValidation = () => {
    const {name, lastName, email, company, phone} = client;
    const isValid = !name.length || !lastName.length || !email.length || !company.length || !phone.length;
    setDisabled(isValid);
  }

  const handleChange = (e) => {
    setClient({...client, [e.target.name]: e.target.value.trim()});
    formValidation();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    httpRequest.createData('clients', client, null)
      .then((response) => {
        swalSuccess(response.message);
        history.push('/clients')
      })
      .catch(error => swalFail(error.message));
  }

  if(!auth.auth && (localStorage.getItem('token') === auth.token) || auth.auth && (localStorage.getItem('token') !== auth.token) ){
    history.push('/');
  }

  return (
    <div className='form-container'>
      <h2>New Client</h2> 
      <FormClient 
        client={client}
        handleSubmit={handleSubmit} 
        handleChange={handleChange} 
        disabled={disabled}/>
    </div>
  )
}

export default NewClient
