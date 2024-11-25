// Import the http module to create an HTTP server
const http = require('http');

// Create the HTTP server
const app = http.createServer((req, res) => {
  // Set the response header to indicate plain text content
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  // Write the response body
  res.end('Hello Holberton School!\n');
});

// Make the server listen on port 1245
app.listen(1245, () => {
  console.log('Server is running on http://localhost:1245');
});

// Export the app for testing or further use
module.exports = app;
