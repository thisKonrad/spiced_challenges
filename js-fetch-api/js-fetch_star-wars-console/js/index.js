console.clear();

const url = "https://swapi.dev/api/people";

async function fetchData() {

    try{
        const getStarWars = await fetch("https://swapi.dev/api/people");

        console.log("Star Wars API: ",getStarWars)

        const data = await getStarWars.json();

        console.log("Data. ",data)

        console.log("Jedi-Family: ", "Son ",data.results[0],
        "Dad: ",data.results[3],"Daughter: ",data.results[4],)

        const r2D2EyeColor = data.results[1].eye_color;

        console.log("R2D2: ", r2D2EyeColor)
    }
    catch (error){

        console.error(error);
    }
}
fetchData();



