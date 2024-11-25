const http = require('http');
const fs = require('fs');

// Function to count and list students from the CSV file
function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data.split('\n').filter(line => line.trim() !== '');
      if (lines.length === 0) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const students = {};
      let totalStudents = 0;

      // Skip header (first line), process remaining lines
      for (const line of lines.slice(1)) {
        const [firstName, field] = line.split(',');
        if (!students[field]) {
          students[field] = [];
        }
        students[field].push(firstName.trim());
        totalStudents++;
      }

      // Build the output for students
      let responseText = `Number of students: ${totalStudents}\n`;

      for (const field in students) {
        responseText += `Number of students in ${field}: ${students[field].length}. List: ${students[field].join(', ')}\n`;
      }

      resolve(responseText);
    });
  });
}

// Create the HTTP server
const app = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;

  // Set the response header for plain text
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  // Handle the root route '/'
  if (url === '/') {
    res.end('Hello Holberton School!\n');
  }

  // Handle the '/students' route
  else if (url === '/students') {
    const database = process.argv[2]; // Get the database file from the command line argument
    if (!database) {
      res.end('Database file not provided\n');
      return;
    }

    countStudents(database)
      .then((studentsList) => {
        res.end(`This is the list of our students\n${studentsList}`);
      })
      .catch((error) => {
        res.end(error.message);
      });
  }

  // If the route doesn't match '/', send a 404
  else {
    res.writeHead(404);
    res.end('Route not found\n');
  }
});

// Start the server listening on port 1245
app.listen(1245, () => {
  console.log('Server is running on http://localhost:3000');
});

// Export the app
module.exports = app;
