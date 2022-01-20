let server;

const objSnakeMoves = {
  up: 'Move: up',
  right: 'Move: right',
  down: 'Move: down',
  left: 'Move: left'
};
  
// const moveSnake = function(strMove, callback) {
//   server.write(strMove);
//   callback(strMove, callback);
// };

// setup interface to handle user input from stdin
const setupInput = (conn) => {
  server = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on('data', (key) => handleUserInput(key));
  return stdin;
};

const handleUserInput = function(key) {
  switch (key.toUpperCase()) {
  case '\u0003':
    process.exit();
    break;
  case 'W':
    server.write(objSnakeMoves.up);
    break;
  case 'D':
    server.write(objSnakeMoves.right);
    break;
  case 'S':
    server.write(objSnakeMoves.down);
    break;
  case 'A':
    server.write(objSnakeMoves.left);
    break;
  case 'O':
    server.write('Say: Oh yeah!');
    break;
  case 'B':
    server.write('Say: Back off!');
    break;
  case 'N':
    server.write('Say: Not today, good sir!');
    break;
  }
};

module.exports = { setupInput };