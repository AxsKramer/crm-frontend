import React from "react";

const FormClient = ({ handleSubmit, handleChange, disabled, client, isEditMode }) => {

  const {name, lastName, email, company, phone} = client;

  return (
    <form onSubmit={handleSubmit}>
      <div className="field">
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Client´s name "
          onChange={handleChange}
          value={name}
        />
      </div>
      <div className="field">
        <label htmlFor="lastName">Last Name: </label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          placeholder="Client´s last name"
          onChange={handleChange}
          value={lastName}
        />
      </div>
      <div className="field">
        <label htmlFor="email">Email: </label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Client´s email"
          onChange={handleChange}
          value={email}
        />
      </div>
      <div className="field">
        <label htmlFor="company">Company: </label>
        <input
          type="text"
          id="company"
          name="company"
          placeholder="Client´s company"
          onChange={handleChange}
          value={company}
        />
      </div>
      <div className="field">
        <label htmlFor="phone">Phone: </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          placeholder="Client´s phone number"
          onChange={handleChange}
          value={phone}
        />
      </div>
      <input
        type="submit"
        className="btn btn-block bg-blue"
        value= {isEditMode ? 'SAVE' : 'ADD CLIENT'}
        disabled={disabled}
      />
    </form>
  );
};

export default FormClient;
