import React from "react";
import './FormInput.css';

const FormInput = ({label ='', type, name, handleChange, value, placeholder,id, ...otherprops }) => {
  return (
    <div className="field">
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={handleChange}
        id={id}
        value={value}
        {...otherprops}
      />
    </div>
  );
};

export default FormInput;
