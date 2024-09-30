const choices = ['rock', 'paper', 'scissors'];
let humanScore = 0;
let computerScore = 0;
let roundNumber = 1;

const buttons = document.querySelector("#choices");
const resultDiv = document.querySelector(".result");
const scoreDiv = document.querySelector(".scoreboard");

function getComputerChoice() {
  let randoNumbo = Math.floor(Math.random()*3);
  return choices[randoNumbo];
}

function resetGame(){
  humanScore = 0;
  computerScore = 0;
  roundNumber = 1;
  updateScoreDiv();
}

function updateResultDiv(message, color){
  resultDiv.style.backgroundColor = color;
  resultDiv.textContent = message;
}

function updateScoreDiv(){
  scoreDiv.textContent = `Round ${roundNumber} You: ${humanScore} vs CPU: ${computerScore}`;
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice){
    updateResultDiv(`Tie! You chose: ${humanChoice}  CPU chose: ${computerChoice}`, "yellow");
    return "Tie"
  }

  if (  (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
  ){
    humanScore++;
    updateResultDiv(`You chose: ${humanChoice}  CPU chose: ${computerChoice}`, "green");
  }
  else {
    computerScore++;
    updateResultDiv(`You chose: ${humanChoice}  CPU chose: ${computerChoice}`, "red");
  }
}

buttons.addEventListener("click", function(e){
  const buttonPressed = e.target.id;
  
  if (roundNumber <= 5){
    let cpuChoice = getComputerChoice();
    playRound(buttonPressed, cpuChoice);
    updateScoreDiv();
    roundNumber++;
  } else {
    alert(`Game complete. Final Score: You ${humanScore} vs CPU: ${computerScore}`);
    resetGame();
  }
});