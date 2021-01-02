import React from "react";
import "./Button.css";

const Button = ({
  children,
  handleClick,
  add,
  evaluate,
  divide,
  multiply,
  minus,
}) => {
  const isOperator = (val) => {
    return !isNaN(val) || val === "." || val === "=";
  };
  return (
    <div
      className={`button ${isOperator(children) ? "" : "operator"}`}
      onClick={() => {
        if (children === "+") {
          add(children);
        } else if (children === "=") {
          evaluate(children);
        } else if (children === "/") {
          divide(children);
        } else if (children === "*") {
          multiply(children);
        } else if (children === "-") {
          minus(children);
        } else {
          handleClick(children);
        }
      }}
    >
      {children}

      {/* importing whatever is inside the bracket "<Button></Button>" into the actual app */}
    </div>
  );
};

export default Button;
