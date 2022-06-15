class BlottoGame {
  constructor() {
    this.playerName = "";
    this.noOfTroops = 6;
    this.playerTroops = [];
    this.npcTroops = [];
    this.noOfBattleFields = 3;
    this.battleFields = [];
    this.level = 0;
  }
  playerColonelName() {
    return `Cel. ${this.playerName}`;
  }

  NPCColonelName() {
    return `Cel. Hanke`;
  }

  createBattleFields() {
    for (let i = 0; i < this.noOfBattleFields; i++) {
      this.battleFields.push(0);
    }
  }

  levelUp() {
    this.level += 1;
    if (this.level % 2 === 0) {
      this.noOfBattleFields += 3;
    } else {
      this.noOfTroops += 6;
    }
  }

  createNPCTroops() {
    let npcTroopsArr = [];

    switch (this.noOfTroops) {
      case 6:
        npcTroopsArr = [
          [2, 2, 2],
          [1, 2, 3],
          [1, 1, 4],
        ];
        break;
      case 12:
        switch (this.noOfBattleFields) {
          case 3:
            npcTroopsArr = [
              [4, 4, 4],
              [1, 1, 10],
              [1, 2, 9],
              [1, 3, 8],
              [1, 4, 7],
              [1, 5, 6],
              [2, 2, 8],
              [3, 3, 6],
            ];
            break;
          case 6:
            npcTroopsArr = [
              [2, 2, 2, 2, 2, 2],
              [1, 1, 1, 1, 1, 7],
              [1, 1, 1, 1, 2, 6],
              [1, 1, 1, 1, 3, 5],
              [1, 1, 1, 1, 4, 4],
              [1, 1, 1, 2, 2, 5],
              [1, 1, 2, 2, 2, 4],
              [1, 2, 2, 2, 2, 3],
            ];
            break;
        }
        break;
      case 18:
        switch (this.noOfBattleFields) {
          case 6:
            npcTroopsArr = [
              [3, 3, 3, 3, 3, 3],
              [1, 1, 1, 1, 1, 13],
              [1, 1, 1, 1, 2, 12],
              [1, 1, 1, 1, 3, 11],
              [1, 1, 1, 1, 4, 10],
              [1, 1, 1, 1, 5, 9],
              [1, 1, 1, 1, 6, 8],
              [1, 1, 1, 1, 7, 7],
              [1, 1, 1, 2, 6, 7],
              [1, 1, 1, 3, 5, 7],
              [1, 1, 1, 4, 4, 7],
              [1, 1, 1, 2, 5, 8],
              [1, 1, 1, 3, 4, 8],
              [1, 1, 1, 4, 3, 8],
              [1, 1, 1, 2, 4, 9],
              [1, 1, 1, 3, 3, 9],
              [1, 1, 2, 3, 3, 8],
              [1, 1, 3, 3, 3, 7],
              [1, 2, 3, 3, 3, 6],
              [1, 3, 3, 3, 3, 5],
              [2, 3, 3, 3, 3, 4],
            ];
            break;
          case 9:
            npcTroopsArr = [
              [2, 2, 2, 2, 2, 2, 2, 2, 2],
              [1, 1, 1, 1, 1, 1, 1, 1, 10],
              [1, 1, 1, 1, 1, 1, 1, 2, 9],
              [1, 1, 1, 1, 1, 1, 1, 3, 8],
              [1, 1, 1, 1, 1, 1, 1, 4, 7],
              [1, 1, 1, 1, 1, 1, 1, 5, 6],
              [1, 1, 1, 1, 1, 1, 2, 4, 6],
              [1, 1, 1, 1, 1, 1, 3, 3, 6],
              [1, 1, 1, 1, 1, 2, 2, 3, 6],
              [1, 1, 1, 1, 2, 2, 2, 2, 6],
              [1, 1, 1, 2, 2, 2, 2, 2, 5],
              [1, 1, 1, 1, 2, 2, 2, 3, 5],
              [1, 1, 1, 1, 1, 2, 2, 4, 5],
              [1, 1, 1, 1, 1, 1, 2, 5, 5],
              [1, 1, 1, 1, 2, 2, 2, 4, 4],
              [1, 1, 1, 2, 2, 2, 2, 3, 4],
              [1, 1, 2, 2, 2, 2, 2, 3, 3],
              [1, 2, 2, 2, 2, 2, 2, 2, 3],
            ];
            break;
        }
    }
    this.npcTroops =
      npcTroopsArr[Math.floor(Math.random() * npcTroopsArr.length)];
  }

  raid(troops) {
    for (let i = 0; i < this.battleFields.length; i++) {
      this.battleFields[i] += troops[i];
    }
  }

  checkTroopsOrder(troop) {
    if (!troop.reduce((n, item) => n !== false && item >= n && item)) {
      return false;
    } else {
      return true;
    }
  }

  winnerEvaluation(pTroops, npcTr) {
    let tempBattleFields = [];
    let playerScoring = 0;
    let NPCScoring = 0;

    for (let i = 0; i < this.noOfBattleFields; i++) {
      tempBattleFields.push(pTroops[i] + npcTr[i]);
    }

    // console.log(tempBattleFields);

    for (let j = 0; j < tempBattleFields.length; j++) {
      if (tempBattleFields[j] > 0) {
        playerScoring += 1;
      } else if (tempBattleFields < 0) {
        NPCScoring += 1;
      }
    }

    // console.log(playerScoring);
    // console.log(NPCScoring);

    if (playerScoring > NPCScoring) {
      return `Victory`;
    } else if (playerScoring < NPCScoring) {
      return `Defeat`;
    } else {
      return `Draw`;
    }
  }

  getBattleFieldName() {
    const placeNames = [
      "El Alamein",
      "Tug Argan",
      "Gembloux",
      "Dunkirk",
      "Gulch",
      "Itter",
      "Tali-Ihantala",
      "Kharkov",
      "Rostov",
      "Peterbourgh",
      "Uttarpadesh",
    ];
    const fieldNames = [
      "Lakes",
      "Hills",
      "Bunkers",
      "Villages",
      "Deserts",
      "Boroughs",
      "Forests",
      "Mountains",
    ];

    return `${this.noOfBattleFields} ${
      fieldNames[Math.floor(Math.random() * fieldNames.length)]
    } of ${placeNames[Math.floor(Math.random() * placeNames.length)]}`;
  }
}
// class PlayerColonel {
//   constructor() {
//     this.playerName = "";
//   }
//   colonelName() {
//     return `Cel. ${this.playerName}`;
//   }
// }

// class NPCColonel {
//   constructor() {
//     this.NPCColonelName = "Cel. Hanke";
//   }
//   colonelName() {
//     return this.NPCColonelName;
//   }
//   battleFieldDeployment(troops) {}

//   generateTroops() {
//     //
//   }
// }

//TESTING

//NAMES
const myGame = new BlottoGame();

// const player1 = new PlayerColonel("Caio Garcia");

// console.log(player1.colonelName());

// const NPCPlayer = new NPCColonel();

// console.log(NPCPlayer.colonelName());

//TROOPS
myGame.noOfTroops = 6;

console.log(myGame.noOfTroops);

//BATTLE FIELDS

myGame.createBattleFields();
console.log(myGame.battleFields);

//RAID
let plTroops = [2, 2, 2];
let npcTroops = [-1, -1, -4];

myGame.raid(plTroops);
myGame.raid(npcTroops);

console.log(myGame.battleFields);

//EVALUATION

// console.log(myGame.winnerEvaluation());

//BattleField name

console.log(myGame.getBattleFieldName());
console.log(myGame.getBattleFieldName());

//Troops order

console.log(myGame.checkTroopsOrder(plTroops));
console.log(myGame.checkTroopsOrder(npcTroops));

//NPC Troops creation
// myGame.noOfTroops = 6;
// myGame.noOfBattleFields = 9;
myGame.createNPCTroops();
console.log(myGame.npcTroops);

//LEVEL UP TESTING
console.log(`Leve is ${myGame.level}`);
console.log(`BattleFields are ${myGame.noOfBattleFields}`);
console.log(`Troops are ${myGame.noOfTroops}`);
myGame.levelUp();
console.log(`Leve is ${myGame.level}`);
console.log(`BattleFields are ${myGame.noOfBattleFields}`);
console.log(`Troops are ${myGame.noOfTroops}`);
myGame.levelUp();
console.log(`Leve is ${myGame.level}`);
console.log(`BattleFields are ${myGame.noOfBattleFields}`);
console.log(`Troops are ${myGame.noOfTroops}`);
myGame.levelUp();
console.log(`Leve is ${myGame.level}`);
console.log(`BattleFields are ${myGame.noOfBattleFields}`);
console.log(`Troops are ${myGame.noOfTroops}`);
myGame.levelUp();
console.log(`Leve is ${myGame.level}`);
console.log(`BattleFields are ${myGame.noOfBattleFields}`);
console.log(`Troops are ${myGame.noOfTroops}`);

//FORMER Algorith  for creating random npc troops so that each element sum doesn't overpass the totalOfTroops

// this.npcTroops = [];
// let tempArr = [];
// let maxOfi = this.battleFields.length;
// let maxOfTroops = this.noOfTroops;
// //random creation
// for (let i = 0; i < maxOfi; i++) {
//   tempArr.push(
//     Math.floor(Math.random() * (maxOfTroops / maxOfi + (maxOfi - 1)) + 1)
//   );
// }

// tempArr = tempArr.sort((a, b) => {
//   return a - b;
// });

// //normalisation, so all element sum equals to noOfTroops
// const normalizer = () => {
//   let overpassed = 0;
//   overpassed = Number(
//     tempArr.reduce((acc, curr) => acc + curr, 0) - maxOfTroops
//   );

//   if (overpassed > 0) {
//     tempArr.sort((a, b) => {
//       return a - b;
//     });

//     let reducer = overpassed / maxOfi;

//     tempArr = tempArr.map((num, index) => {
//       if (index === tempArr.length - 1) {
//         return Math.floor(num - reducer);
//       } else {
//         return num;
//       }
//     });

//     tempArr.sort((a, b) => {
//       return a - b;
//     });
//   } else if (overpassed < 0) {
//     tempArr.sort((a, b) => {
//       return a - b;
//     });

//     let incrementer = overpassed / maxOfi;

//     tempArr = tempArr.map((num, index) => {
//       if (index === tempArr.length - 1) {
//         return Math.floor(num + incrementer);
//       } else {
//         return num;
//       }
//     });

//     tempArr.sort((a, b) => {
//       return a - b;
//     });
//   }

//   overpassed = Number(
//     tempArr.reduce((acc, curr) => acc + curr, 0) - maxOfTroops
//   );
//   //   if (overpassed !== 0) {
//   //     normalizer();
//   //   }
// };

// normalizer();

// return (this.npcTroops = tempArr);
//   }
