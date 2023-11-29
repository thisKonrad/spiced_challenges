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
];

  return (
    <div className="app">
      <Card name="🍌 banana" />
    </div>
  );
}
