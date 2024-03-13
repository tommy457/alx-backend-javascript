interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const studentOne: Student = {
  firstName: 'mohamed',
  lastName: 'boukhalfa',
  age: 27,
  location: 'algeria'
};

const studentTow: Student = {
  firstName: 'lamine',
  lastName: 'boukhakfa',
  age: 27,
  location: 'algeria'
};

const studentsList: Array<Student> = [studentOne, studentTow];

function generateTable(studentList: Array<Student>) {
  const table = document.createElement("table");

  studentList.forEach((student: Student) => {
    const tr = table.insertRow();
    tr.insertCell().textContent = student.firstName;
    tr.insertCell().textContent = student.location;
  })
  document.body.appendChild(table);
}
generateTable(studentsList)
