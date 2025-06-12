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

function even_or_odd(num) {
    if(!isNaN(num)) {
        if(num % 2) console.log('your number is odd!');
        else console.log('your number is even!');
    }
    else console.log('your number is invalid!');
}

async function solve() {
    try {
        const num = await askQuestion('Enter your number: ');
        even_or_odd(Number(num));
    }
    catch(error) {
        console.log(`an error occurred ${error}`);
    }
    finally {
        rl.close();
    }
};

solve();