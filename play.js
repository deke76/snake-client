// const net = require("net");
const { connect } = require('./client.js');
const { setupInput } = require('./input.js');

console.log("Connecting ...");
let server = connect();

setupInput(server);

server.on('data', (data) => {
  console.log('Server says: ', data);
});

server.on('connect', () => {
  server.write('Name: DKL');
});