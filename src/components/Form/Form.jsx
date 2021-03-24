import React, { useContext, useState } from "react";
import axios from "axios";
import swal from "sweetalert2";
import { useHistory } from "react-router-dom";
import httpRequest from "../../network/http";
import { swalFail, swalSuccess } from "../../utils/swalResponse";
import Spinner from "../Spinner/Spinner";
import { CRMContext } from "./../../context/authContext";

const Form = ({ children, url, credentials, isNewUser }) => {
  const [auth, setAuth] = useContext(CRMContext);
  const [isLoading, setisLoading] = useState(false);
  const history = useHistory();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setisLoading(true);

    if (!localStorage.getItem("token")) {
      try {
        const { data } = await axios.post(url, credentials);
        const token = data.token;
        localStorage.setItem("token", token);
        setAuth({ token: token, auth: true });
        setisLoading(false);
        history.push("/clients");
      } catch (error) {
        swal.fire({
          icon: "error",
          text: error.response.data.message,
        });
      }
    }
    if (isNewUser) {
      httpRequest
        .createData("users/create-account", user, auth, null)
        .then((response) => {
          swalSuccess(response.message);
          setisLoading(false);
          history.push("/clients");
        })
        .catch((error) => swalFail(error.message));
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      {children}
      {isLoading ? <Spinner /> : null}
    </form>
  );
};

export default Form;
