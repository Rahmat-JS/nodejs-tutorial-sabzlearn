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
        const number = await askQuestion('Enter your number: ');
        const regexPattern = /^[-+]?\d*(\.\d+)?$/
        console.log(regexPattern.test(number));
    }
    catch(error) {
        console.log(`an error occurred ${error}`);
    }
    finally {
        rl.close();
    }
};

solve();