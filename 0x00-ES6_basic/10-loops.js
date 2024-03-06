export default function appendToEachArrayValue(array, appendString) {
  const copyArray = [];

  for (const value of array) {
    copyArray.push(appendString + value);
  }

  return copyArray;
}
