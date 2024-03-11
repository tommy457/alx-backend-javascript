export default function cleanSet(set, startString) {
  if (startString === '') {
    return startString;
  }
  return [...set]
    .filter((word) => word.startsWith(startString))
    .map((word) => word.slice(startString.length))
    .join('-');
}
