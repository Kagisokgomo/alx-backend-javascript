// Importing the fs module to read files
const fs = require('fs');

function countStudents(path) {
  try {
    // Read the file synchronously
    const data = fs.readFileSync(path, 'utf8');
    
    // Split the content by line breaks
    const lines = data.split('\n').filter(line => line.trim() !== ''); // Remove any empty lines

    // If there are no valid lines, throw an error
    if (lines.length === 0) {
      throw new Error('Cannot load the database');
    }

    // Parse the CSV lines
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

    // Log the number of students per field and the list of first names
    for (const field in students) {
      console.log(`Number of students in ${field}: ${students[field].length}. List: ${students[field].join(', ')}`);
    }

  } catch (err) {
    // If there's an error, log the appropriate message
    console.error('Cannot load the database');
  }
}

module.exports = countStudents;
