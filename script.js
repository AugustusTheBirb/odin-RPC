let computerScore = 0;
let playerScore = 0;

let rewardMatrix = [
    [[0,0],[0,1],[1,0]],
    [[1,0],[0,0],[0,1]],
    [[0,1],[1,0],[0,0]],
];

let dict = {
    rock: 0,
    paper: 1,
    scissors: 2
};

function getPlayerChoice(){
    choice = prompt("Rock paper or scissors?").toLowerCase();
    return dict[choice];
}

function getComputerChoice(){
    return Math.floor(Math.random() * 3);
}
