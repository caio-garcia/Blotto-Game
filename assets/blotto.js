class BlottoGame {
  constructor() {
    this.noOfTroops = 6;
    this.noOfBattleFields = 3;
    this.battleFields = [];
  }
  troopAssignment() {
    return this.noOfTroops;
  }

  createBattleFields() {
    for (let i = 0; i < this.noOfBattleFields; i++) {
      this.battleFields.push(0);
    }
  }
  raid(troops) {
    for (let i = 0; i < this.battleFields.length; i++) {
      this.battleFields[i] += troops[i];
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
class PlayerColonel {
  constructor() {
    this.playerName = "";
    this.noOfTroops = 6;
  }
  colonelName() {
    return `Cel. ${this.playerName}`;
  }
  assignTroops(noOfTroops) {
    this.noOfTroops = noOfTroops;
  }
  //   battleFieldDeployment(troops) {
  //     //checking on non-decrescent rule
  //     let decrecentArr = [...troops];
  //     decrecentArr.sort((a, b) => {
  //       return b - a;
  //     });

  //     let status = true;
  //     for (let i = 0; i < troops.length; i++) {
  //       if (troops[i] === decrecentArr[i]) {
  //         status *= true;
  //       } else {
  //         status *= false;
  //       }
  //     }
  //     return status;
  //   }
}

class NPCColonel {
  constructor() {
    this.NPCColonelName = "Cel. Hanke";
    this.noOfTroops = 6;
  }
  colonelName() {
    return this.NPCColonelName;
  }
  assignTroops(noOfTroops) {
    this.noOfTroops = noOfTroops;
  }
  battleFieldDeployment(troops) {}
}

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

player1.assignTroops(myGame.noOfTroops);
NPCPlayer.assignTroops(myGame.noOfTroops);

console.log(player1.noOfTroops);
console.log(NPCPlayer.noOfTroops);

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
console.log(myGame.getBattleFieldName());
