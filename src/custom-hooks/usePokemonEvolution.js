import { useEffect, useState } from "react";
//import { useCallback } from "react";

const usePokemonEvolution = (evolutionChain_url) => {
  const [evoChain, setEvoChain] = useState([]);
  const [error, setError] = useState();

  let evoDesc = [];
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

  const fetchEvoImages = async (name) => {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
      const data = await response.json();
      return data.sprites.other["official-artwork"].front_default
        ? data.sprites.other["official-artwork"].front_default
        : data.sprites.other.dream_world.front_default;
    } catch (error) {
      setError(error);
    }
  };

  const generateEvoMethods = async () => {
    //let i;
    //console.log("HELLO " + exceptionalChainType);
    switch (exceptionalChainType) {
      default:
        // NORMAL EVOLUTION CHAIN
        //console.log("Normal evolution chain");
        for (let link of evoChain) {
          let stage = link.evolution_details[0];
          //console.log(stage);
          if (stage !== undefined) {
            //console.log("default generateEvoMethods");
            evoDesc.push(generateEvoMethodsLogic(stage));
          }
        }
        //console.log(evoDesc);
        break;
    }
  };

  const generateEvoMethodsLogic = (stage) => {
    let desc = " ";
    switch (stage.trigger.name) {
      default:
        // Case level-up
        if (stage.min_level !== null) {
          desc = "Level " + stage.min_level + "+";
        } else {
          desc = "Level up";
        }
        break;
    }
    return desc;
  };

  useEffect(() => {
    const fetchEvoDetails = async () => {
      try {
        const response = await fetch(evolutionChain_url);
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

        //let i;
        let pokeArray = [];

        switch (exceptionalChainType) {
          // NORMAL EVOLUTION CHAIN
          default:
            do {
              const evoChainState = {
                poke_name: evoData.species.name,
                is_baby: evoData.is_baby,
                evolution_details: evoData.evolution_details,
                image_url: await fetchEvoImages(evoData.species.name),
              };
              pokeArray.push(evoChainState);
              evoData = evoData["evolves_to"][0];
            } while (evoData !== undefined);
            //console.log(pokeArray);
            setEvoChain(pokeArray);
            break;
        }
      } catch (error) {
        setError(error);
      }
    };
    //console.log(evoChain);

    fetchEvoDetails();
  }, [evolutionChain_url]);

  generateEvoMethods();

  return [evoChain, evoDesc, error];
};

export default usePokemonEvolution;
