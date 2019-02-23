function playGame(clientGesture){
            
    var computerChoice = Math.random();
    if (computerChoice < .20) {
        computerChoice = 'rock';
    }
    else if (computerChoice < .40) {
        computerChoice = 'paper';
    } 
    else if(computerChoice < .60){
        computerChoice = 'scissors';   
    }
    else if(computerChoice < .80){
        computerChoice = 'spock';   
    }
    else{
        computerChoice = 'lizard';
    }
    document.getElementById("child1").innerHTML = computerChoice;
    document.getElementById("child3").innerHTML = clientGesture;

    if (clientGesture == computerChoice) {
        document.getElementById("child2").innerHTML = 'TIE';
    } 
    else if (clientGesture == 'rock') {
        if (computerChoice == 'scissors') {
            document.getElementById("child2").innerHTML = 'You win!';
        } 
        else if(computerChoice == 'lizard'){
            document.getElementById("child2").innerHTML = 'You win!';
        }
        else{
            document.getElementById("child2").innerHTML = 'You lose!';
        }
    } 
    else if (clientGesture == 'paper') {
        if (computerChoice == 'rock') {
            document.getElementById("child2").innerHTML = 'You win!';
        } 
        else if(computerChoice == 'spock') {
            document.getElementById("child2").innerHTML = 'You win!';
        }
        else{
            document.getElementById("child2").innerHTML = 'You lose!';
        }
    } 
    else if (clientGesture == 'scissors') {
        if (computerChoice == 'paper') {
            document.getElementById("child2").innerHTML = 'You win!';
        } 
        else if(computerChoice == 'lizard'){
            document.getElementById("child2").innerHTML = 'You win!';
        }
        else{
            document.getElementById("child2").innerHTML = 'You lose!';
        }
    }
    else if (clientGesture == 'spock') {
        if (computerChoice == 'rock') {
            document.getElementById("child2").innerHTML = 'You win!';
        } 
        else if(computerChoice == 'scissors'){
            document.getElementById("child2").innerHTML = 'You win!';
        }
        else{
            document.getElementById("child2").innerHTML = 'You lose!';
        }
    }
    else if (clientGesture == 'lizard') {
        if (computerChoice == 'paper') {
            document.getElementById("child2").innerHTML = 'You win!';
        } 
        else if(computerChoice == 'spock'){
            document.getElementById("child2").innerHTML = 'You win!';
        }
        else{
            document.getElementById("child2").innerHTML = 'You lose!';
        }
    }
}  