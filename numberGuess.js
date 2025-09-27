        let secretNumber = 8;

        let userGuess = prompt("Guess the secret number");
        let anotherUser = prompt("Another guess the secret number");
        
        if (userGuess > secretNumber){ 
            alert(`Your guess is too high`);
            console.log(`Guess is too high`);
        }

        else if (userGuess < secretNumber){ 
            alert(`Your guess is too low`)
            console.log(`Guess is too low`);
        }

        else if (userGuess == secretNumber) {
            alert("Your guess is correct");
            console.log("Correct");
        }
           
        else {
            alert(`Invalid`);
         console.log(`Guess is invalid`);
        }

        alert(`The secret number is ${secretNumber}`);
        console.log(`${secretNumber} is correct`);