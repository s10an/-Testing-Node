var http = require('http');

http.createServer(function(req, res) {
    if(err) throw err;
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write('Node.js says Hello!');
    res.end();
}).listen(8080);