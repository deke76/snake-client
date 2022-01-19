const net = require("net");
const { connect } = require('./client.js')

console.log("Connecting ...");
let conn = connect();

conn.on('data', (data) => {
  console.log('Server says: ', data);
});