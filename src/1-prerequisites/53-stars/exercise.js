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

function printStars(num) {
    result = '';
    for(let i = 0; i < num; i++) {
        for(let j = 0; j <= i; j++)
            result += '*';
        result += '\n';
    }
    console.log(result);
}

async function solve() {
    try {
        const num = await askQuestion('Enter your number: ');
        if(!isNaN(num)) printStars(+num);
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