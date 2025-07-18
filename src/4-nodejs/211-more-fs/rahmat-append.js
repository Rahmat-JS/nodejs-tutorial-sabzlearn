const fs = require('fs');

fs.appendFile('./users.txt', 'Rahmat\n', err => {
    console.log('Rahmat appended to users.txt successfully!');
});