const symbols = ["rock", "paper", "scissors"];

function getComputerChoice(){
    const choice = Math.floor(Math.random() * 3);
    return symbols[choice];
}

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
  
//console functionality
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

//-----------------------GAME------------------------------

let computerScore = 0, playerScore = 0;

const buttons = document.querySelectorAll(".rps-box-player .rps-button");
const computerButtons = document.querySelectorAll(".rps-box-computer .rps-button");
const playerScoreDiv = document.querySelector("#player-score");
const computerScoreDiv = document.querySelector("#computer-score");
const commentDiv = document.querySelector(".rps-comment");

//set the playername in rps-box-player
const playerNameDiv = document.querySelector(".rps-box-player .rps-playername");
const startGameButton = document.querySelector("#start-game");
startGameButton.addEventListener('click', e => {
    let playerName=document.querySelector("#player-name").value;
    if(playerName=="")
        playerName="Nameless"
    playerNameDiv.textContent = playerName;
})


let playerChoice = "";

function printScore(playerComputerDiv, playerComputerScore){
    playerComputerDiv.innerText= `Score: ${playerComputerScore}`;
}

function printComment(comment){
    commentDiv.textContent = comment;
}

function resetButtonsColor(buttons){
    buttons.forEach(button => {
        button.removeAttribute('style');
    })
}

buttons.forEach(button =>{
    button.addEventListener('click',(e) => {
        //resets buttons to basic color (removes inline style)
        resetButtonsColor(buttons);
        resetButtonsColor(computerButtons);

        playerChoice = e.target.id;
        playRoundUI(playerChoice,getComputerChoice());
    })
})

function playRoundUI(playerChoice,computerChoice){
    //sets selected button color
    const computerButton=document.querySelector(`.rps-box-computer #${computerChoice}`);
    computerButton.setAttribute('style','background:rgb(121, 49, 255)');
    //sets selected button color
    const playerButton=document.querySelector(`.rps-box-player #${playerChoice}`);
    playerButton.setAttribute('style','background:red');

    //here to print zeros at the beginning of the 2nd and next games
    printScore(playerScoreDiv, playerScore);
    printScore(computerScoreDiv, computerScore);

    if(playerChoice === "rock"){
        if(computerChoice==="paper"){
            computerScore++;
            printScore(computerScoreDiv, computerScore);
            printComment("You lose, rock is beaten by paper!");
        }
        if(computerChoice==="scissors"){
            playerScore++;
            printScore(playerScoreDiv, playerScore);
            printComment("You win, rock beats scissors!");
        }
    }
    if(playerChoice === "paper"){
        if(computerChoice==="rock"){
            playerScore++;
            printScore(playerScoreDiv, playerScore);
            printComment("You win, paper beats rock!");
        }
        if(computerChoice==="scissors"){
            computerScore++;
            printScore(computerScoreDiv, computerScore);
            printComment("You lose, paper is beaten by scissors!");
        }
    }
    if(playerChoice === "scissors"){
        if(computerChoice==="rock"){
            computerScore++;
            printScore(computerScoreDiv, computerScore);
            printComment("You lose, scissors are beaten by rock!");
        }
        if(computerChoice==="paper"){
            playerScore++;
            printScore(playerScoreDiv, playerScore);
            printComment("You win, scissors beat paper!");
        }
    }
    if(playerChoice===computerChoice)
        printComment(`Tie, ${playerChoice} ties with ${computerChoice}!`);

    if(playerScore==5){
        printComment("You won the game!");        
        playerScore=0;
        computerScore=0;
    }
    else if(computerScore==5){
        printComment("You lost the game!");
        playerScore=0;
        computerScore=0;
    }
}