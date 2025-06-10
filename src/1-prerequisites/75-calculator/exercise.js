const { log } = require('console');
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
        const num1 = Number(await askQuestion('Enter number 1: '));
        const num2 = Number(await askQuestion('Enter number 2: '));
        if(isNaN(num1) || isNaN(num2)) throw new Error('your numbers are not valid!');
        const choice = Number(await askQuestion('1. +\n2. -\n3. *\n4. /\n: '));

        switch(choice) {
            case 1:
                console.log(num1 + num2);
                break;
            case 2:
                console.log(num1 - num2);
                break;
            case 3:
                console.log(num1 * num2);
                break;
            case 4:
                console.log(num1 / num2);
                break;
            default:
                throw new Error('your operation is not valid!');
        }
    }
    catch(error) {
        console.log(`an error occurred ${error}`);
    }
    finally {
        rl.close();
    }
};

main();