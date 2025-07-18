const fs = require('fs');

fs.rename('./db.json', './hello.json', err => {
    if(err) {
        fs.rename('./hello.json', './db.json', err => {
            if(err)
                console.log(`we have error in second attempt for rename: ${err}`);                
            else
                console.log('hello.json -> db.json successfully renamed!');
            
        })
    } else
        console.log('db.json -> hello.json successfully renamed!');
});