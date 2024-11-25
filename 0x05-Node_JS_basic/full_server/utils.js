import fs from 'fs';
import path from 'path';

export const readDatabase = (filePath) => {
  return new Promise((resolve, reject) => {
    fs.readFile(path.resolve(filePath), 'utf-8', (err, data) => {
      if (err) {
        reject('Cannot load the database');
        return;
      }

      const lines = data.split('\n').filter(line => line.trim() !== ''); // Remove empty lines
      const studentsByField = {};

      lines.forEach(line => {
        const [firstname, field] = line.split(',');
        if (firstname && field) {
          if (!studentsByField[field]) {
            studentsByField[field] = [];
          }
          studentsByField[field].push(firstname);
        }
      });

      resolve(studentsByField);
    });
  });
};
