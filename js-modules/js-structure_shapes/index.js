//import { getRandomColor } from "./utils/randomColor.js";
import circle from "./components/Circle/Circle.js";
import square from "./components/Pentagon/Pentagon.js";
import pentagon from "./components/Square/Square.js";

console.clear();

const root = document.getElementById("root");

root.append(circle, square, pentagon);

export { root };
