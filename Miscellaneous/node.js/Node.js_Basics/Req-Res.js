const http = require('http');
const fs = require('fs');

//server
const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;
    if(req.url === '/mega'){
        res.write('<html> \
        <body> \
        <form action="/message" method="POST"> \
        <input type="text" name="message"> \
        <button type="submit" name="button">SEND</button> \
        </body>  \
        </html> ')
        return res.end();
    }
    if(req.url === '/message' && method === "POST"){
        //Event loop Parsing
        const body = [];
        req.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk);
        });

        //Buffer
        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];
            
            //async
            fs.writeFile("message.txt", message, () => {
                res.statusCode = 302;
                res.setHeader('Location', '/mega');
                res.end();
            });

        });

        //file system
        //fs.writeFileSync("message.txt", "DUMMY");
        //res.statusCode = 302;
        //res.setHeader('Location', "/mega");
        //return res.end();
    }
    
    res.write("Hello Navin");
    res.end();
    });

server.listen(3000);