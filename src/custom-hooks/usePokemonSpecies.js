import { useEffect, useState } from "react";

const usePokemonSpecies = (name) => {
  const [pokeSpecies, setPokeSpecies] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    const fetchPokemonSpecies = async () => {
      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon-species/${name}`
        );
        const data = await response.json();
        setPokeSpecies(data);
        //console.log(data);
      } catch (error) {
        setError(error);
      }
    };
    fetchPokemonSpecies();
  }, [name]);

  return [pokeSpecies, error];
};

export default usePokemonSpecies;
