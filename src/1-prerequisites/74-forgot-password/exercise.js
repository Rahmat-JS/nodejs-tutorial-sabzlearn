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

const accounts = [
    {
        email: 'reza@gmail.com',
        password: '1234',
    },
    {
        email: 'javad@ihu.ac.ir',
        password: '54321',
    },
    {
        email: 'ali@yahoo.com',
        password: 'aliali',
    },
    {
        email: 'sina@outlook.com',
        password: 'sani',
    }
];

async function main() {
    try {
        const email = await askQuestion('Enter your email: ');
        const user = accounts.find((account) => {
            return account.email === email;
        });
        if(user) console.log(user.password);
        else console.log('user not find!');
    }
    catch(error) {
        console.log(`an error occurred ${error}`);
    }
    finally {
        rl.close();
    }
};

main();