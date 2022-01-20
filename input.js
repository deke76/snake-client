let server;

const objSnakeMoves = {
  up: 'Move: up',
  right: 'Move: right',
  down: 'Move: down',
  left: 'Move: left'
};
  
const moveSnake = function(strMove, callback) {
  setTimeout(() => {
    server.write(strMove);
    callback(strMove, callback);
    return;
  }, 1000);
};

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
    moveSnake(objSnakeMoves.up, moveSnake);
    break;
  case 'D':
    console.log('right');
    break;
  case 'S':
    console.log('down');
    break;
  case 'A':
    console.log('left');
    break;
  }
};

module.exports = { setupInput };