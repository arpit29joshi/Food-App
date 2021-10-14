import "./Input.css";
import React from "react";

const Input = React.forwardRef((props, ref) => {
  return (
    <div className="input">
      <label htmlFor={props.Input.id}>{props.lable}</label>
      <input ref={ref} {...props.Input}></input>
    </div>
  );
});
export default Input;
