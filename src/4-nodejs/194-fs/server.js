const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    if(req.url === '/users') {
        res.writeHead(200, { 'content-type': 'application/json'});
        if(req.method === 'GET') {
            names = fs.readFileSync('names.txt').toString().trim().split('\n');
            res.write(JSON.stringify({
                'message': 'names received successfully!',
                'names': names
            }));
            res.end();
        } else if(req.method === 'POST') {
            let body = '';
            req.on('data', chunk => {
                body += chunk.toString();
            });
            req.on('end', () => {
                fs.writeFileSync('names.txt', `${JSON.parse(body).name}\n`, {flag:'a'});
                res.write(JSON.stringify({'message': 'name added successfully!'}));
                res.end();
            });
        }
        else {
            res.write(JSON.stringify({'message': `method ${req.method} not found!`}));
            res.end();
        }
    }
    else {
        res.writeHead(404, { 'content-type': 'application/json'});
        res.write(JSON.stringify({"message": `url ${req.url} by method ${req.method} not found!`}));
        res.end();
    }
});

server.listen(3000, () => {
    console.log('server is running on port 3000 successfully!');
});