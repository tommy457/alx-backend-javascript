export default function cleanSet(set, startString) {
  if (startString === '' || set.length === 0 || !(set instanceof Set)) {
    return '';
  }
  return [...set]
    .filter((word) => word && word.startsWith(startString))
    .map((word) => word.slice(startString.length))
    .join('-');
}
