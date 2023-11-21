import { setColorToGuess, getRandomHexCode } from "./utils.js";

export async function fetchNewColor() {

  const hexCode = getRandomHexCode();
  const colorApiUrl = `https://www.thecolorapi.com/id?hex=${hexCode}`;
  /**
   * Hint 1:
   * Use the fetch API to get the hex value and the name of the closest
   * named color to the randomly generated `hexCode` from the color API.
   * These values can be found in `.name.closest_named_hex` and
   * `.name.value` properties of the response data respectively.
   *
   * Hint 2:
   * Call the `setColorToGuess` function to set the color to guess.
   * The function takes two arguments:
   *  - the hex code of the closest named color
   *  - and the name of the random color
   */

  // --v-- your code here --v--

  try{
    const fetchColors = await fetch(colorApiUrl);
    const colorData = await fetchColors.json();
    
    console.log("->-^-<->-^-<->-^-<->-^-<->-^-<->-^-<")
    console.log("Color-API: ",fetchColors)
    console.log("Color-Data: ", colorData);
  

    let getHexValue = colorData.hex.value;
    const closestName = colorData.name.closest_named_hex;

    console.log("->-^-<->-^-<->-^-<->-^-<->-^-<->-^-<")
    console.log("HexValue: ",getHexValue)
    console.log("Closest Name: ", closestName)

    setColorToGuess(getHexValue, closestName);
  }
  catch (error){
    console.log(error)

  }

  // --^-- your code here --^--
}
