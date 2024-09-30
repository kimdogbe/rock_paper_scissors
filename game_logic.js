const choices = ['rock', 'paper', 'scissors'];
let humanScore = 0;
let computerScore = 0;
let roundNumber = 1;

const buttons = document.querySelector("#choices");
const resultDiv = document.querySelector(".result");

buttons.addEventListener("click", function(e){
  const buttonPressed = e.target.id;
  
  if (roundNumber <= 5){
    let cpuChoice = getComputerChoice();
    playRound(buttonPressed, cpuChoice);
    roundNumber++;
  } else {
    alert("Game complete. Restart Game.");
    
  }
});

function getComputerChoice() {
  let randoNumbo = Math.floor(Math.random()*3);
  return choices[randoNumbo];
}

function updateResultDiv(message, color){
  resultDiv.style.backgroundColor = color;
  resultDiv.textContent = message;
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

function playGame() {
  for(let i = 1; i < 6; i++){
    console.log(`Round ${i}!`)

    let humChoice = getHumanChoice();
    let cpuChoice = getComputerChoice();
    console.log(`You chose: ${humChoice}  CPU chose: ${cpuChoice}`);

    playRound(humChoice, cpuChoice);
    console.log(`Current score: You: ${humanScore} vs CPU: ${computerScore}`);
  }

  if (humanScore > computerScore) {
    console.log("You win!");
  }
  else if (computerScore > humanScore){
    console.log("Unlucky mate :( maybe next time");
  }
  else {
    console.log("And the game ends in a tieeeee!");
  }
}

playRound();
// playGame();