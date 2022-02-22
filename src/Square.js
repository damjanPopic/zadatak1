import React, { useState } from "react";
import "./index.css";

const Square = (props) => {
  return (
    <button
      className="square"
      // onClick={squareValue}
      onClick={() => props.onPassSquareValue(props.value)}
      style={{ backgroundColor: props.selected ? "red" : "blue" }}
    >
      {props.children}
    </button>
  );
};
export default Square;
