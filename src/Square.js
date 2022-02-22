import React, { useState } from "react";
import "./index.css";

const Square = (props) => {
  const [value, setValue] = useState(props.value);

  const squareValue = () => {
    setValue(props.value);
    // console.log(value);
    props.onPassSquareValue(value);
  };

  return (
    <button className="square" onClick={squareValue}>
      {props.children}
    </button>
  );
};
export default Square;
