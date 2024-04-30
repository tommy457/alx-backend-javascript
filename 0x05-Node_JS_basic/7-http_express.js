const express = require('express');
const fs = require('fs');

const app = express();
const port = 1245;

function countStudents(path) {
  return new Promise((resolve, reject) => {
    const fields = {};
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
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
        let output = `Number of students: ${lines.length}\n`;
        Object.keys(fields).forEach((key) => {
          output += `Number of students in ${key}: ${fields[key].length}. List: ${fields[key].join(', ')}\n`;
        });
        resolve(output.slice(0, -1));
      }
    });
  });
}

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  const fileName = process.argv[2];
  countStudents(fileName)
    .then((data) => {
      res.send(`This is the list of our students\n${data}`);
    })
    .catch((err) => {
      res.send(`This is the list of our students\n${err.message}`);
    });
});

app.listen(port, () => {});

module.exports = app;
