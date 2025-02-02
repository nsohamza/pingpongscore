// Get references to the DOM elements
const scoreDisplay = document.getElementById('score');
const playerOneButton = document.getElementById('playerOne');
const playerTwoButton = document.getElementById('playerTwo');
const resetButton = document.getElementById('Reset');
const winningScoreSelect = document.getElementById('top');

// Initialize scores. They both start at 0.
let playerOneScore = 0;
let playerTwoScore = 0;
// this is the winning score that the user can select turned into an integer.
let winningScore = parseInt(winningScoreSelect.value); // Get the initial winning score from the select element

// Function to update the score display
function updateScore() {
    // give me the score display and update the text content to the following
    scoreDisplay.textContent = `${playerOneScore} to ${playerTwoScore}`;
}

// Function to check for a winner
function checkForWinner() {
    if (playerOneScore === winningScore || playerTwoScore === winningScore) {
        // Disable the buttons
        playerOneButton.disabled = true;
        playerTwoButton.disabled = true;

        // Announce the winner
        if (playerOneScore === winningScore) {
            scoreDisplay.textContent = `Player One Wins! ${playerOneScore} to ${playerTwoScore}`;
        } else {
            scoreDisplay.textContent = `Player Two Wins! ${playerOneScore} to ${playerTwoScore}`;
        }
    }
}

// Event listener for Player One button
playerOneButton.addEventListener('click', () => {
    if (playerOneScore < winningScore && playerTwoScore < winningScore) {
        playerOneScore++;
        updateScore();
        checkForWinner();
    }
});

// Event listener for Player Two button
playerTwoButton.addEventListener('click', () => {
    if (playerOneScore < winningScore && playerTwoScore < winningScore) {
        playerTwoScore++;
        updateScore();
        checkForWinner();
    }
});

// Event listener for Reset button
resetButton.addEventListener('click', () => {
    // Reset scores
    playerOneScore = 0;
    playerTwoScore = 0;

    // Enable buttons
    playerOneButton.disabled = false;
    playerTwoButton.disabled = false;

    // Update score display
    updateScore();
});

// Event listener for winning score select
winningScoreSelect.addEventListener('change', () => {
    winningScore = parseInt(winningScoreSelect.value); // Update the winning score
    resetButton.click(); // Reset the game when the winning score changes
});