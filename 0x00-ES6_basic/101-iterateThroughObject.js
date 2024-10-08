export default function iterateThroughObject(reportWithIterator) {
  // Convert the iterator into an array and join the elements with ' | '
  return [...reportWithIterator].join(' | ');
}
