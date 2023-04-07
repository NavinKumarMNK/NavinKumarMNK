const http = require("http");
const express = require("express");

//node.js
const server1 = http.createServer((req, res) => {
    //console.log(req);
    res.write("Hello Mega");
    res.end();
});

server1.listen(3000);

//express.js
const app = express();
app.use((req, res, next) => {
    console.log("In the middleware 1");
    next();
});

app.use((req, res, next) => {
    console.log("In the middleware 2"); 
    res.send("<h1>Hello from Express.js !</h1>");
});

/* const server2 = http.createServer(app);
server2.listen(3001);
*/
app.listen(3001);