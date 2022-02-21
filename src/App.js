import React from "react";

import "./index.css";
import Square from "./Square";

function App() {
  return (
    <div className="flex-container">
      <Square key={1}></Square>
      <Square key={2}></Square>
      <Square key={3}></Square>
    </div>
  );
}

export default App;
