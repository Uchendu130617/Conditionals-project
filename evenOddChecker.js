
let userNumber = prompt("Enter a number");

if (userNumber % 2 === 0) {
    alert(`Number is even`);
    console.log(`Even`);
}

else if (userNumber % 2 === 1) {
    alert(`Number is odd`);
    console.log(`Odd`);
}

else {
    alert(`Invalid number`);
    console.log(`Invad`);  
}