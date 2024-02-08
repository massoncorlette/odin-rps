function getComputerChoice() {
  let random = Math.floor(Math.random() * 3);  // rounds down to nearest int
  let choice = null;

  choice = 
    (random == 0) ? "Scissors" :
    (random == 1) ? "Paper" : 
    (random == 2) ? "Rock" : null;

    return choice;

}

function playRound(playerSelection, computerSelection) {
  playerSelection == playerSelection.charAt(0).toUpperCase() + word.slice(1); //making user input case insensitive and capitlize first char
  
  if (playerSelection == computerSelection) {
    return ("Tie! Both picked " + playerSelection);
  }else if (playerSelection == "Scissors" && computerSelection == "Paper") {
    return ("You win! Scissors beats Paper!");
  }else if (playerSelection == "Paper" && computerSelection == "Rock") {
    return ("You win! Paper beats Rock!");
  }else if (playerSelection == "Rock" && computerSelection == "Scissors") {
    return ("You win! Rock beats Scissors!") ;
  }else{
    return ("You lose! " + computerSelection + " beats " + playerSelection);
  }
}

function playGame() {
  let player = 0;
  let computer = 0;

  const win = 'You win!'
  const lose = 'You lose!'

  for (let i = 0; i < 5; i++) {
    let choose = prompt("Rock, Paper or Scissors?");
    let result = playRound(choose,getComputerChoice)

    if (result.includes(win)) {
      player += 1;
    }else if (result.includes(lose)) {
      computer += 1;
    }
  }
  
}

//const playerSelection = "rock";
//const computerSelection = getComputerChoice();
//console.log(playRound(playerSelection, computerSelection));
