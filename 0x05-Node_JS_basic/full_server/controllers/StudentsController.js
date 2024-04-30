const readDatabase = require('../utils');

class StudentsController {
  static getAllStudents(req, res) {
    readDatabase(process.argv[2])
      .then((data) => {
        let output = '';
        const keys = Object.keys(data).sort();
        keys.forEach((key) => {
          output += `Number of students in ${key}: ${data[key].length}. List: ${data[key].join(', ')}\n`;
        });

        res.status(200).send(`This is the list of our students\n${output.slice(0, -1)}`);
      })
      .catch((err) => {
        res.status(500).send(err.message);
      });
  }

  static getAllStudentsByMajor(req, res) {
    readDatabase(process.argv[2])
      .then((data) => {
        const { major } = req.params;
        if (!(major in data)) {
          res.status(500).send('Major parameter must be CS or SWE');
        } else {
          res.status(200).send(`List: ${data[major].join(', ')}`);
        }
      })
      .catch((err) => {
        res.status(500).send(err.message);
      });
  }
}

module.exports = StudentsController;
