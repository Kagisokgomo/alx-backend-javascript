const express = require('express');
const fs = require('fs');
const path = require('path');
const readline = require('readline');

const app = express();

function countStudents(databasePath) {
  return new Promise((resolve, reject) => {
    fs.access(databasePath, fs.constants.F_OK, (err) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const studentsByField = {};
      let totalStudents = 0;

      const fileStream = fs.createReadStream(databasePath);
      const rl = readline.createInterface({
        input: fileStream,
        crlfDelay: Infinity,
      });

      rl.on('line', (line) => {
        // Split each line by comma
        const [firstName, field] = line.split(',');

        // Skip empty lines or lines that don't contain both values
        if (!firstName || !field) {
          return;
        }

        totalStudents++;

        // Add the student to the respective field
        if (!studentsByField[field]) {
          studentsByField[field] = [];
        }

        studentsByField[field].push(firstName);
      });

      rl.on('close', () => {
        // Display total number of students
        console.log(`Number of students: ${totalStudents}`);

        // Display number of students per field
        Object.entries(studentsByField).forEach(([field, names]) => {
          console.log(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
        });

        resolve(); // Resolve the promise after processing
      });
    });
  });
}

// Route for / (root)
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

// Route for /students
app.get('/students', (req, res) => {
  const dbPath = process.argv[2]; // Get the database file path from the command line arguments

  if (!dbPath) {
    return res.status(400).send('Database file path is required');
  }

  countStudents(dbPath)
    .then(() => {
      res.send('This is the list of our students');
    })
    .catch((error) => {
      res.status(500).send(error.message);
    });
});

// Listen on port 1245
app.listen(1245, () => {
  console.log('Server is running on http://localhost:1245');
});

module.exports = app; // Export the app for testing purposes
