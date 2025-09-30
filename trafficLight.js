// let userColor = prompt("Enter a color");

// if (userColor === "red") {
//  alert(`Stop`);
//  console.log(`Stop`);
// }

// else if (userColor === "yellow") {
//     alert(`Slow down`);
//     console.log("Slow down");
// }

// else if (userColor === "green") {
//     alert(`Go`);
//     console.log(`Go`);
// }

// else {
//     alert(`Invalid color`);
//     console.log(`Invalid color`);
// }


let trafficShow = "Green"

while(true){
    let userSee = prompt("See a color");

    if(userSee == "red"){
    alert("Stop");
    console.log("Stop");
    }

    else if(userSee == "yellow"){
    alert("Slow down");
    console.log("Slow down");
    }

    else if(userSee == "Green"){
    alert("Go");
    console.log("Go");
    break
    }

    else{
        alert("Invalid input");
        console.log("Invalid");
    }
}