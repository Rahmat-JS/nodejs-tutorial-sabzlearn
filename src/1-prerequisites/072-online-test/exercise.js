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

const test = [
    {
        question: '2 + 2 = ?',
        answer: 4
    },
    {
        question: '3 * 8 = ?',
        answer: 24
    },
    {
        question: '60 / 12 = ?',
        answer: 5
    },
    {
        question: '2 ^ 8 = ?',
        answer: 256
    },
    {
        question: '511 - 89 = ?',
        answer: 422
    }
];

async function main() {
    try {
        let result = 0;
        for(let i = 0; i < test.length; i++) {
            console.log(test[i].question);
            const ans = await askQuestion('your answer: ');
            if(Number(ans) === test[i].answer) result++;
        }

        console.log(`your result is ${result}/${test.length}`);
        
    }
    catch(error) {
        console.log(`an error occurred ${error}`);
    }
    finally {
        rl.close();
    }
};

main();