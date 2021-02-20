import React, { useContext } from "react";

import { Link, NavLink } from "react-router-dom";
import { CRMContext } from "../context/authContext";

const Aside = (props) => {
  const [auth, setAuth] = useContext(CRMContext);

  if (!auth.auth) return null;

  return (
    <aside className="aside">
      <h2 >Management</h2>

      <nav className="nav-menu">
        <NavLink
          exact
          to="/home"
          activeStyle={{
            fontWeight: "bold",
            color: "#00487C",
          }}
        >
          <i class="fas fa-house-user icon"></i>
          Home
        </NavLink>
        <NavLink
          exact
          to="/clients"
          activeStyle={{
            fontWeight: "bold",
            color: "#00487C",
          }}
        >
          <i className="fas icon fa-users"></i>
          Clients
        </NavLink>
        <NavLink
          exact
          to="/products"
          activeStyle={{
            fontWeight: "bold",
            color: "#00487C",
          }}
        >
          <i className="fas icon fa-boxes"></i>
          Products
        </NavLink>
        <NavLink
          exact
          to="/orders"
          activeStyle={{
            fontWeight: "bold",
            color: "#00487C",
          }}
        >
          <i className="far icon fa-copy"></i>
          Orders
        </NavLink>
        <NavLink
          exact
          to="/user"
          activeStyle={{
            fontWeight: "bold",
            color: "#00487C",
          }}
        >
          <i className="fas icon fa-user-cog"></i>
          User settings
        </NavLink>
      </nav>
    </aside>
  );
};

export default Aside;
