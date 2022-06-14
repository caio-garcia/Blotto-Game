//HTML capturing

const gameHeader = document.getElementById("main - title");
const startPage = document.getElementById("start-page");
const playerName = document.getElementById("player-name");
const srtBtn = document.getElementById("start-button");

const levelPage = document.getElementById("level");
const introLevelText = document.getElementById("level-intro");
const levelPlace = document.getElementById("level-place");
const numberOfTroops = document.getElementById("number-of-troops");
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

const blottoGame = new BlottoGame();
const player = new PlayerColonel();
const NPC = new NPCColonel();

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

function lvlPgFunction() {
  if (playerName.value === "") {
    window.Error(`Please enter your name, Colonel!`);
  } else {
    //disabling initial content
    startPage.style.display = "none";
    //showing up level's content
    levelPage.style.display = "initial";
    player.playerName = playerName.value;
    introLevelText.innerHTML = `Cel. ${player.playerName}, this is your mission:`;
    levelPlace.innerHTML = blottoGame.getBattleFieldName();
    numberOfTroops.innerHTML = `You have ${player.noOfTroops} troops available`;
    //getting the list of battlefields for current level
    for (let i = 0; i < blottoGame.noOfBattleFields; i++) {
      let li = document.createElement("li");
      li.innerHTML = `<h2>${bttlFieldIds[i]}</h2>
              <div class='troops-list'>
              <button class='btn-decremeter'>-</button>
              <h4 class='troop-number'>1</h4>
              <button class='btn-incremeter'>+</button></div>`;
      bttlFieldList.appendChild(li);
    }
    let troopNumbers = document.getElementsByClassName("troop-number");
    let btnDecremeter = document.getElementsByClassName("btn-decremeter");
    for (let i = 0; i < btnDecremeter.length; i++) {
      btnDecremeter[i].addEventListener("click", () => {
        if (Number(troopNumbers[i].innerHTML) > 1) {
          troopNumbers[i].innerHTML = Number(troopNumbers[i].innerHTML) - 1;
        }
      });
    }
    let btnIncremeter = document.getElementsByClassName("btn-incremeter");
    for (let i = 0; i < btnDecremeter.length; i++) {
      btnIncremeter[i].addEventListener("click", () => {
        if (Number(troopNumbers[i].innerHTML) >= 1) {
          troopNumbers[i].innerHTML = Number(troopNumbers[i].innerHTML) + 1;
        }
      });
    }
  }
}

// START Button Action

srtBtn.addEventListener("click", lvlPgFunction);

atkBtn.addEventListener("click", () => {
  console.log("ATTACK!");
});
