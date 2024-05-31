import React from "react";
import "./Input.css";

const Input = (props) => {
  return (
   
  <div className="box">
     <input
       type={props.type}
       placeholder=""
       id={props.id}
     />
     <label htmlFor={props.labelFor}>{props.label}</label>
 </div>
   
  );
};

export default Input;
