var player = "Rock";
var computer = "Scissors";

if (player === "Rock") {
    if (computer === "Scissors") {
        console.log("You Win!");

    } else if (computer === "Papper") {
        console.log("You Lose.");

    } else if (computer === "Rock") {
        console.log("It's a draw");
    } 

} else if (player === "Papper") {
    if (computer === "Scissors") {
        console.log("You Lose.");

    } else if (computer === "Papper") {
        console.log("It's a draw");

    } else if (computer === "Rock") {
        console.log("You Win!");
    }

} else if (player === "Scissors"){
    if (computer === "Scissors") {
        console.log("It's a draw");

    } else if (computer === "Papper") {
        console.log("You Win!");

    } else if (computer === "Rock") {
        console.log("You Lose.");
    }    
}