const choices = ['rock', 'paper', 'scissors'];

function getComputerChoice() {
  let randoNumbo = Math.floor(Math.random()*3);
  return choices[randoNumbo];
}

function getHumanChoice() {
  let humanChoice = prompt("Rock, Paper or Scissors?");

  if (!(choices.includes(humanChoice.toLowerCase()))){
    console.log(humanChoice + " not a valid choice. please choose either Rock, Paper or Scissors");
    humanChoice = getHumanChoice();
  }

  return humanChoice.toLowerCase();
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice){
      return "Tie"
    }

    if (  (humanChoice === "rock" && computerChoice === "scissors") ||
          (humanChoice === "paper" && computerChoice === "rock") ||
          (humanChoice === "scissors" && computerChoice === "paper")
    ){
      humanScore++;
    }
    else {
      computerScore++;
    }
  }

  for(let i = 1; i < 6; i++){
    console.log(`Round ${i}!`)

    let humChoice = getHumanChoice();
    let cpuChoice = getComputerChoice();
    console.log(`You chose: ${humChoice}  CPU chose: ${cpuChoice}`)

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

playGame();