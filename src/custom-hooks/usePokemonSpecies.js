import { useEffect, useState } from "react";
import pokeSpecies_data from "../data/pokemonSpecies.json";

const usePokemonSpecies = (id) => {
  const [pokeSpecies, setPokeSpecies] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    const fetchPokemonSpecies = async () => {
      try {
        setPokeSpecies(pokeSpecies_data.pokemon_species[id - 1]);
      } catch (error) {
        setError(error);
      }
    };
    fetchPokemonSpecies();
  }, [id]);

  return [pokeSpecies, error];
};

export default usePokemonSpecies;
