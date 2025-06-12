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

async function main() {
    try {
        let num = Number(await askQuestion('Enter your number: '));
        let result = 0;
        while(num > 0) {
            result = result * 10 + num % 10;
            num = (num - num % 10) / 10;
        }
        console.log(`result is ${result}`);
    }
    catch(error) {
        console.log(`an error occurred ${error}`);
    }
    finally {
        rl.close();
    }
};

main();

