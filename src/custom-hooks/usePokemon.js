import { useEffect, useState } from "react";

const usePokemon = (name) => {
  const [pokemon, setPokemon] = useState([]);
  const [error, setError] = useState();

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const name = "bulbasaur";
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${name}`
        );
        const data = await response.json();
        const pokeData = Object.keys(data).map((key) => {
          return data[key];
        });
        setPokemon(pokeData);
        //console.log(pokeData[11]);
      } catch (error) {
        setError(error);
      }
    };
    fetchPokemon();
  }, [name]);

  return [pokemon, error];
};

export default usePokemon;
