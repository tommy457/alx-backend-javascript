const fs = require('fs');


function countStudents(path) {
  let fields = {}
  try {
    const data = fs.readFileSync(path, 'utf8');
    const lines = data.split('\n').slice(1).filter(line => line.trim() !== '');;
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

  } catch {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
