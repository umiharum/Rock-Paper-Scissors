function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomComputerChoice = choices[Math.floor(Math.random() * choices.length)];
    
    console.log(`Computer chose: ${randomComputerChoice}`);
    return randomComputerChoice;
}

function getHumanChoice() {
    return document.getElementById("human-choice").value.trim().toLowerCase();
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log("It's a tie!");
    }
    else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore++;
        console.log("You win this round!");
    }
    else {
        computerScore++;
        console.log("Computer wins this round!");
    }
}

document.getElementById("play-button").addEventListener("click", () => {
    const humanSelection = getHumanChoice();
    const resultDiv = document.getElementById("result");
    const scoreDiv = document.getElementById("score");

    if (!['rock', 'paper', 'scissors'].includes(humanSelection)) {
        resultDiv.textContent = "Please enter rock, paper, or scissors.";
        return;
    }

    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    resultDiv.textContent = `You chose ${humanSelection}. Computer chose ${computerSelection}.`;
    scoreDiv.textContent = `You: ${humanScore} | Computer: ${computerScore}`;
});