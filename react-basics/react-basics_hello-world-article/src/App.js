import React from "react";
import "./styles.css";

export default function App() {
  return <HelloWorldArticle/>;
}


function HelloWorldArticle(){
  return <><article>
           <h1>Hello React!</h1>
           <p>Lorem Ipsum Reactum Absurdicum etsatirare.</p>
           <p>Lorem Ipsum Reactum Absurdicum etsatirare.</p>
           <p>Lorem Ipsum Reactum Absurdicum etsatirare.</p>
           <p>Lorem Ipsum Reactum Absurdicum etsatirare.</p>
          </article></>
}