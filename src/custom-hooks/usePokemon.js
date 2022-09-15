import { useEffect, useState } from "react";

const usePokemon = (name) => {
  const [pokemon, setPokemon] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${name}`
        );
        const data = await response.json();
        setPokemon(data);
        //console.log(data);
      } catch (error) {
        setError(error);
      }
    };
    fetchPokemon();
  }, [name]);

  return [pokemon, error];
};

export default usePokemon;
