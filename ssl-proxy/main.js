var fs = require('fs');

require('http-proxy').createProxyServer({
  ssl: {
    key: fs.readFileSync(__dirname + '/certs/ssl.key', 'utf8'),
    cert: fs.readFileSync(__dirname + '/certs/ssl.crt', 'utf8')
  },
  target: 'http://localhost:' + (process.env.PORT || 3000),
  ws: true,
  xfwd: true
}).listen(process.env.PROXY_PORT || 4000);
