// Store the cards in a global state
import Header from "../../components/Header/Header.js";
import { CardList } from "../../components/Card/Cards.js";
import { Form } from "../../components/Form/Form.js";

function App() {
  const app = document.createElement("main");
  app.classList.add("app");
  app.append(Header(), Form(), CardList());

  return app;
}

// The render function renders the app to the DOM
function render() {
  const root = document.querySelector("#root");
  root.append(App());
}

render();
