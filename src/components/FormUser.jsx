import React from "react";
import Form from "../components/Form/Form";
import FormInput from "../components/FormInput/FormInput";
import SubmitButton from './SubmitButton/SubmitButton';

const FormUser = ({ handleChange, user }) => (
  <Form isNewUser>
    <FormInput
      label="Name"
      type="text"
      id="name"
      name="name"
      placeholder="Name "
      handleChange={handleChange}
      value={user.name}
      required
    />
    <FormInput
      label="Email"
      type="email"
      id="email"
      name="email"
      placeholder="Email"
      handleChange={handleChange}
      value={user.email}
      required
    />
    <FormInput
      label="Password"
      type="password"
      id="password"
      name="password"
      placeholder="Password"
      handleChange={handleChange}
      value={user.password}
      required
    />
    <SubmitButton value="ADD USER" />
  </Form>
);

export default FormUser;
