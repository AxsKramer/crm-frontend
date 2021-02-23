import React, { useContext, useState } from 'react';
import {useHistory} from 'react-router-dom';
import { CRMContext } from '../context/authContext';
import FormUser from '../components/FormUser';
import httpRequest from '../network/http';
import {swalFail, swalSuccess} from '../utils/swalResponse';

const NewUser = () => {

  const initialState = {
    name: '',
    email: '',
    password: '',
  }

  const history = useHistory();
  const [auth, setAuth] = useContext(CRMContext);
  const [user, setUser] = useState(initialState);

  const handleChange = (e) => setUser({...user, [e.target.name]: e.target.value.trimStart()});
  
  const handleSubmit = (e) => {
    e.preventDefault();
    httpRequest.createData('users/create-account', user, null)
      .then(response => {
        swalSuccess(response.message)
        history.push('/clients');
      })
      .catch(error => swalFail(error.message));
  }

  if(!auth.auth && (localStorage.getItem('token') === auth.token)){
    history.push('/');
  }

  return (
    <div className='form-container'>
      <h2>New User</h2> 
      <FormUser
        user={user}
        handleSubmit={handleSubmit} 
        handleChange={handleChange} 
      />
    </div>
  )
}

export default NewUser;