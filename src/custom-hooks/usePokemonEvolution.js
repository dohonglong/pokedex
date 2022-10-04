import { useCallback, useEffect, useState } from "react";

const usePokemonEvolution = () => {
  const [evoChain, setEvoChain] = useState([]);
  const [error, setError] = useState();

  //let evoDesc = [];
  let exceptionalChainType = 0;
  const evoChainException_112 = ["oddish", "poliwag", "ralts"];
  const evoChainExceptions_122 = ["wurmple"];
  const evoChainExceptions_12 = [
    "meowth",
    "slowpoke",
    "nincada",
    "snorunt",
    "clamperl",
  ];
  const evoChainExceptions_13 = ["tyrogue"];
  const evoChainExceptions_18 = ["eevee"];

  const fetchEvoImages = useCallback(async (name) => {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
      const data = await response.json();
      return data.sprites.other.dream_world.front_default
        ? { url: data.sprites.other.dream_world.front_default }
        : { url: data.sprites.other["official-artwork"].front_default };
    } catch (error) {
      setError(error);
    }
  }, []);

  useEffect(() => {
    const fetchEvoDetails = async () => {
      try {
        const response = await fetch(
          "https://pokeapi.co/api/v2/evolution-chain/1/"
        );
        const data = await response.json();

        let evoData = data.chain;

        if (evoChainException_112.indexOf(evoData.species.name) > -1) {
          exceptionalChainType = 112; // 1 -> 1 -> 2 evolution
        } else if (evoChainExceptions_122.indexOf(evoData.species.name) > -1) {
          exceptionalChainType = 122; // 1 -> 2 -> 2 evolution
        } else if (evoChainExceptions_12.indexOf(evoData.species.name) > -1) {
          exceptionalChainType = 12; // 1 -> 2 evolution
        } else if (evoChainExceptions_13.indexOf(evoData.species.name) > -1) {
          exceptionalChainType = 13; // 1 -> 3 evolution
        } else if (evoChainExceptions_18.indexOf(evoData.species.name) > -1) {
          exceptionalChainType = 18; // 1 -> 8 evolution
        }

        let i;
        switch (exceptionalChainType) {
          // NORMAL EVOLUTION CHAIN
          default:
            do {
              const evoChainState = {
                poke_name: evoData.species.name,
                is_baby: evoData.is_baby,
                evolution_details: evoData.evolution_details,
              };
              setEvoChain((evoChain) => [...evoChain, evoChainState]);
              evoData = evoData["evolves_to"][0];
            } while (evoData !== undefined);
            break;

          // CASE EVOLUTION 1 -> 1 -> 2
          case 112:
            setEvoChain((evoChain) => [
              ...evoChain,
              {
                poke_name: evoData.species.name,
                is_baby: evoData.is_baby,
                evolution_details: evoData.evolution_details,
              },
            ]);
            const nextChain_11 = evoData["evolves_to"][0];
            setEvoChain((evoChain) => [
              ...evoChain,
              {
                poke_name: nextChain_11.species.name,
                is_baby: nextChain_11.is_baby,
                evolution_details: nextChain_11.evolution_details,
              },
            ]);
            i = 0;
            while (evoData["evolves_to"][0]["evolves_to"][i] !== undefined) {
              const nextChain_112 = evoData["evolves_to"][0]["evolves_to"][i];
              setEvoChain((evoChain) => [
                ...evoChain,
                {
                  poke_name: nextChain_112.species.name,
                  is_baby: nextChain_112.is_baby,
                  evolution_details: nextChain_112.evolution_details,
                },
              ]);
              i++;
            }
            break;

          // CASE EVOLUTION 1 -> 2, 1 -> 3, 1 -> 8
          case 12:
          case 13:
          case 18:
            setEvoChain((evoChain) => [
              ...evoChain,
              {
                poke_name: evoData.species.name,
                is_baby: evoData.is_baby,
                evolution_details: evoData.evolution_details,
              },
            ]);
            i = 0;
            while (evoData["evolves_to"][i] !== undefined) {
              const nextChain_12_13_18 = evoData["evolves_to"][i];
              setEvoChain((evoChain) => [
                ...evoChain,
                {
                  poke_name: nextChain_12_13_18.species.name,
                  is_baby: nextChain_12_13_18.is_baby,
                  evolution_details: nextChain_12_13_18.evolution_details,
                },
              ]);
              i++;
            }
            //console.log(evoChain);
            break;

          // CASE EVOLUTION 1 -> 2 -> 2
          case 122:
            setEvoChain((evoChain) => [
              ...evoChain,
              {
                poke_name: evoData.species.name,
                is_baby: evoData.is_baby,
                evolution_details: evoData.evolution_details,
              },
            ]);
            // Silcoon
            setEvoChain((evoChain) => [
              ...evoChain,
              {
                poke_name: evoData["evolves_to"][0].species.name,
                is_baby: evoData["evolves_to"][0].is_baby,
                evolution_details: evoData["evolves_to"][0].evolution_details,
              },
            ]);
            // Cascoon
            setEvoChain((evoChain) => [
              ...evoChain,
              {
                poke_name: evoData["evolves_to"][1].species.name,
                is_baby: evoData["evolves_to"][1].is_baby,
                evolution_details: evoData["evolves_to"][1].evolution_details,
              },
            ]);
            // Beautifly
            setEvoChain((evoChain) => [
              ...evoChain,
              {
                poke_name:
                  evoData["evolves_to"][0]["evolves_to"][0].species.name,
                is_baby: evoData["evolves_to"][0]["evolves_to"][0].is_baby,
                evolution_details:
                  evoData["evolves_to"][0]["evolves_to"][0].evolution_details,
              },
            ]);
            // Dustox
            setEvoChain((evoChain) => [
              ...evoChain,
              {
                poke_name:
                  evoData["evolves_to"][1]["evolves_to"][0].species.name,
                is_baby: evoData["evolves_to"][1]["evolves_to"][0].is_baby,
                evolution_details:
                  evoData["evolves_to"][1]["evolves_to"][0].evolution_details,
              },
            ]);
        }
      } catch (error) {
        setError(error);
      }
      //console.log(evoChain);
      //fetchEvoImages(evoChain);
    };
    //console.log(evoChain);
    fetchEvoDetails();
  }, []);

  const promises = evoChain.map(async (data) => {
    return await fetchEvoImages(data.poke_name);
  });

  Promise.all(promises).then((values) => console.log(values));

  return [evoChain, error];
};

export default usePokemonEvolution;
