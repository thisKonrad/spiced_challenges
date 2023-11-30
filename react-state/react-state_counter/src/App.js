import React from "react";
import "./styles.css";
import { useState } from "react";



export default function App() {

  const[count, setCount] = useState(0);

  function countUp(){
    setCount(count +1)
  }
  function countDown(){
    setCount(count -1)
  }
  console.log(count)


  return (
    <div className="container">
      <h1>{count}</h1>
      <div className="button-container">
        <button
          type="button" onClick={countDown}>
          -
        </button>
        <button type="button" onClick={countUp}>
          +
        </button>
      </div>
    </div>
  );
}
