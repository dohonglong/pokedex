// const fetchEvoImages = async (evoChainArray) => {
//   for (let i = 0; i < evoChainArray.length; i++) {
//     try {
//       const response = await fetch(
//         `https://pokeapi.co/api/v2/pokemon/ivysaur`
//       );
//       const data = await response.json();
//       console.log("data");
//       data.sprites.other.dream_world.front_default
//         ? setEvoChain((evoChainArray) => [
//             ...evoChainArray,
//             { url: data.sprites.other.dream_world.front_default },
//           ])
//         : setEvoChain((evoChainArray) => [
//             ...evoChainArray,
//             { url: data.sprites.other["official-artwork"].front_default },
//           ]);
//     } catch (error) {
//       console.log("Error:", error);
//     }
//   }
// };

// const generateEvoMethods = () => {
//   // let i;
//   //console.log("HELLO " + exceptionalChainType);
//   switch (exceptionalChainType) {
//     default:
//       //console.log("Normal evolution chain");
//       for (let link of evoChain) {
//         //console.log("HELLO");
//         //console.log(link);
//         let stage = link.evolution_details[0];
//         console.log(stage);
//         if (stage !== undefined) {
//           console.log("default generateEvoMethods");
//           evoDesc.push(generateEvoMethodsLogic(stage));
//         }
//       }
//       console.log("Normal type done");
//       console.log(evoDesc);
//       break;

//     // case 18:
//     //   console.log("Eevee");
//     //   break;

//     // case 112:
//     //   console.log("Oddish");
//   }
// };

// const generateEvoMethodsLogic = (stage) => {
//   let desc = " ";
//   switch (stage.trigger.name) {
//     default:
//       // Case level-up
//       if (stage.min_level !== null) {
//         desc = "Level " + stage.min_level + "+";
//       } else {
//         desc = "Level up";
//       }
//       if (stage.gender !== null) {
//         let gender;
//         if (stage.gender === 2) {
//           gender = "(Male)";
//         } else {
//           gender = "(Female)";
//         }
//         desc = desc + " " + gender;
//       }
//       if (stage.held_item !== null) {
//         const held_item = stage.held_item.name;
//         desc = desc + " holding " + held_item;
//       }
//       if (stage["known_move"] !== null) {
//         const known_move = stage["known_move"]["name"];
//         desc = desc + " knowing " + known_move;
//       }
//       if (stage["known_move_type"] !== null) {
//         const known_move_type = stage["known_move_type"]["name"];
//         desc = desc + " knowing a " + known_move_type + " move";
//       }
//       if (stage["min_affection"] !== null) {
//         const min_affection = stage["min_affection"];
//         desc = desc + " with " + min_affection + "+ Affection";
//       }
//       if (stage["min_beauty"] !== null) {
//         const min_beauty = stage["min_beauty"];
//         desc = desc + " with " + min_beauty + "+ Beauty";
//       }
//       if (stage["min_happiness"] !== null) {
//         const min_happiness = stage["min_happiness"];
//         desc = desc + " with " + min_happiness + "+ Happiness";
//       }
//       if (stage["relative_physical_stats"] !== null) {
//         let sign;
//         if (stage["relative_physical_stats"] === 1) {
//           sign = ">";
//         } else if (stage["relative_physical_stats"] === -1) {
//           sign = "<";
//         } else {
//           sign = "=";
//         }
//         desc = desc + " with Attack " + sign + " Defence";
//       }
//       if (stage["party_species"] !== null) {
//         const party_species = stage["party_species"]["name"];
//         desc = desc + " with " + party_species + " in party";
//       }
//       if (stage["party_type"] !== null) {
//         const party_type = stage["party_type"]["name"];
//         desc = desc + " with a " + party_type + " type in party";
//       }
//       if (stage["location"] !== null) {
//         const location = stage["location"]["name"];
//         desc = desc + " at " + location;
//       }
//       if (stage["needs_overworld_rain"] !== false) {
//         desc = desc + " during Rain";
//       }
//       if (stage["time_of_day"] !== "") {
//         const time_of_day = stage["time_of_day"];
//         desc = desc + " at " + time_of_day + "time";
//       }
//       if (stage["turn_upside_down"] !== false) {
//         desc = desc + " holding 3DS upside-down";
//       }
//       break;
//   }
//   return desc;
// };
// //console.log(evoChain);
// generateEvoMethods();
