export default class HolbertonCourse {
  constructor(name, length, students) {
    this.name = name;
    this.length = length;
    this.students = students;
  }

  get name() {
    return this._name;
  }

  set name(Newname) {
    if (typeof (Newname) === 'string') {
      this._name = Newname;
    } else {
      throw (TypeError('Name must be a string'));
    }
  }

  get length() {
    return this._length;
  }

  set length(newLength) {
    if (typeof (newLength) === 'number') {
      this._length = newLength;
    } else {
      throw (TypeError('Length must be a number'));
    }
  }

  get students() {
    return this._students;
  }

  set students(NewStudents) {
    if (Array.isArray(NewStudents)) {
      for (const name of NewStudents) {
        if (typeof (name) !== 'string') {
          throw (TypeError('Students must be a object'));
        }
      }
      this._students = NewStudents;
    } else {
      throw (TypeError('Students must be a object'));
    }
  }
}
