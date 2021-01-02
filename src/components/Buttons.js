import React from "react";
import Button from "./Button";

const Buttons = ({ handleClick, add, evaluate, divide, multiply, minus }) => {
  return (
    <>
      <div className='row'>
        <Button handleClick={handleClick}>7</Button>
        <Button handleClick={handleClick}>8</Button>
        <Button handleClick={handleClick}>9</Button>
        <Button divide={divide}>/</Button>
      </div>
      <div className='row'>
        <Button handleClick={handleClick}>4</Button>
        <Button handleClick={handleClick}>5</Button>
        <Button handleClick={handleClick}>6</Button>
        <Button multiply={multiply}>*</Button>
      </div>
      <div className='row'>
        <Button handleClick={handleClick}>1</Button>
        <Button handleClick={handleClick}>2</Button>
        <Button handleClick={handleClick}>3</Button>
        <Button add={add}>+</Button>
      </div>
      <div className='row'>
        <Button handleClick={handleClick}>.</Button>
        <Button handleClick={handleClick}>0</Button>
        <Button evaluate={evaluate}>=</Button>
        <Button minus={minus}>-</Button>
      </div>
    </>
  );
};

export default Buttons;
