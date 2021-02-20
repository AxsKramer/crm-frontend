import React, { useContext } from "react";

import { CRMContext } from "../context/authContext";
import { useHistory } from "react-router-dom";

const Header = (props) => {
  const history = useHistory();
  const [auth, setAuth] = useContext(CRMContext);

  const logout = () => {
    setAuth({ token: "", auth: false });
    localStorage.setItem("token", "");
    history.push("/");
  };

  return (
    <header className={auth.auth ? 'header' : 'header text-center' }>
      <div className={auth.auth ? 'grid-header': ''}>
        <h1>CRM Client Manager</h1>
        {auth.auth ? (
          <button type="button" onClick={logout} className='btn bg-red'>
            LOGOUT  
            <i className="fas fa-sign-out-alt"></i>
          </button>
        ) : null}
      </div>
    </header>
  );
};

export default Header;
