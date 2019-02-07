const title = `Make a move - Rock, Paper, or Scissors`;
var choices = [`rock`, `scissors`, `paper`];

//var playerMove = prompt(title);

// var ROCK = `rock`;
// var SCISSORS = `scissors`;
// var PAPER = `paper`;

// function buttonClickR() {
//   console.log("rock");
//   var playerMove = "rock";
// }

// function buttonClickP() {
//   console.log("Paper");
//   var input = document.getElementById(playerMove);
// }

// function buttonClickS() {
//   console.log("Scissors");
//   var input = document.getElementById(playerMove);
// }

function playGame(playerMove) {
  var computerMove = getComputerMove();
  console.log(
    `Player Move was ${playerMove}, Computer Move was ${computerMove}`
  );
  var result = compareMoves(playerMove, computerMove);
  console.log(result);
}

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

//alert(`Computer Move was ${computerMove}`);
//alert(`Your move was ${playerMove}`);

function compareMoves(playerMove, computerMove) {
  if (playerMove === computerMove) {
    return `It was a draw!`;
  } else if (playerMove === `scissors`) {
    if (computerMove === `rock`) {
      return `Computer Wins!`;
    } else if (computerMove === `paper`) {
      return `Player Wins!`;
    }
  } else if (playerMove === `rock`) {
    if (computerMove === `paper`) {
      return `Computer Wins!`;
    } else if (computerMove === `scissors`) {
      return `Player Wins!`;
    }
  } else if (playerMove === `paper`) {
    if (computerMove === `rock`) {
      return `Player Wins!`;
    } else if (computerMove === `scissors`) {
      return `Computer Wins!`;
    }
  } else {
    //return (`Stop being a weird, that is not a move`);
    console.warn(`Unexpected item in bagging area`);
  }
}
