const readline = require('readline');

const rl = readline.Interface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter your number: ", (num) => {
    if(+num % 2) console.log(`${num} is odd`);
    else console.log(`${num} is even`);
    rl.close();
});