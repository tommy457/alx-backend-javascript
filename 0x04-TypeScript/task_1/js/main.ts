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
