import React, { useEffect, useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import swal from "sweetalert2";
import { CRMContext } from "../context/authContext";
import parsejwt from "../utils/parseJwt";
import { swalFail } from "../utils/swalResponse";
import http from "../network/http";
import Spinner from "../components/Spinner/Spinner";
import UserDetails from "../components/UserDetails/UserDetails";

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

  const deleteUser = (id) => {
    setLoading(true);
    swal
      .fire({
        text: "Do you want to delete this client ?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it ",
        cancelButtonText: "Cancel",
      })
      .then((result) => {
        if (result.value) {
          http
            .deleteById(`users/delete-user/${id}`, auth)
            .then(() => {
              setLoading(false);
              localStorage.removeItem("token");
              setAuth({ token: "", auth: false });
              setUser("");
            })
            .catch((error) => swalFail(error.response.message));
        }
      });
  };

  return (
    <div className="container text-center">
      <h2>User</h2>
      <hr />
      <br />
      <UserDetails user={user} width="200" />
      {loading ? <Spinner /> : null}
      <button className="btn bg-red" onClick={() => deleteUser(user.id)}>
        Delete user
      </button>
    </div>
  );
};

export default Settings;
