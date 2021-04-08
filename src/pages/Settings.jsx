import React, { useEffect, useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { CRMContext } from "../context/authContext";
import parsejwt from "../utils/parseJwt";
import Spinner from "../components/Spinner/Spinner";
import UserDetails from "../components/UserDetails/UserDetails";
import {deleteUser} from '../utils/deleteItems';

const Settings = () => {
  const [auth, setAuth] = useContext(CRMContext);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState("");
  const history = useHistory();

  useEffect(() => {
    if (!auth.auth) {
      history.push("/");
    } else {
      const token = localStorage.getItem("token");
      if (token) {
        setUser(parsejwt(token));
      }
    }
  }, [auth.auth]);

  return (
    <div className="container text-center">
      <h2>User</h2>
      <hr />
      <br />
      <UserDetails user={user} width="200" />
      {loading ? <Spinner /> : null}
      <button className="btn bg-red" onClick={() => deleteUser(user.id, auth, setLoading, setUser, setAuth )}>
        Delete user
      </button>
    </div>
  );
};

export default Settings;
