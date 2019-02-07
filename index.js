const title = `Make a move - Rock, Paper, or Scissors`;
var choices = [`rock`, `scissors`, `paper`];

var playerMove = prompt(title);
var computerMove = getComputerMove();

var ROCK = `rock`;
var SCISSORS = `scissors`;
var PAPER = `paper`;

function getRandomInt() {
  return Math.floor(Math.random() * choices.length);
}

function getComputerMove() {
  const ranNum = getRandomInt();
  return choices[ranNum];
}

//to create rock button - only play game when you click the button
//generate random number
//generate computer move
//compare results
//show winner
//button to call function

//function createYellowDiv() {
//var outerBox = document.getElementById("outer");

//var innerBox = document.createElement("div");

//innerBox.setAttribute("id", "inner2");

//innerBox.innerText = "GET OUT";

//outerBox.appendChild(innerBox);
//}

//if (random === 0) {
//  return ROCK;

//}else if (random === 1) {
//  return SCISSORS;

//else if (random === 2) {
//return PAPER;
//}
//}

alert(`Computer Move was ${computerMove}`);
alert(`Your move was ${playerMove}`);

function compareMoves(player, computer) {
  if (playerMove === computerMove) {
    alert(`It was a draw!`);
  } else if (playerMove === `scissors`) {
    if (computerMove === `rock`) {
      alert(`Computer Wins!`);
    } else if (computerMove === `paper`) {
      alert(`Player Wins!`);
    }
  } else if (playerMove === `rock`) {
    if (computerMove === `paper`) {
      alert(`Computer Wins!`);
    } else if (computerMove === `scissors`) {
      alert(`Player Wins!`);
    }
  } else if (playerMove === `paper`) {
    if (computerMove === `rock`) {
      alert(`Player Wins!`);
    } else if (computerMove === `scissors`) {
      alert(`Computer Wins!`);
    }
  } else {
    //alert(`Stop being a weird, that is not a move`);
    console.warn(`Unexpected item in bagging area`);
  }
}

compareMoves();
