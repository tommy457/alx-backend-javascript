export default function createIteratorObject(report) {
  const valuesArray = Object.values(report.allEmployees);
  const namesArray = [];
  for (const elem of valuesArray) {
    namesArray.push(...elem);
  }
  return namesArray;
}
