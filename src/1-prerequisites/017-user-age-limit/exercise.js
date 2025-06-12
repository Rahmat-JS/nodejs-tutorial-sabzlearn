const readline = require('readline');

const rl = readline.Interface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter your age: ", (age) => {
    // if(Number(age) < 18) {
    if(+age < 18) {
        console.log(`your age is denied!`)
    }
    else {
        console.log(`welcome to our website`);
    }
    rl.close();
});