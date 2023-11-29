import Card from "./components/Card";

export default function App() {

  const fruits = [
  {
    id: 1,
    name: '🍌 Banana',
    color: 'yellow',
  },
  {
    id: 2,
    name: '🥝 Kiwi',
    color: 'green',
  },
  {
    id: 3,
    name: '🍓 Strawberry',
    color: 'red',
  },
  {
    id: 4,
    name: '🫐 Blueberries',
    color: 'blue',
  },
  {
    id: 5,
    name: '🥥 Cocnut',
    color: 'inside white',
  },
];


  return (
    <div className="app">
      <Card name={fruits.map(({id,name,color})=> 
      <p key={id} > name: {name}, color: {color}</p>)} />
    </div>
  );
}
