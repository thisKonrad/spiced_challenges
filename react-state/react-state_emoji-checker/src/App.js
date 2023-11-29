import React from "react";
import "./styles.css";
import { useState } from "react";

export default function App() {
  //let code = "?";

  const validCode = "🐡🐠🐋";

  let[emoji, setEmoji]= useState('')

  function handleClick(e){
    console.log(e.target.textContent)
    console.log("click")
    setEmoji(emoji + e.target.textContent)
  }
  function resetClick(){
    console.log("click")

    if(emoji === validCode){
      setEmoji("Valid Code!") 
    }
    else {
      setEmoji(" ")
    }
   
  }


  return (
    <div className="container">
      <h1>current code : <span id="code">{emoji}</span> </h1>
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
 {/*     {emoji === validCode && <p>Valid code!</p>} */}
    </div>
  );
}
