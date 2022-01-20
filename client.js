const net = require("net");

// establishes a connection with the game server
const connect = function() {
  const client = net.createConnection({
    host: 'localhost',
    port: '50541'
  });

  // interpret incoming data as text
  client.setEncoding("utf8");
  client.on('data', () => {
    console.log("Successful connection established.");
  });

  return client;
};

module.exports = {
  connect
};