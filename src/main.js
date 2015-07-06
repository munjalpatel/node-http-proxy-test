var http = require('http');

var server = http.createServer(function(req, res) {
  res.end('Hello World!');
});

server.listen(3000, function() {
  console.log('Server listening on: http://localhost:%s', 3000);
});
