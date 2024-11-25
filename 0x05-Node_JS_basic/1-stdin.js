// 1-stdin.js

// Displaying the initial prompt to the user
console.log('Welcome to Holberton School, what is your name?');

// Listening to the input from stdin
process.stdin.on('data', (input) => {
  const name = input.toString().trim(); // Convert input buffer to string and trim whitespace
  console.log(`Your name is: ${name}`);
  
  // End the program after displaying the name
  process.stdout.write('This important software is now closing\n');
  process.exit();  // Exit the program
});
