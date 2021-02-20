import React, { useContext } from "react";
import Header from "../components/Header";
import Aside from "../components/Aside";
import { CRMContext } from "../context/authContext";

const Layout = ({ children }) => {

  const [auth, setAuth] = useContext(CRMContext);

  return (
    <>
      <Header />
      <div className={auth.auth ? 'loggedin' :'login-main'} >
        <Aside />
        <main className='main'>
          {children}
        </main>
      </div>
    </>
  );
};

export default Layout;
