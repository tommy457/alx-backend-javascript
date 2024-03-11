export default function updateStudentGradeByCity(studentsList, city, newGrades) {
  if (!Array.isArray(studentsList)) {
    return [];
  }
  return studentsList
    .filter((student) => student.location === city)
    .map((student) => {
      const gradeObject = newGrades.filter(
        (newGrade) => newGrade.studentId === student.id,
      );
      const updatedStudent = student;
      updatedStudent.grade = gradeObject.length ? gradeObject[0].grade : 'N/A';
      return updatedStudent;
    });
}
