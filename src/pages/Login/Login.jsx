import React, { useEffect, useState, useContext } from "react";
import { useHistory } from "react-router-dom";

import Form from '../../components/Form/Form';
import FormInput from '../../components/FormInput/FormInput';

import { CRMContext } from "../../context/authContext";
import './Login.css';

const Login = () => {
  const [credentials, setCredentials] = useState({email: 'admin@correo.com', password: '123456'});
  const [auth, setAuth] = useContext(CRMContext);
  const history = useHistory();
  
  useEffect(() => {
    if(localStorage.getItem('token')) {
      const token = localStorage.getItem('token')
      setAuth({ token: token, auth: true });
      history.push('/clients');
    }
  }, []);

  const handleChange = (event) =>
    setCredentials({ ...credentials, [event.target.name]: event.target.value.trimStart() });

  return (
    <div className="login">
      <h2>Login</h2>
      <Form url='https://crm-api-backend.herokuapp.com/api/users/login' credentials={credentials}>
        <FormInput 
          label='Email'
          type="email"
          name="email"
          placeholder="Your email"
          required
          handleChange={handleChange}
          id='email'
          value={credentials.email}
        />
        <FormInput 
          label='Password'
          type="password"
          name="password"
          placeholder="Your password"
          required
          handleChange={handleChange}
          id='password'
          value={credentials.password}
        />
        <input type="submit" value="LOGIN" className="btn btn-block bg-blue" />
      </Form>
    </div>
  );
};

export default Login;
