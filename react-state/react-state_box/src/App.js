import "./styles.css";
import { useState } from "react";


export default function App() {
  

  let[color, setColor] = useState(false);


  function handleClick() {

   setColor(!color)

  }

  console.log(color)

  return (
    <main>
      <div className={`box ${ color ? "box--active" : ""}`} />
      <button onClick={handleClick}>{ color ? 'active' : 'deactive'}</button>
    </main>
  );
}
