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

function sumOfDigits(num) {
    let result = 0;
    while(num > 0) {
        result += num % 10;
        num = (num - num % 10) / 10;
    }
    return result;
}

async function solve() {
    try {
        const num = await askQuestion('Enter your number: ');
        if(!isNaN(num)) console.log(`sum of digits is ${sumOfDigits(+num)}`);
        else console.log('your number is invalid');
    }
    catch(error) {
        console.log(`an error occurred ${error}`);
    }
    finally {
        rl.close();
    }
};

solve();