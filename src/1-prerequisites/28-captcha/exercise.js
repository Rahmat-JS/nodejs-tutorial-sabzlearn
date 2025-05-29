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
        const captcha = Math.floor(Math.random() * 10000);
        console.log(`please enter this number: ${String(captcha).padStart(4, '0')}`);
        const number = await askQuestion(': ');
        if(captcha == +number)
            console.log('welcome');
        else
            console.log('your code is wrong');
    }
    catch(error) {
        console.log(`an error occurred ${error}`);
    }
    finally {
        rl.close();
    }
};

solve();