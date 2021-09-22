const rps = ["rock", "paper", "scissors"]
var userScore = 0
var compScore = 0
var tieScore = 0


function playRPS() {
    var userInput = window.prompt('Please select Rock, Paper, or Scissors', "Insert Here")
        console.log(userInput.toLowerCase())
        if (!(userInput.toLowerCase() == "rock" || userInput.toLowerCase() == "paper" || userInput.toLowerCase() == "scissors")) {
            alert ("That wasn't rock, paper, or scissors!")
            return playRPS()
        }
        
        var compNumber = Math.floor(Math.random()*3)
        var compInput = rps[compNumber]
        
            alert ("the Computer has chosen " + compInput)
        if (userInput == compInput) {
            alert ("Its a Tie!")
            tieScore++
        }

        else if ((userInput == "rock" && compInput == "scissors") || (userInput == "paper" && compInput == "rock") || (userInput == "scissors" && compInput == "paper")){
            alert("You won")
            userScore++
        }
        else{
            alert("You lose")
            compScore++
        }

        alert("Stats:\nWins: "+userScore+"\nLoss: "+compScore+"\nTies: "+tieScore)

        var result = confirm("Do you want to play again?")

        if (result){
            return playRPS()
        } 

        alert("SEE YOU LATER!")
        return


        

        

}
playRPS()