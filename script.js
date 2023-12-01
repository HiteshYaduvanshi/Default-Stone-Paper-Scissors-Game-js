document.getElementById("stone").addEventListener("click", () => play("Stone")); //access stone btn and adds onclick event for user input
document.getElementById("paper").addEventListener("click", () => play("Paper"));  //access paper btn and adds onclick event for user input
document.getElementById("scissors").addEventListener("click", () => play("Scissors"));  //access scissors btn and adds onclick event for user input

let playerScore = 0; // place score
let computerScore = 0; //computer score
const playerScoreElement = document.getElementById("playerScore"); //acces player score paragraph
const computerScoreElement = document.getElementById("computerScore"); //acces computer score paragraph
const resultElement = document.getElementById("result"); //access result div


//play rule function start
function play(playerChoice) {
    const choices = ["Stone", "Paper", "Scissors"]; //declare choices for computer
    const randomIndex = Math.floor(Math.random() * choices.length);
    const computer = choices[randomIndex]; //now computer can choice randomly

    const result = determineWinner(playerChoice, computer); //call determine function and store the resut into a variable for further use
    //select winner for rounds function start
    function determineWinner(player, computer) {

        if (player === computer) return "It's a tie!";

        if ((player === "Stone" && computer === "Scissors") ||
            (player === "Paper" && computer === "Stone") ||
            (player === "Scissors" && computer === "Paper")) {
            return "You win!";
        }

        return "Computer wins!";
    }
    //select winner for rounds function end

    displayResult(playerChoice, computer, result);//call a function for display result
    // display result for round function start 
    function displayResult(player, computer, result) {
        resultElement.innerHTML = `Your choice: ${player}<br>Computer's choice: ${computer}<br>Result: ${result}`;
    }
    // display result for round function end
    
    updateScore(result);// call updatescore function
    // update score for player and computer fuction start 
    function updateScore(result) {

        if (result === "You win!") {
            playerScore++;
        } 
        else if (result === "Computer wins!") {
            computerScore++;
        }
        else{
            playerScore++;
            computerScore++;
        }

        playerScoreElement.textContent = playerScore;
        computerScoreElement.textContent = computerScore;
    }
    // update score for player and computer fuction end

    endGame(playerScore , computerScore);
    

}
//play rule function end

// fuction to end game start 
function endGame(playerScore, computerScore){

    if(playerScore === 10 || computerScore === 10){

        document.getElementById("stone").disabled = true;
        document.getElementById("stone").style.opacity = ".5";
        document.getElementById("paper").disabled = true;
        document.getElementById("paper").style.opacity = ".5";
        document.getElementById("scissors").disabled = true;
        document.getElementById("scissors").style.opacity = ".5";

        if(playerScore  < computerScore){
            document.getElementById("msgResult").textContent = "Computer win!!";
        }
        else if(playerScore === computerScore){
            document.getElementById("msgResult").textContent = "It's a tie!!";
        }
        else{
            document.getElementById("msgResult").textContent = "You win!!"
        }

        openMessageBox();
        // fuction declare for open msg box start 
        function openMessageBox() {
            const messageBox = document.getElementById("messageBox"); //acess messagebox div
            messageBox.style.display = "block";
            setTimeout(closeMessageBox, 6000);
        }
        // fuction declare for open msg box end

        const closeMessageBoxButton = document.getElementById("closeMessageBox"); //access mesaage close btn 
        closeMessageBoxButton.addEventListener("click", closeMessageBox); //add event for close messagebox
        // fuction declare for close msg box start
        function closeMessageBox() {
            messageBox.style.display = "none";
        }
        // fuction declare for close msg box end
        

        
        const startGame = document.getElementById("startGame"); //access start game div
        startGame.appendChild(resetButton);

    }
}
// fuction to end game start 

let resetButton; //declare resetgame btn
resetButton  = document.createElement("button"); //create reset game btn
resetButton.textContent = "Start new game"; //add content for reset game btn
resetButton.classList.add("resetBtn"); //add class for reset game btn to apply css
resetButton.addEventListener("click", ()=>{
    document.getElementById("stone").disabled = false;
    document.getElementById("stone").style.opacity = "1";
    document.getElementById("paper").disabled = false;
    document.getElementById("paper").style.opacity = "1";
    document.getElementById("scissors").disabled = false;
    document.getElementById("scissors").style.opacity = "1";
    
    playerScore = 0;
    computerScore = 0;

    playerScoreElement.textContent = playerScore;
    computerScoreElement.textContent = computerScore;

    startGame.removeChild(resetButton);

    resultElement.innerHTML = "";
});