let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choie");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const computerScorePara = document.querySelector("#computer-score");

const genComputerChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randIndx = Math.floor(Math.random() * 3);
  return options[randIndx];
};

//make function with Draw Game

const drawGame = () => {
  console.log("game was draw");
  msg.innerText = "Game was Draw, Play again";
  msg.style.backgroundColor = "#081b31";
};

//make a function ShowWinner

const showWinner = (userWin, userChoice, computerChoice) => {
  if (userWin) {
    userScore++;
    userScorePara.innerText = userScore;
    console.log("You win!");
    msg.innerText = ` You win!😃 ${userChoice} beats ${computerChoice}`;
    msg.style.backgroundColor = "green";
  } else {
    compScore++;
    computerScorePara.innerText = compScore;
    console.log("You lose");
    msg.innerText = ` You lose.😒 ${computerChoice} beats ${userChoice}`;
    msg.style.backgroundColor = "red";
  }
};

//make fun Play Game

const playGame = (userChoice) => {
  console.log("user choice =", userChoice);
  //Generate computer choice
  const computerChoice = genComputerChoice();
  console.log("computer choice =", computerChoice);

  if (userChoice === computerChoice) {
    //Draw Game
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      //scissor,paper
      userWin = computerChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      // scissor,rock
      userWin = computerChoice === "scissor" ? false : true;
    } else {
      // computer k pass rock ya scissor user k pass paper hai
      userWin = computerChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, computerChoice);
  }
};

choices.forEach((choice) => {
  // console.log(choice);
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
