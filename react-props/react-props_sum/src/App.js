import React from "react";
import "./styles.css";

export default function App() {
  
  return <Sum valueA={2} valueB={20} />;
}

function Sum({valueA,valueB}){

  console.log("values", valueA,valueB)

 return <h2> {valueA} + {valueB} = {valueA + valueB}</h2>

}
