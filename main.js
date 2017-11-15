var buttonRock = document.getElementById("rock")
var buttonPaper = document.getElementById("paper")
var buttonScissors = document.getElementById("scissors")
var userChoice
var totalWins = 0
var totalLoss = 0

function resetScreen() {
  document.getElementById("opponent_rock").classList.remove("unhide")
  document.getElementById("opponent_paper").classList.remove("unhide")
  document.getElementById("opponent_scissors").classList.remove("unhide")  
}


buttonRock.addEventListener("click", function() {
  resetScreen()
  var userChoice = "rock"
  console.log(userChoice)
  getRandom(userChoice)
})

buttonPaper.addEventListener("click", function() {
  resetScreen()
  var userChoice = "paper"
  console.log(userChoice)  
  getRandom(userChoice)  
})

buttonScissors.addEventListener("click", function() {
  resetScreen()
  var userChoice = "scissors"
  console.log(userChoice)
  getRandom(userChoice)  
})

function getRandom(choice) {
  oppNum = Math.ceil(Math.random() * 3)
  console.log(oppNum)
  assignOpp(oppNum, choice)
}


function assignOpp(oppNum, choice) {
  if (oppNum === 1) {
      document.getElementById("result").innerHTML = "Opponent chooses:"
      document.getElementById("opponent_rock").classList.add("unhide")
      oppChoiceRock(choice)
  }
    else if (oppNum === 2) {
      document.getElementById("result").innerHTML = "Opponent chooses:"    
      document.getElementById("opponent_paper").classList.add("unhide")
      oppChoicePaper(choice)
  }
    else if (oppNum === 3) {
      document.getElementById("result").innerHTML = "Opponent chooses:"    
      document.getElementById("opponent_scissors").classList.add("unhide")      
      oppChoiceScissors(choice)
    
  }
}

// I think this section can be simplified with one switch checking if userChoice defeats oppChoice

function oppChoiceRock(userChoice) {
  switch(userChoice) {
    case "rock":
      tie()
      break
    case "paper":
      win()
      break
    case "scissors":
      lose()
      break
  }
}

function oppChoicePaper(userChoice) {
  switch(userChoice) {
    case "rock":
      lose()
      break
    case "paper":
      tie()
      break
    case "scissors":
      win()
      break
  }
}

function oppChoiceScissors(userChoice) {
  switch(userChoice) {
    case "rock":
      win()
      break
    case "paper":
      lose()
      break
    case "scissors":
      tie()
      break
  }
}

function win() {
  document.getElementById("verdict").innerHTML = "You win!" 
  console.log("Win")
  totalWins++
  document.getElementById("win_stat").innerHTML = totalWins
}

function lose() {
  document.getElementById("verdict").innerHTML = "You lose!" 
  console.log("Lose")
  totalLoss++
  document.getElementById("loss_stat").innerHTML = totalLoss 
}

function tie() {
  document.getElementById("verdict").innerHTML = "It's a tie!" 
  console.log("Tie")
}