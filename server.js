var http = require('http');
var server = http.createServer();
// Servers receive HTTP messages

server.listen(1337, function() {
  console.log("53rv3r is listening on port 1337");
});

// Server is an event emitter. The function below when a 
// 'request' event occurs. 
// server.on('request', function(req, res) {});

// Instead of putting a function however, we are requiring the
// Express app, which will handle requests for us. 
// Express doesn't build servers, it just helps us sanely handle
// requests. 
server.on('request', require('./app'));

