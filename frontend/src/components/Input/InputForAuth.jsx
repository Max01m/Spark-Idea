import React from "react";
import "./Input.css";

const InputForAuth = (props) => {
  return (
    <input
      onChange={(event) => props.setValue(event.target.value)}
      value={props.value}
      type={props.type}
      placeholder={props.placeholder}
      className="inputStyle"
    />
  );
};

export default InputForAuth;
