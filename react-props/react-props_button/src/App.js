import React from "react";
import "./styles.css";

export default function App() {
 
  return <Button 
  text="PRESS!"
  backColor="red"
  dis={false}
  onClick={()=> console.log("You Clicked Me!")} />;
}


function Button({backColor, dis, text, onClick}){

  return <button 
    disabled={dis}
    onClick={onClick}
    style={{
    height: "80px", 
    width:"22rem", 
    fontSize:"1.4rem",
    weight: "bolder",
    color: "white",
    boxShadow: "0px 1px 6px black",
    backgroundColor:backColor,
    cursor: "pointer"
    }}>
      {text}
    </button>
}