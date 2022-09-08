import { useCallback, useEffect, useState } from "react";

const useAllPokemons = () => {
  const [pokemons, setPokemons] = useState([]);
  const [error, setError] = useState();

  //Fetch all the data, from the name got from the fetchPokemons
  const fetchPokemonData = useCallback(async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      return data;
    } catch (error) {
      setError(error);
    }
  }, []);

  // Fetch pokemons
  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        const response = await fetch(
          "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=386"
        );
        const data = await response.json();
        const promises = data.results.map(async (data) => {
          return await fetchPokemonData(data.url);
        });
        await Promise.all(promises).then((values) => setPokemons(values));
      } catch (error) {
        setError(error);
      }
    };
    fetchPokemons();

    return () => {
      setPokemons([]);
    };
  }, [fetchPokemonData]);

  return [pokemons, error];
};

export default useAllPokemons;
