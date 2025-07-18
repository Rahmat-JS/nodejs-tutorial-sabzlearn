const fs = require('fs');

if(fs.existsSync('./a-really-great-file.json')) {
    fs.rm('./a-really-great-file.json', err => {
        if(err) throw err;
        console.log('file deleted successfully!');
    });
} else {
    fs.writeFile('./a-really-great-file.json', JSON.stringify({
        message: 'this file is really great!'
    }, null, 2), err => {
        if(err) throw err;
        console.log('file does not exist, so created successfully!');
    });
}