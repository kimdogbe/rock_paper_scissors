function getComputerChoice() {
  let choices = ['Rock', 'Paper', 'Scissors'];
  let randoNumbo = Math.floor(Math.random()*3);
  return choices[randoNumbo];
}

console.log(getComputerChoice());