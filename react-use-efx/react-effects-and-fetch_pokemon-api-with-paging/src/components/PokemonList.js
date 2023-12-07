import { useEffect, useState } from "react";


export default function PokemonList() {

  const [pokemon, setPokemon] = useState([]);
  const [offset, setOffset] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {  
      loadPokemon()
    
  }, [offset]);

  
  async function loadPokemon() {

      try {

        const response = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset}`);
        const data = await response.json();

        setPokemon(data.results);
    
        console.log(data)
        console.log(data.next)
        console.log(data.previous)

        offset === 0 ? setIsVisible(false) : setIsVisible(true)

      } catch (error) {
        console.log(error);
      }
      if(!pokemon){
        return null;
      }
  }
  

  return (
    <main>
      {/* check that you cant get uder page one: */}
      <button onClick={()=> offset === 0 ? setOffset(offset): setOffset(offset -20)}

        style={{visibility: isVisible ? "visible" : "hidden" }}
        type="button">Previous Page

      </button>

      <button onClick={()=> setOffset(offset +20)} 
      type="button">Next Page
      </button>

      <ul>
        {pokemon.map(({ name }) => (
          <li key={name}>{name}</li>
        ))}
      </ul>

    </main>
  );
}