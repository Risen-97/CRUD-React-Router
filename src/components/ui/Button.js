import React from "react";

const Button = (props) => {
  return (
    <button onClick={props.onClick} className={`btn ${props.addStyle}`}>
      {props.name}
    </button>
  );
};

export default Button;
