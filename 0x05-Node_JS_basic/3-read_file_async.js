const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    const fields = {};
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        throw new Error('Cannot load the database');
      } else {
        const lines = data.split('\n').slice(1).filter((line) => line.trim() !== '');
        for (const line of lines) {
          const info = line.split(',');
          const field = info[info.length - 1];
          const name = info[0];

          if (fields[field]) {
            fields[field].push(name);
          } else {
            fields[field] = [name];
          }
        }
        console.log(`Number of students: ${lines.length}`);
        Object.keys(fields).forEach((key) => {
          console.log(`Number of students in ${key}: ${fields[key].length}. List: ${fields[key].join(', ')}`);
        });
        resolve(data);
      }
    });
  });
}

module.exports = countStudents;
