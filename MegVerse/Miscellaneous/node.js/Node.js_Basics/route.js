
function routes(req, res){
    if(req.url === '/'){
        res.setHeader('Content-Type', 'text/html');
        res.write("<html><body><h1>Hello from Node.js</h1></body></html>");
        res.write("<ul><li>MNK</li> <li>Mega</li> <li>Navin</li></ul>")
        res.end()
    }
    else if (req.url === '/add-users'){
        res.setHeader('Content-Type', 'text/html');
        res.write('<html> \
            <body> \
                <form action="/create-user" method="POST"> \
                    <input type="text" name="username"> \
                    <button type="submit">Add User</button> \
                </form> \
            </body> \
        </html>');
        res.end();
    }
    else if (req.url === '/create-user' && req.method === 'POST'){
        const body = [];
        req.on('data', (chunk) => {
            body.push(chunk)
        });
        
        req.on("end", () => {
            const parsedBody = Buffer.concat(body).toString();
            const username = parsedBody.split('=')[1];
            console.log(username);
        });
        res.statusCode = 302;
        res.setHeader('Location', '/');
        res.end();
    }
};

module.exports = routes;