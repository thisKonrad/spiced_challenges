import "./styles.css";

export default function App() {

  return <Greeting />;
}

function Greeting(name){

  //name="Peter Parker"
  name="Jan"
  {name==="Jan"? name = "Coach":null}
  return <h1> Hello {name} !</h1>

}