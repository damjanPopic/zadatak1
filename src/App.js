import React, { useState } from "react";
import "./index.css";
import Square from "./Square";

function App() {
  const [displayValue, setDisplayValue] = useState();

  const displaySquareValueHandler = (value) => {
    setDisplayValue(value);
  };

  return (
    <div className="flex-container">
      <Square
        key={1}
        value={1}
        onPassSquareValue={displaySquareValueHandler}
      ></Square>
      <Square key={2} value={2} onPassSquareValue={displaySquareValueHandler}>
        {displayValue}
      </Square>
      <Square
        key={3}
        value={3}
        onPassSquareValue={displaySquareValueHandler}
      ></Square>
    </div>
  );
}

export default App;
