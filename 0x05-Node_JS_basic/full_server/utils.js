const fs = require('fs');

function readDatabase(path) {
  return new Promise((resolve, reject) => {
    const fields = {};
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error());
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
        resolve(fields);
      }
    });
  });
}

module.exports = readDatabase;
