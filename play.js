// const net = require("net");
const { connect } = require('./client.js');

const objSnakeMoves = {
  up: 'Move: up',
  right: 'Move: right',
  down: 'Move: down',
  left: 'Move: left'
};
  
const moveSnake = function(strMove, moveDelay, numOfMoves,callback) {
  if (numOfMoves >= 1) {
    setTimeout(() => {
      conn.write(strMove);
      callback(strMove, moveDelay, --numOfMoves, callback);
    }, moveDelay);
  };
  return;
};

// setup interface to handle user input from stdin
const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on('data', handleUserInput(key));
  return stdin;
};

const handleUserInput = function() {
  if (key === '\u0003') process.exit();
};

console.log("Connecting ...");
let conn = connect();

conn.on('data', (data) => {
  console.log('Server says: ', data);
});

conn.on('connect', () => {
  conn.write('Name: DKL');
});

// conn.on('connect', () => {
//   moveSnake(objSnakeMoves.up, 50, 5, moveSnake);
// });