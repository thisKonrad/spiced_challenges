import { getRandomColor } from "../../utils/randomColor.js";

const circle = document.createElement("div");
circle.classList.add("circle");
circle.addEventListener("click", () => {
  const randomColor = getRandomColor();
  circle.style.backgroundColor = randomColor;
});
export default circle;
