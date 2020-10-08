let teamOneButton = document.querySelector("#teamone-shoot-button");
let teamOneShotSpan = document.querySelector("#teamone-numshots");
let teamOneGoalSpan = document.querySelector("#team-numgoals");

teamOneButton.addEventListener("click", function () {
  let newShotSpan = Number(teamOneShotSpan.innerHTML) + 1;
  teamOneShotSpan.innerHTML = newShotSpan;
});

let teamTwoButton = document.querySelector("#teamtwo-shoot-button");
let teamTwoShotSpan = document.querySelector("#teamtwo-numshots");
let teamTwoGoalSpan = document.querySelector("#teamtwo-numgoals");

teamTwoButton.addEventListener("click", function () {
  let twoShotspan = Number(teamTwoShotSpan.innerHTML) + 1;
  teamTwoShotSpan.innerHTML = twoShotspan;
});

let resetButton = document.querySelector("reset-button");
let numResetSpan = document.querySelector("#num-resets");

resetButton.addEventListener("click", function () {
  let newResetSpan = Number(numResetSpan.innerHTML) + 1;
  numResetSpan.innerHTML = newResetSpan;
});
