const http = require('http');

const server = http.createServer((req, res) => {
    console.log(`${req.method}\n${req.url}\n--------`);
});

server.listen(3000, () => {
    console.log('server is running on port 3000 successfully!');
});