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

// var board = `\n  ${spaces[0]}  | ${spaces[1]} |  ${spaces[2]}  \n _____________ \n  ${spaces[3]}  | ${spaces[4]} |  ${spaces[5]}  \n _____________ \n  ${spaces[6]}  | ${spaces[7]} |  ${spaces[8]} \n `

var board = ''


var handleUserInput = function(space) {
  spaces[space] = piece
  console.clear()
  // console.log(spaces)
  // console.log(space, spaces[space], piece)
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

game()
