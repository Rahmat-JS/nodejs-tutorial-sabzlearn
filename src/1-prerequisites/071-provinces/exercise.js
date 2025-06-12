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

const provinces = {
    tehran: ['tehran', 'karaj', 'shahriar'],
    khorasan: ['mashhad', 'sabzevar', 'neyshaboor'],
    isfahan: ['isfahan', 'kashan']
};

async function main() {
    try {
        const name = await askQuestion('Enter your province: ');
        if(provinces[name] === undefined) console.log('your province is not defined!');
        else console.log(provinces[name].join(' '));
        
        
    }
    catch(error) {
        console.log(`an error occurred ${error}`);
    }
    finally {
        rl.close();
    }
};

main();