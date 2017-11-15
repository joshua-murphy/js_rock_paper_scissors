var buttonRock = document.getElementById("rock")
var buttonPaper = document.getElementById("paper")
var buttonScissors = document.getElementById("scissors")
var userChoice = "rock"


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
  assignOpp(oppNum)
}

function assignOpp(num) {
  switch(num) {
    case 1:
      document.getElementById("result").innerHTML = "Opponent chooses:"
      document.getElementById("opponent_rock").classList.add("unhide")
      oppChoiceRock()
      break
    case 2:
      document.getElementById("result").innerHTML = "Opponent chooses:"    
      document.getElementById("opponent_paper").classList.add("unhide")
      oppChoicePaper()
      break
    case 3:
      document.getElementById("result").innerHTML = "Opponent chooses:"    
      document.getElementById("opponent_scissors").classList.add("unhide")      
      oppChoiceScissors()
      break
  }
}

// I think this section can be simplified with one switch checking if userChoice defeats oppChoice

function oppChoiceRock() {
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

function oppChoicePaper() {
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

function oppChoiceScissors() {
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
  // location.reload()
}

function lose() {
  document.getElementById("verdict").innerHTML = "You lose!" 
  console.log("Lose")
  // location.reload()
}

function tie() {
  document.getElementById("verdict").innerHTML = "It's a tie!" 
  console.log("Tie")
  // location.reload()
}