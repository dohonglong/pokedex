// CASE 112
// CASE EVOLUTION 1 -> 1 -> 2
// case 112:
//     setEvoChain((evoChain) => [
//       ...evoChain,
//       {
//         poke_name: evoData.species.name,
//         is_baby: evoData.is_baby,
//         evolution_details: evoData.evolution_details,
//       },
//     ]);
//     const nextChain_11 = evoData["evolves_to"][0];
//     setEvoChain((evoChain) => [
//       ...evoChain,
//       {
//         poke_name: nextChain_11.species.name,
//         is_baby: nextChain_11.is_baby,
//         evolution_details: nextChain_11.evolution_details,
//       },
//     ]);
//     i = 0;
//     while (evoData["evolves_to"][0]["evolves_to"][i] !== undefined) {
//       const nextChain_112 = evoData["evolves_to"][0]["evolves_to"][i];
//       setEvoChain((evoChain) => [
//         ...evoChain,
//         {
//           poke_name: nextChain_112.species.name,
//           is_baby: nextChain_112.is_baby,
//           evolution_details: nextChain_112.evolution_details,
//         },
//       ]);
//       i++;
//     }
//     break;

// CASE EVOLUTION 1 -> 2, 1 -> 3, 1 -> 8
// case 12:
// case 13:
// case 18:
//   setEvoChain((evoChain) => [
//     ...evoChain,
//     {
//       poke_name: evoData.species.name,
//       is_baby: evoData.is_baby,
//       evolution_details: evoData.evolution_details,
//     },
//   ]);
//   i = 0;
//   while (evoData["evolves_to"][i] !== undefined) {
//     const nextChain_12_13_18 = evoData["evolves_to"][i];
//     setEvoChain((evoChain) => [
//       ...evoChain,
//       {
//         poke_name: nextChain_12_13_18.species.name,
//         is_baby: nextChain_12_13_18.is_baby,
//         evolution_details: nextChain_12_13_18.evolution_details,
//       },
//     ]);
//     i++;
//   }
//   //console.log(evoChain);
//   break;

// // CASE EVOLUTION 1 -> 2 -> 2
// case 122:
//     setEvoChain((evoChain) => [
//       ...evoChain,
//       {
//         poke_name: evoData.species.name,
//         is_baby: evoData.is_baby,
//         evolution_details: evoData.evolution_details,
//       },
//     ]);
//     // Silcoon
//     setEvoChain((evoChain) => [
//       ...evoChain,
//       {
//         poke_name: evoData["evolves_to"][0].species.name,
//         is_baby: evoData["evolves_to"][0].is_baby,
//         evolution_details: evoData["evolves_to"][0].evolution_details,
//       },
//     ]);
//     // Cascoon
//     setEvoChain((evoChain) => [
//       ...evoChain,
//       {
//         poke_name: evoData["evolves_to"][1].species.name,
//         is_baby: evoData["evolves_to"][1].is_baby,
//         evolution_details: evoData["evolves_to"][1].evolution_details,
//       },
//     ]);
//     // Beautifly
//     setEvoChain((evoChain) => [
//       ...evoChain,
//       {
//         poke_name:
//           evoData["evolves_to"][0]["evolves_to"][0].species.name,
//         is_baby: evoData["evolves_to"][0]["evolves_to"][0].is_baby,
//         evolution_details:
//           evoData["evolves_to"][0]["evolves_to"][0].evolution_details,
//       },
//     ]);
//     // Dustox
//     setEvoChain((evoChain) => [
//       ...evoChain,
//       {
//         poke_name:
//           evoData["evolves_to"][1]["evolves_to"][0].species.name,
//         is_baby: evoData["evolves_to"][1]["evolves_to"][0].is_baby,
//         evolution_details:
//           evoData["evolves_to"][1]["evolves_to"][0].evolution_details,
//       },
//     ]);
