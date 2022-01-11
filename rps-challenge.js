var player = "Papper";
var computer = "Scissors";

switch (player) {
    case "Rock":
        switch (computer) {
            case "Scissors":
                console.log("You Win!");
                break;

            case "Papper":
                console.log("You Lose.");
                break;

            case "Rock":
                console.log("It's a draw");
                break;        
        }
        break;

        case "Scissors":
            switch (computer) {
                case "Scissors":
                    console.log("It's a draw");
                    break;
    
                case "Papper":
                    console.log("You Win!");
                    break;
    
                case "Rock":
                    console.log("You Lose.");
                    break;        
            }
            break;

            case "Papper":
                switch (computer) {
                    case "Scissors":
                        console.log("You Lose.");
                        break;
        
                    case "Papper":
                        console.log("It's a draw");
                        break;
        
                    case "Rock":
                        console.log("You Win!");
                        break;        
                }
                break;
}