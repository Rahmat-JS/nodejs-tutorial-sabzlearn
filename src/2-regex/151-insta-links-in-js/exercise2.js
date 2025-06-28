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
        const comment = await askQuestion('Enter your comment: ');
        const regexPattern =/@(([\w.])+)/g;
        // const replaceRegex = "";
        const new_comment = comment.replace(regexPattern, word => {
            // console.log(word);
            return `<a href='https://instagram.com/${word.slice(1)}'>${word}</a>`
        });
        console.log(new_comment);
    }
    catch(error) {
        console.log(`an error occurred ${error}`);
    }
    finally {
        rl.close();
    }
};

solve();