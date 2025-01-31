let computerScore = 0;
let playerScore = 0;

let rewardMatrix = [
    [[0,0],[0,1],[1,0]],
    [[1,0],[0,0],[0,1]],
    [[0,1],[1,0],[0,0]],
];

let names = ["rock", "paper", "scissors"];

function capitalize(s){
    return s[0].toUpperCase() + s.slice(1);
}

function getPlayerChoice(){
    choice = prompt("Rock paper or scissors?").toLowerCase();
    return names.indexOf(choice);
}

function getComputerChoice(){
    return Math.floor(Math.random() * 3);
}

function playRound(playerChoice, computerChoice){
    score = rewardMatrix[playerChoice][computerChoice];
    playerScore += score[0];
    computerScore += score[1];
    if (score[0] === 0 && score[1] === 0) {
        console.log("It's a tie!");
    }
    else if (score[0] === 1) {
        console.log(`You win, ${capitalize(names[playerChoice])} beats ${capitalize(names[computerChoice])}`);
    }
    else {
        console.log(`You lose, ${capitalize(names[computerChoice])} beats ${capitalize(names[playerChoice])}`);
    }
    console.log(`The scores are: You-${playerScore}, Computer-${computerScore}`)
}

playRound(0,0)