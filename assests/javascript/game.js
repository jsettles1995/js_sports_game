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

teamTwoShotSpan.addEventListener("click", function () {
  let teamTwoShotSpan = Number(teamTwoShotSpan.innerHTML) + 1;
  teamTwoShotSpan.innerHTML = teamTwoShotSpan;
});
let resetbutton = document.querySelector("reset-button");
let numResetSpan = document.querySelector("#num-resets");

resetbutton.addEventListener("click", function () {
  let numResetSpan = Number(numResetSpan.innerHTML) + 1;
  numResetSpan.innerHTML = newResetSpan;
});
