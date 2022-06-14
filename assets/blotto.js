class BlottoGame {
  constructor() {
    this.playerName = "";
    this.noOfTroops = 6;
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

  createNPCTroops() {
    //
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

  winnerEvaluation() {
    let playerScoring = 0;
    let NPCScoring = 0;
    for (let i = 0; i < this.battleFields.length; i++) {
      if (this.battleFields[i] > 0) {
        playerScoring += 1;
      } else if (this.battleFields[i] < 0) {
        NPCScoring += 1;
      }
    }

    if (playerScoring > NPCScoring) {
      return `Player Won`;
    } else if (playerScoring < NPCScoring) {
      return `NPC Won`;
    } else {
      return `This was a draw!`;
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

const player1 = new PlayerColonel("Caio Garcia");

console.log(player1.colonelName());

const NPCPlayer = new NPCColonel();

console.log(NPCPlayer.colonelName());

//TROOPS
myGame.noOfTroops = 18;

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

console.log(myGame.winnerEvaluation());

//BattleField name

console.log(myGame.getBattleFieldName());
console.log(myGame.getBattleFieldName());

//Troops order

console.log(myGame.checkTroopsOrder(plTroops));
console.log(myGame.checkTroopsOrder(npcTroops));
