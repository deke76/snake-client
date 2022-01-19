const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: 'localhost',
    port: '50541'
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

console.log("Connecting ...");
let conn = connect();

conn.setEncoding('utf8'); // interpret data as text

conn.on('data', (data) => {
  console.log('Server says: ', data);
});