let computerChoiceInterface = document.getElementById('computer-choice');
const userChoiceInterface = document.getElementById('user-choice');
const resultInterface = document.getElementById('result');
const userComputerChoices = document.getElementById('user-computer-choices');
const userScoreInterface = document.getElementById('user-score');
const computerScoreInterface = document.getElementById('computer-score');
const roundResultInterface = document.getElementById('round-results');
const resetButton = document.getElementById('reset-button');
const choices = document.querySelectorAll('.selection-buttons');

let computerChoice = '';
let finalResult;
let score = "";

let userScore = 0;
let computerScore = 0;
let userChoice;

const choiceTargetingEvent = (e) => {
  userChoice = e.target.id;

  let generateComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * choices.length) + 1;

    switch(randomNumber){
      case 1:
      computerChoice = 'rock'
      break;
      case 2:
      computerChoice = 'paper'
      break;
      case 3:
      computerChoice = 'scissors'
      break;
    }

    computerChoiceInterface.innerHTML = computerChoice;

  }

  userChoiceInterface.innerHTML = userChoice;
  generateComputerChoice();
  finalResultHandler();
}

const gameResetMethod = () => {
  possibleChoice.removeEventListener('click', choiceTargetingEvent);

}


choices.forEach(possibleChoice => {
  possibleChoice.addEventListener('click', choiceTargetingEvent);

  if(roundResultInterface.innerHTML != ""){
    gameResetMethod();
  }
})

let finalResultHandler = () => {
  if(computerChoice === userChoice){
    finalResult = "It's a draw!"
  }

  if(computerChoice === "rock" && userChoice === "paper"){
    finalResult = "You win"
  }

  if(computerChoice === "rock" && userChoice === "scissors"){
    finalResult = "You lose"
  }

  if(computerChoice === "paper" && userChoice === "rock"){
    finalResult = "You lose"
  }

  if(computerChoice === "paper" && userChoice === "scissors"){
    finalResult = "You win"
  }
  if(computerChoice === "scissors" &&  userChoice === "rock"){
    finalResult = "You win"
  }
  if(computerChoice === "scissors" && userChoice === "paper"){
    finalResult = "You lose"
  }

  resultInterface.innerHTML = finalResult;

  switch(finalResult){
    case "You win":
    userScore++
    break;
    case "You lose":
    computerScore++
  }

  if(userScore > computerScore && userScore === 10){
    roundResultInterface.innerHTML = "Congratulations! You won the round!!!!"
  }

  if (computerScore > userScore && computerScore === 10){
    roundResultInterface.innerHTML = "You lose! Try again!"

  }

  if(computerScore >= 10 || userScore >= 10 ){
    resetButton.style.visibility = 'visible';
    choices.forEach(choice => {
      choice.style.visibility = 'hidden';
    })

  }

  userScoreInterface.innerHTML = userScore;
  computerScoreInterface.innerHTML = computerScore;
}

const resetButtonEvent = () => {
    roundResultInterface.innerHTML = '';
    userScore = 0;
    computerScore = 0;
    resultInterface.innerHTML = '';
    userScoreInterface.innerHTML = userScore;
    computerScoreInterface.innerHTML = computerScore;
    userChoiceInterface.innerHTML = '';
    computerChoiceInterface.innerHTML = '';

    resetButton.style.visibility = 'hidden';

    choices.forEach(choice => {
      choice.style.visibility = 'visible';
    })

}
