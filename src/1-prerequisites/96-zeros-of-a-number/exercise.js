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
        if(num === 0) console.log(1);
        else {
            let result = 0;
            while(num > 0) {
                result += num % 10 === 0;
                num = (num - num % 10) / 10;
            }
            console.log(result);
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

