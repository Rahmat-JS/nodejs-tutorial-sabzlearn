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
        const num = await askQuestion('Enter num of your number: ');
        if(!isNaN(num)) {
            result = 0;
            let valid = true;
            const n = Number(num)
            for(let i = 0; i < n; i++) {
                result += Number(await askQuestion(`Enter number ${i + 1}: `));
                if(isNaN(result)) {
                    console.log('your number is not valid!');
                    valid = false;
                    break;
                }
            }
            if(valid) console.log(`your average is ${result / n}`)
        }
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