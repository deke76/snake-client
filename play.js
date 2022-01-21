// const net = require("net");
const { connect } = require('./client.js');
const { setupInput } = require('./input.js');

const objSnakeMoves = {
  up: 'Move: up',
  right: 'Move: right',
  down: 'Move: down',
  left: 'Move: left'
};

console.log("Connecting ...");
let server = connect();

setupInput(server);

server.on('data', (data) => {
  console.log('Server says: ', data);
});

server.on('connect', () => {
  server.write('Name: DKL');
});

module.exports = { objSnakeMoves };