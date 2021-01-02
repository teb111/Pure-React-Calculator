import React from "react";
import "./clearButton.css";

const ClearButton = ({ children, handleClear }) => {
  return (
    <div onClick={() => handleClear()} className='clear-btn'>
      {children}
    </div>
  );
};

export default ClearButton;
