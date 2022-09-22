import { useEffect } from "react";

const usePokemonEvolution = (url) => {
  const evoChain = [];

  useEffect(() => {
    const fetchEvoDetails = async () => {
      const response = await fetch(url);
      const data = await response.json();
      let evoData = data.chain;

      do {
        var evoDetails = evoData["evolution_details"][0];

        evoChain.push({
          species_name: evoData.species.name,
          min_level: !evoDetails ? 1 : evoDetails.min_level,
          trigger_name: !evoDetails ? null : evoDetails.trigger.name,
          item: !evoDetails ? null : evoDetails.item,
        });

        evoData = evoData["evolves_to"][0];
        //console.log(evoData);
        console.log(evoChain);
      } while (!!evoData && evoData.hasOwnProperty("evolves_to"));
    };
    fetchEvoDetails();
  });

  return evoChain;
};

export default usePokemonEvolution;
