// Importing the express module
const express = require('express');

// Create an express app
const app = express();

// Define the route for the root endpoint '/'
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

// Start the server on port 1245
app.listen(1245, () => {
  console.log('Server is running on http://localhost:1245');
});

// Export the app so that it can be required elsewhere if needed
module.exports = app;
