const readline = require('readline');

// Create a readline interface for input and output
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Prompt the user for a number
rl.question('Please enter a number: ', (answer) => {
  // Convert the answer to a number using parseFloat or Number
  const num = Number(answer);

  // Check if the conversion is valid
  if (isNaN(num)) {
    console.log('That is not a valid number.');
  } else {
    const age = 1404 - num;
    console.log(`your age is ${age}`);
  }

  // Close the readline interface
  rl.close();
});
