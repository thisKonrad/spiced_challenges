import ColoredNumber from "./ColoredNumber";

import { useState } from "react";

export default function Counter() {

  const [count,setCount]= useState(0)

  function countUp(){

    setCount(count +1)
  
  }
  function countDown(){

    setCount(count -1)
  
  }

  console.log(count)

  return (
    <div className="counter">
      <h1>Colored Number</h1>
      <ColoredNumber value={count} />
      <div className="counter__buttons-container">
        <button
          type="button"
          onClick={countUp}
          className="counter__button"
          aria-label="increment count">
          +
        </button>
        <button
          type="button"
          onClick={countDown}
          className="counter__button"
          aria-label="decrement count">
          -
        </button>
      </div>
    </div>
  );
}
