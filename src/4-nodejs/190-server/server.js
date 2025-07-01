const http = require('http');

const server = http.createServer((req, res) => {
    console.log(`${req.method}\n${req.url}\n--------`);
    if(req.method == 'GET' && req.url == '/') res.write('Welcome to our simple server (heart)');
    else if(req.method == 'GET' && req.url == '/posts') res.write('Welcome to our post hub page (heart)');
    else if(req.method == 'GET' && req.url == '/share') res.write('Welcome to our share hub page (heart)');
    else if(req.method == 'GET' && req.url == '/comments') res.write('Welcome to our comment hub page (heart)');
    else if(req.method == 'GET' && req.url == '/books') res.write('Welcome to our book hub page (heart)');
    else {
        res.writeHead(404, {'content-type': 'application/json'})
        res.write(JSON.stringify({'message': 'page not found', 'status code': '404'}));
    }
    res.end();
});

server.listen(3000, () => {
    console.log('server is running on port 3000 successfully!');
});