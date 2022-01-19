// const net = require("net");
const { connect } = require('./client.js');
const { setupInput } = require('./input.js');

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
  }
  return;
};

console.log("Connecting ...");
let conn = connect();

setupInput();

conn.on('data', (data) => {
  console.log('Server says: ', data);
});

conn.on('connect', () => {
  conn.write('Name: DKL');
});

// conn.on('connect', () => {
//   moveSnake(objSnakeMoves.up, 50, 5, moveSnake);
// });