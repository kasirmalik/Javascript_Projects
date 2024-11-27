const computerChoiceDisplay= document.getElementById('computer-choice')
const userChoiceDisplay= document.getElementById('user-choice')
const resultDisplay= document.getElementById('result')
let userChoice;
let computerChoice;
let result;


const possibleChoice =  document.querySelectorAll('button')
possibleChoice.forEach(possibleChoice =>possibleChoice.addEventListener('click',(e)=>{
 userChoice =e.target.id
 userChoiceDisplay.innerHTML = userChoice

 generateComputerChoice()
 getResult()
}))

function generateComputerChoice(params) {
    const randomNumber =Math.floor(Math.random() * 3)
    if (randomNumber == 1) {
        computerChoice = 'rock'
    };
    if (randomNumber == 2) {
        computerChoice = "scissor"
    }
    if (randomNumber == 3) {
        computerChoice = 'paper'
    };
    computerChoiceDisplay.innerHTML = computerChoice;
};

function getResult(params) {
    if (computerChoice == userChoice) {
       result = 'it is draw'
    };
    if (computerChoice === 'rock' && userChoice === 'paper') {
        result = 'you win'
    }
    if (computerChoice === 'rock' && userChoice === 'scissor') {
        result = 'you lose'
    }
    if (computerChoice === 'paper' && userChoice === 'scissor') {
        result = 'you win'
    }
    if (computerChoice === 'paper' && userChoice === 'rock') {
        result = 'you loose'
    }
    if (computerChoice === 'scissor' && userChoice === 'rock') {
        result = 'you win'
    }
    if (computerChoice === 'scissor' && userChoice === 'paper') {
        result = 'you loose'
    };
    resultDisplay.innerHTML = result
}