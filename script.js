const playerChoice = prompt("please choose rock paper or sicsors")
console.log(playerChoice)
const choices = ["rock","paper","sicsors"]
const pcChoice = Math.floor(Math.random()* 3)
if(pcChoice == 0){
    console.log(choices[0])
}else if (pcChoice == 1){
    console.log(choices[1])
}else if(pcChoice ==2){
    console.log(choices[2])
}
if(playerChoice == "rock" && pcChoice == 0){
    console.log("Its a tie")
}else if(playerChoice == "rock" && pcChoice ==1){
    console.log("You lose!")
}else if(playerChoice == "rock" && pcChoice == 2){
    console.log("You win!")
}

if(playerChoice == "paper" && pcChoice == 1){
    console.log("Its a tie")
}else if (playerChoice == "paper" && pcChoice == 0){
    console.log("you win!")
}else if (playerChoice == "paper" && pcChoice == 2){
    console.log("you lose!")
}

if(playerChoice == "sicsors" && pcChoice == 2){
    console.log("Its a tie")
}else if (playerChoice == "sicsors" && pcChoice == 0){
    console.log("you lose!")
}else if (playerChoice == "sicsors" && pcChoice == 1){
    console.log("you win!")
}


