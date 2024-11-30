const squares = document.querySelectorAll(".square");
const mole = document.querySelector(".mole");
const timeleft = document.querySelector("#time-left");
const score = document.querySelector("#score");



let result = 0;
let hitPosition;
let currentTime = 60;

function randomSquare() {
    squares.forEach(square =>{
        square.classList.remove("mole");
    });
    let randomSquare = squares[Math.floor(Math.random() * 9)];
    randomSquare.classList.add('mole');

    hitPosition = randomSquare.id;

};
squares.forEach(square =>{
    square.addEventListener('mousedown', ()=>{
        if (square.id === hitPosition) {
            result++;
            score.textContent = result;
            hitPosition = null;
        }
    })
})
function moveMole() {
  timerId = setInterval(randomSquare, 1000);
}

moveMole()

function countDown() {
   currentTime -= 1;
   timeleft.textContent = currentTime;
   if (currentTime === 0) {
    clearInterval(countDownTimerid);
    clearInterval(timerId);
    alert(`Game Over! Your final score is ${result}.`)
   }
  
}

let countDownTimerid = setInterval(countDown,1000);

