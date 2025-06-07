const readline = require('readline');

const rl = readline.Interface({
    input: process.stdin,
    output: process.stdout
});

const askQuestion = (query) => {
    return new Promise((resolve) => {
        rl.question(query, resolve);
    });
};

async function solve() {
    try {
        const year = await askQuestion('Enter your birth year: ');
        if(isNaN(year)) {
            console.log('your year is not valid! try again!');
            solve(); // recursive
        }
        else {
            console.log(`your age is ${1404 - Number(year)}`);
            rl.close();
        }
    }
    catch(error) {
        console.log(`an error occurred ${error}`);
        rl.close();
    }
};

solve();