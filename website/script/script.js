// const symbols = ["rock", "paper", "scissors"];

// function getComputerChoice(){
//     const choice = Math.floor(Math.random() * 3);
//     return symbols[choice];
// }

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();

    if(playerSelection === "rock"){
        if(computerSelection==="paper"){
            return "You lose, rock is beaten by paper!";
        }
        if(computerSelection==="scissors"){
            return "You win, rock beats scissors!";
        }
    }
    if(playerSelection === "paper"){
        if(computerSelection==="rock"){
            return "You win, paper beats rock!";
        }
        if(computerSelection==="scissors"){
            return "You lose, paper is beaten by scissors!";
        }
    }
    if(playerSelection === "scissors"){
        if(computerSelection==="rock"){
            return "You lose, scissors are beaten by rock!";
        }
        if(computerSelection==="paper"){
            return "You win, scissors beat paper!";
        }
    }
    if(playerSelection===computerSelection)
        return `Tie, ${playerSelection} ties with ${computerSelection}!`;
  }
  

// function game(){
//     let playerScore = 0;
//     let computerScore = 0;
//     while(playerScore != 5 && computerScore != 5){
//         const computerSelection = getComputerChoice();
//         const playerSelection = prompt("Choose your weapon: ");
        
//         if(symbols.some(e=>e===playerSelection)==0){
//             console.log("Wrong string!");
//             continue;
//         }

//         const result = playRound(playerSelection,computerSelection);
//         const splittedResult = result.split(" ");

//         if(splittedResult[1]==="win,"){
//             playerScore++;
//         }
//         else if(splittedResult[1]==="lose,"){
//             computerScore++;
//         }

//         console.log(result);
//         console.log(playerScore);
//         console.log(computerScore);
//     }

//     if(playerScore==5)
//         console.log("You won the game!");
//     else
//         console.log("You lost the game!");

// }
// const ask = prompt("Do you wanna play RPS?");
// (ask=="no" ? console.log("okay") : game());


//----------------------SPLASH SCREEN-----------------------------

const splashScreen = document.querySelector('#splash-screen');
const splashScreenButton = document.querySelector(' button');
splashScreenButton.addEventListener('click', () => {
    setTimeout(() => {
        splashScreen.classList.add('hide');
    },400)
})


const buttons = document.querySelectorAll(".rps-box-player .rps-button");
console.log(buttons);