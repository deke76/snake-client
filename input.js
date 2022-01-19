// setup interface to handle user input from stdin
const setupInput = function() {
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
    console.log('up');
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