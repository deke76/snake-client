const net = require("net");
const { IP, PORT } = require("./constants");

// establishes a connection with the game server
const connect = function() {
  const client = net.createConnection({
    host: IP,
    port: PORT
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