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

function pw(b, p) {
    let result = 1;
    while(p > 0) {
        if(p % 2) result *= b;
        b *= b;
        p = (p - p % 2) / 2;
    }
    return result;
}

async function solve() {
    try {
        const base = await askQuestion('Enter base number: ');
        const p = await askQuestion('Enter power number: ');
        if(isNaN(base) || isNaN(p)) console.log('Error: your numbers are not valid!');
        else console.log(`your answer is ${pw(base, p)}`);
    }
    catch(error) {
        console.log(`an error occurred ${error}`);
    }
    finally {
        rl.close();
    }
};

solve();