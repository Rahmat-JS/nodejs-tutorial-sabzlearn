const readline = require('readline');

const rl = readline.Interface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter your age: ", (age_arg) => {
    rl.question("Enter your gender: ", (gender) => {
        const age = +age_arg;
        const woman_words = ['woman', 'female'];
        let isWoman;
        if(woman_words.includes(gender.toLowerCase())) isWoman = true;
        else isWoman = false;
        
        if(isWoman || age < 18)
            console.log('access denied!');
        else
            console.log('welcome back');

        rl.close();
    });
});