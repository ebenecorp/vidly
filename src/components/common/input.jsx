import React from "react";
import { rest } from "lodash";

const Input = ({ name, error, label, ...rest }) => {
  return (
    <div className="for-group">
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        name={name}
       {...rest}
        className="form-control"
      />
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default Input;
