import { useEffect, useState } from "react";

const useAllPokemons = () => {
  const [pokemons, setPokemons] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/");
        const data = await response.json();
        const result = data.results;
        setPokemons(result);
      } catch (error) {
        setError(error);
      }
    };
    fetchPokemons();
  }, [pokemons]);

  return [pokemons, error];
};

export default useAllPokemons;
