

const secretNumber = 25;

while(secretNumber){    
let userGuess = prompt("Guess a number");

if(userGuess < secretNumber){
    alert(`Your guess is too low`);
    console.log(`Too low`);
}

else if(userGuess > secretNumber){
    alert(`Your guess is too high`);
    console.log(`Tow high`);
}

else if(userGuess == secretNumber){
    alert(`Your guess is correct`);
    console.log(`Correct`);
    break
}

else{
    alert("Invalid input");
    console.log(`Invalid`);
}
}
