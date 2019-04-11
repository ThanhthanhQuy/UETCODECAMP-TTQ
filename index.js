var  http = require('http');
var url= require('url');

var requestHandle= require('./function');

var data=
{
    'GET' : requestHandle.get(),
    'POST': requestHandle.post(),
    'PUT' : requestHandle.put(),
    'DELETE': requestHandle.remove()

}

var server=  http.createServer(function (req, res)  {
    var message;
    if(req.url=='/hello') {
        data[req.method] ? message = data[req.method] : message = 'Invalid';
        res.write(message);
        res.end();
    }
})
server.listen(8000, 'localhost', function (err) {
    if(!err) {console.log('Server is running......')}
});