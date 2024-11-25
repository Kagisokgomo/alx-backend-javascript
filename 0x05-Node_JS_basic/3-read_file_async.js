// Importing the fs module to read files asynchronously
const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    // Attempt to read the file asynchronously
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        // If there is an error reading the file, reject the promise with the error message
        reject(new Error('Cannot load the database'));
        return;
      }

      // Split the content by line breaks and filter out any empty lines
      const lines = data.split('\n').filter(line => line.trim() !== '');

      // If there are no valid lines, reject with the error message
      if (lines.length === 0) {
        reject(new Error('Cannot load the database'));
        return;
      }

      // Initialize an object to hold the students by their field
      const students = {};
      let totalStudents = 0;

      // Loop through each line after the header
      for (const line of lines.slice(1)) {
        const [firstName, field] = line.split(',');

        if (!students[field]) {
          students[field] = [];
        }
        students[field].push(firstName.trim());
        totalStudents++;
      }

      // Log the total number of students
      console.log(`Number of students: ${totalStudents}`);

      // Log the number of students in each field and their names
      for (const field in students) {
        console.log(`Number of students in ${field}: ${students[field].length}. List: ${students[field].join(', ')}`);
      }

      // Resolve the promise after logging the required data
      resolve();
    });
  });
}

module.exports = countStudents;
