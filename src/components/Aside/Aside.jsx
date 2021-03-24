import React, { useContext } from "react";
import Menu from '../Menu/Menu';
import { CRMContext } from "../../context/authContext";
import './Aside.css';

const Aside = (props) => {
  const [auth, setAuth] = useContext(CRMContext);
  if (!auth.auth) return null;
  return (
    <aside className="aside">
      <h2>Menu</h2>
      <Menu />
    </aside>
  );
};

export default Aside;
