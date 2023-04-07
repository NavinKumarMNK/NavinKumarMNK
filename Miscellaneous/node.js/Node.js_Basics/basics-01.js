const http = require('http');

//Server 1
function requestListener(req, res){
    console.log(req);
}
const server = http.createServer(requestListener);
server.listen(3001);

// Sever 2
const server2 = http.createServer((req, res) => {
    console.log(req + "server 2");

    //response
    res.setHeader('Content-Type', 'text/html');
    res.write('<html> <body> Hello World </body></html>');
    console.log(res)
    res.end();
});
server2.listen(3002);

