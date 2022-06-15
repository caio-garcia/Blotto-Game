//HTML capturing

const gameHeader = document.getElementById("main - title");
const startPage = document.getElementById("start-page");
const playerName = document.getElementById("player-name");
const srtBtn = document.getElementById("start-button");

const levelPage = document.getElementById("level");
const introLevelText = document.getElementById("level-intro");
const levelPlace = document.getElementById("level-place");
const numberOfTroops = document.getElementById("number-of-troops");
let availTroops = document.getElementsByClassName("available-troops");
const bttlFieldList = document.querySelector("#level-battlefields ul");
const bttlFieldIds = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "X",
  "Y",
  "Z",
];
const atkBtn = document.getElementById("atk-btn");

const rstPg = document.getElementById("result-page");
const winBtn = document.getElementById("win");
const drawBtn = document.getElementById("draw");
const defeatBtn = document.getElementById("defeat");
const defeatText = document.getElementById("further-info-defeat");
const rstMsg = document.getElementById("result-message");
const siteResultsUl = document.getElementById("sites-results");

const blottoGame = new BlottoGame();
// blottoGame.noOfTroops = 12;
// blottoGame.noOfBattleFields = 6;

//TypeWriting on Game Title
let i = 0;
let speed = 250; /* The speed/duration of the effect in milliseconds */
let txt = "The Blotto Game"; /* The text */
const mainTitle = document.getElementById("blotto-title");

function typeWriter() {
  if (i < txt.length) {
    mainTitle.innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

window.onload = typeWriter();

//LEVEL page function

function gamePgFunction() {
  if (playerName.value === "") {
    window.Error(`Please enter your name, Colonel!`);
  } else {
    //disabling initial content
    startPage.style.display = "none";
    //showing up level's content
    levelPage.style.display = "initial";
    blottoGame.playerName = playerName.value;
    introLevelText.innerHTML = `Cel. ${blottoGame.playerName}, this is your mission:`;
    levelPlace.innerHTML = blottoGame.getBattleFieldName();
    numberOfTroops.innerHTML = `<h3>You still have <bold class="available-troops">${
      blottoGame.noOfTroops - blottoGame.noOfBattleFields
    }</bold> troops available</h3>`;
    //assinging battlefields to the engine
    blottoGame.createBattleFields();
    //getting the list of battlefields for current level
    for (let i = 0; i < blottoGame.noOfBattleFields; i++) {
      let li = document.createElement("li");
      li.innerHTML = `<h2>Site ${bttlFieldIds[i]}</h2>
              <div class='troops-list'>
              <button class='btn-decremeter'>-</button>
              <h4 class='troop-number'>1</h4>
              <button class='btn-incremeter'>+</button></div>`;
      bttlFieldList.appendChild(li);
    }
    // console.log(availTroops[0].innerHTML);
    let troopNumbers = document.getElementsByClassName("troop-number");
    let btnDecremeter = document.getElementsByClassName("btn-decremeter");
    for (let i = 0; i < btnDecremeter.length; i++) {
      btnDecremeter[i].addEventListener("click", () => {
        if (
          Number(troopNumbers[i].innerHTML) > 1 &&
          Number(availTroops[0].innerHTML) >= 0 &&
          Number(availTroops[0].innerHTML) <= blottoGame.noOfTroops
        ) {
          troopNumbers[i].innerHTML = Number(troopNumbers[i].innerHTML) - 1;
          availTroops[0].innerHTML = Number(availTroops[0].innerHTML) + 1;
        }
      });
    }
    let btnIncremeter = document.getElementsByClassName("btn-incremeter");
    for (let i = 0; i < btnDecremeter.length; i++) {
      btnIncremeter[i].addEventListener("click", () => {
        if (
          Number(troopNumbers[i].innerHTML) >= 1 &&
          Number(availTroops[0].innerHTML) <= blottoGame.noOfTroops &&
          Number(availTroops[0].innerHTML) > 0
        ) {
          troopNumbers[i].innerHTML = Number(troopNumbers[i].innerHTML) + 1;
          availTroops[0].innerHTML = Number(availTroops[0].innerHTML) - 1;
        }
      });
    }
  }
}

//Results Page function

function resultsPg(rst, plScoring, npcScoring, btlFldRst) {
  levelPage.style.display = "none";
  rstPg.style.display = "initial";

  console.log(plScoring);
  console.log(npcScoring);
  console.log(btlFldRst);

  rstMsg.innerText = ``;

  switch (rst) {
    case "win":
      defeatBtn.style.display = "none";
      defeatText.style.display = "none";
      drawBtn.style.display = "none";
      break;
    case "defeat":
      drawBtn.style.display = "none";
      winBtn.style.display = "none";
      break;
    case "draw":
      winBtn.style.display = "none";
      defeatBtn.style.display = "none";
      defeatText.style.display = "none";
      break;
  }
}

//ATTACK function

function attack() {
  blottoGame.createNPCTroops();
  let tempNPCTroops = blottoGame.npcTroops.map((elem) => elem * -1);
  // let tempNPCTroops = [-2, -2, -2];
  console.log(tempNPCTroops);
  let sitesValues = document.querySelectorAll(".troop-number");
  plTroops = [];
  for (let i = 0; i < sitesValues.length; i++) {
    plTroops.push(Number(sitesValues[i].innerText));
  }
  console.log(plTroops);
  if (!blottoGame.checkTroopsOrder(plTroops)) {
    window.alert(`Troops are not in non-decrescent order`);
  }

  let rstList = blottoGame.winnerEvaluation(plTroops, tempNPCTroops);
  console.log(rstList);
  switch (rstList[0]["result"]) {
    case "Victory":
      blottoGame.levelUp();
      resultsPg(
        "win",
        rstList[0]["playerScore"],
        rstList[0]["NPCScore"],
        rstList[0]["BattleFieldResults"]
      );
      break;
    case "Defeat":
      resultsPg(
        "defeat",
        rstList[0]["playerScore"],
        rstList[0]["NPCScore"],
        rstList[0]["BattleFieldResults"]
      );
      break;
    case `Draw`:
      resultsPg(
        "draw",
        rstList[0]["playerScore"],
        rstList[0]["NPCScore"],
        rstList[0]["BattleFieldResults"]
      );
      break;
  }
}

// START Button Action

srtBtn.addEventListener("click", gamePgFunction);

atkBtn.addEventListener("click", () => {
  if (Number(availTroops[0].innerHTML) === 0) {
    attack();
  } else {
    window.alert(`You still need to deploy ${availTroops[0].innerHTML} troops`);
  }
});
