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

{
  /* 
    <div class="row justify-content-center" style="padding-bottom: 3rem">
      <ng-container [ngSwitch]="exceptionalChainType">
        <ng-container *ngSwitchCase="''">
          <ng-container class="text-capitalize" *ngFor="let stage of evolutionChain; let i =index">
            <div class="col-sm evo-div" style="padding: 10px;">
              <div *ngIf="evolutionChain.length===1" class="DNE">This Pokémon does not evolve.</div>
              <div>
                <img alt="" class="evo-img mx-auto d-block" src="assets/thumbnails-compressed/{{this.pad(stage[1], 3) + '.png'}}"
                  routerLink="/pokemon/{{stage[1]}}" (click)="selectEvolution(stage[1])">
              </div>
              <div class="evo-id text-center">#{{stage[1]}}</div>
              <div class="evo-name text-uppercase text-center" routerLink="/pokemon/{{stage[1]}}" (click)="selectEvolution(stage[1])"
                style="padding: 0; bottom: 0"><span class="evo-name {{pokemon.color}}"
                  [ngClass]="{'selectedEvo':selectedEvolutionId===stage[1]}">{{stage[0]}}</span>
              </div>
              <div class="evo-types col-xs-5" style="padding: 0;" *ngIf="pokemonService.pokemons[stage[1]-1]!=undefined">
                <div class="icon {{type['n']}}" *ngFor="let type of pokemonService.pokemons[stage[1]-1].types"><img alt=""
                    src="assets/type-icons/png/{{type['n']}}.png"></div>
              </div>
            </div>
            <div class='col-sm arrow-div evo-desc' *ngIf="i<evolutionChain.length-1">
              <img alt="" src="assets/right-arrow.png" class="evo-arrow">
              {{evolutionDesc[i]}}
            </div>
          </ng-container>
        </ng-container>
      </ng-container>
    </div>
*/
}

{
  /* 
                {pokeChain.map((poke, index) => {
                  return (
                    <div key={poke.poke_name}>
                      <img
                        src={poke.image_url}
                        alt="Avatar"
                        width={130}
                        height={130}
                        border="1px solid red"
                      />
                      {index < 2 && <ArrowRightAltIcon />}
                    </div>
                  );
                  
                  // return <li key={poke.species_name}>{poke.species_name}</li>;
                })}*/
}

{
  /* <Box sx={evoChainBox}>
{pokeChain.slice(0, 1).map((item) => {
  return (
    <div key={item.poke_name} style={imageAndTypoStyle}>
      <img
        src={item.image_url}
        alt="Avatar"
        width={130}
        height={130}
      />
      <Typography variant="h5" textTransform="capitalize">
        {item.poke_name}
      </Typography>
    </div>
  );
})}
<div style={arrowAndEvoDescType}>
  {evoDescChain[0]}
  <ArrowForwardIcon sx={{ fontSize: 50 }} />
</div>
{pokeChain.slice(1, 2).map((item) => {
  return (
    <div key={item.poke_name} style={imageAndTypoStyle}>
      <img
        src={item.image_url}
        alt="Avatar"
        width={130}
        height={130}
      />
      <Typography variant="h5" textTransform="capitalize">
        {item.poke_name}
      </Typography>
    </div>
  );
})}
<div style={arrowAndEvoDescType}>
  {evoDescChain[1]}
  <ArrowForwardIcon sx={{ fontSize: 50 }} />
</div>
{pokeChain.slice(2).map((item) => {
  return (
    <div key={item.poke_name} style={imageAndTypoStyle}>
      <img
        src={item.image_url}
        alt="Avatar"
        width={130}
        height={130}
      />
      <Typography variant="h5" textTransform="capitalize">
        {item.poke_name}
      </Typography>
    </div>
  );
})}
</Box> */
}
