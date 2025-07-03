const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    if(req.url === '/books') {
        res.writeHead(200, { 'content-type': 'application/json'});
        if(req.method === 'GET') {
            books = JSON.parse(fs.readFileSync('books.json'));
            res.write(JSON.stringify({
                'message': 'books received successfully!',
                'books': books
            }));
            res.end();
        } else if(req.method === 'POST') {
            let body = '';
            req.on('data', chunk => {
                body += chunk.toString();
            });
            req.on('end', () => {
                body = JSON.parse(body)
                data = JSON.parse(fs.readFileSync('books.json'));
                data.books.push(body);
                
                // console.log(body);
                // console.log(data);
                
                fs.writeFileSync('books.json', JSON.stringify(data, null, 2));
                res.write(JSON.stringify({'message': `book (${body.name}) added successfully!`}));
                res.end();
            });
        }
        else {
            res.writeHead(404, { 'content-type': 'application/json'});
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