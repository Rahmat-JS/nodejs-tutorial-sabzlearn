const fs = require('fs');

fs.rmdir('./folder', err => {
    if(err) {
        fs.mkdir('./folder', { recursive: true }, err => {
            if(err) throw err;
            console.log('folder created successfully!');            
        });
    } else console.log('folder deleted successfully!');
});