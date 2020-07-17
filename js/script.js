// Rock Paper Scissors Game
let userScore = 0;
let computerScore = 0;
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const update = document.getElementById('update');
const userScoreSpan = document.getElementById('user-score-span');
const computerScoreSpan = document.getElementById('computer-score-span');

const main = () =>{
  rock.addEventListener('click', ()=> game('rock'));
  paper.addEventListener('click', ()=> game('paper'));
  scissors.addEventListener('click', ()=> game('scissors'));
}

main();

const getComputerChoice = ()=>{
  let choices = ['rock', 'paper', 'scissors'];
  let randomNumber = Math.floor(Math.random() *3);
  return choices[randomNumber];
}

const game = (userChoice) =>{
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice) {
    case 'rockscissors':
    case 'scissorspaper':
    case 'paperrock':
      win(userChoice, computerChoice);
      break;
    case 'rockpaper':
    case 'paperscissors':
    case 'scissorsrock':
      lose(userChoice, computerChoice);
      break;
    case 'rockrock':
    case 'paperpaper':
    case 'scissorsscissors':
      draw(userChoice, computerChoice);
  }
}

game();

const win = (userChoice, computerChoice) =>{
  userScore ++;
  userScoreSpan.textContent = userScore;
  update.textContent = userChoice + ' beats ' + computerChoice + ' , you win.';
}

const lose = (userChoice, computerChoice) =>{
  computerScore ++;
  computerScoreSpan.textContent = computerScore;
  update.textContent = computerChoice + ' beats ' + userChoice + ' , you lose.'
}

const draw = (userChoice, computerChoice) =>{
  update.textContent = 'You both chose ' + userChoice + " , it's a draw.";
}
