import React, { useContext, useState, useEffect } from 'react';
import {useHistory} from 'react-router-dom';
import { CRMContext } from '../context/authContext';
import FormUser from '../components/FormUser';

const NewUser = () => {

  const initialState = { name: '', email: '', password: '',}
  const history = useHistory();
  const [auth, setAuth] = useContext(CRMContext);
  const [user, setUser] = useState(initialState);
  
  useEffect(() =>{
    if(!auth.auth && (localStorage.getItem('token') !== auth.token) || (!auth.auth && auth.token === '')){
      history.push('/');
    }
  },[]);

  const handleChange = (e) => setUser({...user, [e.target.name]: e.target.value});

  return (
    <div className='new-item'>
      <h2>New User</h2> 
      <FormUser
        user={user}
        handleChange={handleChange} 
      />
    </div>
  )
}

export default NewUser;