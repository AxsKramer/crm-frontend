import React, { useEffect, useState } from 'react';
import {useHistory, useParams} from 'react-router-dom';
import FormClient from './FormClient';
import httpRequest from '../network/http';
import {swalFail, swalSuccess} from '../utils/swalResponse';


const EditClient = () => {

  const initialState = {
    name: '',
    lastName: '',
    company: '',
    email: '',
    phone: '',
  }

  const {clientId} = useParams();
  const history = useHistory();
  const [client, setClient] = useState(initialState);
  const [disabled, setDisabled] = useState(true);

  const getClientFromAPI = async () => {
    const clientById = await httpRequest.getById(`clients/${clientId}`, null);
    setClient(clientById.client);
  };

  useEffect(() => getClientFromAPI(), []);

  const handleChange = (e) => {
    setClient({...client, [e.target.name]: e.target.value.trim()});
    formValidation();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    httpRequest.updateData(`clients/${clientId}`, client, null)
      .then((response) => {
        swalSuccess(response.message);
        history.push('/clients')
      })
      .catch(error => swalFail(error.message));
  }

  const formValidation = () => {
    const {name, lastName, email, company, phone} = client;
    const isValid = !name.length || !lastName.length || !email.length || !company.length || !phone.length;
    setDisabled(isValid);
  }

  return ( 
    <div className='form-container'>
      <h2>Edit Client</h2>
      <FormClient 
        client={client}
        handleSubmit={handleSubmit} 
        handleChange={handleChange} 
        disabled={disabled}
        isEditMode
      />
    </div>
  );
}
 
export default EditClient;