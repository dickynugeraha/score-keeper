const p1 = {
  score: 0,
  button: document.querySelector("#player1"),
  display: document.querySelector("#displayP1"),
};
const p2 = {
  score: 0,
  button: document.querySelector("#player2"),
  display: document.querySelector("#displayP2"),
};

const maxScore = document.querySelector("#maxScore");
const reset = document.querySelector("#reset");

let isWinning = false;
let isPopup = false;

maxScore.addEventListener("change", () => {
  winScore = parseInt(maxScore.value);
  resetValue();
});

p1.button.addEventListener("click", () => {
  updateScores(p1, p2);
});
p2.button.addEventListener("click", () => {
  updateScores(p2, p1);
});
reset.addEventListener("click", () => {
  resetValue();
});

function updateScores(player, opponent) {
  if (!isWinning) {
    player.score += 1;
    if (player.score === winScore) {
      isWinning = true;
      player.display.classList.add("has-text-success-dark");
      opponent.display.classList.add("has-text-danger-dark");
      player.button.disabled = true;
      opponent.button.disabled = true;
      createPopup();
    }
    player.display.innerText = player.score;
  } else {
    alert("Game has been finished, pleace reset value!");
  }
}

function resetValue() {
  for (let p of [p1, p2]) {
    p.score = 0;
    p.display.innerText = 0;
    p.display.classList.remove("has-text-success-dark", "has-text-danger-dark");
    p.button.disabled = false;
  }
  isWinning = false;
  removePopup();
}

function createPopup() {
  if (!isPopup) {
    const popup = document.createElement("div");
    popup.innerHTML = "<h1>Game has been finished</h1>";
    popup.classList.add("popup");
    document.body.appendChild(popup);
    isPopup = true;
  }
}

function removePopup() {
  if (isPopup) {
    document.querySelector(".popup").remove();
    isPopup = false;
  }
}
