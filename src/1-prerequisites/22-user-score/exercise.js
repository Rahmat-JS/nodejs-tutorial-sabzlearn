const readline = require('readline');

const rl = readline.Interface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter your score: ", (score_arg) => {
    // console.log(`your answer is ${score_arg}`);
    const score = Number(score_arg);
    if(0 <= score && score <= 20) {
        if(18 <= score) console.log('great');
        else if (15 <= score) console.log('very good');
        else if(10 <= score) console.log('good');
        else if(5 <= score) console.log('weak');
        else console.log('unacceptable');
    }
    else console.log('out of range!');
    rl.close();
});