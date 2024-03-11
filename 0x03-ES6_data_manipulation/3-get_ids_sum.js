export default function getStudentIdsSum(studentsList) {
  if (!Array.isArray(studentsList)) {
    return [];
  }
  return studentsList.reduce(
    (totalSoFar, currentValue) => totalSoFar + currentValue.id, 0,
  );
}
