import React from "react";
import "./styles.css";

export default function App() {
  return (
    <main>
    <Button>PRESS</Button>
    <Button>PUSH</Button>
    <Button>BUMP</Button>
    <Button>DASH</Button>
    </main>
  );
}

function Button({children}) {
  return (
    <button className="button" type="button">
      {children}
    </button>
  );
}
