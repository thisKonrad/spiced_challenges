import React from "react";
import "./styles.css";
import { useState } from "react";

export default function App() {

  const validCode = "🐡🐠🐋";

  let[emoji, setEmoji]= useState('')

  function handleClick(e){
    console.log(e.target.textContent)
    setEmoji(emoji + e.target.textContent)
  }
  function resetClick(){
    setEmoji(" ")
  }


  return (
    <div className="container">
      <h1>current code : {emoji}</h1>
      <div className="button-container">

        <button type="button"
          onClick={handleClick}>
          <span role="img" aria-label="Pufferfish">
            🐡
          </span>
        </button>

        <button type="button" onClick={handleClick}>
          <span role="img" aria-label="Whale">
            🐋
          </span>
        </button>

        <button type="button" onClick={handleClick}>
          <span role="img" aria-label="Clownfish">
            🐠
          </span>
        </button>
        {" "}

      </div>

      <button type="button" onClick={resetClick}>
        Reset
      </button>

   {emoji === validCode && <p>Valid code!</p>} 
    </div>
  );
}
