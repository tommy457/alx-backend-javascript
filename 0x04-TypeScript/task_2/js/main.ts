interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak?(): string;
  workDirectorTasks(): string;
}

interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

class Director implements DirectorInterface {
  constructor() { }

  workFromHome() {
    return `Working from home`;
  }

  getToWork() {
    return `Getting a coffee break`;
  }

  workDirectorTasks() {
    return `Getting to director tasks`;
  }
}

class Teacher implements TeacherInterface {
  constructor() { }

  workFromHome() {
    return `Cannot work from home`;
  }

  getCoffeeBreak() {
    return `Cannot have a break`;
  }

  workTeacherTasks() {
    return `Getting to work`;
  }
}

function createEmployee(salary: string | number) {
  if (typeof salary === "number" && salary < 500) {
    return new Teacher();
  }
  return new Director();
}

function isDirector(employee: any) {
  return employee instanceof Director;
}

function executeWork(employee: any) {

  if (isDirector(employee)) {

    console.log(employee.workDirectorTasks());
  } else {
    console.log(employee.workTeacherTasks());
  }
}
