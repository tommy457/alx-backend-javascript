export default function cleanSet(set, startString) {
  if (!startString || !set || !(set instanceof Set) || typeof startString !== 'string') {
    return '';
  }
  return [...set]
    .filter((word) => word && word.startsWith(startString))
    .map((word) => word.slice(startString.length))
    .join('-');
}
