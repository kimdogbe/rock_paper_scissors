let choices = ['rock', 'paper', 'scissors'];

function getComputerChoice() {
  let randoNumbo = Math.floor(Math.random()*3);
  return choices[randoNumbo];
}

function getHumanChoice() {
  let humanChoice = prompt("Rock, Paper or Scissors?");

  if (!(choices.includes(humanChoice.toLowerCase()))){
    console.log(humanChoice + " not a valid choice. please choose either Rock, Paper or Scissors");
    getHumanChoice();
  }

  return humanChoice;
}

console.log(getComputerChoice());
getHumanChoice();