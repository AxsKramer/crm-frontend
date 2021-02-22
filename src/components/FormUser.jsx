import React from "react";

const FormUser = ({ handleSubmit, handleChange, user }) => {

  const {name,email,password} = user;

  return (
    <form onSubmit={handleSubmit}>
      <div className="field">
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="User´s name "
          onChange={handleChange}
          value={name}
          required
        />
      </div>
      <div className="field">
        <label htmlFor="email">Email: </label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="User´s email"
          onChange={handleChange}
          value={email}
          required
        />
      </div>
      <div className="field">
        <label htmlFor="password">Password: </label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="User´s password"
          onChange={handleChange}
          value={password}
          required
        />
      </div>
      <input
        type="submit"
        className="btn btn-block bg-blue"
        value= 'ADD USER'
      />
    </form>
  );
};

export default FormUser;
