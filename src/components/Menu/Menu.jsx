import React from "react";
import { NavLink } from "react-router-dom";
import './Menu.css'

const Menu = () => {
  return (
    <nav className="nav-menu">
      <NavLink
        to="/home"
        activeStyle={{
          fontWeight: "bold",
          color: "white",
        }}
      >
        <i className="fas fa-house-user icon"></i>
        <span title='Home'> Home</span>
      </NavLink>
      <NavLink
        to="users"
        activeStyle={{
          fontWeight: "bold",
          color: "white",
        }}
      >
        <i className="fas fa-user-plus icon"></i>
        <span title='New User'>New user</span>
      </NavLink>
      <NavLink
        to="/clients"
        activeStyle={{
          fontWeight: "bold",
          color: "white",
        }}
      >
        <i className="fas icon fa-users"></i>
        <span title='Clients'>Clients</span>
      </NavLink>
      <NavLink
        to="/products"
        activeStyle={{
          fontWeight: "bold",
          color: "white",
        }}
      >
        <i className="fas icon fa-boxes"></i>
        <span title='Products'>Products</span>
      </NavLink>
      <NavLink
        to="/orders"
        activeStyle={{
          fontWeight: "bold",
          color: "white",
        }}
      >
        <i className="far icon fa-copy"></i>
        <span title='Orders'>Orders</span>
      </NavLink>
      <NavLink
        to="/user"
        activeStyle={{
          fontWeight: "bold",
          color: "white",
        }}
      >
        <i className="fas icon fa-user-cog"></i>
        <span title='Settings'>Settings</span>
      </NavLink>
    </nav>
  );
};

export default Menu;
