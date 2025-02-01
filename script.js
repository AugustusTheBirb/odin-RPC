let computerScore = 0;
let playerScore = 0;

let rewardMatrix = [
    [[0,0],[0,1],[1,0]],
    [[1,0],[0,0],[0,1]],
    [[0,1],[1,0],[0,0]],
];

let names = ["rock", "paper", "scissors"];

const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");

const result = document.querySelector("#result")
const paraPlayerScore = document.querySelector("#playerScore")
const paraComputerScore = document.querySelector("#computerScore")

rockButton.addEventListener("click", () => playRound(0, getComputerChoice()));
paperButton.addEventListener("click", () => playRound(1, getComputerChoice()));
scissorsButton.addEventListener("click", () => playRound(2, getComputerChoice()));



function capitalize(s){
    return s[0].toUpperCase() + s.slice(1);
}

// function getPlayerChoice(){
//     choice = prompt("Rock paper or scissors?").toLowerCase();
//     if (!names.includes(choice)){
//         console.log("Invalid input");
//         getPlayerChoice();
//     }
//     return names.indexOf(choice);
// }



function getComputerChoice(){
    return Math.floor(Math.random() * 3);
}

function playRound(playerChoice, computerChoice){
    score = rewardMatrix[playerChoice][computerChoice];
    playerScore += score[0];
    computerScore += score[1];
    if (score[0] === 0 && score[1] === 0) {
        result.innerText = "It's a tie!";
    }
    else if (score[0] === 1) {
        result.innerText = `You win, ${capitalize(names[playerChoice])} beats ${capitalize(names[computerChoice])}`;
    }
    else {
        result.innerText = `You lose, ${capitalize(names[computerChoice])} beats ${capitalize(names[playerChoice])}`;
    }
    paraComputerScore.innerText = `Computer: ${computerScore}`
    paraPlayerScore.innerText = `Player: ${playerScore}`

    if (computerScore >= 5) {
        alert("Computer Won! :(")
    }
    if (playerScore >= 5) {
        alert("Player Won! :)")
    }
}