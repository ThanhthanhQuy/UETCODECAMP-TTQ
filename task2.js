var http = require('http');
var Server= http.createServer(function (req, res) {
    if(req.url=='/hello') {
        if (req.method == "GET") {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write('world');
            res.end();
        } else if (req.method == "POST") {
            res.write('world created');
            res.end();
        }
        else if (req.method == "PUT") {
            res.write('world updated');
            res.end();
        }
        else if (req.method == "DELETE") {
            res.write('world deleted');
            res.end();
        }
    }
    else {
        res.end('Orther method')
    }

});
Server.listen(8000);
console.log('Port 8000 is running....');