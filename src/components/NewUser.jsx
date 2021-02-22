import React, { useContext, useState } from 'react';
import {useHistory} from 'react-router-dom';
import { CRMContext } from '../context/authContext';
import FormUser from './FormUser';
import httpRequest from '../network/http';

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
      .then(() => {
        setUser(initialState);
        history.push('/clients');
      });
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