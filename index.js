let wins = 0;
let losses = 0;
let ties = 0;

// this function
// 1. returns "rock"/"paper"/"scissors" based on a random integer
function computersMove() {
    let randInt = Math.floor(Math.random() * 3) // generate between 0, 1, or 2
    if (randInt === 0){
        return "rock"
    }
    if (randInt === 1){
        return "paper"
    }
    if (randInt === 2){
        return "scissors"
    }
}

//this function
// 1. increments the wins/ties/loses depending on the result
// 2. updates the number of wins/ties/losses displayed on the website
function updateScore(result) {
    // result one of "won" or "tied" "lost"
    if (result === "wins") {
        wins = wins + 1;
        document.getElementById("wins").innerHTML = wins;
    }
    if (result === "losses") {
        losses = losses + 1;
        document.getElementById("losses").innerHTML = losses;
    }
    if (result === "ties") {
        ties = ties +1;
        document.getElementById("ties").innerHTML = ties;
    } 
}

    //this function
    // 1. calls computersMove to get the computer's move
    // 2. deteremines whether the user has "won"/"tied"/"lost" based on computer's move
    // 3. calls updateScore and passes the result "won"/"tied"/"lost"  
    // 4. alerts the user of the computers move and the results

function onClickRock() {
    let cm = computersMove();
    if (cm === "rock") {
    // tied
    updateScore("ties");
    alert("The computer picked rock. That means you tied!");
    }
    if (cm === "paper") {
    //lost
    updateScore("losses")
    alert("The computer picked paper. That means you lost!");
    }
    if (cm === "scissors") {
    // won
    updateScore("wins")
    alert("The computer picked scissors. That means you won!");
    }
}
function onClickPaper() {
    let cm = computersMove();
    if (cm === "rock") {
        // won
        updateScore("wins");
        alert("The computer picked rock. That means you won!");
        }
        if (cm === "paper") {
        // tied
        updateScore("ties")
        alert("The computer picked paper. That means you tied!");
        }
        if (cm === "scissors") {
        // lost
        updateScore("losses")
        alert("The computer picked scissors. That means you lost!");
        }
}
function onClickScissor() {
    let cm = computersMove();
    if (cm === "rock") {
        // lost
        updateScore("losses");
        alert("The computer picked rock. That means you lost!");
        }
        if (cm === "paper") {
        // won
        updateScore("wins")
        alert("The computer picked paper. That means you win!");
        }
        if (cm === "scissors") {
        // tied
        updateScore("ties")
        alert("The computer picked scissors. That means you tied!");
        }
    }
    document.getElementById("rock").onclick = onClickRock;
    document.getElementById("paper").onclick = onClickPaper;
    document.getElementById("scissors").onclick = onClickScissor;