//HTML capturing

const gameHeader = document.getElementById("main - title");
const startPage = document.getElementById("start-page");
const playerName = document.getElementById("player-name");
const srtBtn = document.getElementById("start-button");

const levelPage = document.getElementById("level");
const introLevelText = document.getElementById("level-intro");
const levelPlace = document.getElementById("level-place");
const numberOfTroops = document.getElementById("number-of-troops");

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

// START Button Action

srtBtn.addEventListener("click", () => {
  if (playerName.value === "") {
    window.Error(`Please enter your name, Colonel!`);
  } else {
    startPage.style.display = "none";
    levelPage.style.display = "initial";
    player.playerName = playerName.value;
    introLevelText.innerHTML = `Cel. ${player.playerName}, this is your first mission:`;
    levelPlace.innerHTML = blottoGame.getBattleFieldName();
    numberOfTroops.innerHTML = `You have ${player.noOfTroops} troops available`;
  }
});
