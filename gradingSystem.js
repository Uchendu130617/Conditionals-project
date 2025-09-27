let userGrade = prompt("Enter a number from 0 - 100");

if (userGrade >= 90 && userGrade <= 100) {
    alert("Your garde is A");
    console.log("Grade is A");

}

else if (userGrade >= 80 && userGrade <= 89) {
    alert("Your grade is B");
    console.log("Grade is B");
}

else if (userGrade >= 70 && userGrade <= 79) {
    alert("Your grade is C");
    console.log("Grade is C");
}

else if (userGrade >= 60 && userGrade <= 69) {
    alert("Your grade is D");
    console.log("Grade is D");
}

else if (userGrade < 60) {
    alert("Your grade is F");
    console.log("Grade is F");
}

else{
    alert("Invalid number");
    console.log("Invalid score");
}