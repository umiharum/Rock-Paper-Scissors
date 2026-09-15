function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomComputerChoice = choices[Math.floor(Math.random() * choices.length)];
    
    console.log(`Computer chose: ${randomComputerChoice}`);
    return randomComputerChoice;
}

function getHumanChoice() {
    return document.getElementById("human-choice").value.trim().toLowerCase();
}


function createGame() {
    let humanScore = 0;
    let computerScore = 0;
    let roundsPlayed = 0;   

    function playRound(humanChoice, computerChoice) {
        if (humanChoice === computerChoice) {
            console.log("It's a tie!");
        } else if (
            (humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "paper" && computerChoice === "rock") ||
            (humanChoice === "scissors" && computerChoice === "paper")
        ) {
            humanScore++;
            console.log("You win this round!");
        } else {
            computerScore++;
            console.log("Computer wins this round!");
        }
    }
    
    return function playGame(humanChoice) {
        if (roundsPlayed === 5) {
            return { gameOver: true, humanScore, computerScore, roundsPlayed };
        }

        const computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
        roundsPlayed++;

        return { gameOver: roundsPlayed === 5, humanScore, computerScore, roundsPlayed };
    };
}

const playGame = createGame();

document.getElementById("play-button").addEventListener("click", () => {
    const humanSelection = getHumanChoice();
    const resultDiv = document.getElementById("result");
    const scoreDiv = document.getElementById("score");

    if (!['rock', 'paper', 'scissors'].includes(humanSelection)) {
        resultDiv.textContent = "Please enter rock, paper, or scissors.";
        return;
    }

    const scores = playGame(humanSelection);
    resultDiv.textContent = scores.gameOver
        ? "The game has finished after 5 rounds."
        : `Round ${scores.roundsPlayed} finished.`;
    scoreDiv.textContent = `You: ${scores.humanScore} | Computer: ${scores.computerScore}`;
});