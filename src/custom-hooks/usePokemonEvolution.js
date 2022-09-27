import { useEffect, useState } from "react";

const usePokemonEvolution = () => {
  const [evoChain, setEvoChain] = useState([]);
  const [error, setError] = useState();

  useEffect(() => {
    const fetchEvoDetails = async () => {
      try {
        const response = await fetch(
          "https://pokeapi.co/api/v2/evolution-chain/1/"
        );
        const data = await response.json();
        let evoData = data.chain;

        do {
          const evoDetails = evoData["evolution_details"][0];
          const numberOfEvolutions = evoData["evolves_to"].length;

          // Normal evolution chain
          const evoChainState = {
            species_name: evoData.species.name,
            min_level: !evoDetails ? 1 : evoDetails.min_level,
            trigger_name: !evoDetails
              ? null
              : evoDetails.trigger
              ? evoDetails.trigger.name
              : null,
            item: !evoDetails ? null : evoDetails.item,
          };
          setEvoChain((evoChain) => [...evoChain, evoChainState]);

          // Special evolution cases
          if (numberOfEvolutions > 1) {
            for (let i = 1; i < numberOfEvolutions; i++) {
              const evoChainStateSpecial = {
                species_name: evoData.evolves_to[i].species.name,
                min_level: !evoData.evolves_to[i]
                  ? 1
                  : evoData.evolves_to[i].min_level,
                trigger_name: !evoData.evolves_to[i]
                  ? null
                  : evoData.evolves_to[i].trigger
                  ? evoData.evolves_to[i].trigger.name
                  : null,
                item: !evoData.evolves_to[i]
                  ? null
                  : evoData.evolves_to[i].item,
              };
              setEvoChain((evoChain) => [...evoChain, evoChainStateSpecial]);
            }
          }
          evoData = evoData["evolves_to"][0];
        } while (!!evoData && evoData.hasOwnProperty("evolves_to"));
      } catch (error) {
        setError(error);
      }
    };
    //console.log(evoChain);
    fetchEvoDetails();
  }, []);
  return [evoChain, error];
};

export default usePokemonEvolution;
