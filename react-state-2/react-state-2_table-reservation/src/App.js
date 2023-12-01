import React from "react";
import Counter from "./components/Counter";
import "./styles.css";
import { useState } from "react";


export default function App() {

  const [people, setPeople] = useState(0);

  function peopleUp(){
    setPeople(people +1)
  }
  function peopleDown(){
    setPeople(people > 1 ? people -1 : 0)
  }


  return (
    <div className="container">
      <h1>Place a Table Reservation</h1>
      <Counter onPeopleUp={peopleUp}onPeopleDown={peopleDown}/>
      <p>You are going to reserve a table for {people} people</p>
    </div>
  );
}
