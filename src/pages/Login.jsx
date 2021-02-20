import React, { useState, useContext } from "react";
import axios from "axios";
import swal from "sweetalert2";
import { useHistory } from "react-router-dom";
import { CRMContext } from "../context/authContext";

const Login = () => {
  const [auth, setAuth] = useContext(CRMContext);
  const [credentials, setCredentials] = useState({email: 'correo1@correo.com', password: '123456'});
  const history = useHistory();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:3000/api/users/login",
        credentials
      );
      const token = response.data.token;
      localStorage.setItem("token", token);
      setAuth({ token: token, auth: true });

      swal.fire("Welcome to CRM", "You have logged in", "success");

      history.push("/clients");
    } catch (error) {
      swal.fire({
        icon: 'error',
        title: "Oops ...",
        text: error.response.data.message,
      });
    }
  };

  const handleData = (event) =>
    setCredentials({ ...credentials, [event.target.name]: event.target.value });

  return (
    <div className="login">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="field">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            placeholder="Your email"
            required
            onChange={handleData}
            id='email'
            value={credentials.email}
          />
        </div>
        <div className="field">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Your password"
            required
            onChange={handleData}
            id='password'
            value={credentials.password}
          />
        </div>
        <input type="submit" value="LOGIN" className="btn btn-block bg-blue" />
      </form>
    </div>
  );
};

export default Login;
