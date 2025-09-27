const computerChoice = "rock";

let userChoice = prompt("rock, paper or scissors");

if (userChoice === "rock") {
    alert("It's a tie");
    console.log("It's a tie");
}

else if (userChoice === "paper") {
    alert("You win");
    console.log("You win");
}

else if (userChoice === "scissors") {
    alert("You lose");
    console.log("You lose");
}

else {
    alert("invalid choice");
    console.log("invalid choice");
}
