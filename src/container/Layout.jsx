import React, { useContext } from "react";
import Header from "../components/Header/Header";
import Aside from "../components/Aside/Aside";
import { CRMContext } from "../context/authContext";
import './Layout.css';

const Layout = ({ children }) => {

  const [auth, setAuth] = useContext(CRMContext);

  return (
    <div className='layout'>
      <Header />
      <div className={auth.auth ? 'loggedin' :'login-main'} >
        <Aside />
        <main className='main'>
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
