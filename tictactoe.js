const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

var spaces = 
  ['0', '1', '2', 
  '3', '4', '5', 
  '6', '7', '8']
 

var player = "player1"

var piece = "X"

var board = ''


var handleUserInput = function(space) {
  spaces[space] = piece
  console.clear()
  checkWin()
  togglePlayer()
  game()
}

var togglePlayer = function() {
  if (player === "player1") {
    player = "player2"
    piece = "O"
  } else {
    player = "player1"
    piece = "X"
  }
}

var promptPlayer = function() {
  readline.question(`it's ${player}'s turn, please select a space: `, (space) => {
    handleUserInput(space)
  })
}

var game = function() {
  promptPlayer()
  render()
}

var render = function() {
  board = `\n  ${spaces[0]}  | ${spaces[1]} |  ${spaces[2]}  \n _____________ \n  ${spaces[3]}  | ${spaces[4]} |  ${spaces[5]}  \n _____________ \n  ${spaces[6]}  | ${spaces[7]} |  ${spaces[8]} \n `
  console.log(board)
}

var checkWin = function() {
  if (checkHorizontal()  === true  || checkVertical()  === true  || checkDiagonal() === true  ) {
    board = ''
    console.log(`${player} wins!`)
    return
  }
}

var checkHorizontal= function(){
  if ((spaces[0] === spaces[1] && spaces[1] === spaces[2]) || (spaces[3] === spaces[4] && spaces[4] === spaces[5]) || (spaces[6] === spaces[7] && spaces[7] === spaces[8])) {
    return true
  }

  return false 
} 

var checkDiagonal= function(){
  if ((spaces[0] === spaces[4] && spaces[4] === spaces[8]) || (spaces[2] === spaces[4] && spaces[4] === spaces[6])) {
    return true
  }

  return false 
}

var checkVertical= function(){
  if ((spaces[0] === spaces[1] && spaces[1] === spaces[2]) || (spaces[3] === spaces[4] && spaces[4] === spaces[5]) || (spaces[6] === spaces[7] && spaces[7] === spaces[8])) {
    return true
  }

  return false 
} 

game()
