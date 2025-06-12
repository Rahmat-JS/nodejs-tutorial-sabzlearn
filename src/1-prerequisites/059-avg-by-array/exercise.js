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
            let valid = true;
            const n = Number(num)
            nums = [];
            for(let i = 0; i < n; i++) {
                nums.push(Number(await askQuestion(`Enter number ${i + 1}: `)));
                if(isNaN(nums[i])) {
                    console.log('your number is not valid!');
                    valid = false;
                    break;
                }
            }
            if(valid) {
                result = 0;
                for(let i = 0, n = nums.length; i < n; i++)
                    result += nums[i];
                console.log(`answer is ${result / nums.length}`);
            }
            
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
