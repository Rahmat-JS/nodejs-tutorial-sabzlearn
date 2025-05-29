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
        const username = await askQuestion('Enter your username: ');
        const password = await askQuestion('Enter your password: ');
        
        if(8 <= username.length && 8 <= password.length)
            console.log(`You are registered successfully!\nUsername: ${username}\nPassword: ${password}`);
        else
            console.log(`Your username and password must be more than 8 character!`);
    }
    catch(error) {
        console.log(`an error occurred ${error}`);
    }
    finally {
        rl.close();
    }
};

solve();