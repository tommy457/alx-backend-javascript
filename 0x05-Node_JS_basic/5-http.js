const http = require('http');
const fs = require('fs');

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

const app = http.createServer(async (req, res) => {
  if (req.url === '/') {
    res.write('Hello Holberton School!');
    res.end();
  } else if (req.url === '/students') {
    res.write('This is the list of our students\n');
    const fileName = process.argv[2];
    countStudents(fileName)
      .then((data) => {
        res.end(data);
      })
      .catch((err) => {
        res.end(err.message);
      });
  }
}).listen(1245);

module.exports = app;
