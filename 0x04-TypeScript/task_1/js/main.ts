interface Teacher {
  firstName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any
}

interface Directors extends Teacher {
  numberOfReports: number;
}
function printTeacher(firstName: string, lastName: string): string {
  if (firstName && lastName) {
    return `${firstName[0]}. ${lastName}`;
  }
  return '';
}

interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}
 
interface Student {
  firstName: string;
  lastName: string;
  workOnHomework(): string;
  displayName(): string;
}


class StudentClass implements Student{
  constructor(public firstName: string, public lastName: string) {
  }

  workOnHomework() {
    return 'Currently working';
  }

  displayName() {
    return `${this.firstName}`;
  }
}
