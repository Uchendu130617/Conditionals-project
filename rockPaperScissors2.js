
const computerChoice = "rock"

while(computerChoice){
    let userChoice = prompt("rock, paper or scissors");

    
    if(userChoice == "scissors") {
        alert(`You loose`);
        console.log(`You loose`);
    }

    else if(userChoice == "rock"){
        alert(`It's a tie`);
        console.log(`It's a tie`);
    }
    
    else if(userChoice == `paper`){
        alert(`You win`);
        console.log(`You win`);
        break
    }

    else{
        alert(`Invalid choice`);
        console.log(`Invalid`);
    }
}
