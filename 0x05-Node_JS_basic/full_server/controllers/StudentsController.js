import { readDatabase } from '../utils.js';

export default class StudentsController {
  static async getAllStudents(req, res) {
    const filePath = req.query.database || './database.csv'; // Get database file from query or default to './database.csv'
    try {
      const studentsByField = await readDatabase(filePath);
      res.status(200).send(`This is the list of our students\n${Object.keys(studentsByField)
        .sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()))
        .map(field => {
          return `Number of students in ${field}: ${studentsByField[field].length}. List: ${studentsByField[field].join(', ')}`;
        }).join('\n')}`);
    } catch (error) {
      res.status(500).send('Cannot load the database');
    }
  }

  static async getAllStudentsByMajor(req, res) {
    const major = req.params.major;
    if (!['CS', 'SWE'].includes(major)) {
      return res.status(500).send('Major parameter must be CS or SWE');
    }

    const filePath = req.query.database || './database.csv'; // Get database file from query or default to './database.csv'
    try {
      const studentsByField = await readDatabase(filePath);
      if (studentsByField[major]) {
        res.status(200).send(`List: ${studentsByField[major].join(', ')}`);
      } else {
        res.status(500).send('Cannot load the database');
      }
    } catch (error) {
      res.status(500).send('Cannot load the database');
    }
  }
}
