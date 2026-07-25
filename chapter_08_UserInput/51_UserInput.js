const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter the number: ', (data) => {
  console.log("HI", data);
  rl.close();
});