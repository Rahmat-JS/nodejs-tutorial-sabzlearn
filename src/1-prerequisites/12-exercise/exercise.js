const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Please enter a number 1: ', (num1_str) => {
  const num1 = Number(num1_str);

  if (isNaN(num1)) {
    console.log('That is not a valid number.');
    rl.close();
  } else {
    rl.question('Please enter number 2: ', (num2_str) => {
        const num2 = Number(num2_str);
        if(isNaN(num2)) {
            console.log('That is not a valid number.');
        }
        else {
            console.log(`your answer is ${num1 + num2}`);
        }
        rl.close();
    });
  }
});
