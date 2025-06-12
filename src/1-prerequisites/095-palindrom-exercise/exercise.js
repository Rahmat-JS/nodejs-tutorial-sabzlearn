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
        const word = await askQuestion('Enter your input: ');
        isPalidrom = true;
        for(let i = 0, j = word.length - 1; i < j; i++, j--)
            if(word[i] != word[j]) {
                isPalidrom = false;
                break;
            }
        if(isPalidrom) console.log('your input is Palidrom!');
        else console.log('your input is [not] Palidrom!');
    }
    catch(error) {
        console.log(`an error occurred ${error}`);
    }
    finally {
        rl.close();
    }
};

main();

