import React, { useState } from "react";
import "./index.css";
import Square from "./Square";

function App() {
  const [squareValue, setSquareValue] = useState();

  const squareValueHandler = (value) => {
    setSquareValue(value);
  };

  return (
    <div className="flex-container">
      <Square
        key={1}
        value={1}
        selected={squareValue === 1}
        onPassSquareValue={squareValueHandler}
      ></Square>
      <Square
        key={2}
        value={2}
        onPassSquareValue={squareValueHandler}
        selected={squareValue === 2}
      >
        {squareValue}
      </Square>
      <Square
        key={3}
        value={3}
        selected={squareValue === 3}
        onPassSquareValue={squareValueHandler}
      ></Square>
    </div>
  );
}

export default App;
