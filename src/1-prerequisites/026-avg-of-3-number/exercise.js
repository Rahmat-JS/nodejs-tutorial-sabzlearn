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
        const num1str = await askQuestion('Enter number 1: ');
        const num2str = await askQuestion('Enter number 2: ');
        const num3str = await askQuestion('Enter number 3: ');
        const num1 = +num1str;
        const num2 = +num2str;
        const num3 = +num3str;

        if(isNaN(num1) || isNaN(num2) || isNaN(num3)) {
            console.log(`one or more than one of numbers is invalid!`);
        } else {
            console.log(`your answer is: ${(num1 + num2 + num3) / 3.0}`);
        }
    }
    catch(error) {
        console.log(`an error occurred ${error}`);
    }
    finally {
        rl.close();
    }
};

solve();