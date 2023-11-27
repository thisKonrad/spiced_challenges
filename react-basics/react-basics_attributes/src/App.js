import React from "react";
import "./styles.css";

export default function App() {
  return <Article/>;
}


function Article(){
  return <><article>
    <h2 className="article__title">THE NEWS!</h2>
    <p>Readare Newsum Interesticare importantitacante</p>
    <label htmlFor="inpt_001">
      <input id="inpt_001"></input>
    </label>
    <a className="article__link" href="https://www.tagesschau.de/">the news</a>
    </article></>
}