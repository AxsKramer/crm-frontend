import React, {useState} from "react";
import {useHistory} from 'react-router-dom';
import FormInput from "./FormInput/FormInput";
import SubmitButton from "./SubmitButton/SubmitButton";
import httpRequest from '../network/http';
import {swalFail, swalSuccess} from '../utils/swalResponse';

const FormClient = ({client, setClient, isEditMode, clientId, auth}) => {
  const [disabled, setDisabled] = useState(true);
  const history = useHistory();
  const { name, lastName, email, company, phone } = client;
  
  const formValidation = () => {
    const {name, lastName, email, company, phone} = client;
    const isValid = !name.length || !lastName.length || !email.length || !company.length || !phone.length;
    setDisabled(isValid);
  }

  const handleChange = (e) => {
    setClient({...client, [e.target.name]: e.target.value.trim()});
    formValidation();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(isEditMode){
      httpRequest.updateData(`clients/${clientId}`, client, auth)
      .then((response) => {
        swalSuccess(response.message);
        history.push('/clients')
      })
      .catch(error => swalFail(error.message));
    }else{
      httpRequest.createData('clients', client, auth, null)
        .then((response) => {
          swalSuccess(response.message);
          history.push('/clients')
        })
        .catch(error => swalFail(error.response.data.message));
    }
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <FormInput
        label="Name: "
        type="text"
        id="name"
        name="name"
        placeholder="Name"
        handleChange={handleChange}
        value={name}
        required
      />
      <FormInput
        label="Last Name: "
        type="text"
        id="lastName"
        name="lastName"
        placeholder="Last Name"
        handleChange={handleChange}
        value={lastName}
        required
      />
      <FormInput
        label="Email: "
        type="email"
        id="email"
        name="email"
        placeholder="Email"
        handleChange={handleChange}
        value={email}
        required
      />
      <FormInput
        label="Company: "
        type="text"
        id="company"
        name="company"
        placeholder="Company"
        handleChange={handleChange}
        value={company}
        required
      />
      <FormInput
        label="Phone: "
        type="text"
        id="phone"
        name="phone"
        placeholder="Phone"
        handleChange={handleChange}
        value={phone}
        required
      />
      <SubmitButton value={isEditMode ? "SAVE" : "ADD CLIENT"} disabled={disabled} />
    </form>
  );
};

export default FormClient;
